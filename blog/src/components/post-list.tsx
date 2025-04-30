'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { PostCard,PaginationComponent } from "@/components";

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  role: string;
  createdAt: string;
}

interface Props {
  className?: string;
}

export const PostList: React.FC<Props> = ({ className }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [totalPosts, setTotalPosts] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get('page') || '1', 10);
  const role = searchParams.get('role') || 'all';
  const pageSize = 4;
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setIsLoading(true);
      const params = new URLSearchParams({
        page: page.toString(),
        pageSize: pageSize.toString(),
      });

      if (role !== 'all') {
        params.append('role', role);
      }

      const res = await fetch(`/api/posts?${params.toString()}`);
      const data = await res.json();
      setPosts(data.posts);
      setTotalPosts(data.totalPosts);
      setIsLoading(false);
    }

    fetchPosts();
  }, [page, role]);


  const totalPages = Math.ceil(totalPosts / pageSize);

  return (
    <>
      <section id="posts" className={className}>
        {isLoading ? (
          Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className={`max-w-[510px] h-[418px] max-sm:h-[300px] animate-pulse bg-[linear-gradient(to_right,rgba(103,92,255,0.7),rgba(89,84,170,0.5))] shadow-lg rounded-2xl  `} />
          ))

        ) : posts.length > 0 ? (
          posts.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              content={post.content}
              author={post.author}
              role={post.role}
              date={post.createdAt}
            />
          ))
        ) : (
          <p className="text-center text-gray-500 mt-10">Нет постов для отображения</p>
        )}
      </section>
      <div className="w-full m-auto">
        <PaginationComponent totalPages={totalPages} className="relative z-10 gap-4  mb-[50px]" />
      </div>
    </>
  );
};



import {PostCard} from "@/components/post-card";
import {getPosts} from "@/lib/get-posts";


interface Props {
  className: string;
}

export const PostList: React.FC<Props> = async ({ className }) => {
  const posts = await getPosts();
  return (
    <section id={'posts'} className={className}>
      {posts.map((post)=>{
      return (
        <PostCard key={post.id}
                  id={post.id}
                  title={post.title}
                  content={post.content}
                  author={post.author}
                  desc={post.desc}
                  date={post.createdAt}
    />)
    }
      )}
    </section>
  );
};

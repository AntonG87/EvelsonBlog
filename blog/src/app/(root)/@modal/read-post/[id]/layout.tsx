import { ReadPostModal } from '@/components/modals/read-post-modal';
import { getPostById } from '@/lib/get-post-by-id';

import type { Post } from '@prisma/client';
export default async function ReadPostLayout({
                                               children,
                                               params,
                                             }: {
  children: React.ReactNode;
  params: Promise<{ id: number }>;
}) {

  const { id } = await params;
  const post: Post | null = await getPostById(id);

  return (
    <>
      {children}
      {post && <ReadPostModal post={post} />}

    </>
  );
}

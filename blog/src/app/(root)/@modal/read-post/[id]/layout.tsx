import { ReadPostModal } from '@/components/modals/read-post-modal';
import { getPostById } from '@/lib/get-post-by-id';

import type { Post } from '@prisma/client';
export default async function ReadPostLayout({
                                               children,
                                               params,
                                             }: {
  children: React.ReactNode;
  params: { id: string };
}) {

  const post: Post | null = await getPostById(params.id);

  return (
    <>

      {children}
      {post && <ReadPostModal post={post} />}

    </>
  );
}

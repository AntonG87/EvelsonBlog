'use client';

import { useRouter } from 'next/navigation';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { FaUserAlt } from 'react-icons/fa';
import type { Post } from '@prisma/client';

export const ReadPostModal = ({ post }: { post: Post }) => {
  const router = useRouter();
  const handleClose = () => {
    router.back(); // Закрытие модалки — возврат назад
  };

  return (
    <Dialog open onOpenChange={(open) => !open && handleClose()}>
      <DialogContent className="max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          {/* Обязательный DialogTitle — нужен для доступности */}
          <DialogTitle className="sr-only">{post.title}</DialogTitle>
        </DialogHeader>

        <div className="rounded-[20px] w-full max-w-screen-lg overflow-hidden bg-white shadow-md transition-all duration-300 ease-in-out">
          <div className="flex items-center justify-center h-[120px] bg-[linear-gradient(to_right,#675CFF,#5954AA)]">
            <h1 className="font-fustat font-extrabold text-[64px] text-center text-white/10">
              {post.desc}
            </h1>
          </div>
          <div className="p-5 grid">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#675CFF] to-[#5954AA] flex items-center justify-center">
                  <FaUserAlt className="text-white w-5 h-5" />
                </div>
                <span className="text-sm font-semibold">{post.author}</span>
              </div>
            </div>
            <h3 className="text-lg font-fustat font-semibold mb-2">{post.title}</h3>
            <p className="text-xl text-gray-500 mb-4">{post.content}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

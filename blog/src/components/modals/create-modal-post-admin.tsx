'use client';

import React, { useState, useEffect } from 'react';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import {useRouter} from "next/navigation";




export const CreateModalPostAdmin = () => {
  const [fullName, setFullName] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tabValue, setTabValue] = useState('create');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [password, setPassword] = useState('');

  const router = useRouter();
  const handleClose = () => {
    router.back(); // ← Закрываем модалку при клике "вне" или на крестик
  };


  // Проверка всех полей (ФИО, тайтл, минимум 2 слова в контенте)
  const isPreviewAllowed =
    fullName.trim().split(/\s+/).length >= 2 &&
    title.trim().length > 0 &&
    content.trim().split(/\s+/).filter(Boolean).length >= 2;


  // Автоматический возврат в Create, если данные стали невалидны
  useEffect(() => {
    if (tabValue === 'preview' && !isPreviewAllowed) {
      setTabValue('create');
      setIsConfirmed(false);
    }
  }, [fullName, title, content, isPreviewAllowed, tabValue]);

  const handleCreatePost = async () => {
    try {
      const res = await fetch('/api/create-post', {
        method: 'POST',
        body: JSON.stringify({
          title,
          password,
          content,
          role: 'admin',
          author: fullName,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!res.ok) throw new Error('Failed to create post');

      // Успешно: закрываем модалку и обновляем
      router.refresh();
      handleClose(); // Закрывает модалку
    } catch (error) {
      console.error('❌ Error creating post:', error);
      alert('Failed to create post');
    }
  };

  return (
    <Dialog open onOpenChange={(open) => {
      if (!open) handleClose();
    }}>
      <DialogContent className="max-w-[90vw] max-h-[90vh] bg-white rounded-2xl p-6 overflow-hidden">

          {/* Create */}
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold mb-6">
                Create something interesting ✨
              </DialogTitle>
            </DialogHeader>

            <input
              type="text"
              placeholder="Full Name*"
              maxLength={35}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full p-3 mb-4 border rounded-lg text-sm"
            />

            <input
              type="text"
              placeholder="Title*"
              maxLength={55}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 mb-4 border rounded-lg text-sm"
            />

            <div className="text-right text-xs text-gray-500 mt-1">{content.length} / 900
            </div>
            <textarea
              placeholder="Your content..."
              value={content}
              onChange={(e) => {
                const value = e.target.value;
                if (value.length <= 900) {
                  setContent(value);
                }
              }}
              className="w-full min-h-[150px] max-h-[250px] p-3 border rounded-lg text-sm resize-none"
            />

            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              maxLength={55}
              className="w-full p-3 mb-4 border rounded-lg text-sm mt-6"
            />

            <div>
              {!isPreviewAllowed ? <p className="text-sm text-center text-gray-500 mt-2">
                To continue, please enter your full name (first and last), add a title for your post, and write the content.
                Once everything is filled out, the “Create” and “Preview” buttons will be unlocked 😊
              </p> : <p className="text-sm text-center text-gray-500 mt-2">
                Great job! All fields are filled in — you can now continue and share your post 🎉
              </p>}

            </div>

            <DialogFooter className="mt-6">
              <button
                type="button"
                onClick={handleCreatePost}
                disabled={!isPreviewAllowed}
                className={`w-full py-2 font-semibold rounded-full transition ${
                  isPreviewAllowed
                    ? 'bg-gradient-to-r from-[#675CFF] to-[#615EC5] text-white hover:opacity-90'
                    : 'bg-gradient-to-r from-gray-400 to-gray-500 text-white cursor-not-allowed'
                }`}
              >
                Create
              </button>
            </DialogFooter>


      </DialogContent>
    </Dialog>
  );
};

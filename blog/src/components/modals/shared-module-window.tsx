'use client';

import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';

import {useRouter} from "next/navigation";
import {PostSubmissionSuccess} from "@/components/post-submission-success";
import {CreateModalPost} from "@/components/create-modal-post";

interface Props {

}


export const SharedModuleWindow: React.FC<Props> = () => {
  const [fullName, setFullName] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tabValue, setTabValue] = useState('create');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [postIsSubmitted, setPostIsSubmitted] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(true);
  const [errorMessage, setErrorMessage] = useState(''); // новое состояние для ошибок
  const [isLoading, setIsLoading] = useState(false);




  const router = useRouter();

  const handleClose = () => {
    setIsDialogOpen(false);
    setTimeout(() => {
      router.back();
      router.refresh();
    }, 100);
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

  const handleTabChange = (value: string) => {
    if (value === 'preview' && !isPreviewAllowed) return;
    setTabValue(value);
    setIsConfirmed(true);
  };


  const handleCreatePost = async () => {
    setIsLoading(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/create-post', {
        method: 'POST',
        body: JSON.stringify({
          title,
          content,
          author: fullName,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setErrorMessage(data.message || 'Error creating post.');
        return;
      }

      setPostIsSubmitted(true);

    } catch (error) {
      console.error('❌ Error creating post:', error);
      setErrorMessage('Error connecting to server');
    } finally {
      setIsLoading(false);
    }
  };




  return (
    <Dialog open onOpenChange={(open) => {
      if (!open) handleClose();
    }}>
      <DialogContent className="max-w-[90vw] max-h-[90vh] bg-white rounded-2xl p-6 overflow-hidden">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="animate-spin rounded-full border-4 border-t-transparent border-blue-500 w-12 h-12 mb-6"></div>
            <p className="text-gray-800 text-lg font-medium">We are checking your post...</p>
          </div>
        ) : postIsSubmitted ? (
          <PostSubmissionSuccess/>
        ) : errorMessage ? (
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-2xl font-semibold text-red-600 mb-4">ERROR</h2>
            <img src="error.svg" alt="error" className={'max-w-[400px]'}/>
            <p className="text-xl font-medium font-fustat text-gray-700">{errorMessage}</p>
            <button
              onClick={handleClose}
              className="mt-6 px-4 py-2 bg-[linear-gradient(to_right,#675CFF,#5954AA)] text-white rounded hover:scale-105 transition"
            >
              Вернуться назад
            </button>
          </div>
        ) : (
          <CreateModalPost
            fullName={fullName}
            handleClose={handleClose}
            setFullName={setFullName}
            title={title}
            setTitle={setTitle}
            content={content}
            setContent={setContent}
            isPreviewAllowed={isPreviewAllowed}
            tabValue={tabValue}
            handleTabChange={handleTabChange}
            handleCreatePost={handleCreatePost}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}

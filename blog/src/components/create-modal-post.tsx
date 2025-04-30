import {

  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import React from "react";
import { Dispatch, SetStateAction } from 'react';

interface CreateModalPostProps {
  tabValue: string;
  handleTabChange: (value: string) => void;
  isPreviewAllowed: boolean;
  fullName: string;
  setFullName: Dispatch<SetStateAction<string>>;
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  content: string;
  setContent: Dispatch<SetStateAction<string>>;
  handleCreatePost: () => Promise<void>;
  handleClose: () => void;

}


export const CreateModalPost = ({tabValue, handleTabChange, isPreviewAllowed, fullName, title, content, setFullName, setTitle, setContent,handleCreatePost, handleClose} : CreateModalPostProps) => {


  return (
        <Tabs value={tabValue} onValueChange={handleTabChange} className="w-full mt-6 h-full flex flex-col">
          {/* Вкладки */}
          <TabsList className="grid w-full grid-cols-2 mb-3">
            <TabsTrigger value="create">Create</TabsTrigger>
            <TabsTrigger
              value="preview"
              className={!isPreviewAllowed ? 'pointer-events-none opacity-40 cursor-not-allowed' : ''}>
              Preview
            </TabsTrigger>
          </TabsList>

          {/* Create */}
          <TabsContent value="create" className="flex cursor-pointer flex-col h-full">
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
          </TabsContent>

          {/* Preview */}
          <TabsContent
            value="preview"
            className="flex-grow overflow-y-auto max-h-[600px] pr-2">
            <div className="w-full bg-gradient-to-b min-h-[400px] from-[#675CFF] to-[#615EC5] text-white p-10 rounded-xl overflow-auto">
              <p className="text-sm mb-2 break-words">🔘 {fullName}</p>
              <h2 className="text-2xl font-bold mb-4 break-words">{title}</h2>
              <p className="text-sm leading-relaxed text-white/90 whitespace-pre-line break-words">
                {content}
              </p>
            </div>
          </TabsContent>
        </Tabs>
  );
}
'use client';

import React, { useState } from 'react';
import { Title } from "@/components/ui/title";

interface Props {
  className: string;
}

export const StayUpdatedBlock: React.FC<Props> = ({ className }) => {
  const [email, setEmail] = useState('');

  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault(); // предотвращаем перезагрузку

    try {
      const res = await fetch('/api/create-subscriber', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!res.ok) throw new Error('Failed to subscribe');

      alert('Successfully subscribed!');
      setEmail('');
    } catch (error) {
      console.error('❌ Error subscribing:', error);
      alert('Failed to subscribe');
    }
  };

  return (
    <div className={className}>
      <div className="pt-[45px]">
        <Title title="Stay Updated" className="text-[40px] text-center font-fustat" />
        <p className="text-[14px] text-gray-600 font-fustat mb-1 mt-4 font-bold">
          Subscribe to our newsletter to receive the latest articles and updates.
        </p>
        <p className="text-[12px] text-gray-600 font-fustat mb-6 font-bold">
          Everyone can share their results. Subscription allows you to follow my posts.
        </p>

        <form onSubmit={handleCreatePost} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="px-6 py-3 w-full sm:w-[400px] rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition cursor-pointer hover:scale-105"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

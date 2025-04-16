import React from 'react';
import {Title} from "@/components/ui/title";

interface Props {
  className: string;
}

export const StayUpdatedBlock: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className={'pt-[45px]'}>
        <Title title={'Stay Updated'} className={'text-[40px]  text-center font-fustat '}/>
        <p className={'text-[14px] text-gray-600 font-fustat mb-6 font-bold '}>Subscribe to our newsletter to receive the latest articles and updates.</p>
        <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
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

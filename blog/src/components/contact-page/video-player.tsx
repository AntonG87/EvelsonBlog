// components/VideoPlayer.tsx
import React from 'react';

const VideoPlayer: React.FC = () => {
  return (
    <div className="mt-[40px] rounded-3xl relative z-10 video-container">
      <h1 className="text-[32px] max-sm:text-[22px] font-extrabold font-fustat text-center text-[#4B50A2]">Let’s collaborate and build meaningful things</h1>
      <p className=" text-center text-[#4B50A2] text-s max-sm:text-[12px] mb-8">
        I’m open to new job opportunities, tech collaborations, and interesting conversations.
        Reach out via LinkedIn, Gmail, or GitHub — I’d love to hear from you.
      </p>
      <video
        controls
        className="w-full h-auto rounded-4xl drop-shadow-2xl"
        src="/video.mp4"  // Путь к видеофайлу (можно использовать URL)
      >
        Ваш браузер не поддерживает видео.
      </video>
    </div>
  );
};

export default VideoPlayer;
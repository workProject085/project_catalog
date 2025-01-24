// const VideoSection = () => {
//   return (
//     <main className="flex w-full flex-col items-center p-5">
//       <section className="w-full max-w-2xl">
//         <h2 className="text-center text-lg font-bold mb-4 text-black">
//           Видео обзоры
//         </h2>
//         <div className="w-full max-w-[800px] mx-auto">
//           <div className="relative w-full pb-[56.25%]">
//             <iframe
//               className="absolute top-0 left-0 w-full h-full"
//               src="https://www.youtube.com/embed/A-7bVwXTQdE?vq=hd1080&rel=0"
//               title="YouTube video player"
//               allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//               referrerPolicy="strict-origin-when-cross-origin"
//               allowFullScreen
//               playsinline
//             ></iframe>
//           </div>
//           {/* Кнопка для открытия видео в приложении YouTube */}
//           <div className="mt-4 text-center">
//             <a
//               href="https://www.youtube.com/watch?v=A-7bVwXTQdE"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-500 underline hover:text-blue-700"
//             >
//               Открыть видео в YouTube для просмотра в максимальном качестве
//             </a>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default VideoSection;

"use client";

import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const VideoSection = () => {
  return (
    <main className="flex w-full flex-col items-center p-5">
      <section className="w-full max-w-2xl">
        <h2 className="text-center text-lg font-bold mb-4 text-black">
          Видео обзоры
        </h2>
        <div className="w-full max-w-[800px] mx-auto">
          {/* Видео через ReactPlayer */}
          <div className="relative w-full pb-[56.25%]">
            <ReactPlayer
              light
              url="https://www.youtube.com/watch?v=A-7bVwXTQdE"
              width="100%"
              height="100%"
              className="absolute top-0 left-0 w-full h-full"
              controls
              playing
              config={{
                youtube: {
                  playerVars: {
                    modestbranding: 1, // Убирает логотип YouTube
                    rel: 0, // Отключает похожие видео
                    vq: "hd1080", // Предпочтительное качество
                  },
                },
              }}
            />
          </div>
        </div>
        <div className="mt-4 text-center">
          <a
            href="https://www.youtube.com/watch?v=A-7bVwXTQdE"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline hover:text-blue-700"
          >
            Открыть видео в YouTube для максимального качества
          </a>
        </div>
      </section>
    </main>
  );
};

export default VideoSection;

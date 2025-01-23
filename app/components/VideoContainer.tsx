const VideoSection = () => {
  return (
    <main className="flex w-full flex-col items-center p-5">
      <section className="w-full max-w-2xl">
        <h2 className="text-center text-lg font-bold mb-4 text-black">
          Видео обзоры
        </h2>
        <div className="w-full max-w-[800px] mx-auto">
          <div className="relative w-full pb-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/A-7bVwXTQdE?vq=hd1080&rel=0"
              // src='https://www.youtube.com/embed/A-7bVwXTQdE?&mute=1'
              title="YouTube video player"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
};

export default VideoSection;

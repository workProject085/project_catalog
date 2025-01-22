"use client";
import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import NextImage from "next/image";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

interface ImageDimensions {
  width: number;
  height: number;
}

const FullScreenMode = ({ url, isOpen, setIsOpen }: any) => {
  const [initialScale, setInitialScale] = useState(0);
  const transformRef = useRef(null);

  const onClose = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    const updateSizeAndScale = async () => {
      const getImageDimensions = (src: string): Promise<ImageDimensions> => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            resolve({
              width: img.width,
              height: img.height,
            });
          };
          img.onerror = reject;
          img.src = src;
        });
      };

      try {
        const { width: imageWidth, height: imageHeight } =
          await getImageDimensions(`/${url}`);

        const width = document.documentElement.clientWidth;
        if (imageWidth > width) {
          const subScale = width / imageWidth;
          const subHeight = imageHeight * subScale;
          const height = document.documentElement.clientHeight;
          const scale = height / subHeight;
          setInitialScale(scale > 1 ? 1 : scale);
        }
      } catch (error) {
        console.error("Error loading image dimensions:", error);
      }
    };

    updateSizeAndScale();
    window.addEventListener("resize", updateSizeAndScale);
    return () => {
      window.removeEventListener("resize", updateSizeAndScale);
    };
  }, [url]);

  const resetZoom = () => {
    if (transformRef.current) {
      const current = transformRef.current as any;
      current.resetTransform();
    }
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-20" onClose={onClose}>
          <div className="fixed inset-0 bg-black z-20" aria-hidden="true">
            <button
              type="button"
              className="absolute w-[40px] h-[40px] top-[20px] right-[20px] text-gray-500 hover:text-gray-600 z-30 bg-white rounded-[20px] outline hover:outline-[3px] pt-[1px] pl-[8px]"
              onClick={onClose}
            >
              <NextImage
                priority
                src={"close.svg"}
                alt="close"
                width={24}
                height={24}
              />
            </button>
            <button
              type="button"
              className="absolute w-[40px] h-[40px] top-[80px] right-[20px] text-gray-500 hover:text-gray-600 z-30 bg-white rounded-[20px] outline hover:outline-[3px] pt-[1px] pl-[8px]"
              onClick={resetZoom}
            >
              <NextImage
                priority
                src={"fullscreen.svg"}
                alt="close"
                width={24}
                height={24}
              />
            </button>
            <TransformWrapper
              ref={transformRef}
              initialScale={initialScale}
              minScale={0.2}
              maxScale={5}
              wheel={{ step: 3 }}
              doubleClick={{ mode: "zoomIn" }}
              pinch={{ step: 2 }}
              centerOnInit
            >
              <TransformComponent wrapperClass="!w-full !h-full cursor-grab">
                <img
                  src={`/${url}`}
                  alt="image"
                  className="object-contain w-full h-full"
                />
              </TransformComponent>
            </TransformWrapper>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default FullScreenMode;

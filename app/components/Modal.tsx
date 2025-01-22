"use client";
import { Fragment, SetStateAction, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import Slider from "@/app/components/Slider";
import FullScreenMode from "@/app/components/FullScreenMode";

const ButtonWithModal = ({ data }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenFS, setIsOpenFS] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const onSelectSlide = (e: SetStateAction<number>) => {
    setCurrentSlideIndex(e);
  };

  const onClose = () => {
    setIsOpen(false);
  };
  const onOpenFS = () => {
    setIsOpenFS(true);
  };

  return (
    <>
      <button
        className="bg-[#30222d] text-white border-none p-2 w-full cursor-pointer mt-1"
        onClick={() => setIsOpen(true)}
      >
        Ətraflı
      </button>
      <FullScreenMode
        url={data.images[currentSlideIndex]}
        isOpen={isOpenFS}
        setIsOpen={setIsOpenFS}
      />
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onClose}>
          <div className="fixed inset-0 bg-black/60" aria-hidden="true" />
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex h-screen items-center justify-center p-[16px] text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full h-full transform overflow-hidden rounded-2xl bg-white px-[10px] md:px-[60px] py-[24px] text-left shadow-xl transition-all">
                  <button
                    type="button"
                    className="absolute w-[40px] h-[40px] top-[20px] right-[20px] text-gray-500 hover:text-gray-600 z-30 bg-white rounded-[20px] outline hover:outline-[3px] pt-[1px] pl-[8px]"
                    onClick={onClose}
                  >
                    <Image
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
                    onClick={onOpenFS}
                  >
                    <Image
                      priority
                      src={"enlarge.svg"}
                      alt="close"
                      width={24}
                      height={24}
                    />
                  </button>
                  <Slider
                    previews={data.images.map(
                      (image: any) =>
                        `${process.env.NEXT_PUBLIC_API_DOMAIN}/${image}`
                    )}
                    onSelectSlide={onSelectSlide}
                  >
                    {data.images?.map((image: any, index: any) => (
                      <div
                        className="w-full h-[calc(100vh-180px)] border flex-1"
                        key={index}
                      >
                        <img
                          src={`${process.env.NEXT_PUBLIC_API_DOMAIN}/${image}`}
                          alt="image"
                          className="object-contain w-full h-full"
                        />
                      </div>
                    ))}
                  </Slider>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ButtonWithModal;

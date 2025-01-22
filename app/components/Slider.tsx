import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.css';

const NextArrow = ({ onClick, arrowColor }: any) => {
  return (
    <div
      className='absolute right-0 top-0 h-[calc(100vh-180px)] w-[15%] cursor-pointer flex flex-col justify-center items-center hover:bg-[#a8a8a88a] z-10'
      onClick={onClick}
    >
      <div className='transform -translate-y-1/2'>
        <div className='border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent border-l-[35px] border-l-black absolute left-[-5px] top-[3px]' />
        <div
          className={`border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent border-l-[25px] relative left-[-2px] top-[8px]`}
          style={{
            borderLeftColor: arrowColor,
          }}
        />
      </div>
    </div>
  );
};

const PrevArrow = ({ onClick, arrowColor }: any) => {
  return (
    <div
      className='absolute left-0 top-0 h-[calc(100vh-180px)] w-[15%] cursor-pointer flex flex-col justify-center items-center hover:bg-[#a8a8a88a] z-10'
      onClick={onClick}
    >
      <div className='transform -translate-y-1/2 '>
        <div className=' border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent border-r-[35px] border-r-black absolute right-[-5px] top-[3px]' />
        <div
          className={` border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent border-r-[25px] relative right-[-2px] top-[8px]`}
          style={{
            borderRightColor: arrowColor,
          }}
        />
      </div>
    </div>
  );
};

const SliderComponent = ({ children, previews, onSelectSlide }: any) => {
  const settings = {
    accessibility: true,
    adaptiveHeight: true,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow arrowColor={'#a6a6a6'} onClick={() => {}} />,
    prevArrow: <PrevArrow arrowColor={'#a6a6a6'} onClick={() => {}} />,
    swipe: true,
    customPaging: function (i: number) {
      return (
        <a>
          <Image src={previews[i]} alt={`Thumbnail ${i + 1}`} width={20} height={20} />
        </a>
      );
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
        },
      },
    ],
    beforeChange: (oldIndex: number, newIndex: number) => {
      onSelectSlide(newIndex);
    },
  };

  return (
    <div
      style={
        {
          '--dot-color': '#dcfce7',
          '--active-dot-color': '#a6a6a6',
        } as React.CSSProperties
      }
      className='w-full h-full'
    >
      <Slider {...settings} className='flex relative w-full h-full'>
        {children}
      </Slider>
    </div>
  );
};

export default SliderComponent;

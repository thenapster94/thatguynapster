import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import type SwiperType from "swiper";
import Image from "next/image";

import { classNames } from "@/libs";
import "swiper/css";
import "swiper/css/pagination";
import { Button } from ".";

interface PreviewImageProps {
  images: string[];
  grayscale?: boolean;
  slantDirection?: "left" | "right";
  slant?: boolean;
}

export const PreviewImage = ({
  images,
  grayscale = true,
  slant = true,
  slantDirection = "right",
}: PreviewImageProps) => {
  const [swiper, setSwiper] = useState<null | SwiperType>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideConfig, setSlideConfig] = useState({
    isBeginning: true,
    isEnd: activeIndex === (images.length ?? 0) - 1,
  });

  useEffect(() => {
    swiper?.on("slideChange", ({ activeIndex }) => {
      setActiveIndex(activeIndex);
      setSlideConfig({
        isBeginning: activeIndex === 0,
        isEnd: activeIndex === (images.length ?? 0) - 1,
      });
    });
  }, [swiper, images]);

  useEffect(() => {
    swiper?.slideTo(0);
  }, [images]);

  const activeStyles = "absolute top-[45%] bg-gray px-9 py-6 cursor-pointer";

  const inactiveStyles = "hidden";

  return (
    <div
      className={classNames(
        "mix-blend-luminosity hidden lg:flex w-full",
        slant ? (slantDirection === "left" ? "slant-left" : "slant-right") : "",
        "relative"
      )}
    >
      <Button
        className={classNames(
          activeStyles,
          "-left-4 transition rounded-l-full",
          {
            [inactiveStyles]: slideConfig.isBeginning,
            "hover:bg-primary hover:text-neutral-10 text-neutral-50 opacity-100":
              !slideConfig.isBeginning,
          },
          "w-max z-10"
        )}
        aria-label="next category"
        onClick={(ev) => {
          ev.preventDefault();
          swiper?.slidePrev();
        }}
      >
        <ArrowLeftIcon className="w-4 h-4 text-inherit" />
      </Button>

      <Button
        className={classNames(
          activeStyles,
          "-right-4 rounded-r-full transition",
          {
            [inactiveStyles]: slideConfig.isEnd,
            "hover:bg-primary hover:text-neutral-10 text-neutral-50 opacity-100":
              !slideConfig.isEnd,
          },
          "w-max z-10"
        )}
        aria-label="next category"
        onClick={(ev) => {
          ev.preventDefault();
          swiper?.slideNext();
        }}
      >
        <ArrowRightIcon className="w-4 h-4 text-inherit" />
      </Button>

      <Swiper
        className="w-full h-full"
        spaceBetween={16}
        slidesPerView={1}
        onSwiper={(swiper) => setSwiper(swiper)}
        modules={[Pagination]}
      >
        {images.map((img: any, index: number) => (
          <SwiperSlide className="-z-10 relative w-full h-full" key={index}>
            <Image
              className={classNames(
                grayscale && "grayscale",
                "mix-blend-luminosity"
              )}
              width={475}
              height={653}
              loading="lazy"
              alt="Project Image"
              src={img}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

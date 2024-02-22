import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { classNames } from "@/libs";

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
  const [currentImage, setCurrentImage] = useState(0);

  const showNext = () => setCurrentImage((prevImage) => prevImage + 1);
  const showPrev = () => setCurrentImage((prevImage) => prevImage - 1);

  const isPrevVisible = currentImage > 0;
  const isNextVisible = currentImage < images.length - 1;

  useEffect(() => {
    setCurrentImage(0);
  }, [images]);

  return (
    <div
      className={classNames(
        "mix-blend-luminosity hidden lg:flex w-full",
        slant ? (slantDirection === "left" ? "slant-left" : "slant-right") : "",
        "relative"
      )}
    >
      <Image
        className={classNames(grayscale && "grayscale", "mix-blend-luminosity")}
        width={475}
        height={653}
        loading="lazy"
        alt="Andrew"
        src={images[currentImage]}
      />

      {isPrevVisible && (
        <div
          className="absolute top-[45%] left-0 bg-gray px-9 py-6 rounded-r-full cursor-pointer"
          onClick={showPrev}
        >
          <ArrowLeftIcon className="text-white w-6 h-6" />
        </div>
      )}

      {isNextVisible && (
        <div
          className="absolute top-[45%] right-0 bg-gray px-9 py-6 rounded-l-full cursor-pointer"
          onClick={showNext}
        >
          <ArrowRightIcon className="text-white w-6 h-6" />
        </div>
      )}
    </div>
  );
};

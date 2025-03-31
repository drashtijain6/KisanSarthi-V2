import React from "react";
import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";

const images = [
  {
    src: "/image-1.webp",
    alt: "some alt text 1",
  },
  {
    src: "/image-1.webp",
    alt: "some alt text 1",
  },
  {
    src: "/image-1.webp",
    alt: "some alt text 1",
  },
  {
    src: "/image-1.webp",
    alt: "some alt text 1",
  },
  
];

const GeneratedImages = () => {
  if (images.length === 0) {
    return (
      <Card className="w-full max-w-xl bg-muted">
        <CardContent className="flex aspect-square items-center justify-center p-6">
          <span className="text-2xl">No Images Generated</span>
        </CardContent>
      </Card>
    );
  }

  return (
    <Carousel
    opts={{
      align: "start",
    }}
    className="w-full max-w-xl"
  >
    <CarouselContent>
      {images.map((image, index) => (
        <CarouselItem key={index}>
          <div className="flex relative items-center justify-center rounded-lg overflow-hidden aspect-square">
            <Image src={image.src } alt={image.alt} fill className="w-full object-cover"/>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
)
};

export default GeneratedImages;

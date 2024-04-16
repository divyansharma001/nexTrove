"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";

export function Hero() {
  return (
    <div className="pt-28 lg:pt-20 ">
      <Carousel
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem className="sm:basis-1/2 lg:basis-1/2">
            <img 
            src="./cover1.png"
             />
          </CarouselItem>
          {/* <CarouselItem className="sm:basis-1/2 lg:basis-1/2" style={{height:'412px'}}>
            <img src="./cover2.png" 
          />
          </CarouselItem> */}
          <CarouselItem className="sm:basis-1/2 lg:basis-1/2">
            <img src="./cover3.png" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/2">
            <img src="./cover4.png" />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default Hero;

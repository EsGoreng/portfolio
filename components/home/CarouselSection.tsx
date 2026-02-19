"use client";
import { EmblaOptionsType } from "embla-carousel";
import {
  Carousel,
  Slider,
  SliderContainer,
  SliderDotButton,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { BlurFade } from "@/components/ui/blur-fade";

function index() {
  const OPTIONS: EmblaOptionsType = { loop: true };
  return (
    <BlurFade delay={0.5} inView>
      <div className="relative overflow-hidden ">
        <Carousel
          options={OPTIONS}
          className="max-w-7xl mx-auto mask-[linear-gradient(to_right,transparent_0,black_128px,black_calc(100%-128px),transparent_100%)]"
          plugins={[
            Autoplay({
              playOnInit: true,
              delay: 2500,
              stopOnMouseEnter: true,
              stopOnInteraction: false,
            }),
          ]}
        >
          <SliderContainer className="gap-4 px-4">
            <Slider className="w-full">
              <div className="bg-white/40 dark:bg-white/5 backdrop-blur-lg rounded-xl h-100 w-full "></div>
            </Slider>
            <Slider className="w-full">
              <div className="bg-white/40 dark:bg-white/5 backdrop-blur-lg rounded-xl h-100 w-full"></div>
            </Slider>
            <Slider className="w-full">
              <div className="bg-white/40 dark:bg-white/5 backdrop-blur-lg rounded-xl h-100 w-full"></div>
            </Slider>
            <Slider className="w-full">
              <div className="bg-white/40 dark:bg-white/5 backdrop-blur-lg rounded-xl h-100 w-full"></div>
            </Slider>
          </SliderContainer>
          <div className="flex justify-center py-4">
            <SliderDotButton />
          </div>
        </Carousel>
      </div>
    </BlurFade>
  );
}

export default index;

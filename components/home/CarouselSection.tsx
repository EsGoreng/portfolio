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
      {/* wrap carousel in a mask container to fade the left/right edges */}
      <div className="relative overflow-hidden mask-[linear-gradient(to_right,transparent_0,black_128px,black_calc(100%-128px),transparent_100%)]">
        <Carousel
          options={OPTIONS}
          className="max-w-7xl px-4 mx-auto"
          plugins={[
            Autoplay({
              playOnInit: true,
              delay: 2500,
              stopOnMouseEnter: true,
              stopOnInteraction: false,
            }),
          ]}
        >
          <SliderContainer className="gap-2">
            <Slider className="w-full">
              <div className="bg-card/50 backdrop-blur-lg rounded-xl h-100 w-full"></div>{" "}
              {/* Red background with rounded corners */}
            </Slider>
            <Slider className="w-full">
              <div className="bg-card/50 backdrop-blur-lg rounded-xl h-100 w-full"></div>{" "}
              {/* Blue background with rounded corners */}
            </Slider>
            <Slider className="w-full">
              <div className="bg-card/50 backdrop-blur-lg rounded-xl h-100 w-full"></div>{" "}
              {/* Green background with rounded corners */}
            </Slider>
            <Slider className="w-full">
              <div className="bg-card/50 backdrop-blur-lg rounded-xl h-100 w-full"></div>{" "}
              {/* Yellow background with rounded corners */}
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

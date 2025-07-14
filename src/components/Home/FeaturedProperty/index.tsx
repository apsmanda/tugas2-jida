"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { featuredProprty } from "@/app/api/featuredproperty";
import { Icon } from "@iconify/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const FeaturedProperty: React.FC = () => {
  const [api, setApi] = React.useState<CarouselApi | undefined>(undefined);
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleDotClick = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  const formattedPrice = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(featuredProprty.price);

  // [PERBAIKAN] Tanda > yang salah sudah dihapus dari sini
  return (
    <section>
      <div className="container max-w-6xl mx-auto px-5 2xl:px-0">
        <div className="grid lg:grid-cols-2 gap-10">
           <div className="relative">
            <Carousel
              setApi={setApi}
              opts={{
                loop: true,
              }}
            >
              <CarouselContent>
                {featuredProprty.images.map((item, index) => (
                  <CarouselItem key={index}>
                    <Image
                      src={item.scr}
                      alt={item.alt}
                      width={680}
                      height={530}
                      className="rounded-2xl w-full h-[530px] object-cover"
                      unoptimized={true}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Tombol Navigasi Prev */}
            <button
              onClick={() => api?.scrollPrev()}
              className="absolute top-1/2 left-5 -translate-y-1/2 bg-white/50 text-dark rounded-full p-3 z-10 hover:bg-primary hover:text-white duration-300"
              aria-label="Previous Slide"
            >
              <Icon icon="ph:caret-left-bold" width={24} height={24} />
            </button>
            
            {/* Tombol Navigasi Next */}
            <button
              onClick={() => api?.scrollNext()}
              className="absolute top-1/2 right-5 -translate-y-1/2 bg-white/50 text-dark rounded-full p-3 z-10 hover:bg-primary hover:text-white duration-300"
              aria-label="Next Slide"
            >
              <Icon icon="ph:caret-right-bold" width={24} height={24} />
            </button>
            
            <div className="absolute left-1/2 -translate-x-1/2 bg-dark/50 rounded-full py-2.5 bottom-10 flex justify-center mt-4 gap-2.5 px-2.5">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-2.5 h-2.5 rounded-full ${current === index + 1 ? "bg-white" : "bg-white/50"}`}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div>
              <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2">
                <Icon icon="ph:fire-simple-fill" className="text-2xl text-primary" />
                Produk Andalan
              </p>
              <h2 className="lg:text-52 text-40 font-medium text-dark dark:text-white">
                {featuredProprty.name}
              </h2>
              <div className="flex items-center gap-2.5">
                <Icon icon="ph:star-fill" width={26} height={26} className="text-amber-400" />
                <p className="text-dark/50 dark:text-white/50 text-base">
                  {featuredProprty.rating} / 5 ({featuredProprty.reviews} ulasan)
                </p>
              </div>
            </div>
            <p className="text-base text-dark/50 dark:text-white/50">
              {featuredProprty.description}
            </p>
            <div className="grid grid-cols-2 gap-10">
              <div className="flex items-center gap-4">
                <div className="bg-dark/5 dark:bg-white/5 p-2.5 rounded-[6px]">
                  <Icon icon="ph:t-shirt-bold" width={24} height={24} className="text-dark dark:text-white"/>
                </div>
                <h6 className="text-dark dark:text-white">{featuredProprty.features.material}</h6>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-dark/5 dark:bg-white/5 p-2.5 rounded-[6px]">
                  <Icon icon="ph:ruler-bold" width={24} height={24} className="text-dark dark:text-white"/>
                </div>
                <h6 className="text-dark dark:text-white">{featuredProprty.features.fit}</h6>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-dark/5 dark:bg-white/5 p-2.5 rounded-[6px]">
                  <Icon icon="ph:washing-machine-bold" width={24} height={24} className="text-dark dark:text-white"/>
                </div>
                <h6 className="text-dark dark:text-white">{featuredProprty.features.care}</h6>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-dark/5 dark:bg-white/5 p-2.5 rounded-[6px]">
                  <Icon icon="ph:text-aa-bold" width={24} height={24} className="text-dark dark:text-white"/>
                </div>
                <h6 className="text-dark dark:text-white">{featuredProprty.features.sizes}</h6>
              </div>
            </div>
            <div className="flex gap-10 items-center">
              <Link href={`/properties/${featuredProprty.slug}`} className="py-4 px-8 bg-primary hover:bg-dark duration-300 rounded-full text-white font-semibold">
                Lihat Detail
              </Link>
              <div>
                <h4 className="text-3xl text-dark dark:text-white font-medium">
                  {formattedPrice}
                </h4>
                <p className="text-base text-dark/50">
                  Harga Spesial
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperty;
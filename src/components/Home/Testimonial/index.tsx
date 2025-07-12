"use client";
import * as React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";
import { testimonials } from "@/app/api/testimonial"; // PASTIKAN DATA DISESUAIKAN

// Contoh struktur data di dalam file "@/app/api/testimonial.ts"
/*
export const testimonials = [
  {
    review: "Kualitas bajunya juara! Bahannya adem dan jahitannya rapi banget. Pengirimannya juga cepat. Pasti akan order lagi di sini!",
    image: "/images/pelanggan/pelanggan-1.jpg", // Foto pelanggan
    name: "Aulia Putri",
    position: "Pelanggan Setia" // Ganti 'position' menjadi status pelanggan
  },
  {
    review: "Modelnya selalu up-to-date dan nggak pasaran. Suka banget sama koleksi dress-nya, bikin penampilan jadi lebih percaya diri.",
    image: "/images/pelanggan/pelanggan-2.jpg",
    name: "Rizky Ananda",
    position: "Fashion Enthusiast"
  }
];
*/

const Testimonial = () => {
    const [api, setApi] = React.useState<CarouselApi | undefined>(undefined);
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        if (!api) return;

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

    return (
        <section className="bg-dark relative overflow-hidden" id="testimonial">
            {/* Gambar dekoratif, bisa Anda ganti sesuai keinginan */}
            <div className="absolute right-0">
                <Image
                    src="/images/testimonial/Vector.png"
                    alt="vector"
                    width={700}
                    height={1039}
                    unoptimized={true}
                />
            </div>
            <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
                <div>
                    <p className="text-white text-base font-semibold flex gap-2">
                        {/* Ikon diubah menjadi ikon kutipan (quotes) */}
                        <Icon icon="ph:quotes-fill" className="text-2xl text-primary" />
                        Testimoni
                    </p>
                    <h2 className="lg:text-52 text-40 font-medium text-white">
                        Apa Kata Pelanggan Kami
                    </h2>
                </div>
                <Carousel
                    setApi={setApi}
                    opts={{
                        loop: true,
                    }}
                >
                    <CarouselContent>
                        {testimonials.map((item, index) => (
                            <CarouselItem key={index} className="mt-9">
                                <div className="lg:flex items-center gap-11">
                                    <div className="flex items-start gap-11 lg:pr-20">
                                        <div>
                                            {/* Ikon di dalam testimoni juga diubah */}
                                            <Icon icon="ph:quotes-fill" width={32} height={32} className="text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="text-white lg:text-3xl text-2xl">{item.review}</h4>
                                            <div className="flex items-center mt-8 gap-6">
                                                <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    width={80}
                                                    height={80}
                                                    className="rounded-full lg:hidden block object-cover"
                                                    unoptimized={true}
                                                />
                                                <div>
                                                    <h6 className="text-white text-xm font-medium">{item.name}</h6>
                                                    {/* 'position' diubah maknanya menjadi status pelanggan */}
                                                    <p className="text-white/40">{item.position}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full h-full rounded-2xl overflow-hidden">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            width={440}
                                            height={440}
                                            className="lg:block hidden rounded-2xl w-full h-full object-cover"
                                            unoptimized={true}
                                        />
                                    </div>

                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
                <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex gap-2.5 p-2.5 bg-white/20 rounded-full">
                    {Array.from({ length: count }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={`w-2.5 h-2.5 rounded-full ${current === index + 1 ? "bg-white" : "bg-white/50"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

const Services: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute left-0 top-0">
        <Image
          src="/images/categories/Vector.svg"
          alt="vector"
          width={800}
          height={1050}
          className="dark:hidden"
          unoptimized={true}
        />
        <Image
          src="/images/categories/Vector-dark.svg"
          alt="vector"
          width={800}
          height={1050}
          className="hidden dark:block"
          unoptimized={true}
        />
      </div>

      <div className="container max-w-6xl mx-auto px-5 2xl:px-0 relative z-10">
        <div className="grid grid-cols-12 items-center gap-10">
          <div className="lg:col-span-6 col-span-12">
            <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2.5">
              <Icon icon="ph:t-shirt-fill" className="text-2xl text-primary " />
              Kategori Produk
            </p>
            <h2 className="lg:text-52 text-40 mt-4 mb-2 lg:max-w-full font-medium leading-[1.2] text-dark dark:text-white">
              Temukan Koleksi Fashion Terbaik Kami.
            </h2>
            <p className="text-dark/50 dark:text-white/50 text-lg lg:max-w-full leading-[1.3] md:max-w-3/4">
              Jelajahi beragam pilihan pakaian kami, dari atasan kasual hingga gaun formal, yang dirancang untuk setiap gaya.
            </p>
            <Link href="/properties" className="py-4 px-8 bg-primary text-base leading-4 block w-fit text-white rounded-full font-semibold mt-8 hover:bg-dark duration-300">
              Lihat Semua Koleksi
            </Link>
          </div>

          {/* Kategori 1: Atasan */}
          <div className="lg:col-span-6 col-span-12">
            <div className="relative rounded-2xl overflow-hidden group">
              <Link href="/categories/shirts">
                <Image
                  src="/images/categories/atasan.jfif"
                  alt="Koleksi Atasan"
                  width={680}
                  height={386}
                  className="w-full object-cover"
                  unoptimized={true}
                />
              </Link>
              <Link href="/categories/shirts" className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-10 pr-6 pb-10 group-hover:top-0 duration-500">
                <div className="flex justify-end mt-6 mr-6">
                  <div className="bg-white text-dark rounded-full w-fit p-4">
                    <Icon icon="ph:arrow-right" width={24} height={24} />
                  </div>
                </div>
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-white text-2xl">Atasan</h3>
                  <p className="text-white/80 text-base leading-6">
                    Mulai dari kaos, kemeja, hingga blus elegan untuk segala aktivitasmu.
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* Kategori 2: Bawahan */}
          <div className="lg:col-span-6 col-span-12">
            <div className="relative rounded-2xl overflow-hidden group">
              <Link href="/categories/bottoms">
                <Image
                  src="/images/categories/bawahan.jpg"
                  alt="Koleksi Bawahan"
                  width={680}
                  height={386}
                  className="w-full object-cover"
                  unoptimized={true}
                />
              </Link>
              <Link href="/categories/bottoms" className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-10 pr-6 pb-10 group-hover:top-0 duration-500">
                <div className="flex justify-end mt-6 mr-6">
                  <div className="bg-white text-dark rounded-full w-fit p-4">
                    <Icon icon="ph:arrow-right" width={24} height={24} />
                  </div>
                </div>
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-white text-2xl">Bawahan</h3>
                  <p className="text-white/80 text-base leading-6">
                    Pilihan celana dan rok yang nyaman dan stylish untuk melengkapi penampilanmu.
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* Kategori 3: Dress */}
          <div className="lg:col-span-3 col-span-6">
            <div className="relative rounded-2xl overflow-hidden group">
              <Link href="/categorries/dress">
                <Image
                  src="/images/categories/dress2.jpg"
                  alt="Koleksi Dress"
                  width={320}
                  height={386}
                  className="w-full object-cover"
                  unoptimized={true}
                />
              </Link>
              <Link href="/categories/dress" className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-10 pr-6 pb-10 group-hover:top-0 duration-500">
                <div className="flex justify-end mt-6 mr-6">
                  <div className="bg-white text-dark rounded-full w-fit p-4">
                    <Icon icon="ph:arrow-right" width={24} height={24} />
                  </div>
                </div>
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-white text-2xl">Dress</h3>
                  <p className="text-white/80 text-base leading-6">
                    Tampil menawan dengan berbagai pilihan gaun untuk acara santai maupun formal.
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* Kategori 4: Outerwear */}
          <div className="lg:col-span-3 col-span-6">
            <div className="relative rounded-2xl overflow-hidden group">
              <Link href="/categories/outerwears">
                <Image
                  src="/images/categories/outerwear2.jpg"
                  alt="Koleksi Outerwear"
                  width={320}
                  height={386}
                  className="w-full object-cover"
                  unoptimized={true}
                />
              </Link>
              <Link href="/categories/outerwears" className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-10 pr-6 pb-10 group-hover:top-0 duration-500">
                <div className="flex justify-end mt-6 mr-6">
                  <div className="bg-white text-dark rounded-full w-fit p-4">
                    <Icon icon="ph:arrow-right" width={24} height={24} />
                  </div>
                </div>
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-white text-2xl">Outerwear</h3>
                  <p className="text-white/80 text-base leading-6">
                    Lengkapi gayamu dengan jaket, kardigan, dan blazer trendi dari koleksi kami.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 

export default Services;
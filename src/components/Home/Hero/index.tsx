import Image from 'next/image'
import Link from 'next/link'

const Hero: React.FC = () => {
  return (
    <section className='!py-0'>
      <div className='bg-gradient-to-b from-skyblue via-lightskyblue dark:via-[#4298b0] to-white/10 dark:to-black/10 overflow-hidden relative'>
        <div className='container max-w-6xl mx-auto px-5 2xl:px-0 pt-32 md:pt-60 md:pb-68'>
          <div className='relative text-white dark:text-dark text-center md:text-start z-10'>
            <p className='text-inherit text-xm font-medium'>Temukan Gaya Impianmu</p>
            <h1 className='text-inherit text-6xl sm:text-9xl font-semibold -tracking-wider md:max-w-45p mt-4 mb-6'>
              Clothes Paradise
            </h1>
            <div className='flex flex-col xs:flex-row justify-center md:justify-start gap-4'>
              <Link href="/contactus" className='px-8 py-4 border border-white dark:border-dark bg-white dark:bg-dark text-dark dark:text-white duration-300 dark:hover:text-dark hover:bg-transparent hover:text-white text-base font-semibold rounded-full hover:cursor-pointer'>
                Hubungi Kami
              </Link>
              <button className='px-8 py-4 border border-white dark:border-dark bg-transparent text-white dark:text-dark hover:bg-white dark:hover:bg-dark dark:hover:text-white hover:text-dark duration-300 text-base font-semibold rounded-full hover:cursor-pointer'>
                Lihat Koleksi
              </button>
            </div>
          </div>
          <div className='hidden md:block absolute -top-2 -right-68'>
            {/* PASTIKAN path gambar ini sesuai dengan gambar banner Anda */}
            <Image
              src={'/images/hero/clothing-banner.png'}
              alt='Koleksi pakaian wanita dan pria'
              width={1082}
              height={1016}
              priority={false}
              unoptimized={true}
            />
          </div>
        </div>
        <div className='md:absolute bottom-0 md:-right-68 xl:right-0 bg-white dark:bg-black py-12 px-8 mobile:px-16 md:pl-16 md:pr-[295px] rounded-2xl md:rounded-none md:rounded-tl-2xl mt-24'>
          <div className='grid grid-cols-2 sm:grid-cols-4 md:flex gap-16 md:gap-24 sm:text-center dark:text-white text-black'>
            {/* Kategori Atasan */}
            <div className='flex flex-col sm:items-center gap-3'>
              <Image
                src={'/images/hero/tshirt.svg'} // Ganti dengan ikon atasan Anda
                alt='Ikon atasan'
                width={32}
                height={32}
                className='block dark:hidden'
                unoptimized={true}
              />
              <Image
                src={'/images/hero/dark-tshirt.svg'} // Ganti dengan ikon atasan mode gelap
                alt='Ikon atasan'
                width={32}
                height={32}
                className='hidden dark:block'
                unoptimized={true}
              />
              <p className='text-sm sm:text-base font-normal text-inherit'>
                Atasan
              </p>
            </div>
            {/* Kategori Celana */}
            <div className='flex flex-col sm:items-center gap-3'>
              <Image
                src={'/images/hero/pants.svg'} // Ganti dengan ikon celana Anda
                alt='Ikon celana'
                width={32}
                height={32}
                className='block dark:hidden'
                unoptimized={true}
              />
              <Image
                src={'/images/hero/dark-pants.svg'} // Ganti dengan ikon celana mode gelap
                alt='Ikon celana'
                width={32}
                height={32}
                className='hidden dark:block'
                unoptimized={true}
              />
              <p className='text-sm sm:text-base font-normal text-inherit'>
                Celana
              </p>
            </div>
            {/* Kategori Rok */}
            <div className='flex flex-col sm:items-center gap-3'>
              <Image
                src={'/images/hero/skirt.svg'} // Ganti dengan ikon rok Anda
                alt='Ikon rok'
                width={32}
                height={32}
                className='block dark:hidden'
                unoptimized={true}
              />
              <Image
                src={'/images/hero/dark-skirt.svg'} // Ganti dengan ikon rok mode gelap
                alt='Ikon rok'
                width={32}
                height={32}
                className='hidden dark:block'
                unoptimized={true}
              />
              <p className='text-sm sm:text-base font-normal text-inherit'>
                Rok
              </p>
            </div>
            {/* Made-to-Order */}
            <div className='flex flex-col sm:items-center gap-3'>
              <p className='text-2xl sm:text-3xl font-medium text-inherit'>
                M2O
              </p>
              <p className='text-sm sm:text-base font-normal text-black/50 dark:text-white/50'>
                made-to-order
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
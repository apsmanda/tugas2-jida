import { Icon } from '@iconify/react'
import ProductCard from './Card/Card'
import { propertyHomes } from '@/app/api/propertyhomes' 

const Properties: React.FC = () => {
  return (
    <section>
      <div className='container max-w-8xl mx-auto px-5 2xl:px-0'>
        {/* BAGIAN JUDUL DAN IKON YANG KITA UBAH */}
        <div className='mb-16 flex flex-col gap-3 '>
          <div className='flex gap-2.5 items-center justify-center'>
            <span>
              <Icon
                icon={'ph:shopping-bag-fill'} // Ikon tas belanja
                width={20}
                height={20}
                className='text-primary'
              />
            </span>
            <p className='text-base font-semibold text-dark/75 dark:text-white/75'>
              Koleksi Kami
            </p>
          </div>
          <h2 className='text-40 lg:text-52 font-medium text-black dark:text-white text-center tracking-tight leading-11 mb-2'>
            Temukan Koleksi Pilihan Kami.
          </h2>
          <p className='text-xm font-normal text-black/50 dark:text-white/50 text-center'>
            Koleksi pilihan yang memadukan gaya, kenyamanan, dan tren terkini.
          </p>
        </div>

        {/* BAGIAN DAFTAR PRODUK (HANYA 6 UNTUK HOMEPAGE) */}
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
          {propertyHomes.slice(0, 6).map((item, index) => (
            <div key={index} className=''>
              <ProductCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Properties
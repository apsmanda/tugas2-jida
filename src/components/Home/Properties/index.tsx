'use client';

import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import ProductCard from './Card/Card';

export interface ProdukPakaian {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  slug: string;
  images: { src: string }[];
}

const Properties: React.FC = () => {
  const [products, setProducts] = useState<ProdukPakaian[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        if (!response.ok) {
          throw new Error('Gagal mengambil data');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []); 

  return (
    <section>
      <div className='container max-w-6xl mx-auto px-5 2xl:px-0'>
        <div className='mb-16 flex flex-col gap-3 '>
          <div className='flex gap-2.5 items-center justify-center'>
            <span>
              <Icon icon={'ph:shopping-bag-fill'} width={20} height={20} className='text-primary' />
            </span>
            <p className='text-base font-semibold text-dark/75 dark:text-white/75'>Koleksi Kami</p>
          </div>
          <h2 className='text-40 lg:text-52 font-medium text-black dark:text-white text-center tracking-tight leading-11 mb-2'>
            Temukan Koleksi Pilihan Kami.
          </h2>
          <p className='text-xm font-normal text-black/50 dark:text-white/50 text-center'>
            Koleksi pilihan yang memadukan gaya, kenyamanan, dan tren terkini.
          </p>
        </div>

        {isLoading ? (
          <p className="text-center">Memuat produk...</p>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
            {products.slice(0, 6).map((item) => (
              <div key={item.id}> 
                <ProductCard item={item} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Properties;
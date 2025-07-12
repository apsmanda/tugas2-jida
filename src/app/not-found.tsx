import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';

const ErrorPage = () => {
    return (
        <section className="flex items-center justify-center min-h-screen py-20">
            <div className="container max-w-8xl mx-auto px-5 2xl:px-0 text-center">
                <div className='flex justify-center'>
                    <Image
                        src="/images/404.png" // Pastikan path gambar ini benar
                        alt="404 Not Found"
                        width={500}
                        height={350}
                        unoptimized={true}
                    />
                </div>
                
                {/* Bagian Teks di Bawah Gambar */}
                <div className="max-w-md mx-auto">
                    {/* [ATUR JARAK DI SINI] Jarak antara gambar dan tulisan "Error 404" */}
                    <div className='flex items-center justify-center gap-2 mt-8'>
                        <Icon icon="ph:shopping-bag-fill" className="text-primary" />
                        <p className='text-base font-semibold text-dark/75 dark:text-white/75'>
                            Error 404
                        </p>
                    </div>

                    {/* [ATUR JARAK DI SINI] Jarak antara "Error 404" dan Judul Utama */}
                    <h2 className='text-4xl lg:text-5xl font-medium text-dark dark:text-white mt-4'>
                        Halaman tidak dapat ditemukan.
                    </h2>

                    {/* [ATUR JARAK DI SINI] Jarak antara Judul Utama dan Sub-judul */}
                    <p className='text-base text-dark/50 dark:text-white/50 mt-2'>
                        Dapat kembali ke halaman utama.
                    </p>

                    {/* [ATUR JARAK DI SINI] Jarak antara sub-judul dan Tombol */}
                    <Link href="/" className="py-4 px-8 bg-primary text-base font-semibold block w-fit text-white rounded-full mt-8 mx-auto hover:bg-dark duration-300">
                        Kembali ke Halaman Utama
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;
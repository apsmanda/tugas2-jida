import { ProdukPakaian } from '@/types/produkPakaian'; // Pastikan path ke type ini benar

export const propertyHomes: ProdukPakaian[] = [
  // Produk 1 (dari folder property1)
  {
    name: 'Classic Black Jumpsuit',
    category: 'Jumpsuit',
    price: 899000,
    rating: 4.8,
    reviews: 102,
    slug: 'classic-black-jumpsuit',
    images: [
      { src: '/images/properties/property1/property1.jpg' },
      { src: '/images/properties/property1/images-2.jpg' },
      { src: '/images/properties/property1/images-3.jpg' },
      { src: '/images/properties/property1/images-4.jpg' },
    ],
  },
  // Produk 2 (dari folder property2)
  {
    name: 'Modern Office Blazer',
    category: 'Outerwear',
    price: 1250000,
    rating: 4.9,
    reviews: 95,
    slug: 'modern-office-blazer',
    images: [
      { src: '/images/properties/property2/property2.jpg' },
      { src: '/images/properties/property2/images-2.jpg' },
      { src: '/images/properties/property2/images-3.jpg' },
      { src: '/images/properties/property2/images-4.jpg' },
    ],
  },
  // Produk 3 (dari folder property3)
  {
    name: 'Elegant White Top',
    category: 'Atasan',
    price: 550000,
    rating: 4.7,
    reviews: 150,
    slug: 'elegant-white-top',
    images: [
      { src: '/images/properties/property3/property3.jpg' },
      { src: '/images/properties/property3/images-2.jpg' },
      { src: '/images/properties/property3/images-3.jpg' },
      { src: '/images/properties/property3/images-4.jpg' },
    ],
  },
  // Produk 4 (dari folder property4)
  {
    name: 'Chic Pink Set',
    category: 'Setelan',
    price: 1100000,
    rating: 4.8,
    reviews: 88,
    slug: 'chic-pink-set',
    images: [
      { src: '/images/properties/property4/property4.jpg' },
      { src: '/images/properties/property4/images-2.jpg' },
      { src: '/images/properties/property4/images-3.jpg' },
      { src: '/images/properties/property4/images-4.jpg' },
    ],
  },
  // Produk 5 (dari folder property5)
  {
    name: 'Flowy Maxi Dress',
    category: 'Dress',
    price: 950000,
    rating: 4.9,
    reviews: 210,
    slug: 'flowy-maxi-dress',
    images: [
      { src: '/images/properties/property5/property5.jpg' },
      { src: '/images/properties/property5/images-2.jpg' },
      { src: '/images/properties/property5/images-3.jpg' },
      { src: '/images/properties/property5/images-4.jpg' },
    ],
  },
  // Produk 6 (dari folder property6)
  {
    name: 'Bold Red Coat',
    category: 'Outerwear',
    price: 1800000,
    rating: 5.0,
    reviews: 75,
    slug: 'bold-red-coat',
    images: [
      { src: '/images/properties/property6/property6.jpg' },
      { src: '/images/properties/property6/images-2.jpg' },
      { src: '/images/properties/property6/images-3.jpg' },
      { src: '/images/properties/property6/images-4.jpg' },
    ],
  },
  // Produk 7 (file tunggal)
  {
    name: 'Casual Denim Jacket',
    category: 'Outerwear',
    price: 799000,
    rating: 4.6,
    reviews: 180,
    slug: 'casual-denim-jacket',
    images: [{ src: '/images/properties/property7.jpg' }],
  },
  // Produk 8 (file tunggal)
  {
    name: 'Formal Black Coat',
    category: 'Outerwear',
    price: 2100000,
    rating: 4.9,
    reviews: 99,
    slug: 'formal-black-coat',
    images: [{ src: '/images/properties/property8.jpg' }],
  },
  // Produk 9 (file tunggal)
  {
    name: 'Asymmetric White Blouse',
    category: 'Atasan',
    price: 650000,
    rating: 4.7,
    reviews: 132,
    slug: 'asymmetric-white-blouse',
    images: [{ src: '/images/properties/property9.jpg' }],
  },
];
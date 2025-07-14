export interface ProdukPakaian {
  name: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  slug: string;
  images: {
    src: string;
  }[];
}

export const propertyHomes: ProdukPakaian[] = [
  {
    name: 'Classic Black Suit',
    category: 'Atasan',
    price: 899000,
    rating: 4.8,
    reviews: 102,
    slug: 'classic-black-shirt',
    images: [
      { src: '/images/properties/property1/property1.jpg' },
      { src: '/images/properties/property1/images-2.jpg' },
      { src: '/images/properties/property1/images-3.jpg' },
      { src: '/images/properties/property1/images-4.jpg' },
    ],
  },
  
  {
    name: 'Flowy Maxi Dress',
    category: 'Dress',
    price: 1250000,
    rating: 4.9,
    reviews: 95,
    slug: 'flowy-maxy-dress',
    images: [
      { src: '/images/properties/property2/property2.jpg' },
      { src: '/images/properties/property2/images-2.jpg' },
      { src: '/images/properties/property2/images-3.jpg' },
      { src: '/images/properties/property2/images-4.jpg' },
    ],
  },
  
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
  
  {
    name: 'Chic Pink Set',
    category: 'Atasan',
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
  
  {
    name: 'Modern Office Blazer',
    category: 'Outerwear',
    price: 950000,
    rating: 4.9,
    reviews: 210,
    slug: 'modern-office-blazer',
    images: [
      { src: '/images/properties/property5/property5.jpg' },
      { src: '/images/properties/property5/images-2.jpg' },
      { src: '/images/properties/property5/images-3.jpg' },
      { src: '/images/properties/property5/images-4.jpg' },
    ],
  },
  
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
  
  {
    name: 'Midnight Bloom',
    category: 'Dress',
    price: 799000,
    rating: 4.6,
    reviews: 180,
    slug: 'midnight-bloom-dress',
    images: [{ src: '/images/properties/property7.jpg' }],
  },
  
  {
    name: 'Winter Starlight Queen',
    category: 'Dress',
    price: 2100000,
    rating: 4.9,
    reviews: 99,
    slug: 'winter-starlight-queen',
    images: [{ src: '/images/properties/property8.jpg' }],
  },
  
  {
    name: 'Moderno Suit',
    category: 'Atasan',
    price: 650000,
    rating: 4.7,
    reviews: 132,
    slug: 'moderno-suit',
    images: [{ src: '/images/properties/property9.jpg' }],
  },
];
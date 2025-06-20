import { Product, Collection, HeroProduct } from '../types';

export const defaultHeroProduct: HeroProduct = {
  id: 'hero-1',
  title: 'Handcrafted Coconut Bowl Set',
  description: 'Transform your dining experience with our beautifully handcrafted coconut bowls. Each piece is uniquely upcycled from discarded coconut shells, creating sustainable tableware that tells a story of environmental consciousness and artisan craftsmanship.',
  image: 'https://images.pexels.com/photos/6542652/pexels-photo-6542652.jpeg?auto=compress&cs=tinysrgb&w=1200',
  ctaText: 'Shop Coconut Bowls',
  ctaLink: '/products?collection=Bowls & Tableware',
  price: 45.99
};

export const sampleCollections: Collection[] = [
  {
    id: 'bowls-tableware',
    name: 'Bowls & Tableware',
    description: 'Handcrafted coconut bowls and sustainable dining essentials',
    image: 'https://images.pexels.com/photos/6542652/pexels-photo-6542652.jpeg?auto=compress&cs=tinysrgb&w=800',
    createdAt: '2024-01-01T00:00:00Z'
  },
  {
    id: 'home-decor',
    name: 'Home Decor',
    description: 'Eco-friendly coconut shell decorative items for your home',
    image: 'https://images.pexels.com/photos/6207516/pexels-photo-6207516.jpeg?auto=compress&cs=tinysrgb&w=800',
    createdAt: '2024-01-01T00:00:00Z'
  },
  {
    id: 'planters-garden',
    name: 'Planters & Garden',
    description: 'Natural coconut shell planters and garden accessories',
    image: 'https://images.pexels.com/photos/4751978/pexels-photo-4751978.jpeg?auto=compress&cs=tinysrgb&w=800',
    createdAt: '2024-01-01T00:00:00Z'
  },
  {
    id: 'kitchen-accessories',
    name: 'Kitchen Accessories',
    description: 'Sustainable coconut-based kitchen tools and accessories',
    image: 'https://images.pexels.com/photos/4198224/pexels-photo-4198224.jpeg?auto=compress&cs=tinysrgb&w=800',
    createdAt: '2024-01-01T00:00:00Z'
  },
  {
    id: 'wellness-spa',
    name: 'Wellness & Spa',
    description: 'Natural coconut products for wellness and self-care',
    image: 'https://images.pexels.com/photos/3865711/pexels-photo-3865711.jpeg?auto=compress&cs=tinysrgb&w=800',
    createdAt: '2024-01-01T00:00:00Z'
  }
];

export const sampleProducts: Product[] = [
  // Bowls & Tableware
  {
    id: '1',
    name: 'Handcrafted Coconut Bowl Set (4 pieces)',
    price: 45.99,
    description: 'Beautiful set of 4 handcrafted coconut bowls, each uniquely shaped and polished. Perfect for smoothie bowls, salads, or decorative use. Made from upcycled coconut shells.',
    image: 'https://images.pexels.com/photos/6542652/pexels-photo-6542652.jpeg?auto=compress&cs=tinysrgb&w=800',
    collection: 'Bowls & Tableware',
    featured: true,
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: 'Coconut Shell Spoon Set',
    price: 18.99,
    description: 'Set of 6 handcarved coconut shell spoons. Smooth finish, perfect for eating or serving. Completely natural and biodegradable.',
    image: 'https://images.pexels.com/photos/7195259/pexels-photo-7195259.jpeg?auto=compress&cs=tinysrgb&w=800',
    collection: 'Bowls & Tableware',
    featured: true,
    createdAt: '2024-01-14T09:30:00Z'
  },
  {
    id: '3',
    name: 'Large Coconut Serving Bowl',
    price: 24.99,
    description: 'Extra large coconut bowl perfect for serving salads, fruits, or as a centerpiece. Naturally water-resistant and durable.',
    image: 'https://images.pexels.com/photos/6207516/pexels-photo-6207516.jpeg?auto=compress&cs=tinysrgb&w=800',
    collection: 'Bowls & Tableware',
    featured: false,
    createdAt: '2024-01-13T14:20:00Z'
  },
  {
    id: '4',
    name: 'Coconut Shell Cups (Set of 2)',
    price: 22.99,
    description: 'Pair of handcrafted coconut shell cups with smooth interior finish. Perfect for hot or cold beverages.',
    image: 'https://images.pexels.com/photos/8032834/pexels-photo-8032834.jpeg?auto=compress&cs=tinysrgb&w=800',
    collection: 'Bowls & Tableware',
    featured: false,
    createdAt: '2024-01-12T11:15:00Z'
  },

  // Home Decor
  {
    id: '5',
    name: 'Coconut Shell Candle Holders (Set of 3)',
    price: 32.99,
    description: 'Beautiful set of 3 coconut shell candle holders in different sizes. Creates warm, ambient lighting for any space.',
    image: 'https://images.pexels.com/photos/6207516/pexels-photo-6207516.jpeg?auto=compress&cs=tinysrgb&w=800',
    collection: 'Home Decor',
    featured: true,
    createdAt: '2024-01-11T16:45:00Z'
  },
  {
    id: '6',
    name: 'Decorative Coconut Shell Wall Art',
    price: 38.99,
    description: 'Unique wall art piece made from coconut shells arranged in an artistic pattern. Adds natural texture to any room.',
    image: 'https://images.pexels.com/photos/6207516/pexels-photo-6207516.jpeg?auto=compress&cs=tinysrgb&w=800',
    collection: 'Home Decor',
    featured: false,
    createdAt: '2024-01-10T13:30:00Z'
  },
  {
    id: '7',
    name: 'Coconut Shell Bird Feeder',
    price: 19.99,
    description: 'Charming bird feeder made from a whole coconut shell. Includes hanging rope and drainage holes.',
    image: 'https://images.pexels.com/photos/6207516/pexels-photo-6207516.jpeg?auto=compress&cs=tinysrgb&w=800',
    collection: 'Home Decor',
    featured: true,
    createdAt: '2024-01-09T12:00:00Z'
  },
  {
    id: '8',
    name: 'Coconut Shell Jewelry Dish',
    price: 16.99,
    description: 'Small coconut shell bowl perfect for holding jewelry, keys, or small trinkets. Polished to a smooth finish.',
    image: 'https://images.pexels.com/photos/6207516/pexels-photo-6207516.jpeg?auto=compress&cs=tinysrgb&w=800',
    collection: 'Home Decor',
    featured: false,
    createdAt: '2024-01-08T15:20:00Z'
  },

  // Planters & Garden
  {
    id: '9',
    name: 'Hanging Coconut Planters (Set of 3)',
    price: 42.99,
    description: 'Set of 3 hanging coconut shell planters with natural rope hangers. Perfect for succulents and small plants.',
    image: 'https://images.pexels.com/photos/4751978/pexels-photo-4751978.jpeg?auto=compress&cs=tinysrgb&w=800',
    collection: 'Planters & Garden',
    featured: true,
    createdAt: '2024-01-07T10:30:00Z'
  },
  {
    id: '10',
    name: 'Large Coconut Shell Planter',
    price: 28.99,
    description: 'Large coconut shell planter with drainage holes. Ideal for herbs, small flowers, or indoor plants.',
    image: 'https://images.pexels.com/photos/4751978/pexels-photo-4751978.jpeg?auto=compress&cs=tinysrgb&w=800',
    collection: 'Planters & Garden',
    featured: false,
    createdAt: '2024-01-06T14:15:00Z'
  },
  {
    id: '11',
    name: 'Coconut Shell Seed Starter Set',
    price: 24.99,
    description: 'Set of 12 small coconut shell pots perfect for starting seeds. Biodegradable and plantable.',
    image: 'https://images.pexels.com/photos/4751978/pexels-photo-4751978.jpeg?auto=compress&cs=tinysrgb&w=800',
    collection: 'Planters & Garden',
    featured: false,
    createdAt: '2024-01-05T11:45:00Z'
  },
  {
    id: '12',
    name: 'Coconut Fiber Garden Mulch',
    price: 15.99,
    description: 'Natural coconut fiber mulch for garden beds. Retains moisture and suppresses weeds naturally.',
    image: 'https://images.pexels.com/photos/4751978/pexels-photo-4751978.jpeg?auto=compress&cs=tinysrgb&w=800',
    collection: 'Planters & Garden',
    featured: true,
    createdAt: '2024-01-04T09:20:00Z'
  },

  // Kitchen Accessories
  {
    id: '13',
    name: 'Coconut Shell Ladle',
    price: 12.99,
    description: 'Handcrafted coconut shell ladle with wooden handle. Perfect for serving soups, stews, and sauces.',
    image: 'https://images.pexels.com/photos/4198224/pexels-photo-4198224.jpeg?auto=compress&cs=tinysrgb&w=800',
    collection: 'Kitchen Accessories',
    featured: false,
    createdAt: '2024-01-03T16:30:00Z'
  },
  {
    id: '14',
    name: 'Coconut Shell Measuring Cups',
    price: 26.99,
    description: 'Set of 4 coconut shell measuring cups in standard sizes. Natural, non-toxic alternative to plastic.',
    image: 'https://images.pexels.com/photos/4198224/pexels-photo-4198224.jpeg?auto=compress&cs=tinysrgb&w=800',
    collection: 'Kitchen Accessories',
    featured: true,
    createdAt: '2024-01-02T12:45:00Z'
  },
  {
    id: '15',
    name: 'Coconut Shell Salt & Pepper Bowls',
    price: 18.99,
    description: 'Pair of small coconut shell bowls perfect for salt, pepper, or spices. Includes tiny wooden spoons.',
    image: 'https://images.pexels.com/photos/4198224/pexels-photo-4198224.jpeg?auto=compress&cs=tinysrgb&w=800',
    collection: 'Kitchen Accessories',
    featured: false,
    createdAt: '2024-01-01T10:15:00Z'
  },

  // Wellness & Spa
  {
    id: '16',
    name: 'Coconut Oil Soap Bars (Set of 3)',
    price: 21.99,
    description: 'Handmade soap bars with pure coconut oil. Moisturizing and gentle on all skin types. Natural ingredients only.',
    image: 'https://images.pexels.com/photos/3865711/pexels-photo-3865711.jpeg?auto=compress&cs=tinysrgb&w=800',
    collection: 'Wellness & Spa',
    featured: true,
    createdAt: '2023-12-31T14:30:00Z'
  },
  {
    id: '17',
    name: 'Coconut Shell Massage Tools',
    price: 29.99,
    description: 'Set of smooth coconut shell massage tools for self-massage and relaxation. Ergonomically shaped.',
    image: 'https://images.pexels.com/photos/3865711/pexels-photo-3865711.jpeg?auto=compress&cs=tinysrgb&w=800',
    collection: 'Wellness & Spa',
    featured: false,
    createdAt: '2023-12-30T11:20:00Z'
  },
  {
    id: '18',
    name: 'Pure Coconut Oil (16oz)',
    price: 18.99,
    description: 'Cold-pressed, virgin coconut oil perfect for cooking, skincare, and hair care. Organic and unrefined.',
    image: 'https://images.pexels.com/photos/3865711/pexels-photo-3865711.jpeg?auto=compress&cs=tinysrgb&w=800',
    collection: 'Wellness & Spa',
    featured: true,
    createdAt: '2023-12-29T15:45:00Z'
  },
  {
    id: '19',
    name: 'Coconut Shell Exfoliating Scrub',
    price: 16.99,
    description: 'Natural body scrub made with finely ground coconut shell. Removes dead skin cells gently and effectively.',
    image: 'https://images.pexels.com/photos/3865711/pexels-photo-3865711.jpeg?auto=compress&cs=tinysrgb&w=800',
    collection: 'Wellness & Spa',
    featured: false,
    createdAt: '2023-12-28T13:10:00Z'
  },
  {
    id: '20',
    name: 'Coconut Fiber Bath Mitt',
    price: 12.99,
    description: 'Natural coconut fiber bath mitt for gentle exfoliation. Sustainable alternative to synthetic loofahs.',
    image: 'https://images.pexels.com/photos/3865711/pexels-photo-3865711.jpeg?auto=compress&cs=tinysrgb&w=800',
    collection: 'Wellness & Spa',
    featured: false,
    createdAt: '2023-12-27T16:25:00Z'
  }
];
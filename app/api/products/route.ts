import { NextResponse } from "next/server";

export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string[];
  details: string;
  category: string;
}

const products: Product[] = [
  {
    id: '1',
    name: 'Blossom Clutch',
    price: 218.0,
    description: 'The Blossom\'s beautiful hand tooling elevates this crescent-shaped, vintage-inspired clutch.',
    imageUrl: [
      '/images/bag.png',
      '/images/image.png',
      '/images/image.png',
    ],
    details: 'Leather body, Removal tassel, Two interior pockets, Dimensions: 11.5" W x 3" D x 11.5 H, Imported',
    category: 'Clutches'
  },
  {
    id: '2',
    name: 'Blossom Clutch',
    price: 218.0,
    description: 'The Blossom\'s beautiful hand tooling elevates this crescent-shaped, vintage-inspired clutch.',
    imageUrl: [
      '/images/bag.png',
      '/images/image.png',
      '/images/image.png',
    ],
    details: 'Leather body, Removal tassel, Two interior pockets, Dimensions: 11.5" W x 3" D x 11.5 H, Imported',
    category: 'Clutches'
  },
  {
    id: '3',
    name: 'Blossom Clutch',
    price: 218.0,
    description: 'The Blossom\'s beautiful hand tooling elevates this crescent-shaped, vintage-inspired clutch.',
    imageUrl: [
      '/images/bag.png',
      '/images/image.png',
      '/images/image.png',
    ],
    details: 'Leather body, Removal tassel, Two interior pockets, Dimensions: 11.5" W x 3" D x 11.5 H, Imported',
    category: 'Clutches'
  },
  {
    id: '4',
    name: 'Basic Totes',
    price: 218.0,
    description: 'Tote bags are a great way to carry your essentials. They are lightweight, compact, and easy to carry.',
    imageUrl: [
      '/images/tote.png',
      '/images/image.png',
      '/images/image.png',
    ],
    details: '',
    category: 'Totes'
  },
  {
    id: '5',
    name: 'Blossom Clutch',
    price: 218.0,
    description: 'The Blossom\'s beautiful hand tooling elevates this crescent-shaped, vintage-inspired clutch.',
    imageUrl: [
      '/images/bag.png',
      '/images/image.png',
      '/images/image.png',
    ],
    details: 'Leather body, Removal tassel, Two interior pockets, Dimensions: 11.5" W x 3" D x 11.5 H, Imported',
    category: 'Clutches'
  },

  {
    id: '6',
    name: 'Elegant Tote',
    price: 340.00,
    description: 'A spacious and elegant tote for all your daily needs.',
    imageUrl: [
      '/images/tote.png',
      '/images/image.png',
    ],
    category: 'Totes',
    details: 'Spacious interior, Durable leather, Multiple compartments, Dimensions: 14" W x 6" D x 12" H, Imported',
  },
  {
    id: '7',
    name: 'Classic Satchel',
    price: 290.00,
    description: 'A classic satchel with a modern twist, perfect for any occasion.',
    imageUrl: [
      '/images/image.png',
      '/images/image.png',
    ],
    category: 'Satchels',
    details: 'Versatile and stylish, High-quality leather, Dimensions: 13" W x 5" D x 11" H, Imported',
  },
  { 
    id: '8',
    name: 'Modern Satchel',
    price: 290.00,
    description: 'A classic satchel with a modern twist, perfect for any occasion.',
    imageUrl: [
      '/images/image.png',
      '/images/image.png',
    ],
    category: 'Satchels',
    details: 'Versatile and stylish, High-quality leather, Dimensions: 13" W x 5" D x 11" H, Imported',
   }
];


export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const id = searchParams.get('id');

  if (id) {
    return NextResponse.json(products.find((product) => product.id === id));
  }

  let filteredProducts = products;

  if (category) {
    filteredProducts = products.filter((product) => product.category.toLowerCase() === category.toLowerCase());
  }

  return NextResponse.json(filteredProducts);
}

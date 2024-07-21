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
    description: 'The Anabagish Blossom\'s beautiful hand tooling elevates this crescent-shaped, vintage-inspired clutch.',
    imageUrl: [
      '/images/image.png',
      '/images/bag.png',
      '/images/image.png',
    ],
    details: 'Leather body, Removal tassel, Two interior pockets, Dimensions: 11.5" W x 3" D x 11.5 H, Imported',
    category: 'Clutches'
  },
  {
    id: '2',
    name: 'Blossom Clutch',
    price: 218.0,
    description: 'The Anabagish Blossom\'s beautiful hand tooling elevates this crescent-shaped, vintage-inspired clutch.',
    imageUrl: [
      'images/image.png',
      'images/image.png',
      'images/image.png',
    ],
    details: 'Leather body, Removal tassel, Two interior pockets, Dimensions: 11.5" W x 3" D x 11.5 H, Imported',
    category: 'Clutches'
  },
  {
    id: '3',
    name: 'Blossom Clutch',
    price: 218.0,
    description: 'The Anabagish Blossom\'s beautiful hand tooling elevates this crescent-shaped, vintage-inspired clutch.',
    imageUrl: [
      'images/image.png',
      'images/image.png',
      'images/image.png',
    ],
    details: 'Leather body, Removal tassel, Two interior pockets, Dimensions: 11.5" W x 3" D x 11.5 H, Imported',
    category: 'Clutches'
  },
  {
    id: '4',
    name: 'Blossom Clutch',
    price: 218.0,
    description: 'The Anabagish Blossom\'s beautiful hand tooling elevates this crescent-shaped, vintage-inspired clutch.',
    imageUrl: [
      'images/image.png',
      'images/image.png',
      'images/image.png',
    ],
    details: 'Leather body, Removal tassel, Two interior pockets, Dimensions: 11.5" W x 3" D x 11.5 H, Imported',
    category: 'Clutches'
  },
];

export const fetchProductById = async (id: string) => {
  return products.find(product => product.id === id) || null;
};

export const fetchAllProducts = async (): Promise<Product[]> => {
  return products;
};
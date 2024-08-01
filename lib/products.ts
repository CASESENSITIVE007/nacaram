export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string[];
  details: string;
  category: string;
};

const products: Product[] = [
  {
    id: "1",
    name: "Blossom Clutch",
    price: 218.0,
    description:
      "The Blossom's beautiful hand tooling elevates this crescent-shaped, vintage-inspired clutch.",
    imageUrl: [
      "/images/blossomClutch1.2.jpg",
      "/images/blossomClutch1.1.jpg",
      "/images/blossomClutche1.jpg",
    ],
    details:
      'Leather body, Removal tassel, Two interior pockets, Dimensions: 11.5" W x 3" D x 11.5 H, Imported',
    category: "Clutches",
  },
  {
    id: "2",
    name: "Blossom Clutch",
    price: 218.0,
    description:
      "The Blossom's beautiful hand tooling elevates this crescent-shaped, vintage-inspired clutch.",
    imageUrl: [
      "/images/blossomClutch2.jpg",
      "/images/blossomClutch2.1.jpg",
      "/images/blossomClutch2.2.jpg",
    ],
    details:
      'Leather body, Removal tassel, Two interior pockets, Dimensions: 11.5" W x 3" D x 11.5 H, Imported',
    category: "Clutches",
  },
  {
    id: "3",
    name: "Blossom Clutch",
    price: 218.0,
    description:
      "The Blossom's beautiful hand tooling elevates this crescent-shaped, vintage-inspired clutch.",
    imageUrl: [
      "/images/C3.jpg",
      // '/images/image.png',
      // '/images/image.png',
    ],
    details:
      'Leather body, Removal tassel, Two interior pockets, Dimensions: 11.5" W x 3" D x 11.5 H, Imported',
    category: "Clutches",
  },
  {
    id: "4",
    name: "Basic Totes",
    price: 218.0,
    description:
      "Tote bags are a great way to carry your essentials. They are lightweight, compact, and easy to carry.",
    imageUrl: ["/images/T1.jpg", "/images/T1.1.jpg", "/images/T1.2.jpg"],
    details: "",
    category: "Totes",
  },
  {
    id: "5",
    name: "Blossom Clutch",
    price: 218.0,
    description:
      "The Blossom's beautiful hand tooling elevates this crescent-shaped, vintage-inspired clutch.",
    imageUrl: ["/images/C4.jpg", "/images/C4.1.jpg", "/images/C4.2.jpg"],
    details:
      'Leather body, Removal tassel, Two interior pockets, Dimensions: 11.5" W x 3" D x 11.5 H, Imported',
    category: "Clutches",
  },

  {
    id: "6",
    name: "Elegant Tote",
    price: 340.0,
    description: "A spacious and elegant tote for all your daily needs.",
    imageUrl: ["/images/E1.jpg", "/images/E1.1.jpg", "/images/E1.2.jpg"],
    category: "Totes",
    details:
      'Spacious interior, Durable leather, Multiple compartments, Dimensions: 14" W x 6" D x 12" H, Imported',
  },
  {
    id: "7",
    name: "Classic Satchel",
    price: 290.0,
    description:
      "A classic satchel with a modern twist, perfect for any occasion.",
    imageUrl: ["/images/S1.jpg", "/images/S1.1.jpg", "/images/S1.2.jpg"],
    category: "Satchels",
    details:
      'Versatile and stylish, High-quality leather, Dimensions: 13" W x 5" D x 11" H, Imported',
  },
  {
    id: "8",
    name: "Satchels",
    price: 20.0,
    description:
      'Versatile and stylish, High-quality leather, Dimensions: 13" W x 5" D x 11" H, Imported',
    imageUrl: [
      "/images/S3.jpg",
      "/images/S3.1.jpg",
      // '/images/acc1.2.jpg',
    ],
    category: "Satchels",
    details:
      'Versatile and stylish, High-quality leather, Dimensions: 13" W x 5" D x 11" H, Imported',
  },
  {
    id: "9",
    name: "M Keyring",
    price: 20.0,
    description: "Beutiful Keyring",
    imageUrl: ["/images/acc1.jpg"],
    category: "keyring",
    details:
      'Versatile and stylish, High-quality leather, Dimensions: 13" W x 5" D x 11" H, Imported',
  },
  {
    id: "10",
    name: "Heart Keyring",
    price: 20.0,
    description: "Beutiful Keyring",
    imageUrl: ["/images/key2.jpg", "/images/key2_1.jpg", "/images/key2_2.jpg"],
    category: "keyring",
    details:
      'Versatile and stylish, High-quality leather, Dimensions: 13" W x 5" D x 11" H, Imported',
  },
];

export async function getProducts(category?: string): Promise<Product[]> {
  await new Promise((resolve) => setTimeout(resolve, 200));
  let filteredProducts = products;

  if (category) {
    filteredProducts = products.filter(
      (product) => product.category.toLowerCase() === category.toLowerCase(),
    );
  }

  return filteredProducts;
}

export async function getProduct(id: string): Promise<Product> {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return products.find((product) => product.id === id) as Product;
}

export type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    category: string;
  }

  
  const products: Product[] = [
    {
      id: 1,
      name: "Classic Handbag",
      description: "A classic handbag for everyday use.",
      price: 59.99,
      imageUrl: "/images/image.png",
      category: "Handbags",
    },
    {
      id: 2,
      name: "Modern Tote",
      description: "A stylish tote for modern women.",
      price: 79.99,
      imageUrl: "/images/image.png",
      category: "Totes",
    },
    {
      id: 3,
      name: "Vintage Satchel",
      description: "A vintage satchel with a unique look.",
      price: 69.99,
      imageUrl: "/images/image.png",
      category: "Satchels",
    },
    {
      id: 4,
      name: "Elegant Clutch",
      description: "An elegant clutch for special occasions.",
      price: 49.99,
      imageUrl: "/images/image.png",
      category: "Clutches",
    },
    {
      id: 5,
      name: "Classic Tote",
      description: "A classic tote for everyday use.",
      price: 59.99,
      imageUrl: "/images/image.png",
      category: "Totes",
    },
    {
      id: 6,
      name: "Vintage Clutch",
      description: "A vintage clutch with a unique look.",
      price: 69.99,
      imageUrl: "/images/image.png",
      category: "Clutches",
    },
    {
      id: 7,
      name: "Elegant Satchel",
      description: "An elegant satchel for special occasions.",
      price: 49.99,
      imageUrl: "/images/image.png",
      category: "Satchels",
    }, 
    {
      id: 8,
      name: "Classic Clutch",
      description: "A classic clutch for everyday use.",
      price: 59.99,
      imageUrl: "/images/image.png",
      category: "Clutches",
    },
    {
      id: 9,
      name: "Modern Clutch",
      description: "A stylish clutch for modern women.",
      price: 79.99,
      imageUrl: "/images/image.png",
      category: "Clutches",
    },
  ];

export default products;
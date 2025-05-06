
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    category: "Electronics",
    rating: 4.5,
    description: "Premium wireless headphones with noise cancellation and 20-hour battery life."
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    category: "Electronics",
    rating: 4.2,
    description: "Feature-packed smartwatch with health tracking and notifications."
  },
  {
    id: 3,
    name: "Cotton T-Shirt",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    category: "Clothing",
    rating: 4.0,
    description: "Soft and comfortable cotton t-shirt, perfect for everyday wear."
  },
  {
    id: 4,
    name: "Running Shoes",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    category: "Footwear",
    rating: 4.7,
    description: "Lightweight running shoes with superior cushioning and support."
  },
  {
    id: 5,
    name: "Coffee Maker",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1570658194389-686b71bfe8f7",
    category: "Home",
    rating: 4.3,
    description: "Programmable coffee maker that brews up to 12 cups at a time."
  },
  {
    id: 6,
    name: "Backpack",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    category: "Accessories",
    rating: 4.4,
    description: "Durable backpack with multiple compartments and laptop sleeve."
  },
  {
    id: 7,
    name: "Wireless Mouse",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1605773527852-c546a8584ea3",
    category: "Electronics",
    rating: 4.1,
    description: "Ergonomic wireless mouse with precise tracking and long battery life."
  },
  {
    id: 8,
    name: "Yoga Mat",
    price: 35.99,
    image: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2",
    category: "Fitness",
    rating: 4.6,
    description: "Non-slip yoga mat that provides excellent cushioning and support."
  }
];

export type Language = 'hindi' | 'english' | 'marathi';

export interface User {
  username: string;
  role: 'farmer' | 'retailer';
  phone?: string;
  location?: {
    latitude: number;
    longitude: number;
    address?: string;
  };
}

export interface Message {
  id: string;
  sender: string;
  text: string;
  timestamp: Date;
  type: 'sent' | 'received';
}

export interface Product {
  id: string;
  name: string;
  nameHindi: string;
  nameMarathi: string;
  category: string;
  price: number;
  stock: number;
  image?: string;
  description: string;
  descriptionHindi: string;
  descriptionMarathi: string;
}

export interface Order {
  id: string;
  farmerId: string;
  farmerName: string;
  products: { productId: string; productName: string; quantity: number; price: number }[];
  total: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered';
  timestamp: Date;
  paymentMethod?: string;
}

export interface Transaction {
  id: string;
  farmerId: string;
  farmerName: string;
  amount: number;
  type: 'credit' | 'debit';
  description: string;
  timestamp: Date;
  balance: number;
}
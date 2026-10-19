export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  samplePrice: number;
  availableSizes: string[];
  image: string;
  flavourNotes?: string;
  dietary?: string;
  isPopular?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  itemCount: number;
}

export interface CartItem {
  product: Product;
  selectedSize: string;
  quantity: number;
  customPiping?: string;
}

export interface CustomOrderForm {
  name: string;
  contactNumber: string;
  occasion: string;
  flavour: string;
  size: string;
  requiredDate: string;
  designDetails: string;
}

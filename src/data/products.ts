
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  featured: boolean;
  benefits: string[];
  extractionMethod: string;
  weight: string;
  category: string;
}

export const products: Product[] = [
  {
    id: "coconut-oil",
    name: "Cold Pressed Coconut Oil",
    price: 548,
    image: "https://images.unsplash.com/photo-1589758443093-e7cb4520daf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    description: "Our cold-pressed coconut oil is extracted using traditional wooden chekku (wooden cold press) method that preserves all the natural nutrients and aroma. Perfect for cooking, skincare, and hair treatments.",
    featured: true,
    benefits: [
      "Rich in medium-chain fatty acids",
      "Enhances brain function",
      "Improves skin health",
      "Supports weight management"
    ],
    extractionMethod: "Traditional wooden chekku (cold press)",
    weight: "1 Litre",
    category: "cooking"
  },
  {
    id: "sesame-oil",
    name: "Cold Pressed Sesame Oil",
    price: 398,
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    description: "Our cold-pressed sesame oil is made from premium quality sesame seeds, processed in traditional wooden chekku. Known for its distinctive flavor and numerous health benefits.",
    featured: true,
    benefits: [
      "Rich in antioxidants and vitamin E",
      "Lowers cholesterol levels",
      "Anti-inflammatory properties",
      "Promotes heart health"
    ],
    extractionMethod: "Traditional wooden chekku (cold press)",
    weight: "1 Litre",
    category: "cooking"
  },
  {
    id: "castor-oil",
    name: "Cold Pressed Castor Oil",
    price: 194,
    image: "https://images.unsplash.com/photo-1598023696416-0193a0bcd302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    description: "Pure organic castor oil extracted through traditional wooden chekku process. Excellent for hair growth, skincare and various therapeutic applications.",
    featured: false,
    benefits: [
      "Promotes hair growth",
      "Moisturizes skin",
      "Reduces inflammation",
      "Natural laxative properties"
    ],
    extractionMethod: "Traditional wooden chekku (cold press)",
    weight: "1 Litre",
    category: "beauty"
  },
  {
    id: "mustard-oil",
    name: "Cold Pressed Mustard Oil",
    price: 848,
    image: "https://images.unsplash.com/photo-1626100134610-d0c3cca11805?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    description: "Premium Dabur cold-pressed mustard oil with a distinctive pungent flavor. Our mustard oil is extracted using wooden chekku to retain all essential nutrients and natural flavor.",
    featured: false,
    benefits: [
      "Rich in monounsaturated fats",
      "Contains omega-3 fatty acids",
      "Stimulates digestive enzymes",
      "Natural antibacterial properties"
    ],
    extractionMethod: "Traditional wooden chekku (cold press)",
    weight: "1 Litre",
    category: "cooking"
  },
  {
    id: "sunflower-oil",
    name: "Organic Sunflower Oil",
    price: 160,
    image: "https://images.unsplash.com/photo-1582974006777-a9809cf643b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    description: "Jivo organic sunflower oil is light in taste and appearance, perfect for everyday cooking. Cold-pressed to maintain nutritional integrity and natural flavor.",
    featured: false,
    benefits: [
      "High in vitamin E",
      "Low in saturated fats",
      "Heart-healthy",
      "Light flavor ideal for baking"
    ],
    extractionMethod: "Cold pressed",
    weight: "1 Litre",
    category: "cooking"
  },
  {
    id: "canola-oil",
    name: "Pure Canola Oil",
    price: 1443,
    image: "https://images.unsplash.com/photo-1473968996566-ca816614e8e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    description: "Miller pure canola oil is low in saturated fat and high in monounsaturated fat, making it one of the healthiest cooking oils available.",
    featured: false,
    benefits: [
      "Lowest in saturated fat",
      "Contains omega-3 fatty acids",
      "Helps reduce cholesterol",
      "High smoke point"
    ],
    extractionMethod: "Cold pressed",
    weight: "1 Litre",
    category: "cooking"
  },
  {
    id: "groundnut-oil",
    name: "Cold Pressed Groundnut Oil",
    price: 550,
    image: "https://images.unsplash.com/photo-1589458049551-4f50d54e5f8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    description: "Our traditional wooden chekku pressed groundnut (peanut) oil is rich in flavor and aroma. Ideal for South Indian cooking and enhances the taste of any dish.",
    featured: true,
    benefits: [
      "Rich in vitamin E",
      "Contains resveratrol antioxidant",
      "Good source of healthy fats",
      "Enhances food flavor"
    ],
    extractionMethod: "Traditional wooden chekku (cold press)",
    weight: "1 Litre",
    category: "cooking"
  },
  {
    id: "olive-oil",
    name: "Extra Virgin Olive Oil",
    price: 1200,
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    description: "Premium extra virgin olive oil, cold-pressed to preserve its rich flavor and nutritional benefits. Perfect for salad dressings, dipping, and low-heat cooking.",
    featured: true,
    benefits: [
      "High in antioxidants",
      "Anti-inflammatory properties",
      "Protects against heart disease",
      "Beneficial for brain health"
    ],
    extractionMethod: "Cold pressed",
    weight: "1 Litre",
    category: "premium"
  },
  {
    id: "almond-oil",
    name: "Cold Pressed Almond Oil",
    price: 1500,
    image: "https://images.unsplash.com/photo-1611409600812-ea67a287e96b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    description: "Our cold-pressed almond oil is perfect for skin care, hair care, and aromatherapy. Extracted from premium quality almonds using traditional methods.",
    featured: false,
    benefits: [
      "Rich in vitamin E",
      "Excellent moisturizer",
      "Reduces dark circles",
      "Promotes healthy hair"
    ],
    extractionMethod: "Traditional wooden chekku (cold press)",
    weight: "1 Litre",
    category: "beauty"
  },
  {
    id: "flaxseed-oil",
    name: "Cold Pressed Flaxseed Oil",
    price: 700,
    image: "https://images.unsplash.com/photo-1602345397613-0934a8812d23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    description: "Our cold-pressed flaxseed (alsi) oil is rich in omega-3 fatty acids and lignans. Perfect for nutritional supplementation and boosting heart health.",
    featured: false,
    benefits: [
      "Highest plant source of omega-3",
      "Reduces inflammation",
      "Supports heart health",
      "Improves digestive health"
    ],
    extractionMethod: "Traditional wooden chekku (cold press)",
    weight: "1 Litre",
    category: "health"
  }
];

export const featuredProducts = products.filter(product => product.featured);

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};


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
  relatedImages: string[]; // Add related images array
}

export const products: Product[] = [
  {
    id: "coconut-oil",
    name: "Cold Pressed Coconut Oil",
    price: 548,
    image: "https://images.unsplash.com/photo-1598023696416-0193a0bcd302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
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
    category: "cooking",
    relatedImages: [
      "https://images.unsplash.com/photo-1621485449347-0ca93429990a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1597381356570-8ec728ca1251?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1611409598283-100ef5bf637c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    ]
  },
  {
    id: "sesame-oil",
    name: "Cold Pressed Sesame Oil",
    price: 398,
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
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
    category: "cooking",
    relatedImages: [
      "https://images.unsplash.com/photo-1612187256022-3e9cd73ad8a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1599751449029-3bce67ee7a57?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1668847637414-e78af14bf9f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    ]
  },
  {
    id: "castor-oil",
    name: "Cold Pressed Castor Oil",
    price: 194,
    image: "https://images.unsplash.com/photo-1611409599087-c3015a0143be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
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
    category: "beauty",
    relatedImages: [
      "https://images.unsplash.com/photo-1599421498111-ad70bebb016f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1601301585387-69e2329dc04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", 
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    ]
  },
  {
    id: "mustard-oil",
    name: "Cold Pressed Mustard Oil",
    price: 848,
    image: "https://images.unsplash.com/photo-1596133143392-0ca7b443751b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
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
    category: "cooking",
    relatedImages: [
      "https://images.unsplash.com/photo-1631209121750-a9f788c3b5ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1620500487596-b9bde4eea6a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1622997210295-989cafcc1a1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    ]
  },
  {
    id: "sunflower-oil",
    name: "Organic Sunflower Oil",
    price: 160,
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
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
    category: "cooking",
    relatedImages: [
      "https://images.unsplash.com/photo-1630688231126-dd36840fce51?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1598966835412-6ccd2b27121d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1618591362879-8b9627a2a616?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    ]
  },
  {
    id: "canola-oil",
    name: "Pure Canola Oil",
    price: 1443,
    image: "https://images.unsplash.com/photo-1620209759487-e15f002a33a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
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
    category: "cooking",
    relatedImages: [
      "https://images.unsplash.com/photo-1612626256634-991e6e977fc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1622484212850-eb596d769edc?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1611759386164-505788f13497?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    ]
  },
  {
    id: "groundnut-oil",
    name: "Cold Pressed Groundnut Oil",
    price: 550,
    image: "https://images.unsplash.com/photo-1621238575357-2516cf3726c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
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
    category: "cooking",
    relatedImages: [
      "https://images.unsplash.com/photo-1604148482093-d55d6fc62400?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1600619946460-e211bba63456?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1586470202214-9c6b1fcb2ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    ]
  },
  {
    id: "olive-oil",
    name: "Extra Virgin Olive Oil",
    price: 1200,
    image: "https://images.unsplash.com/photo-1519692933481-e8ef829cbbd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
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
    category: "premium",
    relatedImages: [
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1620062318450-6d686b01eb2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1608573739609-699099a7b377?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    ]
  },
  {
    id: "almond-oil",
    name: "Cold Pressed Almond Oil",
    price: 1500,
    image: "https://images.unsplash.com/photo-1571751239008-50cad6cb9265?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
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
    category: "beauty",
    relatedImages: [
      "https://images.unsplash.com/photo-1574570299706-951680461249?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1580396998450-323ac227370e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1610481284607-86309731e61a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    ]
  },
  {
    id: "flaxseed-oil",
    name: "Cold Pressed Flaxseed Oil",
    price: 700,
    image: "https://images.unsplash.com/photo-1618172193763-c511deb635ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
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
    category: "health",
    relatedImages: [
      "https://images.unsplash.com/photo-1515364229230-3fd4ee3a0928?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1612170406693-baaeb9a236cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1599940824398-908a83be98a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    ]
  }
];

export const featuredProducts = products.filter(product => product.featured);

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

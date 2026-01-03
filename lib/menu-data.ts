export interface MenuItem {
  id: string
  name: string
  description: string
  price: string
  category: string
  image: string
  dietary: string[]
  popular?: boolean
}

export interface MenuCategory {
  id: string
  name: string
  description: string
  icon: string
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'breakfast',
    name: 'Breakfast Sets',
    description: 'Start your day right with our morning favorites',
    icon: '🌅',
  },
  {
    id: 'nasi-padang',
    name: 'Nasi Padang',
    description: 'Our signature rice sets with rich Padang-style dishes',
    icon: '🍛',
  },
  {
    id: 'noodles',
    name: 'Noodles',
    description: 'Traditional noodle dishes bursting with flavor',
    icon: '🍜',
  },
  {
    id: 'nasi-lemak',
    name: 'Nasi Lemak',
    description: 'Fragrant coconut rice with various accompaniments',
    icon: '🍚',
  },
  {
    id: 'ala-carte',
    name: 'Ala Carte',
    description: 'Individual dishes to complement your meal',
    icon: '🍖',
  },
  {
    id: 'drinks',
    name: 'Beverages',
    description: 'Refresh yourself with our selection of drinks',
    icon: '🥤',
  },
]

export const menuItems: MenuItem[] = [
  // BREAKFAST SETS
  {
    id: 'breakfast-1',
    name: 'Nasi Lemak Breakfast Set',
    description: 'Fragrant coconut rice with fried egg, ikan bilis, peanuts, and sambal',
    price: '$5.80',
    category: 'breakfast',
    image: 'https://images.unsplash.com/photo-1603564472105-1f04e0e5ae32?w=800&h=600&fit=crop',
    dietary: ['halal'],
  },
  {
    id: 'breakfast-2',
    name: 'Lontong Breakfast',
    description: 'Compressed rice cakes in rich coconut vegetable curry',
    price: '$7.80',
    category: 'breakfast',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop',
    dietary: ['halal', 'vegetarian-option'],
  },
  {
    id: 'breakfast-3',
    name: 'Mee Soto Breakfast',
    description: 'Yellow noodles in aromatic spiced chicken broth',
    price: '$7.80',
    category: 'breakfast',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop',
    dietary: ['halal'],
  },

  // NASI PADANG SETS
  {
    id: 'padang-1',
    name: 'Chicken Rendang Set',
    description: 'Tender chicken in rich coconut curry with vegetables and rice',
    price: '$11.50',
    category: 'nasi-padang',
    image: 'https://images.unsplash.com/photo-1596040033229-a0b3b70d4a42?w=800&h=600&fit=crop',
    dietary: ['halal', 'spicy'],
    popular: true,
  },
  {
    id: 'padang-2',
    name: 'Beef Rendang Set',
    description: 'Slow-cooked beef in aromatic spices with steamed rice',
    price: '$15.00',
    category: 'nasi-padang',
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&h=600&fit=crop',
    dietary: ['halal', 'spicy'],
    popular: true,
  },
  {
    id: 'padang-3',
    name: 'Masak Merah Chicken Set',
    description: 'Chicken in tangy tomato-based curry with rice and vegetables',
    price: '$11.50',
    category: 'nasi-padang',
    image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=800&h=600&fit=crop',
    dietary: ['halal', 'spicy'],
  },
  {
    id: 'padang-4',
    name: 'Asam Pedas Fish Set',
    description: 'Fresh fish in spicy tamarind gravy with rice',
    price: '$13.20',
    category: 'nasi-padang',
    image: 'https://images.unsplash.com/photo-1580959375944-0d87e41a0bb4?w=800&h=600&fit=crop',
    dietary: ['halal', 'spicy'],
  },
  {
    id: 'padang-5',
    name: 'Sambal Prawn Set',
    description: 'Succulent prawns in spicy sambal with fragrant rice',
    price: '$13.20',
    category: 'nasi-padang',
    image: 'https://images.unsplash.com/photo-1559737558-2f5a4c6f9e2e?w=800&h=600&fit=crop',
    dietary: ['halal', 'spicy'],
  },
  {
    id: 'padang-6',
    name: 'Cuttlefish Set',
    description: 'Tender cuttlefish in savory sambal with rice and sides',
    price: '$13.20',
    category: 'nasi-padang',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&h=600&fit=crop',
    dietary: ['halal', 'spicy'],
  },

  // NOODLES
  {
    id: 'noodles-1',
    name: 'Curry Chicken Noodle',
    description: 'Yellow noodles in rich coconut curry with tender chicken',
    price: '$7.80',
    category: 'noodles',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop',
    dietary: ['halal', 'spicy'],
    popular: true,
  },
  {
    id: 'noodles-2',
    name: 'Mee Siam',
    description: 'Rice vermicelli in tangy spicy tamarind gravy',
    price: '$7.80',
    category: 'noodles',
    image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=800&h=600&fit=crop',
    dietary: ['halal', 'spicy'],
    popular: true,
  },
  {
    id: 'noodles-3',
    name: 'Mee Rebus',
    description: 'Yellow noodles in sweet potato gravy topped with egg',
    price: '$7.80',
    category: 'noodles',
    image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=800&h=600&fit=crop',
    dietary: ['halal'],
  },
  {
    id: 'noodles-4',
    name: 'Mee Soto',
    description: 'Spiced chicken soup with yellow noodles and herbs',
    price: '$7.80',
    category: 'noodles',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop',
    dietary: ['halal'],
  },

  // NASI LEMAK
  {
    id: 'lemak-1',
    name: 'Nasi Lemak with Chicken Wing',
    description: 'Coconut rice with crispy fried chicken wing, egg, ikan bilis, peanuts',
    price: '$7.80',
    category: 'nasi-lemak',
    image: 'https://images.unsplash.com/photo-1603564472105-1f04e0e5ae32?w=800&h=600&fit=crop',
    dietary: ['halal'],
    popular: true,
  },
  {
    id: 'lemak-2',
    name: 'Nasi Lemak with Rendang',
    description: 'Coconut rice with beef or chicken rendang',
    price: '$9.80',
    category: 'nasi-lemak',
    image: 'https://images.unsplash.com/photo-1603564472105-1f04e0e5ae32?w=800&h=600&fit=crop',
    dietary: ['halal', 'spicy'],
  },
  {
    id: 'lemak-3',
    name: 'Nasi Lemak with Sambal Sotong',
    description: 'Coconut rice with spicy cuttlefish sambal',
    price: '$9.80',
    category: 'nasi-lemak',
    image: 'https://images.unsplash.com/photo-1603564472105-1f04e0e5ae32?w=800&h=600&fit=crop',
    dietary: ['halal', 'spicy'],
  },

  // ALA CARTE
  {
    id: 'ala-1',
    name: 'Ayam Penyet',
    description: 'Indonesian-style smashed fried chicken with sambal',
    price: '$8.50',
    category: 'ala-carte',
    image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=800&h=600&fit=crop',
    dietary: ['halal', 'spicy'],
    popular: true,
  },
  {
    id: 'ala-2',
    name: 'Rendang Beef',
    description: 'Slow-cooked beef in rich spices (ala carte portion)',
    price: '$9.20',
    category: 'ala-carte',
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&h=600&fit=crop',
    dietary: ['halal', 'spicy'],
  },
  {
    id: 'ala-3',
    name: 'Chicken Masak Merah',
    description: 'Chicken in tomato-based curry (ala carte)',
    price: '$6.80',
    category: 'ala-carte',
    image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=800&h=600&fit=crop',
    dietary: ['halal', 'spicy'],
  },
  {
    id: 'ala-4',
    name: 'Asam Fish',
    description: 'Fish in spicy tamarind gravy (ala carte)',
    price: '$8.50',
    category: 'ala-carte',
    image: 'https://images.unsplash.com/photo-1580959375944-0d87e41a0bb4?w=800&h=600&fit=crop',
    dietary: ['halal', 'spicy'],
  },
  {
    id: 'ala-5',
    name: 'Sayur Lodeh',
    description: 'Mixed vegetables in coconut curry',
    price: '$5.50',
    category: 'ala-carte',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop',
    dietary: ['halal', 'vegetarian'],
  },

  // DRINKS
  {
    id: 'drink-1',
    name: 'Teh Tarik',
    description: 'Traditional pulled milk tea',
    price: '$2.50',
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=800&h=600&fit=crop',
    dietary: ['halal'],
  },
  {
    id: 'drink-2',
    name: 'Kopi O',
    description: 'Traditional black coffee',
    price: '$2.00',
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=600&fit=crop',
    dietary: ['halal'],
  },
  {
    id: 'drink-3',
    name: 'Calamansi Juice',
    description: 'Fresh lime juice drink',
    price: '$2.50',
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=800&h=600&fit=crop',
    dietary: ['halal'],
  },
  {
    id: 'drink-4',
    name: 'Rose Syrup',
    description: 'Sweet rose-flavored drink',
    price: '$2.50',
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=800&h=600&fit=crop',
    dietary: ['halal'],
  },
  {
    id: 'drink-5',
    name: 'Bandung',
    description: 'Rose syrup with evaporated milk',
    price: '$3.00',
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=800&h=600&fit=crop',
    dietary: ['halal'],
  },
]
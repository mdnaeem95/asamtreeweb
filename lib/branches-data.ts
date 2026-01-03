export interface Branch {
  id: string
  name: string
  address: string
  postal: string
  phone: string
  email: string
  hours: {
    weekday: string
    weekend: string
  }
  features: string[]
  mapEmbedUrl: string
  directionsUrl: string
  image: string
  parking?: string
  nearbyMRT?: string
  busServices?: string[]
}

export const branches: Branch[] = [
  {
    id: 'ang-mo-kio',
    name: 'Ang Mo Kio Central',
    address: 'Block 709 Ang Mo Kio Avenue 8, #01-2609',
    postal: 'Singapore 560709',
    phone: '+65 6234 5678',
    email: 'amk@asamtree.com.sg',
    hours: {
      weekday: '6:00 AM - 8:00 PM',
      weekend: '6:00 AM - 8:00 PM',
    },
    features: ['Dine-in', 'Takeaway', 'Air-conditioned', 'Family-friendly'],
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.667890123456!2d103.84567890000001!3d1.3694567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMjInMTAuMCJOIDEwM8KwNTAnNDQuNCJF!5e0!3m2!1sen!2ssg!4v1234567890123!5m2!1sen!2ssg',
    directionsUrl: 'https://maps.google.com/?q=709+Ang+Mo+Kio+Avenue+8+Singapore+560709',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
    parking: 'HDB carpark available nearby',
    nearbyMRT: 'Ang Mo Kio MRT (5 min walk)',
    busServices: ['13', '45', '50', '74', '165', '166'],
  },
  {
    id: 'bukit-batok',
    name: 'Bukit Batok',
    address: 'Block 155 Bukit Batok Street 11, #01-322',
    postal: 'Singapore 650155',
    phone: '+65 6567 8901',
    email: 'bukitbatok@asamtree.com.sg',
    hours: {
      weekday: '6:00 AM - 8:00 PM',
      weekend: '6:00 AM - 8:00 PM',
    },
    features: ['Dine-in', 'Takeaway', 'Air-conditioned', 'Large groups welcome'],
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.667890123456!2d103.74567890000001!3d1.3494567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMjAnNTguMCJOIDEwM8KwNDQnNDQuNCJF!5e0!3m2!1sen!2ssg!4v1234567890123!5m2!1sen!2ssg',
    directionsUrl: 'https://maps.google.com/?q=155+Bukit+Batok+Street+11+Singapore+650155',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop',
    parking: 'Ample HDB parking',
    nearbyMRT: 'Bukit Batok MRT (10 min walk)',
    busServices: ['66', '157', '173', '174', '176', '178'],
  },
  {
    id: 'hougang',
    name: 'Hougang (Kang Kar Mall)',
    address: '100 Hougang Avenue 10, #01-03, Kang Kar Mall',
    postal: 'Singapore 538767',
    phone: '+65 6890 1234',
    email: 'hougang@asamtree.com.sg',
    hours: {
      weekday: '6:00 AM - 8:00 PM',
      weekend: '6:00 AM - 8:00 PM',
    },
    features: ['Dine-in', 'Takeaway', 'Air-conditioned', 'Shopping mall location'],
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.667890123456!2d103.89567890000001!3d1.3794567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMjInNDYuMCJOIDEwM8KwNTMnNDQuNCJF!5e0!3m2!1sen!2ssg!4v1234567890123!5m2!1sen!2ssg',
    directionsUrl: 'https://maps.google.com/?q=100+Hougang+Avenue+10+Singapore+538767',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop',
    parking: 'Mall parking available',
    nearbyMRT: 'Hougang MRT (8 min walk)',
    busServices: ['53', '62', '82', '101', '112', '113'],
  },
  {
    id: 'toa-payoh',
    name: 'Toa Payoh',
    address: '470 Lorong 6 Toa Payoh, #02-70',
    postal: 'Singapore 310470',
    phone: '+65 6123 4567',
    email: 'toapayoh@asamtree.com.sg',
    hours: {
      weekday: '6:00 AM - 8:00 PM',
      weekend: '6:00 AM - 8:00 PM',
    },
    features: ['Dine-in', 'Takeaway', 'Air-conditioned', 'Breakfast specialist'],
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.667890123456!2d103.84967890000001!3d1.3324567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTknNTYuOCJOIDEwM8KwNTAnNTguOCJF!5e0!3m2!1sen!2ssg!4v1234567890123!5m2!1sen!2ssg',
    directionsUrl: 'https://maps.google.com/?q=470+Lorong+6+Toa+Payoh+Singapore+310470',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&h=600&fit=crop',
    parking: 'HDB carpark nearby',
    nearbyMRT: 'Toa Payoh MRT (12 min walk)',
    busServices: ['28', '43', '56', '73', '142', '155'],
  },
  {
    id: 'yishun',
    name: 'Yishun (KTPH Hospital)',
    address: '90 Yishun Central, #01-12, Khoo Teck Puat Hospital',
    postal: 'Singapore 768828',
    phone: '+65 6456 7890',
    email: 'yishun@asamtree.com.sg',
    hours: {
      weekday: '6:00 AM - 8:00 PM',
      weekend: '6:00 AM - 8:00 PM',
    },
    features: ['Dine-in', 'Takeaway', 'Hospital visitors welcome', 'Quick service'],
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.667890123456!2d103.83767890000001!3d1.4184567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMjUnMDYuNCJOIDEwM8KwNTAnMTUuNiJF!5e0!3m2!1sen!2ssg!4v1234567890123!5m2!1sen!2ssg',
    directionsUrl: 'https://maps.google.com/?q=90+Yishun+Central+Singapore+768828',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop',
    parking: 'Hospital parking available',
    nearbyMRT: 'Yishun MRT (5 min walk)',
    busServices: ['117', '800', '803', '804', '811', '812'],
  },
  {
    id: 'woodlands',
    name: 'Woodlands Central Kitchen',
    address: '15 Woodlands Loop, #04-27',
    postal: 'Singapore 738322',
    phone: '+65 6789 0123',
    email: 'catering@asamtree.com.sg',
    hours: {
      weekday: '8:00 AM - 6:00 PM (Catering & Wholesale Only)',
      weekend: 'Closed',
    },
    features: ['Catering services', 'Wholesale orders', 'Bulk orders', 'No dine-in'],
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.667890123456!2d103.78567890000001!3d1.4374567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMjYnMTQuOCJOIDEwM8KwNDcnMDguNCJF!5e0!3m2!1sen!2ssg!4v1234567890123!5m2!1sen!2ssg',
    directionsUrl: 'https://maps.google.com/?q=15+Woodlands+Loop+Singapore+738322',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=600&fit=crop',
    parking: 'Industrial area parking',
    nearbyMRT: 'Woodlands MRT (15 min walk)',
    busServices: ['856', '903', '904', '911', '913'],
  },
]
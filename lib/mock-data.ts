
export const mockEvents = [
  {
    id: "event-1",
    title: "Ethereum Developer Conference 2025",
    description: "Join the largest gathering of Ethereum developers and blockchain enthusiasts for a three-day conference featuring workshops, talks, and networking opportunities.",
    details: "The Ethereum Developer Conference 2025 brings together the brightest minds in blockchain technology. This event will feature keynote speeches from industry leaders, hands-on workshops, and numerous networking opportunities. Whether you're a seasoned developer or just getting started with blockchain, this conference has something for everyone.",
    date: "Jun 15-18, 2025",
    time: "9:00 AM - 6:00 PM",
    location: "San Francisco, CA",
    imageUrl: "https://fourwaves.com/media/jjtaaupz/conference-speaker.jpg?quality=100&rnd=132864618244570000",
    price: "0.0001",
    category: "conference",
    featured: true,
    attendees: 1250,
    remainingTickets: 750,
    totalTickets: 2000,
    transferable: true,
    resellable: true,
    maxTicketsPerWallet: 2,
    blockchain: "Ethereum",
    organizer: {
      name: "BlockTech Events",
      avatar: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=150",
      website: "https://blocktech-events.com",
      description: "BlockTech Events is a leading organizer of blockchain technology conferences and workshops around the world. We've been bringing the community together since 2018."
    },
    contract: {
      address: "0x8b5cF2Eae212dE0Ab8bf45c4376d33EeC416E44e",
      standard: "ERC-721",
    }
  },
  {
    id: "event-2",
    title: "NFT Art Exhibition: Digital Frontiers",
    description: "Experience the cutting-edge of digital art in this immersive NFT exhibition featuring works from renowned digital artists and emerging talents.",
    details: "Digital Frontiers showcases the most innovative NFT artworks from around the world. The exhibition will transform the gallery space into an immersive digital experience, allowing visitors to interact with artworks in unprecedented ways. Each visitor will receive an exclusive NFT collectible as a memento of their experience.",
    date: "Jul 8-22, 2025",
    time: "10:00 AM - 8:00 PM",
    location: "New York, NY",
    imageUrl: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: "0.0005",
    category: "art",
    featured: true,
    attendees: 875,
    remainingTickets: 625,
    totalTickets: 1500,
    transferable: true,
    resellable: false,
    maxTicketsPerWallet: 4,
    blockchain: "Ethereum",
    organizer: {
      name: "Digital Art Collective",
      avatar: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150",
      website: "https://digitalartcollective.io",
      description: "The Digital Art Collective is a group of artists, curators, and technologists exploring the intersection of art and blockchain technology. We're committed to pushing the boundaries of digital creativity."
    },
    contract: {
      address: "0x4d2b12F66Be23280Af57A4C35e6E4E158995902a",
      standard: "ERC-721",
    }
  },
  {
    id: "event-3",
    title: "Web3 Music Festival",
    description: "A revolutionary music festival where fans can own pieces of the experience as NFTs, featuring top artists and immersive blockchain integrations.",
    details: "The Web3 Music Festival reimagines the concert experience through blockchain technology. Attendees will enjoy performances from top artists while interacting with the festival through a dedicated dApp. NFT tickets provide special access and can unlock exclusive content and memorabilia.",
    date: "Aug 12-14, 2025",
    time: "4:00 PM - 2:00 AM",
    location: "Miami, FL",
    imageUrl: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: "0.35",
    category: "concert",
    featured: false,
    attendees: 2800,
    remainingTickets: 1200,
    totalTickets: 4000,
    transferable: true,
    resellable: true,
    maxTicketsPerWallet: 4,
    blockchain: "Polygon",
    organizer: {
      name: "Harmony Events",
      avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150",
      website: "https://harmonyevents.xyz",
      description: "Harmony Events creates unforgettable experiences at the intersection of music, technology, and culture. We're pioneering new ways for fans to connect with artists through blockchain technology."
    },
    contract: {
      address: "0x6A19b3D35cF5F7C0325Ba20c2502C6Fe5Aaa4df3",
      standard: "ERC-1155",
    }
  },
  {
    id: "event-4",
    title: "DeFi Summit 2025",
    description: "Explore the future of decentralized finance with industry leaders, innovative projects, and hands-on workshops.",
    details: "The DeFi Summit brings together the brightest minds in decentralized finance for two days of intensive learning and networking. Attendees will gain insights into the latest trends, protocols, and investment strategies in the rapidly evolving DeFi landscape.",
    date: "Sep 5-6, 2025",
    time: "9:30 AM - 5:30 PM",
    location: "Singapore",
    imageUrl: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: "0.2",
    category: "conference",
    featured: false,
    attendees: 950,
    remainingTickets: 550,
    totalTickets: 1500,
    transferable: true,
    resellable: false,
    maxTicketsPerWallet: 2,
    blockchain: "Ethereum",
    organizer: {
      name: "DeFi Alliance",
      avatar: "https://images.pexels.com/photos/936019/pexels-photo-936019.jpeg?auto=compress&cs=tinysrgb&w=150",
      website: "https://defialliance.org",
      description: "The DeFi Alliance is a consortium of leading projects and investors in the decentralized finance space. We're dedicated to accelerating the growth and adoption of DeFi technologies worldwide."
    },
    contract: {
      address: "0x9B3a21F5e5D2E6073bb1Be2752f1c57B58d3f2Dc",
      standard: "ERC-721",
    }
  },
  {
    id: "event-5",
    title: "GameFi Tournament: Crypto Champions",
    description: "Compete in the world's largest blockchain gaming tournament with substantial crypto prizes and exclusive in-game NFT rewards.",
    details: "The Crypto Champions tournament brings together the top players from five popular blockchain games for an epic competition with over $100,000 in crypto prizes. Spectators can collect limited edition NFTs, participate in prediction markets, and enjoy exclusive behind-the-scenes content.",
    date: "Oct 18-20, 2025",
    time: "12:00 PM - 10:00 PM",
    location: "Seoul, South Korea",
    imageUrl: "https://images.pexels.com/photos/7915357/pexels-photo-7915357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: "0.15",
    category: "gaming",
    featured: true,
    attendees: 3200,
    remainingTickets: 800,
    totalTickets: 4000,
    transferable: true,
    resellable: true,
    maxTicketsPerWallet: 5,
    blockchain: "Ethereum",
    organizer: {
      name: "MetaPlay Studios",
      avatar: "https://images.pexels.com/photos/3778966/pexels-photo-3778966.jpeg?auto=compress&cs=tinysrgb&w=150",
      website: "https://metaplaystudios.com",
      description: "MetaPlay Studios is a leading blockchain gaming company developing innovative play-to-earn experiences. We host regular tournaments and community events for gamers worldwide."
    },
    contract: {
      address: "0x1c7D4B4c4a2932D5B5a7734a8f095C7e817F9B19",
      standard: "ERC-1155",
    }
  },
  {
    id: "event-6",
    title: "Blockchain Developers Workshop",
    description: "An intensive two-day workshop for developers to learn blockchain programming, smart contract development, and dApp creation.",
    details: "This hands-on workshop covers everything from blockchain fundamentals to advanced smart contract development. Participants will build their own dApp and deploy it to a testnet. The workshop is suitable for intermediate to advanced developers familiar with at least one programming language.",
    date: "Nov 10-11, 2025",
    time: "9:00 AM - 6:00 PM",
    location: "Berlin, Germany",
    imageUrl: "https://images.pexels.com/photos/8721342/pexels-photo-8721342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: "0.18",
    category: "workshop",
    featured: false,
    attendees: 125,
    remainingTickets: 75,
    totalTickets: 200,
    transferable: false,
    resellable: false,
    maxTicketsPerWallet: 1,
    blockchain: "Ethereum",
    organizer: {
      name: "Web3 Academy",
      avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150",
      website: "https://web3academy.dev",
      description: "Web3 Academy provides world-class education in blockchain development and decentralized technologies. Our expert instructors have years of experience building production-ready blockchain applications."
    },
    contract: {
      address: "0x7F4e21F34A3d9D47DC941cdD67dCc98BbBA32527",
      standard: "ERC-721",
    }
  }
];

// Mock User Tickets
export const mockUserTickets = [
  {
    id: "ticket-1",
    tokenId: "0x7F4e21F34A3d9D47DC941cdD67dCc98BbBA32527",
    eventName: "Ethereum Developer Conference 2025",
    eventDate: "Jun 15, 2025",
    eventTime: "9:00 AM - 6:00 PM",
    location: "San Francisco, CA",
    imageUrl: "https://images.pexels.com/photos/7367/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ticketType: "VIP Pass",
    transferable: true,
    used: false
  },
  {
    id: "ticket-2",
    tokenId: "0x9B3a21F5e5D2E6073bb1Be2752f1c57B58d3f2Dc",
    eventName: "NFT Art Exhibition: Digital Frontiers",
    eventDate: "Jul 8, 2025",
    eventTime: "10:00 AM - 8:00 PM",
    location: "New York, NY",
    imageUrl: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ticketType: "General Admission",
    transferable: true,
    used: false
  },
  {
    id: "ticket-3",
    tokenId: "0x1c7D4B4c4a2932D5B5a7734a8f095C7e817F9B19",
    eventName: "Web3 Music Festival",
    eventDate: "Aug 12, 2025",
    eventTime: "4:00 PM - 2:00 AM",
    location: "Miami, FL",
    imageUrl: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ticketType: "Weekend Pass",
    transferable: true,
    used: false
  },
  {
    id: "ticket-4",
    tokenId: "0x6A19b3D35cF5F7C0325Ba20c2502C6Fe5Aaa4df3",
    eventName: "Blockchain Summit 2024",
    eventDate: "Mar 15, 2024",
    eventTime: "10:00 AM - 4:00 PM",
    location: "London, UK",
    imageUrl: "https://images.pexels.com/photos/7256897/pexels-photo-7256897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ticketType: "General Admission",
    transferable: false,
    used: true
  }
];

// Mock Created Events
export const mockCreatedEvents = [
  {
    id: "created-1",
    name: "Web3 Developer Meetup",
    date: "Dec 10, 2025",
    location: "Austin, TX",
    status: "active",
    soldTickets: 45,
    totalTickets: 100,
    revenue: "1.35",
    attendees: 0,
    createdAt: "Oct 1, 2024"
  },
  {
    id: "created-2",
    name: "NFT Showcase: Digital Art Revolution",
    date: "Sep 5, 2024",
    location: "Online",
    status: "ended",
    soldTickets: 120,
    totalTickets: 150,
    revenue: "4.2",
    attendees: 98,
    createdAt: "Jul 15, 2024"
  }
];

// Mock Transactions
export const mockTransactions = [
  {
    id: "tx-1",
    type: "purchase",
    eventName: "Ethereum Developer Conference 2025",
    date: "May 10, 2025",
    amount: "0.25",
    status: "completed",
    hash: "0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b"
  },
  {
    id: "tx-2",
    type: "mint",
    eventName: "Web3 Developer Meetup",
    date: "Oct 1, 2024",
    amount: "0.05",
    status: "completed",
    hash: "0x2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3"
  },
  {
    id: "tx-3",
    type: "transfer_out",
    eventName: "NFT Art Exhibition: Digital Frontiers",
    date: "Jun 15, 2025",
    amount: "0.00",
    status: "completed",
    hash: "0x3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4"
  },
  {
    id: "tx-4",
    type: "sale",
    eventName: "Blockchain Summit 2024",
    date: "Feb 28, 2024",
    amount: "0.15",
    status: "completed",
    hash: "0x4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5"
  },
  {
    id: "tx-5",
    type: "purchase",
    eventName: "Web3 Music Festival",
    date: "May 20, 2025",
    amount: "0.35",
    status: "pending",
    hash: "0x5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6"
  }
];
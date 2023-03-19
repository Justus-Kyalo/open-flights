airlines = Airline.create([
  { 
    name: "Kenya Airways",
    image_url: "https://i0.wp.com/www.busiweek.com/wp-content/uploads/2020/07/Kenyairways.jpg?fit=1000%2C600&ssl=1"
  },
  { 
    name: "United Airlines",
    image_url: "https://open-flights.s3.amazonaws.com/United-Airlines.png"
  }, 
  { 
    name: "Southwest",
    image_url: "https://open-flights.s3.amazonaws.com/Southwest-Airlines.png"
  },
  { 
    name: "Delta",
    image_url: "https://open-flights.s3.amazonaws.com/Delta.png" 
  }, 
  { 
    name: "Emirates",
    image_url: "https://content.presspage.com/uploads/2431/1920_a380-blue-sky-hires-lres-2-161364-2.jpg?10000" 
  }, 
  { 
    name: "JetBlue",
    image_url: "https://open-flights.s3.amazonaws.com/JetBlue.png" 
  }, 
  { 
    name: "American Airlines",
    image_url: "https://open-flights.s3.amazonaws.com/American-Airlines.png" 
  }
])

reviews = Review.create([
  {
    title: 'great airline',
    description: 'I had a good time',
    score: 5,
    airline_id: airlines.first.id
  },
  {
    title: 'bad airline',
    description: 'I had a bad time',
    score: 1,
    airline_id: airlines.first.id
  }
])

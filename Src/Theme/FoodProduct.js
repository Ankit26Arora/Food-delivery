import Appimages from "./Appimages"

const food=[
    {
      id:1,
      name: "Artisanal Pizza",
      price: 360,
      description: "Handcrafted pizza made with the finest ingredients, including fresh mozzarella, homemade tomato sauce, and a variety of toppings. Baked to perfection in a wood-fired oven.",
      image:[Appimages.Pizza[0],Appimages.Pizza[1],Appimages.Pizza[3]]
      
    },
    {
      id:2,
      name: "Gourmet Burger",
      price: 250,
      description: "A juicy, tender beef patty cooked to your preference, topped with melted cheese, crispy lettuce, ripe tomatoes, and served on a toasted brioche bun. Served with a side of seasoned fries.",
      image:[Appimages.Burger[0],Appimages.Burger[1],Appimages.Burger[2],Appimages.Burger[3]]
    },
    {
      id:3,
      name: "Mediterranean Salad",
      price: 250,
      description: "A refreshing salad featuring crisp romaine lettuce, cucumbers, juicy tomatoes, tangy feta cheese, Kalamata olives, and a drizzle of olive oil and lemon dressing. Perfect for a light and healthy meal.",
      image:[Appimages.Salad[0],Appimages.Salad[1],Appimages.Salad[2],]

    },
    {
      id:4,
      name: "Creamy Chicken Alfredo",
      price: 800,
      description: "A classic Italian dish consisting of tender grilled chicken breast tossed with al dente fettuccine pasta and creamy Alfredo sauce. Garnished with grated Parmesan cheese and parsley."
    ,
    image:[Appimages.Pasta[0],Appimages.Pasta[1],Appimages.Pasta[2],]
},
    {
      id:5,
      name: "Decadent Chocolate Cake",
      price: 500,
      description: "Indulge in this rich and moist chocolate cake layered with velvety chocolate ganache and topped with a smooth chocolate frosting. A heavenly treat for chocolate lovers."
    ,
    image:[Appimages.Cake[0],Appimages.Cake[1],Appimages.Cake[2]]
}
  ]
  export default food

  
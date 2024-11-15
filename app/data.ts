export type CardData = {
  id: number;
  name: string;
  price: string;
  rating: string;
  lessons: string;
};

export const cardData: CardData[] = [
  { id: 1, name: 'William', price: '$71.10 - 79.00/hr', rating: '4.9 - 28 Ratings', lessons: '292 Completed Lessons' },
  { id: 2, name: 'Emma', price: '$60.00 - 70.00/hr', rating: '4.8 - 45 Ratings', lessons: '300 Completed Lessons' },
  { id: 3, name: 'James', price: '$65.50 - 75.50/hr', rating: '4.7 - 32 Ratings', lessons: '256 Completed Lessons' },
  { id: 4, name: 'Olivia', price: '$68.00 - 78.00/hr', rating: '4.9 - 50 Ratings', lessons: '280 Completed Lessons' },
  { id: 5, name: 'Liam', price: '$72.00 - 82.00/hr', rating: '5.0 - 20 Ratings', lessons: '310 Completed Lessons' },
  { id: 6, name: 'Ava', price: '$67.00 - 77.00/hr', rating: '4.6 - 18 Ratings', lessons: '200 Completed Lessons' },
  { id: 7, name: 'Mason', price: '$75.00 - 85.00/hr', rating: '4.8 - 40 Ratings', lessons: '290 Completed Lessons' },
  { id: 8, name: 'Sophia', price: '$63.00 - 73.00/hr', rating: '4.5 - 22 Ratings', lessons: '215 Completed Lessons' },
  { id: 9, name: 'Sophia', price: '$63.00 - 73.00/hr', rating: '4.5 - 22 Ratings', lessons: '215 Completed Lessons' },
  { id: 10, name: 'Sophia', price: '$63.00 - 73.00/hr', rating: '4.5 - 22 Ratings', lessons: '215 Completed Lessons' },
  { id: 11, name: 'Sophia', price: '$63.00 - 73.00/hr', rating: '4.5 - 22 Ratings', lessons: '215 Completed Lessons' },
  { id: 12, name: 'Sophia', price: '$63.00 - 73.00/hr', rating: '4.5 - 22 Ratings', lessons: '215 Completed Lessons' },

];

export type Review = {
  name: string;
  image: string;
  rating: number;
  review: string;
};

// Array of reviews
export const reviews: Review[] = [
  {
    name: "Areeza",
    image: "/Adriana_Image-38620ede6c913de00c27e1eb92d22afa.jpg.png",
    rating: 5,
    review:
      "Adriana is a really good instructor! She knows everything and she always makes sure to correct every detail before the test. Apart from that, she is very sweet and calm. I was blessed to find her. Thanks Adriana!!!!",
  },
  {
    name: "Kashif",
    image: "/HANNA__Samir_Headshot_0419-ac27bd163448a54c22a3acd68a60270c.jpg.png",
    rating: 5,
    review:
      "Excellent Instructor. I saw the biggest smile on my daughter’s face when she returned from her lesson. Sam is calm, patient, understanding, and very helpful!",
  },
  {
    name: "Hussain",
    image: "/photo_51-246af224e866a0f9be2f546abdfa4a97.jpg.png",
    rating: 5,
    review:
      "John is a top-class driving instructor. He was very informative about the need to know building blocks of driving a manual car, breaking down the skills of adjusting seating.",
  },
];

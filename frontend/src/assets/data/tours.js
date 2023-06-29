import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";

const tours = [
  {
    id: "01",
    title: "Sigiriya",
    city: "Dambulla",
    distance: 300,
    address: "Sigiriya, Dambulla, Sri Lanka",
    price: 99,
    maxGroupSize: 10,
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
        name: "jhon doe",
        rating: 5,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Yala National park",
    city: "Katharagama",
    distance: 400,
    address: "Yala National park, Kataragama, Sri Lanka",
    price: 99,
    maxGroupSize: 8,
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Ella",
    city: "Ella",
    distance: 500,
    address: "Ella, Sri Lanka",
    price: 99,
    maxGroupSize: 8,
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Sigiriya",
    city: "Dambulla",
    distance: 500,
    address: "Sigiriya, Dambulla, Sri Lanka",
    price: 99,
    maxGroupSize: 8,
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Kandy Lake",
    city: "Kandy",
    distance: 500,
    address: "Kandy Lake, Kandy, Sri Lanka",
    price: 99,
    maxGroupSize: 8,
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Galaboda Waterfall",
    city: "Galaboda",
    distance: 500,
    address: "Galaboda Waterfall, Galaboda, Sri Lanka",
    price: 99,
    maxGroupSize: 8,
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Unawatuna Beach",
    city: "Galle",
    distance: 500,
    address: "Unawatuna Beach, Galle, Sri Lanka",
    price: 99,
    maxGroupSize: 8,
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    reviews: [
      
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Ruwanwalisaya",
    city: "Anuradhapura",
    distance: 500,
    address: "Ruwanwalisaya, Anuradhapura, Sri Lanka",
    price: 99,
    maxGroupSize: 8,
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    reviews: [
      
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: false,
  },
];

export default tours;

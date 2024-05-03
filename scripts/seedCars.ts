// const { PrismaClient } = require("@prisma/client");

// const database = new PrismaClient();

// const nameList = [
//   "Rolls-Royce",
//   "Nissan",
//   "Lamborghini Diablo",
//   "Porsche 911",
//   "Ferrari 812",
//   "Koenigsegg",
//   "Jeep",
// ];

// const brandList = [
//   "def2911a-6838-4caa-ace4-38b8f16ef78a",
//   "4f675ddd-151a-4c9e-823b-fb325bde30fe",
//   "0292165b-86ea-4f25-b0d7-7a465a4e1e75",
//   "6f0f4f9a-f89e-4378-b631-58bb90c949b1",
//   "6d19cad4-f4cd-4f0d-a454-05723a4ba47c",
//   "75669cf6-77d2-48f0-a702-7f9d479d7392",
// ];

// const transmissionList = ["manual", "automatic"];

// const gasoline = [40, 50, 60, 70, 80, 90];

// const capacity = [2, 3, 4, 5, 6];

// const price = [9000, 9500, 10000, 10500, 11000, 12000, 14000];
// const discount = [0, 4, 6, 8, 10, 12, 15, 20];
// const imagesList = [
//   "https://firebasestorage.googleapis.com/v0/b/mosa-vid.appspot.com/o/image%207.png?alt=media&token=681595d7-6eca-47fd-9c2b-1295232702f9",
//   "https://firebasestorage.googleapis.com/v0/b/mosa-vid.appspot.com/o/car.png?alt=media&token=0d9966ed-d186-44a5-b7ca-523b3915ef10",
//   "https://firebasestorage.googleapis.com/v0/b/mosa-vid.appspot.com/o/Car%20(3).png?alt=media&token=31c6f927-b90c-42e1-ba06-139018c0b8a6",
//   "https://firebasestorage.googleapis.com/v0/b/mosa-vid.appspot.com/o/Car%20(2).png?alt=media&token=27745a30-1fb1-4289-9b18-48439cf2cc62",
//   "https://firebasestorage.googleapis.com/v0/b/mosa-vid.appspot.com/o/Car%20(1).png?alt=media&token=2deca36a-d7d0-4446-9679-41cda17957cb",
// ];

// const descriptionList = [
//   "Luxury SUV known for its refined interior, comfortable ride, and advanced tech features",
//   "Dynamic sports sedan that fuses bold design, high-performance capabilities, and modern features into an exhilarating driving experience",
//   "Italian supercar renowned for its extravagant designs and high-performance",
//   "Spacious and versatile SUV that combines family-friendly amenities with off-road capability for a comfortable and adventurous ride",
//   "Charming and compact car with a retractable roof, perfect for zipping around town in style",
//   "This sleek car exudes timeless elegance and powerful performance on the road",
// ];

// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// const cars = [];

// async function main() {
//   for (let index = 0; index < 20; index++) {
//     const obj = {
//       name: nameList[getRandomInt(0, nameList.length - 1)],
//       description: descriptionList[getRandomInt(0, descriptionList.length - 1)],
//       brandId: brandList[getRandomInt(0, brandList.length - 1)],
//       transmission:
//         transmissionList[getRandomInt(0, transmissionList.length - 1)],
//       capacity: capacity[getRandomInt(0, capacity.length - 1)],
//       gasoline: gasoline[getRandomInt(0, gasoline.length - 1)],
//       priceInCents: price[getRandomInt(0, price.length - 1)],
//       discountPercentage: discount[getRandomInt(0, discount.length - 1)],
//       imagesUrl: [
//         imagesList[getRandomInt(0, imagesList.length - 1)],
//         imagesList[getRandomInt(0, imagesList.length - 1)],
//         imagesList[getRandomInt(0, imagesList.length - 1)],
//       ],
//       coverImageUrl: imagesList[getRandomInt(0, imagesList.length - 1)],
//     };

//     cars.push(obj);
//   }
//   try {
//     await database.car.deleteMany({});
//     await database.car.createMany({
//       data: cars,
//     });

//     console.log("Success");
//   } catch (error) {
//     console.log("Error seeding the database cars", error);
//   } finally {
//     await database.$disconnect();
//   }
// }

// main();

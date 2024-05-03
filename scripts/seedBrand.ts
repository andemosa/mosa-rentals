const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.brand.createMany({
      data: [
        { name: "Sport" },
        { name: "SUV" },
        { name: "MPV" },
        { name: "Sedan" },
        { name: "Coupe" },
        { name: "Hatchbank" },
      ]
    });

    console.log("Success");
  } catch (error) {
    console.log("Error seeding the database brands", error);
  } finally {
    await database.$disconnect();
  }
}

main();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
async function main() {
  // ... you will write your Prisma Client queries here
  const allGames = await prisma.games.findMany();
  console.log(allGames);
}
main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.disconnect();
  });

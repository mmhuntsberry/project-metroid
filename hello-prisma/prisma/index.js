const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

async function main() {

 await prisma.games.create({
    data: {
      title: "Metroid",
      description: "One mega dope game",
      platform: "nes",
      release_year: 1985,
      box_art: "https://metroid.com",
      synopsis: "Hiya eMetroid",
    }
  })
   const allgames = await prisma.games.findMany()

  console.dir(allgames)
}

main()

  .catch(e => {

    throw e

  })

  .finally(async () => {

    await prisma.disconnect()

  })
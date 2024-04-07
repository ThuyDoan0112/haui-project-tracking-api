const { PrismaClient } = require("@prisma/client");

const { hash } = require("../services/bcrypt");

const prisma = new PrismaClient();

const seedingUsers = async () => {
  const rawPassword = "Admin@123";
  const hashPassword = await hash(rawPassword);

  const result = await prisma.user.createMany({
    data: [
      {
        name: "admin",
        email: "admin@gmail.com",
        password: hashPassword,
        role: "admin",
      },
    ],
    skipDuplicates: true,
  });

  return result;
};

async function main() {
  await seedingUsers();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

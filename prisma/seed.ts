import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
   const res = await createUser({
      clerkUserId: 'string',
      firstname: 'string',
      lastname: 'string',
      email: 'string'
   });
   console.log(res);
}

const createUser = async ({
   clerkUserId,
   firstname,
   lastname,
   email
}: {
   clerkUserId: string;
   firstname: string;
   lastname: string;
   email: string;
}) => {
   const res = await prisma.user.create({
      data: {
         clerkUserId,
         firstname,
         lastname,
         email
      }
   });

   console.log(res);
};
main()
   .then(async () => {
      await prisma.$disconnect();
   })
   .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
   });

import prisma from '@base/prisma';

const getUserEmail = async (email: string) => {
  return await prisma.user.findMany({
    where: {
      email
    },
  });
};

const getUserById = async (id: number) => {
  return await prisma.user.findMany({
    where: {
      id
    },
  });
};

export { getUserEmail, getUserById };

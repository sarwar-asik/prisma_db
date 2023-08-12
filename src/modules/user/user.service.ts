import { PrismaClient, Profile, User } from "@prisma/client";

const prisma = new PrismaClient();

const insertIntoDBService = async (data: User): Promise<User> => {
  const result = await prisma.user.create({
    data,
  });
  console.log(
    "🚀 ~ file: user.service.ts:10 ~ insertIntoDBService ~ result:",
    result
  );

  return result;
};

const insertOrUpdateProfile = async (data: Profile): Promise<Profile> => {
  const isExist = await prisma.profile.findUnique({
    where: {
      userId: data?.userId,
    },
  });
  if (isExist) {
    const result = await prisma.profile.update({
      where: {
        userId: data?.userId,
      },
      data: {
        bio: data?.bio,
      },
    });
    return result;
  }
  else{
    const result = await prisma.profile.create({
        data,
      });
      return result;
  }

 
};

export const UserService = {
  insertIntoDBService,
  insertOrUpdateProfile
};

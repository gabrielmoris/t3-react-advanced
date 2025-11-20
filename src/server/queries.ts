import "server-only"; //  `import 'server-only'` marks your module as only usable on the server and prevents it from being used on the client.
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";

export async function getMyImages() {
  const user = await auth();

  if (!user.userId) throw new Error("Unauthorized");

  const images = await db.query.images.findMany({
    where: (images, { eq }) => eq(images.userId, user.userId),
    orderBy: (images, { desc }) => [desc(images.id)],
  });
  return images;
}
export async function getImage(id: number) {
  const user = await auth();

  if (!user.userId) throw new Error("Unauthorized");

  const image = await db.query.images.findFirst({
    where: (images, { eq }) => eq(images.id, id),
  });

  if (!image) throw new Error("Image not found");
  
  if(image.userId !== user.userId) throw new Error("Unauthorized")

  return image;
}

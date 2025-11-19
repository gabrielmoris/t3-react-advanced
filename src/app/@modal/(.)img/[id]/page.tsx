import { getImage } from "~/server/queries";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: photoId } = await params;
  const idAsNumber = Number(photoId);
  const image = await getImage(Number(photoId));
  return <div>Photo {photoId}</div>;
}

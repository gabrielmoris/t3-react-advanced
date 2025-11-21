import FullPageImageView from "~/components/full-image-page";

export default async function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: photoId } = await params;
  const idAsNumber = Number(photoId);

  return <FullPageImageView id={idAsNumber} />;
}

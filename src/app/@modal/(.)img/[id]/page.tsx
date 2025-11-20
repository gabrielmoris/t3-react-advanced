import { getImage } from "~/server/queries";
import { Modal } from "./modal";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: photoId } = await params;
  const idAsNumber = Number(photoId);
  const image = await getImage(idAsNumber);
  return (
    <Modal>
      <img src={image.url} alt={image.name} className="w-96" />
    </Modal>
  );
}

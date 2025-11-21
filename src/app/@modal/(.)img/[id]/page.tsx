import { Modal } from "./modal";
import FullPageImageView from "~/components/full-image-page";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: photoId } = await params;
  const idAsNumber = Number(photoId);

  return (
    <Modal>
      <FullPageImageView id={idAsNumber} />
    </Modal>
  );
}

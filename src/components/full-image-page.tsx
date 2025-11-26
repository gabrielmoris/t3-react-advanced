import { clerkClient } from "@clerk/nextjs/server";
import { getImage } from "~/server/queries";
import { Button } from "./ui/button";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);

  const client = await clerkClient();
  const uploaderInfo = await client.users.getUser(image.userId);

  return (
    <div className="flex h-full w-full min-w-0">
      <div className="flex shrink items-center justify-center">
        <img
          src={image.url}
          alt={image.name}
          className="shrink object-contain"
        />
      </div>

      <div className="flex w-48 shrink-0 flex-col border-l">
        <div className="border-b p-2 text-center text-lg">{image.name}</div>
        <div className="flex flex-col p-2">
          <span>Uploaded By:</span>
          <span>{uploaderInfo.fullName}</span>
        </div>
        <div className="flex flex-col p-2">
          <span>Create On:</span>
          <span>{new Date(image.createdAt).toLocaleDateString()}</span>
        </div>
        <div className="flex flex-col p-2">
          <form
            action={() => {
              "use server";
            }}
          >
            <Button type="submit" variant="destructive">
              Delete
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://bijqqeqylx.ufs.sh/f/0qi7ImN3OksCmyZwqipKEbvlBh2N6qM0o4jmTQ3In7PsirF5",
  "https://bijqqeqylx.ufs.sh/f/0qi7ImN3OksCYiTBJfnDvRtSM45OlAfgVsIbnwB2JjZFKraP",
  "https://bijqqeqylx.ufs.sh/f/0qi7ImN3OksCbsJXb7QAebHyrq9OZ25P3J0Mfuml8VcKF1Up",
  "https://bijqqeqylx.ufs.sh/f/0qi7ImN3OksCGgT8PXzt0LksqiIWglnQ62OuMcN3HzTF8fJe",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap">
        {posts.map((post) => (
          <div key={post.id} className="w-1/2 p-4">
            {post.name}
          </div>
        ))}
        {mockImages.map((image) => (
          <div key={image.id} className="w-1/2 p-4">
            <img
              src={image.url}
              alt={`Image ${image.id}`}
              className="h-[300px] w-1/3 object-cover"
            />
          </div>
        ))}
      </div>
    </main>
  );
}

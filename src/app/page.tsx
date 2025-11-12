import { url } from "inspector";
import Link from "next/link";

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

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap">
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

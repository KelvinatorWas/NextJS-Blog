import "./home_page.css";

export default function Home() {
  return (
    <main className="grid grid-cols-3 grid-rows-4 gap-4 m-4">
      <div className="flex bg-blue-500 p-3 col-span-2 row-span-2 most-recent-post">
        Most Recent Blog
      </div>
      <div className="flex bg-purple-500 p-3">Second Most Recent Post</div>
      <div className="flex bg-yellow-500 p-3">Third Most Recent Post</div>

      <div className="grid grid-cols-2 grid-rows-2 bg-green-500 p-3 col-span-3 row-span-2 gap-4">
        <div className="flex bg-blue-500 p-3">Featured 1</div>
        <div className="flex bg-purple-500 p-3">Featured 2</div>
        <div className="flex bg-gray-500 p-3">Featured 3</div>
        <div className="flex bg-pink-500 p-3">Featured 4</div>
      </div>
    </main>
  );
}

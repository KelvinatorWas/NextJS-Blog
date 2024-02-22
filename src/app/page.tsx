import BlogThumbnail from "../components/HomePage/BlogThumbnail";
import { getData } from "../utils/crud";
import { linkComb, DB_BLOGS_RECENT } from "../utils/serverLinks";
import { BlogData } from "../utils/types";
import "./home_page.css";

export default async function Home() {

  const recentBlogs = await getData<BlogData[]>(linkComb(DB_BLOGS_RECENT, 3))

  return (
    <main className="grid grid-cols-3 grid-rows-4 gap-4 m-4">
      {recentBlogs.map((blog, index) => {
        return (
          <BlogThumbnail blogData={blog} key={index} index={index} />
        );
      })
      }

      <div className="grid grid-cols-2 grid-rows-2 bg-green-500 p-3 col-span-3 row-span-2 gap-4">
        <div className="flex bg-blue-500 p-3">Featured 1</div>
        <div className="flex bg-purple-500 p-3">Featured 2</div>
        <div className="flex bg-gray-500 p-3">Featured 3</div>
        <div className="flex bg-pink-500 p-3">Featured 4</div>
      </div>
    </main>
  );
}

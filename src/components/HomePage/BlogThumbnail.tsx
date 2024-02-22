import { BlogData } from "@/src/utils/types"
import "./BlogThumbnail.css"
import { cleanUpString, joinClass } from "@/src/utils/stringManiplation"
import CustomLink from "../CustomLink/customLink"
type BlogThumbnailProps = {
  blogData: BlogData,
  index: number
}


const BlogThumbnail = ({blogData, index}:BlogThumbnailProps) => {

  let style = !index ? "col-span-2 row-span-2 most-recent-post" : ""

  
  return (

   <div className={joinClass("aspect-picture bg-blue-800 overflow-hidden thumbnail_img rounded-md flex flex-col justify-between", style)}>
    {/* The Title of the Blog */}
    <CustomLink
      href={{pathname:`/blogs/${cleanUpString(blogData.title)}`, query:{id:blogData.post_id}}}
      style="thumbnail-title p-2"
      as
    >
      <h2>{blogData.title}</h2>
    </CustomLink>

    <p className="bg-slate-500 thumbnail-title p-2">{blogData.description}</p>



   </div> 
  )
}

export default BlogThumbnail
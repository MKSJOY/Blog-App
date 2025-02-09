import { useContext } from "react";
import LatestBlogs from "../miniComponents/LatestBlog.jsx";
import { Context } from "../../main.jsx";

const Blogs = () => {
  const { mode, blogs } = useContext(Context);

  return (
    <article className={mode === "dark" ? "dark-bg" : "light-bg"}>
      <LatestBlogs blogs={blogs} title={"Blogs"} />
    </article>
  );
};

export default Blogs;
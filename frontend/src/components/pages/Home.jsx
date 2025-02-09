import { useContext } from "react";
import LatestBlogs from "../miniComponents/LatestBlog.jsx";
import HeroSection from "../miniComponents/HeroSection.jsx";
import TrendingBlogs from "../miniComponents/TrendingBlogs.jsx";
import PopularAuthors from "../miniComponents/PopularAuthors.jsx";
import { Context } from "../../main.jsx";


const Home = () => {
  const { mode, blogs } = useContext(Context);
  const filteredBlogs = blogs.slice(0, 6);
  return (
    <>
      <article className={mode === "dark" ? "dark-bg" : "light-bg"}>
        <HeroSection />
        <TrendingBlogs />
        <LatestBlogs heading={"Latest Blogs"} blogs={filteredBlogs} />
        <PopularAuthors />
      </article>
    </>
  );
};

export default Home;
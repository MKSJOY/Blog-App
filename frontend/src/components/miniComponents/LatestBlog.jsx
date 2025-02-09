/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const LatestBlogs = ({ heading, newClass, blogs }) => {
  return (
    <section
      className={
        newClass && newClass.length > 0 ? "dashboard-blogs blogs" : "blogs"
      }
    >
      <h3>{heading}</h3>
      <div className="container">
        {blogs &&
          blogs.map((element) => {
            return (
              <Link to={`/blog/${element._id}`} className="card" key={element._id}>
                <img src={element.mainImage.url} alt="blog" />
                <span className="category">{element.category}</span>
                <h4>{element.title}</h4>
                <div className="writer_section">
                  <div className="author">
                    <img src={element.authorAvatar} alt="author_avatar" />
                    <p>{element.authorName}</p>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </section>
  );
};

LatestBlogs.propTypes = {
  heading: PropTypes.string.isRequired,
  newClass: PropTypes.string,
  blogs: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      mainImage: PropTypes.shape({
        url: PropTypes.string.isRequired,
      }).isRequired,
      category: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      authorAvatar: PropTypes.string.isRequired,
      authorName: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default LatestBlogs;

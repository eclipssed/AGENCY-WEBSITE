import React from "react";
import BlogCard from "./BlogCard";
import post1 from "../assets/post1.png";
import post2 from "../assets/post2.png";
import post3 from "../assets/post3.png";

const blogs = [
  {
    id: 1,
    title: "Creating Streamlined Safeguarding Processes with OneRen",
    img: post1,
  },
  {
    id: 2,
    title:
      "What are your safeguarding responsibilities and how can you manage them?",
    img: post2,
  },
  {
    id: 3,
    title: "Revamping the Membership Model with Triathlon Australia",
    img: post3,
  },
];

const Blog = () => {
  return (
    <section className="container my-12" id="faqs">
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 ">
        {blogs.map((blog) => (
          <BlogCard {...blog} />
        ))}
      </div>
    </section>
  );
};

export default Blog;

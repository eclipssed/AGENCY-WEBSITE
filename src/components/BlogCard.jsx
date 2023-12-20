import React from "react";

const BlogCard = ({ id, title, img }) => {
  return (
    <div
      key={id}
      className="relative mb-12 text-center flex items-center justify-center"
    >
      <div>
        <img
          className="hover:scale-95 transition-all cursor-pointer"
          src={img}
          alt="post"
        />
      </div>
      <div className="shadow-lg bg-neutralSilver p-4 text-center font-bold w-2/3 mx-auto absolute left-0 right-0 -bottom-12 rounded-lg">
        <p className="text-neutralDGrey mb-2">{title}</p>
        <a href="/" className="text-primary font-bold">
          Read More
        </a>
      </div>
    </div>
  );
};

export default BlogCard;

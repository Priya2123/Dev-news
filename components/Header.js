import React from "react";
import headerStyles from "../styles/Header.module.css";

const Header = () => {
  const x = 5;
  return (
    <div>
      {/* <h1 className="title">
        <span>Anything</span> News
      </h1>
      <style jsx>
        {`
          .title {
            color: ${x > 3 ? "red" : "blue"};
          }
        `}
      </style> */}
      <h1 className={headerStyles.title}>
        <span>Anything</span> News
      </h1>
      <p className={headerStyles.description}>
        Keep up tp date with the latest news
      </p>
    </div>
  );
};

export default Header;

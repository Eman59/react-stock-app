import React from "react";
import "../styles.scss";

const NotFound: React.FC = () => {
  return (
    <div className="notFound-container">
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound;

import React from "react";

import "../Styles/loader.css";

const AppLoading = () => {






  return (
    <div
      className={`loading justify-content-center align-items-center`}
    >
      <div className="spinner-grow mx-1 text-primary" role="status"></div>
      <div className="spinner-grow mx-1 text-secondary" role="status"></div>
      <div className="spinner-grow mx-1 text-success" role="status"></div>
      <div className="spinner-grow mx-1 text-danger" role="status"></div>
      <div className="spinner-grow mx-1 text-warning" role="status"></div>
      <div className="spinner-grow mx-1 text-info" role="status"></div>
      <div className="spinner-grow mx-1 text-dark" role="status"></div>
    </div>
  );
};

export default AppLoading;

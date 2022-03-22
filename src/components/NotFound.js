import React from "react";
import { Link } from "react-router-dom";
import BitMan from "../image/BitMan.jpg";

const NotFound = () => {
  return (
    <>
      <div className="notfound">
        <div>
          Sorry. We cannot find the page you want.
          <p>
            Go to <Link to="/">home page</Link>
          </p>
        </div>

        {/* <div className="notfound-image"> */}
        <img alt="" src={BitMan} />
        {/* </div> */}
      </div>
    </>
  );
};

export default NotFound;

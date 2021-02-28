import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <div className="nav-logo">
          <a href="/home">
            <h1>
              Make <span>Friends</span>
            </h1>
          </a>
        </div>
        <div className="nav-links">
          <a href="/login">log in</a>
          <a href="/register">register</a>
        </div>
      </nav>
      <section className="introduction-area">
        <div>
          <h1>A Place to Make Friends</h1>
          <h3>
            With MakeFriends, you can make friends from nearby or from around
            the world.
          </h3>
        </div>
      </section>
    </div>
  );
};

export default Header;

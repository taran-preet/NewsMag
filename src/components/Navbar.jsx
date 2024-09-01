import React, { useState } from 'react';

function Navbar({ setCategory }) {
  const [activeCategory, setActiveCategory] = useState('technology');

  const handleCategoryClick = (category) => {
    setCategory(category);
    setActiveCategory(category);
  };

  const getLinkClass = (category) => {
    return activeCategory === category ? 'nav-link text-danger ' : 'nav-link text-white ';
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4">NewsMag</span></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <div className={getLinkClass('technology')} onClick={() => handleCategoryClick('technology')}>Technology</div>
              </li>
              <li className="nav-item">
                <div className={getLinkClass('business')} onClick={() => handleCategoryClick('business')}>Business</div>
              </li>
              <li className="nav-item">
                <div className={getLinkClass('health')} onClick={() => handleCategoryClick('health')}>Health</div>
              </li>
              <li className="nav-item">
                <div className={getLinkClass('science')} onClick={() => handleCategoryClick('science')}>Science</div>
              </li>
              <li className="nav-item">
                <div className={getLinkClass('sports')} onClick={() => handleCategoryClick('sports')}>Sports</div>
              </li>
              <li className="nav-item">
                <div className={getLinkClass('entertainment')} onClick={() => handleCategoryClick('entertainment')}>Entertainment</div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

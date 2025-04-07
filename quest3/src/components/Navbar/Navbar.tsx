import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <a href="#" className="logo-link">
        <svg className="logo-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
        </svg>
        <span className="logo-text">사색의바기</span>
      </a>
      <ul className="nav-menu">
        <li className="nav-item"><a href="#" className="nav-link">소개</a></li>
        <li className="nav-item"><a href="#" className="nav-link">소프트맑은 APP</a></li>
        <li className="nav-item"><a href="#" className="nav-link">블로그</a></li>
        <li className="nav-item"><a href="#" className="nav-link btn-kor">KOR</a></li>
      </ul>
    </nav>
  );
};

export default Navbar; 
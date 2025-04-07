import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2;

  const handlePrevPage = () => {
    setCurrentPage(prev => (prev > 1 ? prev - 1 : prev));
  };

  const handleNextPage = () => {
    setCurrentPage(prev => (prev < totalPages ? prev + 1 : prev));
  };

  return (
    <div className="hero-container">
      <div className="hero">
        <div className="hero-background"></div>
        
        <div className="special-text">
          <span className="label">사색의향기</span>
          <h1 className="main-title">함께하면 더욱 아름다운 문화예술 공간</h1>
          <p className="subtitle">새로운 문화 나눔을 만들어가는 사색의향기입니다</p>
        </div>
        
        {/* Pagination controls at bottom right */}
        <div className="pagination-overlay">
          <div className="pagination-container">
            <div className="pagination">
              <div className="pagination-numbers">
                <span className="current-page">{currentPage}</span>
                <div className="page-divider"></div>
                <span className="total-pages">{totalPages}</span>
              </div>
              <div className="pagination-arrows">
                <button 
                  className="arrow-btn" 
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                >
                  <svg width="8" height="14" viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 1L1 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button 
                  className="arrow-btn" 
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                >
                  <svg width="8" height="14" viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L7 7L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 
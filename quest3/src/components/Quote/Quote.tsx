import React from 'react';

const Quote: React.FC = () => {
  return (
    <section className="quote-section">
      <div className="quote-container">
        <p className="quote-text">기부를 통해 따뜻한 마음을 보내고 싶다면,</p>
        <p className="quote-author">우편번호 연내</p>
        <p className="quote-contact">국번 924501-01-351204 / 사단법인 사색의향기</p>
        <div className="quote-buttons">
          <a href="#" className="quote-button">정기 후원</a>
          <a href="#" className="quote-button">일시 후원</a>
        </div>
      </div>
    </section>
  );
};

export default Quote; 
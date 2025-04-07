import React from 'react';

const Culture: React.FC = () => {
  return (
    <section className="culture-section">
      <h2 className="culture-title">새로운 문화 나눔을 만들어갑니다.</h2>
      
      <div className="culture-content">
        <div className="culture-top">
          <span className="culture-subtitle-text">우리는</span>
          <div className="culture-image">
            <img src="/culture.png" alt="문화 이미지" />
          </div>
        </div>
        <div className="culture-bottom">
          <span className="culture-subtitle-text">사색의향기입니다.</span>
        </div>
      </div>
      
      <p className="culture-text">사색의향기는 문화창작의 자연스러운 "특별한 문화 나눔"을 통해 시간 안의 경험과 감각적 사운드와 감각을 나누며 자연스러운 문화를 만들어가기 위해 노력하는 향기의 모임입니다.</p>
    </section>
  );
};

export default Culture; 
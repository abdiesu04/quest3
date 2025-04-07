import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <section className="philosophy-section">
      <div className="philosophy-container">
        {/* First philosophy item */}
        <div className="philosophy-item">
          <div className="philosophy-content">
            <span className="date-label">2023년 5월 15일 게시됨</span>
            <h2 className="philosophy-title">더 나은 세상을 만들어 가기 위한 노력.</h2>
            <p className="philosophy-text">바쁜 일상과 삶에서 우리는 때로는 휴식이 필요합니다. 사색의향기는 문화와 예술을 통해 잠시 일상에서 벗어나 새로운 관점과 영감을 얻을 수 있는 공간을 제공합니다.</p>
            <p className="philosophy-text">책을 통해 지식을 나누고, 예술을 통해 감성을 키우며, 인문학적 사고를 통해 더 깊은 삶의 의미를 찾아가는 여정에 함께하세요.</p>
            <a href="#" className="read-more">
              오늘의 읽기 <span className="arrow-icon">→</span>
            </a>
          </div>
          <div className="philosophy-image">
            <img src="/s1.png" alt="더 나은 세상을 만들어 가기 위한 노력" />
            <div className="philosophy-image-overlay">
              <h3 className="philosophy-image-title">몽골 밤하늘의 쓸아지는 별을 보며</h3>
              <p className="philosophy-image-subtitle">테마여행 - 별자리 인문학이 함께하는 아름다운 경험</p>
            </div>
          </div>
        </div>
        
        {/* Second philosophy item */}
        <div className="philosophy-item">
          <div className="philosophy-content">
            <span className="date-label">2023년 8월 5일 게시됨</span>
            <h2 className="philosophy-title">더 나은 세상을 만들어 가기 위한 노력.</h2>
            <p className="philosophy-text">기부를 통해 따뜻한 마음을 보내고 싶다면, 각 지역의 문화 공동체와 연결하여 함께 성장하는 경험을 나눌 수 있습니다. 세상의 모든 변화는 작은 실천에서 시작됩니다.</p>
            <p className="philosophy-text">사색의향기가 전하는 가치와 함께 더 나은 세상을 만들어 갑시다.</p>
            <a href="#" className="read-more">
              오늘의 읽기 <span className="arrow-icon">→</span>
            </a>
          </div>
          <div className="philosophy-image">
            <img src="/s2.png" alt="커뮤니티 앱 이미지" />
            <div className="philosophy-image-overlay">
              <h3 className="philosophy-image-title">명상의 방법</h3>
              <p className="philosophy-image-subtitle">몸과 마음을 치유하는 자연스러운 명상</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy; 
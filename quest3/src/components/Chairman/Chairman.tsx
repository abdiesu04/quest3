import React from 'react';

const Chairman: React.FC = () => {
  return (
    <section className="chairman-section">
      <div className="container">
        <div className="chairman-container">
          <div className="chairman-content">
            <h2 className="chairman-title">이사장 인사말.</h2>
            <p className="chairman-description">안녕하세요, 사색의향기 이사장 조덕균 입니다.</p>
            <p className="chairman-description">사색의향기는 "특별한 문화 나눔"을 통해 다니슨 사람들 만남이 우리의 일상입니다. 일문학과 인문학에 관한 사상을 공유하면서, 책과 커뮤니티에서 함께 성장하는것이 저희 사색의향기입니다.</p>
            <p className="chairman-description">많은 관심과 참여 부탁드립니다. 감사합니다.</p>
            <div className="chairman-sign">
              <p className="chairman-position">사색의향기 이사장 조덕균</p>
              <img src="/sign.png" alt="이사장 서명" className="chairman-signature" />
            </div>
            <div className="chairman-cta">
              <a href="#" className="chairman-link">인터뷰 더 보기 <span className="chairman-link-arrow">→</span></a>
            </div>
          </div>
          <div className="chairman-image-wrapper">
            <div className="chairman-image-bg"></div>
            <img src="/image 344.svg" alt="이사장 이미지" className="chairman-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chairman; 
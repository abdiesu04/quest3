import React from 'react';

const Activities: React.FC = () => {
  return (
    <section className="activities-section">
      <div className="container">
       
        
        <div className="activity-list">
        <div className="activities-title-container">
          <h2 className="left-title">함께하는 일</h2>
          <span className="dot-separator">·</span>
          <h2 className="right-title">우리의 활동</h2>
        </div>
          {/* Activity 1: Concert */}
          <div className="activity-item">
            <div className="activity-image">
              <img src="/1.png" alt="인문학 콘서트" />
            </div>
            <div className="activity-content">
              <p className="activity-description">같은 사상과 마음의 대화가 이어지는 시간 머물 즐거운 문화적 이야기</p>
              <h3 className="activity-title">인문학 콘서트</h3>
            </div>
          </div>
          
          {/* Activity 2: Festival */}
          <div className="activity-item">
            <div className="activity-image">
              <img src="/2.png" alt="지역 축제" />
            </div>
            <div className="activity-content">
              <p className="activity-description">지역의 숨결을 느끼면서 하루 스쳐만 나는 것, 소박한 만남에서 지키는 순간</p>
              <h3 className="activity-title">지역 축제</h3>
            </div>
          </div>
          
          {/* Activity 3: Book Sharing */}
          <div className="activity-item">
            <div className="activity-image">
              <img src="/3.png" alt="나눔 바자회" />
            </div>
            <div className="activity-content">
              <p className="activity-description">책에이 전해지는 물건들, 그 속의 이야기들</p>
              <h3 className="activity-title">나눔 바자회</h3>
            </div>
          </div>
          
          {/* Activity 4: Volunteers */}
          <div className="activity-item">
            <div className="activity-image">
              <img src="/4.png" alt="따뜻한 후원" />
            </div>
            <div className="activity-content">
              <p className="activity-description">작은 나눔이 모여 큰 울림이 됩니다 서로 이웃이라면 더 나은 날이</p>
              <h3 className="activity-title">따뜻한 후원</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities; 
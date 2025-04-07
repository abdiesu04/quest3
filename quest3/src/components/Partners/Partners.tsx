import React, { useRef } from 'react';

const Partners: React.FC = () => {
  const partnersRef = useRef<HTMLDivElement>(null);
  
  const scrollLeft = () => {
    if (partnersRef.current) {
      partnersRef.current.scrollBy({ left: -250, behavior: 'smooth' });
    }
  };
  
  const scrollRight = () => {
    if (partnersRef.current) {
      partnersRef.current.scrollBy({ left: 250, behavior: 'smooth' });
    }
  };

  return (
    <section className="partners-section">
      <div className="partners-container">
        <div className="partners-header">
          <div className="partners-title-area">
            <h2 className="partners-title">함께하는 이들</h2>
          </div>
        </div>
        
        <div className="partners-list-wrapper" ref={partnersRef}>
          <div className="partners-list">
            {/* Partner 1 */}
            <div className="partner-item">
              <div className="partner-logo">
                <img src="/l1.svg" alt="(주)책향기사업단" />
              </div>
              <div className="partners-nav">
                <div className="nav-arrow nav-prev" onClick={scrollLeft}>
                  <svg width="8" height="14" viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 1L1 7L7 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="nav-arrow nav-next" onClick={scrollRight}>
                  <svg width="8" height="14" viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L7 7L1 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Partner 2 */}
            <div className="partner-item">
              <div className="partner-logo">
                <img src="/l2.svg" alt="비문화창 실천단" />
              </div>
              <h3 className="partner-name">비문화창 실천단</h3>
              <p className="partner-description">세대와 세대사이의 문화를 연결해 드립니다.</p>
            </div>
            
            {/* Partner 3 */}
            <div className="partner-item">
              <div className="partner-logo">
                <img src="/l3.svg" alt="이룸재단" />
              </div>
              <h3 className="partner-name">이룸재단</h3>
              <p className="partner-description">문화와 예술을 통한 치유와 성장을 함께 이루어냅니다.</p>
            </div>
            
            {/* Partner 4 */}
            <div className="partner-item">
              <div className="partner-logo">
                <img src="/l4.svg" alt="ARTLIAN" />
              </div>
              <h3 className="partner-name">ARTLIAN</h3>
              <p className="partner-description">세상에 없던 문화예술에 관련된 모임들을 엮어줍니다.</p>
            </div>
            
            {/* Partner 5 */}
            <div className="partner-item">
              <div className="partner-logo">
                <img src="/l5.svg" alt="대한민국함께함암회" />
              </div>
              <h3 className="partner-name">대한민국함께함암회</h3>
              <p className="partner-description">사회적인 약자 문제 등을 함께 나누고 함께 가겠습니다.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners; 
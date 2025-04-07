import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`뉴스레터 구독 신청이 완료되었습니다: ${email}`);
    setEmail('');
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-logo">
          <svg className="footer-logo-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
          </svg>
          <span className="footer-logo-text">사색의향기</span>
        </div>
        
        <div className="footer-content">
          <div className="footer-info">
            <p>뉴스레터 구독하기</p>
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input 
                type="email" 
                placeholder="이메일 주소" 
                className="newsletter-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="newsletter-btn">
                <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          </div>
          
          <div className="footer-contacts">
            <div className="footer-contact-info">
              <p className="footer-contact-label">이사장 : 조덕균</p>
              <p className="footer-contact-detail">사업자번호 : 158-82-00364 / 이메일 : info@aifilmfoundation.org</p>
            </div>
            <div className="footer-contact-info">
              <p className="footer-contact-label">주소 : 서울특별시 종로구 북촌로 31-6</p>
              <p className="footer-contact-detail">전화번호 : 02-2075-1871 / FAX : 070-8260-1881 / hello.iyagi@naver.com</p>
            </div>
          </div>
          
          <div className="footer-copyright">
            <p>Copyright © 2023 사색의향기. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
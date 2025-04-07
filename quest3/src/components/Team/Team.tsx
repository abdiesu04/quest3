import React from 'react';

const Team: React.FC = () => {
  return (
    <section className="team-section">
      <div className="team-container">
        <div className="team-members">
          <div className="team-member">
            <div className="member-image">
              <img src="/ch1.svg" alt="오덕균 이사장" />
            </div>
            <p className="member-name">오덕균 이사장</p>
          </div>
          
          <div className="team-member">
            <div className="member-image">
              <img src="/ch2.svg" alt="정운호 이사" />
            </div>
            <p className="member-name">정운호 이사</p>
          </div>
          
          <div className="team-member">
            <div className="member-image">
              <img src="/ch3.svg" alt="권혁준 교수" />
            </div>
            <p className="member-name">권혁준 교수</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team; 
import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">About Me</span>
          <h2>저를 소개합니다</h2>
          <p className="section-subtitle">
            열정적이고 창의적인 개발자로서의 여정을 소개합니다
          </p>
        </div>
        
        <div className="about-content">
          {/* 개선된 프로필 영역 */}
          <div className="about-image">
            <div className="image-container">
              <div className="image-placeholder">
                <span>📸</span>
              </div>
              {/* 장식용 요소들 추가 */}
              <div className="decoration decoration-1"></div>
              <div className="decoration decoration-2"></div>
            </div>
          </div>
          
          {/* 더 구조화된 소개 텍스트 */}
          <div className="about-text">
            <div className="intro-card">
              <h3>🚀 개발자로서의 여정</h3>
                <p>
                  프론트엔드 개발자로서
                  사용자 중심의 웹 애플리케이션 개발에 열정을 가지고 있습니다.<br/>
                  새로운 기술을 배우고 적용하는 것을 즐기며,
                  항상 더 나은 사용자 경험을 위해 고민합니다.
                </p>
            </div>
            
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">완료 프로젝트</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1년</span>
                <span className="stat-label">개발 경험</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">열정</span>
              </div>
            </div>
            
            {/* 핵심 가치들 */}
            <div className="values">
              <div className="value-item">
                <span className="value-icon">💡</span>
                <span className="value-text">창의적 문제해결</span>
              </div>
              <div className="value-item">
                <span className="value-icon">🎯</span>
                <span className="value-text">사용자 중심 사고</span>
              </div>
              <div className="value-item">
                <span className="value-icon">🔄</span>
                <span className="value-text">지속적 학습</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
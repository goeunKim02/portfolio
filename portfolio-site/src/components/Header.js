import React, { useState, useEffect } from 'react';
import '../styles/Header.css';

const Header = () => {
  // 스크롤 상태를 관리하여 네비게이션 바 스타일 변경
  const [isScrolled, setIsScrolled] = useState(false);
  // 모바일 메뉴 토글 상태 관리
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 스크롤 이벤트 리스너 등록
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header">
      {/* 스크롤 상태에 따라 네비게이션 스타일 변경 */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-brand">
          <h2>Portfolio</h2>
        </div>
        
        {/* 햄버거 메뉴 버튼 (모바일용) */}
        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        {/* 네비게이션 링크들 */}
        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a></li>
          <li><a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</a></li>
          <li><a href="#skills" onClick={() => setIsMobileMenuOpen(false)}>Skills</a></li>
          <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
        </ul>
      </nav>
      
      {/* 모던한 히어로 섹션 */}
      <div className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              <span className="greeting">안녕하세요 👋</span>
              <span className="name"><span className="highlight">김고은</span> 입니다</span>
              <span className="role">Developer</span>
            </h1>
            <p className="hero-description">
              사용자 경험을 중시하는 개발자로,<br/>
              문제를 해결하고 센스 있는 개발을 하기 위해 노력합니다다.
            </p>
            <div className="hero-buttons">
              <button className="cta-primary">프로젝트 보기</button>
              <button className="cta-secondary">이력서 다운로드</button>
            </div>
          </div>
          
          {/* 모던한 아바타 또는 일러스트레이션 영역 */}
          <div className="hero-visual">
            <div className="floating-shapes">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
            </div>
            <div className="hero-avatar">
              <div className="avatar-placeholder">
                <span>👩‍💻</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* 스크롤 인디케이터 */}
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
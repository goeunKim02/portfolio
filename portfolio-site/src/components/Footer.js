import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* 브랜드 및 설명 */}
          <div className="footer-info">
            <h3 className="footer-brand">Portfolio</h3>
            <p className="footer-description">
              열정적인 개발자로서 더 나은 웹 경험을 만들어가고자 노력합니다. 
              
            </p>
          </div>
          
          {/* 소셜 링크들 */}
          <div className="social-links">
            <a href="https://github.com/goeunKim02" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              🐙
            </a>
            {/* <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              💼
            </a> */}
            <a href="mailto:goeun.Kim362@gmail.com" aria-label="Email">
              📧
            </a>
          </div>
        </div>
        
        {/* 저작권 정보 */}
        <div className="footer-copyright">
          <p>
            © {currentYear} Portfolio. Made with by goeunKim
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
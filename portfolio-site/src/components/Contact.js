import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

const Contact = () => {
  // 폼 데이터와 로딩 상태 관리
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // EmailJS 설정 (환경 변수 사용 권장)
  const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'your_service_id';
  const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'your_template_id';
  const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'your_public_key';

  // 입력값 변경 핸들러
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // 현재 시간 포맷팅 함수
  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Asia/Seoul'
    });
  };

  // 폼 제출 핸들러 - EmailJS 연동
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus('');

    try {
      // EmailJS 템플릿 변수에 맞게 데이터 전송
      const templateParams = {
        name: formData.name,           // {{name}} 변수에 매핑
        message: formData.message,     // {{message}} 변수에 매핑
        time: getCurrentTime(),        // {{time}} 변수에 매핑
        email: formData.email,         // 추가 정보 (템플릿에서 사용 안 하더라도)
        reply_to: formData.email       // 답장용 이메일 주소
      };

      console.log('전송할 데이터:', templateParams);

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log('이메일 전송 성공:', result);
      setSubmitStatus('success');
      
      // 폼 초기화
      setFormData({ name: '', email: '', message: '' });
      
    } catch (error) {
      console.error('이메일 전송 실패:', error);
      setSubmitStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Contact</span>
          <h2 className="section-title">Contact</h2>

        </div>
        
        <div className="contact-content">
          {/* 연락처 정보 */}
          <div className="contact-info">
            <h3>연락처 정보</h3>
            
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <div className="contact-details">
                <span className="contact-label">이메일</span>
                <span className="contact-value">goeun.Kim362@gmail.com</span>
              </div>
            </div>
            
            <div className="contact-item">
              <span className="contact-icon">🐙</span>
              <div className="contact-details">
                <span className="contact-label">GitHub</span>
                <span className="contact-value">github.com/goeunKim02</span>
              </div>
            </div>
            


            {/* 소셜 링크 섹션 */}
            <div className="social-section">
              <h4>소셜 링크</h4>
              <div className="social-links-grid">
                <a href="https://github.com/goeunKim02" className="social-link" target="_blank" rel="noopener noreferrer">
                  <span className="social-icon">🐙</span>
                  <span className="social-label">GitHub</span>
                </a>
                <a href="mailto:goeun.Kim362@gmail.com" className="social-link">
                  <span className="social-icon">📧</span>
                  <span className="social-label">Email</span>
                </a>
                {/* <a href="#" className="social-link">
                  <span className="social-icon">💼</span>
                  <span className="social-label">LinkedIn</span>
                </a> */}
                {/* <a href="#" className="social-link">
                  <span className="social-icon">📱</span>
                  <span className="social-label">Phone</span>
                </a> */}
              </div>
            </div>
          </div>
          
          {/* 연락 폼 */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">이름 *</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="이름을 입력해주세요"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">이메일 *</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="답장받을 이메일을 입력해주세요"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">메시지 *</label>
              <textarea
                id="message"
                name="message"
                placeholder="문의하고 싶은 내용을 자세히 작성해주세요"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isLoading}
                minLength="10"
              ></textarea>
              <small className="form-hint">최소 10자 이상 입력해주세요</small>
            </div>
            
            <button 
              type="submit" 
              className={`submit-button ${isLoading ? 'loading' : ''}`}
              disabled={isLoading || !formData.name || !formData.email || !formData.message}
            >
              {isLoading ? (
                <>
                  <span className="loading-spinner"></span>
                  전송 중...
                </>
              ) : (
                <>
                  <span>📮</span>
                  메시지 보내기
                </>
              )}
            </button>
            
            {/* 상태 메시지 */}
            {submitStatus === 'success' && (
              <div className="status-message success">
                <span className="status-icon">✅</span>
                <div>
                  <strong>메시지가 성공적으로 전송되었습니다!</strong>
                  <p>빠른 시일 내에 답변드리겠습니다.</p>
                </div>
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="status-message error">
                <span className="status-icon">❌</span>
                <div>
                  <strong>전송에 실패했습니다.</strong>
                  <p>잠시 후 다시 시도하거나 직접 이메일로 연락해주세요.</p>
                </div>
              </div>
            )}
            
            {/* 폼 설명 */}
            <div className="form-note">
              <small>
                * 필수 입력 항목입니다. 
                개인정보는 문의 답변 목적으로만 사용되며, 답변 후 안전하게 삭제됩니다.
              </small>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
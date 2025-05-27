import React from 'react';
import './App.css';
// 각 섹션별 컴포넌트를 import
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* 헤더 섹션 - 네비게이션과 히어로 영역 */}
      <Header />
      {/* 소개 섹션 */}
      <About />
      {/* 프로젝트 섹션 */}
      <Projects />
      {/* 기술 스택 섹션 */}
      <Skills />
      {/* 연락처 섹션 */}
      <Contact />
      {/* 푸터 섹션 */}
      <Footer />
    </div>
  );
}

export default App;
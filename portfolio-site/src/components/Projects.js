import React, { useState } from 'react';
import '../styles/Projects.css';

const Projects = () => {
  // 프로젝트 필터 상태 관리
  const [activeFilter, setActiveFilter] = useState('all');
  
  // 더 상세한 프로젝트 데이터
  const projects = [
    {
      id: 1,
      title: "LVUP : 커뮤니케이션 향상 웹앱",
      description: "React를 사용한 커뮤니케이션 향상 웹앱으로 게이미피케이션 요소를 도입하여 사용자 참여를 유도합니다.",
      technologies: ["React", "Node.js", "JavaScript"],
      category: "frontend",
      link: "https://youtu.be/HBLR3QPnp08",
      github: "https://github.com/goeunKim02/LVUP.git",
      status: "완료",
      image: "🤖"
    },
    {
      id: 2,
      title: "NOK : 노인을 위한 음성뱅킹 앱", 
      description: "음성 명령어(똑똑)를 통해 화면 전환과 기능을 제공하는 노인을 위한 음성뱅킹 앱",
      technologies: ["Kotlin(Android)", "TypeScript", "React", "Firebase"],
      category: "frontend",
      link: "https://youtu.be/-ahxn81TWZE",
      github: "https://github.com/goeunKim02/NOK",
      status: "완료",
      image: "🧓👵"
    },
    {
      id: 3,
      title: "POSS : 생산계획 관리 시스템",
      description: "[SAMSUNG 기업연계 프로젝트] GUI 기반 생산게획 실시간 조정 및 검증 시스템",
      technologies: ["Python", "matplotlib", "PyQt5", "Pandas", "NumPy"],
      category: "fullstack",
      link: "https://youtu.be/TTA97mvM0Us",
      github: "https://github.com/goeunKim02/POSS",
      status: "완료",
      image: "🔩"
    },
    // {
    //   id: 4,
    //   title: "Blog API Server",
    //   description: "RESTful API와 JWT 인증을 구현한 블로그 백엔드",
    //   technologies: ["Express", "PostgreSQL", "JWT"],
    //   category: "backend",
    //   link: "#",
    //   github: "#",
    //   status: "완료",
    //   image: "📝"
    // }
  ];

  // 필터 옵션들
  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'fullstack', label: 'Full Stack' }
  ];

  // 필터링된 프로젝트들
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Portfolio</span>
          <h2>프로젝트 showcase</h2>
          <p className="section-subtitle">
            제가 진행한 다양한 프로젝트들을 소개합니다
          </p>
        </div>

        {/* 프로젝트 필터 버튼들 */}
        <div className="project-filters">
          {filters.map(filter => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* 프로젝트 그리드 */}
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              {/* 프로젝트 상태 배지 */}
              <div className={`project-status ${project.status === '완료' ? 'completed' : 'in-progress'}`}>
                {project.status}
              </div>
              
              <div className="project-image">
                <div className="image-placeholder">
                  <span className="project-emoji">{project.image}</span>
                </div>
                {/* 호버시 나타나는 링크들 */}
                <div className="project-overlay">
                  <a href={project.link} className="overlay-btn">
                    <span>🔗</span> Live Demo
                  </a>
                  <a href={project.github} className="overlay-btn">
                    <span>🔖</span> GitHub
                  </a>
                </div>
              </div>
              
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
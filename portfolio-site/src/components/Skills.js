import React from 'react';
import '../styles/Skills.css';

const Skills = () => {

  const skillCategories = [
    {
      category: "Frontend",
      icon: "🎨",
      skills: [
        { name: "React", level: 90, color: "#61DAFB" },
        { name: "Kotlin", level: 80, color: "#3178C6" },
        { name: "JavaScript", level: 80, color: "#000000" },
        { name: "Vue.js", level: 75, color: "#4FC08D" },
        { name: "Pyqt5", level: 70, color: "#06B6D4" }
      ]
    },
    {
      category: "Backend",
      icon: "⚙️",
      skills: [
        { name: "Python", level: 80, color: "#339933" },
        { name: "Django", level: 75, color: "#000000" },
      ]
    },
    {
      category: "Tools & Others",
      icon: "🛠️",
      skills: [
        { name: "Figma", level: 95, color: "#F24E1E" },
        { name: "Jira", level: 95, color: "#C21325" },
        { name: "Git", level: 90, color: "#F05032" },
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Skills</span>
          <h2>기술 스택</h2>
          <p className="section-subtitle">
            다양한 기술을 학습하여 적재적소의 스킬을 활용합니다
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.category}</h3>
              </div>
              
              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    {/* 프로그레스 바 추가 */}
                    <div className="skill-progress">
                      <div 
                        className="skill-progress-fill"
                        style={{ 
                          width: `${skill.level}%`,
                          backgroundColor: skill.color
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
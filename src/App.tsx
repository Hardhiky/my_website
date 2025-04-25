import React, { useState } from 'react';
import styled from 'styled-components';
import { GlobalStyles, theme } from './styles/GlobalStyles';
import { ProjectCard } from './components/ProjectCard';
import { SkillsSection } from './components/SkillsSection';
import { Projects } from './pages/Projects';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { Resume } from './pages/Resume';
import { Experience } from './pages/Experience';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaStackOverflow, FaDev, FaMedium } from 'react-icons/fa';
import diamondLogo from './assets/diamond-logo.png';

const AppContainer = styled.div`
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  position: relative;
  margin-top: 4rem; /* Add margin to account for fixed nav */
`;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(6, 4, 12, 0.95);
  padding: 1rem;
  border-bottom: 2px solid #ff1f1f;
  box-shadow: 
    0 0 20px #ff1f1f,
    0 0 40px rgba(255, 31, 31, 0.4);
  display: flex;
  align-items: center;
`;

const ProfileImage = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 2rem;
  margin-left: 1rem;
  border-radius: 50%;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: drop-shadow(0 0 10px rgba(0, 157, 255, 0.8));
    transition: all 0.3s ease;
  }

  &:hover {
    transform: scale(1.1);
    
    img {
      filter: drop-shadow(0 0 15px rgba(0, 157, 255, 1));
    }
  }
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 2rem;
  list-style: none;
  padding: 0;
  margin: 0;
  max-width: 1200px;
  margin: 0 auto;
  flex: 1;
`;

const NavItem = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  font-family: 'Press Start 2P', ${theme.fonts.secondary};
  font-size: 0.9rem;
  text-transform: uppercase;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  text-shadow: 0 0 6px #ff1f1f;
  position: relative;
  
  &:hover, &.active {
    color: #ff1f1f;
    text-shadow: 
      0 0 6px #ff1f1f,
      0 0 12px #ff1f1f;
    background: rgba(255, 31, 31, 0.1);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    width: 0;
    height: 2px;
    background: #ff1f1f;
    transition: all 0.3s ease;
    transform: translateX(-50%);
    box-shadow: 0 0 8px #ff1f1f;
  }

  &:hover::after, &.active::after {
    width: 80%;
  }
`;

const PageContainer = styled(motion.div)`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
`;

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3 }
};

const Header = styled.header`
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

interface Position {
  x: number;
  y: number;
}

const MarqueeContainer = styled.div`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem 2.5rem;
  margin-bottom: 1rem;
  background: #06040c;
  border-radius: 28px;
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.9);
  min-width: 300px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px solid #ff1f1f;
    border-radius: 28px;
    box-shadow: 
      0 0 20px #ff1f1f,
      0 0 40px rgba(255, 31, 31, 0.4);
    opacity: 0.85;
  }
`;

const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: bold;
  margin: 0;
  padding: 0.2rem 0;
  color: #ffffff;
  font-family: 'Press Start 2P', ${theme.fonts.secondary};
  text-shadow: 
    0 0 6px #ff1f1f,
    0 0 12px rgba(255, 31, 31, 0.8);
  letter-spacing: 4px;
  text-transform: uppercase;
  position: relative;
  z-index: 1;
  text-align: center;
  white-space: nowrap;
`;

const Subtitle = styled.h2`
  font-size: 1.3rem;
  font-weight: normal;
  margin: 1rem auto;
  color: ${theme.colors.secondary};
  opacity: 0.8;
  line-height: 1.5;
  max-width: 800px;
  text-align: center;
  transition: opacity 0.3s ease;
  padding: 0 1rem;

  &:hover {
    opacity: 1;
  }
`;

const Links = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  width: 100%;
  padding: 0 1rem;

  a {
    color: #ffffff;
    text-decoration: none;
    opacity: 0.7;
    transition: all 0.3s ease;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid transparent;

    &:hover {
      opacity: 1;
      color: #ff1f1f;
      border-color: #ff1f1f;
      box-shadow: 
        0 0 10px #ff1f1f,
        0 0 20px rgba(255, 31, 31, 0.4);
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(0);
    }
  }
`;

const Section = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 2rem 0;
  position: relative;

  h2 {
    font-family: ${theme.fonts.primary};
    color: ${theme.colors.secondary};
    font-size: 1.5rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;

    &::before {
      content: '♦';
      color: ${theme.colors.primary};
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
`;

const Copyright = styled.div`
  text-align: center;
  padding: 2rem 0;
  font-family: 'Press Start 2P', monospace;
  font-size: 0.8rem;
  color: #ff1f1f;
  text-shadow: 0 0 6px #ff1f1f;
  opacity: 0.8;
  transition: all 0.3s ease;
  margin-top: auto;

  &:hover {
    opacity: 1;
    text-shadow: 
      0 0 10px #ff1f1f,
      0 0 20px rgba(255, 31, 31, 0.8);
  }
`;

function Navigation() {
  const location = useLocation();
  
  return (
    <Nav>
      <ProfileImage>
        <img src={diamondLogo} alt="Diamond Logo" />
      </ProfileImage>
      <NavList>
        <li><NavItem to="/" className={location.pathname === "/" ? "active" : ""}>Home</NavItem></li>
        <li><NavItem to="/about" className={location.pathname === "/about" ? "active" : ""}>About</NavItem></li>
        <li><NavItem to="/projects" className={location.pathname === "/projects" ? "active" : ""}>Projects</NavItem></li>
        <li><NavItem to="/resume" className={location.pathname === "/resume" ? "active" : ""}>Resume</NavItem></li>
        <li><NavItem to="/experience" className={location.pathname === "/experience" ? "active" : ""}>Experience</NavItem></li>
        <li><NavItem to="/blog" className={location.pathname === "/blog" ? "active" : ""}>Blog</NavItem></li>
        <li><NavItem to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact</NavItem></li>
      </NavList>
    </Nav>
  );
}

function HomePage() {
  return (
    <PageContainer {...pageTransition}>
      <Header>
        <MarqueeContainer>
          <Title>Hardhik Y</Title>
        </MarqueeContainer>
        <Subtitle>ML Engineer, Full Stack Developer & OS Dev Enthusiast</Subtitle>
        <Links>
          <a href="https://github.com/Hardhiky" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/hardhik-y/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://stackoverflow.com/users/30177769/hardhik-y" target="_blank" rel="noopener noreferrer" aria-label="Stack Overflow">
            <FaStackOverflow />
          </a>
          <a href="https://dev.to/_hardhik_y_" target="_blank" rel="noopener noreferrer" aria-label="Dev.to">
            <FaDev />
          </a>
          <a href="https://medium.com/@hardhikyd9" target="_blank" rel="noopener noreferrer" aria-label="Medium">
            <FaMedium />
          </a>
        </Links>
      </Header>

      <Section>
        <h2>Featured Projects</h2>
        <Grid>
          <ProjectCard
            title="AI Interview Bot"
            description="An AI-powered voice bot for technical interviews with adaptive questioning and real-time speech processing. Built with Python, React, Node.js, and TensorFlow."
            techStack={["Python", "React", "Node.js", "TensorFlow", "PostgreSQL"]}
            githubUrl="https://github.com/Hardhiky/capstone"
          />
          <ProjectCard
            title="Drawfish"
            description="A custom Stockfish model integrated with ML to enforce drawish positions in chess. Uses advanced heuristics and reinforcement learning for strategic gameplay."
            techStack={["Python", "AI", "React.js", "Node.js", "Git"]}
            githubUrl="https://github.com/Hardhiky/drawfish"
          />
          <ProjectCard
            title="RiX"
            description="An experimental operating system for Intel IA-32 architecture built from scratch in Rust. Features a custom bootloader and minimal dependencies."
            techStack={["Rust", "Assembly", "Qemu"]}
            githubUrl="https://github.com/Hardhiky/rix"
          />
        </Grid>
      </Section>

      <Section id="full-stack-section">
        <h2>Technical Skills</h2>
        <SkillsSection />
      </Section>

      <Section>
        <h2>Achievements</h2>
        <Grid>
          <ProjectCard
            title="KODIKON 3.0"
            description="Achieved Top 10 position in a national-level hackathon, demonstrating strong problem-solving and technical skills in a competitive environment."
            techStack={["Problem Solving", "Teamwork", "Innovation"]}
            githubUrl="#"
          />
          <ProjectCard
            title="Dotslash"
            description="Developed a food packet scanner with custom ML model for analyzing ingredients and making informed dietary choices."
            techStack={["ML", "Computer Vision", "Python"]}
            githubUrl="https://github.com/dineshhdini/balanced-bytes"
          />
          <ProjectCard
            title="ECEll"
            description="Won a debate competition on startups and finance, showcasing analytical thinking and entrepreneurial knowledge."
            techStack={["Analytics", "Finance", "Communication"]}
            githubUrl="#"
          />
        </Grid>
      </Section>

      <Copyright>© 2025 - Hardhik. Powered By Balatro</Copyright>
    </PageContainer>
  );
}

function App() {
  return (
    <Router>
      <GlobalStyles />
      <div className="crt-effect" />
      <AppContainer>
        <Navigation />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </AppContainer>
    </Router>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { theme } from '../styles/GlobalStyles';
import { fetchGitHubProjects, getCachedProjects } from '../utils/githubApi';

const ProjectsContainer = styled(motion.div)`
  width: 100%;
  max-width: 1200px;
  margin: 5rem auto;
  padding: 0 2rem;
`;

const Title = styled.h2`
  font-family: 'Press Start 2P', ${theme.fonts.secondary};
  color: #ff1f1f;
  font-size: 1.8rem;
  margin-bottom: 2rem;
  text-transform: uppercase;
  text-shadow: 
    0 0 6px #ff1f1f,
    0 0 12px rgba(255, 31, 31, 0.8);
  letter-spacing: 2px;
  text-align: center;
`;

const ProjectGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(6, 4, 12, 0.95);
  border-radius: 16px;
  overflow: hidden;
  border: 2px solid #ff1f1f;
  box-shadow: 
    0 0 20px #ff1f1f,
    0 0 40px rgba(255, 31, 31, 0.4);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(0, 0, 50, 0.8) 0%,
      rgba(0, 0, 100, 0.4) 100%
    );
    z-index: 1;
  }
`;

const ProjectImage = styled.div<{ $imageUrl: string }>`
  width: 100%;
  height: 250px;
  background-image: url(${props => props.$imageUrl});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #000033;
  border-bottom: 2px solid #ff1f1f;
  position: relative;
  z-index: 2;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at center,
      transparent 30%,
      rgba(0, 0, 50, 0.5) 100%
    );
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  position: relative;
  z-index: 2;
  background: rgba(0, 0, 20, 0.7);
`;

const ProjectTitle = styled.h3`
  font-family: 'Press Start 2P', ${theme.fonts.secondary};
  color: #ff1f1f;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  text-shadow: 0 0 4px #ff1f1f;
`;

const ProjectDescription = styled.p`
  font-family: ${theme.fonts.primary};
  color: #ffffff;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const TechTag = styled.span`
  font-family: ${theme.fonts.primary};
  background: rgba(255, 31, 31, 0.1);
  color: #ff1f1f;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-size: 0.8rem;
  border: 1px solid #ff1f1f;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const ProjectLink = styled(motion.a)`
  font-family: 'Press Start 2P', ${theme.fonts.secondary};
  background: transparent;
  color: #ff1f1f;
  border: 2px solid #ff1f1f;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  text-shadow: 0 0 4px #ff1f1f;
  box-shadow: 0 0 10px rgba(255, 31, 31, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 31, 31, 0.1);
    box-shadow: 0 0 20px rgba(255, 31, 31, 0.4);
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
`;

const LoadingText = styled.p`
  font-family: 'Press Start 2P', ${theme.fonts.secondary};
  color: #ff1f1f;
  font-size: 1rem;
  text-shadow: 0 0 4px #ff1f1f;
`;

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  flex-direction: column;
  gap: 1rem;
`;

const ErrorText = styled.p`
  font-family: 'Press Start 2P', ${theme.fonts.secondary};
  color: #ff1f1f;
  font-size: 1rem;
  text-shadow: 0 0 4px #ff1f1f;
  text-align: center;
`;

const RetryButton = styled(motion.button)`
  font-family: 'Press Start 2P', ${theme.fonts.secondary};
  background: transparent;
  color: #ff1f1f;
  border: 2px solid #ff1f1f;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  cursor: pointer;
  text-transform: uppercase;
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 10px rgba(255, 31, 31, 0.2);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 0 20px rgba(255, 31, 31, 0.4);
  }
`;

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3 }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  },
  hover: {
    y: -10,
    boxShadow: '0 0 30px #ff1f1f, 0 0 60px rgba(255, 31, 31, 0.4)',
    transition: { duration: 0.3 }
  }
};

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  category: string[];
  demoUrl?: string;
  githubUrl?: string;
  detailsUrl?: string;
}

export const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);
        setError(null);

        // Try to get cached projects first
        const cachedProjects = getCachedProjects();
        if (cachedProjects) {
          setProjects(cachedProjects);
          setLoading(false);
        }

        // Fetch fresh data
        const freshProjects = await fetchGitHubProjects();
        setProjects(freshProjects);
        setLoading(false);
      } catch (err) {
        console.error('Error loading projects:', err);
        setError('Failed to load projects. Please try again later.');
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  if (loading && projects.length === 0) {
    return (
      <ProjectsContainer {...pageTransition}>
        <Title>All Projects</Title>
        <LoadingContainer>
          <LoadingText>Loading Projects...</LoadingText>
        </LoadingContainer>
      </ProjectsContainer>
    );
  }

  if (error) {
    return (
      <ProjectsContainer {...pageTransition}>
        <Title>All Projects</Title>
        <ErrorContainer>
          <ErrorText>{error}</ErrorText>
          <RetryButton
            onClick={() => window.location.reload()}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Retry
          </RetryButton>
        </ErrorContainer>
      </ProjectsContainer>
    );
  }

  return (
    <ProjectsContainer {...pageTransition}>
      <Title>All Projects</Title>
      
      <ProjectGrid>
        <AnimatePresence mode="wait">
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              layout
            >
              <ProjectImage $imageUrl={project.imageUrl} />
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechStack>
                  {project.techStack.map(tech => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </TechStack>
                <ProjectLinks>
                  {project.demoUrl && (
                    <ProjectLink 
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Live Demo
                    </ProjectLink>
                  )}
                  {project.githubUrl && (
                    <ProjectLink 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      GitHub
                    </ProjectLink>
                  )}
                  {project.detailsUrl && (
                    <ProjectLink 
                      href={project.detailsUrl}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More
                    </ProjectLink>
                  )}
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </AnimatePresence>
      </ProjectGrid>
    </ProjectsContainer>
  );
}; 
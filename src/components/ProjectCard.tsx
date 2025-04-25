import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/GlobalStyles';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
}

const Card = styled.div`
  position: relative;
  width: 100%;
  min-height: 250px;
  background: ${theme.colors.background};
  border-radius: 12px;
  padding: 1.5rem;
  border: 3px solid ${theme.colors.primary};
  box-shadow: 0 0 20px rgba(255, 70, 85, 0.2);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const Title = styled.h3`
  font-family: ${theme.fonts.secondary};
  font-size: 1.2rem;
  color: ${theme.colors.primary};
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0;
`;

const Description = styled.p`
  font-family: ${theme.fonts.primary};
  font-size: 0.9rem;
  line-height: 1.6;
  color: ${theme.colors.text};
  margin-bottom: 1rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;

  span {
    font-family: ${theme.fonts.primary};
    background: rgba(255, 70, 85, 0.1);
    padding: 0.25rem 0.75rem;
    border-radius: 4px;
    font-size: 0.8rem;
    border: 1px solid ${theme.colors.primary};
    color: ${theme.colors.primary};
  }
`;

const GithubLink = styled.a`
  color: ${theme.colors.primary};
  opacity: 0.8;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: 1px solid ${theme.colors.primary};
  border-radius: 50%;
  background: rgba(255, 70, 85, 0.1);

  &:hover {
    opacity: 1;
    background: rgba(255, 70, 85, 0.2);
  }
`;

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  githubUrl,
}) => {
  return (
    <Card>
      <CardHeader>
        <Title>{title}</Title>
        {githubUrl !== "#" && (
          <GithubLink href={githubUrl} target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </GithubLink>
        )}
      </CardHeader>
      <Description>{description}</Description>
      <TechStack>
        {techStack.map((tech) => (
          <span key={tech}>
            {tech}
          </span>
        ))}
      </TechStack>
    </Card>
  );
}; 
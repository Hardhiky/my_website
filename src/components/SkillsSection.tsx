import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/GlobalStyles';
import { PokerHand } from './PokerHand';

const Container = styled.div`
  position: relative;
  min-height: 400px;
  padding: 2rem 0;
`;

const HandsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const HandTitle = styled.h3`
  font-family: ${theme.fonts.secondary};
  color: ${theme.colors.primary};
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 
    3px 3px 0px ${theme.colors.secondary},
    6px 6px 0px rgba(0, 0, 0, 0.3);
  position: relative;
  padding-bottom: 0.5rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: ${theme.colors.accent};
    box-shadow: 0 0 10px ${theme.colors.accent};
  }
`;

export const SkillsSection: React.FC = () => {
  const skillHands = [
    {
      title: 'Full Stack Development',
      skills: [
        'React.js/Next.js',
        'Node.js/Express',
        'TypeScript',
        'Python/Django',
        'PostgreSQL/MongoDB'
      ],
      combo: 'ROYAL FLUSH',
    },
    {
      title: 'AI & Machine Learning',
      skills: [
        'TensorFlow/PyTorch',
        'Computer Vision',
        'NLP/LLM Integration',
        'MCP/Control Systems',
        'Reinforcement Learning'
      ],
      combo: 'STRAIGHT FLUSH',
    },
    {
      title: 'Low-Level & OS Development',
      skills: [
        'C/C++',
        'Assembly',
        'Kernel Development',
        'Embedded Systems',
        'Real-time Systems'
      ],
      combo: 'FOUR OF A KIND',
    },
    {
      title: 'Systems & DevOps',
      skills: [
        'Linux/Unix Systems',
        'Git/GitHub/GitLab',
        'Docker/Kubernetes',
        'CI/CD Pipelines',
        'Infrastructure as Code'
      ],
      combo: 'FULL HOUSE',
    },
    {
      title: 'Information Security & Cloud',
      skills: [
        'AWS/Azure/GCP',
        'Network Security',
        'Penetration Testing',
        'Cloud Security',
        'System Hardening'
      ],
      combo: 'THREE OF A KIND',
    },
    {
      title: 'Mobile & Cross-Platform',
      skills: [
        'React Native',
        'Flutter',
        'Swift/Kotlin',
        'Progressive Web Apps',
        'Mobile UI/UX'
      ],
      combo: 'TWO PAIR',
    }
  ];

  return (
    <Container>
      <HandsContainer>
        {skillHands.map((hand) => (
          <div key={hand.title}>
            <HandTitle>{hand.title}</HandTitle>
            <PokerHand skills={hand.skills} combo={hand.combo} />
          </div>
        ))}
      </HandsContainer>
    </Container>
  );
}; 
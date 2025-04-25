import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../styles/GlobalStyles';

const PageContainer = styled(motion.div)`
  width: 100%;
  max-width: 1200px;
  margin-top: 2rem;
  padding: 2rem;
`;

const ExperienceCard = styled.div`
  background: rgba(6, 4, 12, 0.95);
  border-radius: 16px;
  padding: 2rem;
  border: 2px solid #ff1f1f;
  box-shadow: 
    0 0 20px #ff1f1f,
    0 0 40px rgba(255, 31, 31, 0.4);
`;

const Title = styled.h1`
  font-size: 2.4rem;
  color: #ffffff;
  margin-bottom: 2rem;
  font-family: 'Press Start 2P', monospace;
  text-shadow: 
    0 0 6px #ff1f1f,
    0 0 12px rgba(255, 31, 31, 0.8);
  text-align: center;
`;

const Timeline = styled.div`
  position: relative;
  padding: 2rem 0;
  
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: #ff1f1f;
    box-shadow: 
      0 0 10px #ff1f1f,
      0 0 20px rgba(255, 31, 31, 0.4);
    top: 0;
  }
`;

const TimelineItem = styled.div<{ isLeft: boolean }>`
  display: flex;
  justify-content: ${props => props.isLeft ? 'flex-start' : 'flex-end'};
  width: 100%;
  margin-bottom: 3rem;
  position: relative;
  
  &::before {
    content: '♦';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    color: #ff1f1f;
    font-size: 1.5rem;
    text-shadow: 0 0 10px #ff1f1f;
  }
`;

const TimelineContent = styled.div<{ isLeft: boolean }>`
  width: 45%;
  background: rgba(6, 4, 12, 0.8);
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #ff1f1f;
  position: relative;
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 20px;
    ${props => props.isLeft ? 'right: -10px' : 'left: -10px'};
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-${props => props.isLeft ? 'left' : 'right'}: 10px solid #ff1f1f;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 
      0 0 15px #ff1f1f,
      0 0 30px rgba(255, 31, 31, 0.4);
  }
`;

const CompanyName = styled.h3`
  font-size: 1.2rem;
  color: #ff1f1f;
  margin-bottom: 0.5rem;
  font-family: 'Press Start 2P', monospace;
  text-shadow: 0 0 6px #ff1f1f;
`;

const Role = styled.h4`
  font-size: 1rem;
  color: #ffffff;
  margin-bottom: 0.5rem;
  opacity: 0.9;
`;

const Duration = styled.div`
  font-size: 0.8rem;
  color: #ff1f1f;
  margin-bottom: 1rem;
  opacity: 0.8;
`;

const Description = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    color: #ffffff;
    margin-bottom: 0.5rem;
    padding-left: 1.2rem;
    position: relative;
    font-size: 0.9rem;
    line-height: 1.5;
    
    &::before {
      content: '>';
      position: absolute;
      left: 0;
      color: #ff1f1f;
      font-family: 'Press Start 2P', monospace;
      font-size: 0.8rem;
    }
  }
`;

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3 }
};

export function Experience() {
  return (
    <PageContainer {...pageTransition}>
      <ExperienceCard>
        <Title>Experience</Title>
        <Timeline>
          <TimelineItem isLeft={true}>
            <TimelineContent isLeft={true}>
              <CompanyName>CIE - PES University</CompanyName>
              <Role>ML Intern</Role>
              <Duration>Aug 2024 - Present • Bengaluru, India</Duration>
              <Description>
                <li>Designed and developed an object detection ML model using multiple CCTV footage to enhance real-time surveillance and monitoring.</li>
                <li>Leveraged OpenCV for image processing, TensorFlow/PyTorch for model training, and optimized performance using CUDA acceleration.</li>
                <li>Implemented custom data preprocessing techniques to improve detection accuracy in varied lighting and environmental conditions.</li>
                <li>Integrated the model into a scalable system for real-world deployment, ensuring efficient processing of live and recorded footage.</li>
              </Description>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem isLeft={false}>
            <TimelineContent isLeft={false}>
              <CompanyName>Ellipsonic</CompanyName>
              <Role>Software Intern</Role>
              <Duration>June 2024 - Aug 2024 • Bengaluru, India</Duration>
              <Description>
                <li>Developed an OCR system using OpenCV, PaddleOCR, and a custom ML model to extract and process information from pipe diagrams.</li>
                <li>Improved automation and accuracy in document analysis for a major client's building project.</li>
              </Description>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem isLeft={true}>
            <TimelineContent isLeft={true}>
              <CompanyName>Personal Projects</CompanyName>
              <Role>Independent Developer</Role>
              <Duration>2023 - Present</Duration>
              <Description>
                <li>Created RiX, an experimental operating system for Intel IA-32 architecture built from scratch in Rust.</li>
                <li>Developed Drawfish, a custom Stockfish model with ML integration for enforcing drawish positions in chess.</li>
                <li>Built an AI Interview Bot with adaptive questioning and real-time speech processing capabilities.</li>
              </Description>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </ExperienceCard>
    </PageContainer>
  );
} 
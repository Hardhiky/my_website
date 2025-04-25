import styled from 'styled-components';
import { motion } from 'framer-motion';
import resumePDF from '../assets/resume.pdf';

const PageContainer = styled(motion.div)`
  width: 100%;
  max-width: 1200px;
  margin-top: 2rem;
  padding: 2rem;
`;

const ResumeCard = styled.div`
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
`;

const DownloadButton = styled.a`
  display: inline-block;
  background: transparent;
  color: #ff1f1f;
  border: 2px solid #ff1f1f;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-family: 'Press Start 2P', monospace;
  font-size: 1rem;
  text-decoration: none;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  box-shadow: 0 0 10px rgba(255, 31, 31, 0.4);
  text-shadow: 0 0 6px #ff1f1f;
  cursor: pointer;

  &:hover {
    background: rgba(255, 31, 31, 0.1);
    box-shadow: 
      0 0 20px #ff1f1f,
      0 0 40px rgba(255, 31, 31, 0.4);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const ResumePreview = styled.div`
  width: 100%;
  height: 800px;
  border-radius: 8px;
  overflow: hidden;
  border: 2px solid rgba(255, 31, 31, 0.4);
  background: rgba(255, 255, 255, 0.05);

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3 }
};

export function Resume() {
  return (
    <PageContainer {...pageTransition}>
      <ResumeCard>
        <Title>Resume</Title>
        <DownloadButton href={resumePDF} download="Hardhik_Y_Resume.pdf">
          Download Resume
        </DownloadButton>
        <ResumePreview>
          <iframe src={resumePDF + "#view=FitH"} title="Resume Preview" />
        </ResumePreview>
      </ResumeCard>
    </PageContainer>
  );
} 
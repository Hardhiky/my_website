import React from 'react';
import styled, { keyframes } from 'styled-components';
import { theme } from '../styles/GlobalStyles';

const HandContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: -30px;
  margin: 2rem 0;
  position: relative;
  background: rgba(20, 0, 20, 0.8);
  padding: 2rem;
  border-radius: 8px;
`;

const ComboText = styled.div`
  font-family: ${theme.fonts.secondary};
  font-size: 2rem;
  color: #FF1744;
  text-shadow: 
    0 0 4px #FF1744,
    0 0 8px #FF1744;
  text-transform: uppercase;
  letter-spacing: 2px;
  image-rendering: pixelated;
  -webkit-font-smoothing: none;
  margin-bottom: 2rem;
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const Card = styled.div`
  position: relative;
  width: 180px;
  height: 260px;
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.neonRed};
  padding: 1rem;
  margin: 0.5rem;
  min-width: 120px;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: ${({ theme }) => theme.shadows.card};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: visible;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.cardHover};
    border-color: ${({ theme }) => theme.colors.neonBlue};
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  position: relative;
`;

const Suit = styled.div`
  font-size: 3rem;
  color: ${theme.colors.primary};
  text-shadow: 0 0 10px ${theme.colors.primary};
  margin-bottom: 1.5rem;
`;

const Value = styled.div`
  font-family: ${theme.fonts.secondary};
  font-size: 0.9rem;
  color: ${theme.colors.text};
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-top: auto;
  animation: ${float} 2s ease-in-out infinite;
  text-shadow: 
    0 0 5px ${theme.colors.text},
    0 0 10px rgba(255, 255, 255, 0.5);
  position: relative;
  padding: 0.75rem 1rem;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 6px;
  backdrop-filter: blur(4px);
  max-width: 150px;
  word-wrap: break-word;
  hyphens: auto;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 
    0 0 10px rgba(0, 0, 0, 0.3),
    inset 0 0 5px rgba(255, 255, 255, 0.1);
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: 8px;
    background: linear-gradient(45deg, 
      rgba(255, 255, 255, 0.15),
      rgba(255, 255, 255, 0.05)
    );
    z-index: -1;
  }
`;

interface PokerHandProps {
  skills: string[];
  combo: string;
}

const suits = ['♠', '♥', '♦', '♣'];

export const PokerHand: React.FC<PokerHandProps> = ({ skills, combo }) => {
  return (
    <HandContainer>
      <ComboText>{combo}</ComboText>
      <CardsContainer>
        {skills.map((skill, index) => (
          <Card key={skill}>
            <CardContent>
              <Suit>{suits[index % suits.length]}</Suit>
              <Value>{skill}</Value>
            </CardContent>
          </Card>
        ))}
      </CardsContainer>
    </HandContainer>
  );
}; 
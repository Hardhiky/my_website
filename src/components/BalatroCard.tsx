import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../styles/GlobalStyles';

interface BalatroCardProps {
  title: string;
  description: string;
  score: number;
  rarity: 'legendary' | 'epic' | 'rare' | 'common';
  className?: string;
}

const CardContainer = styled(motion.div)<{ rarity: string }>`
  position: relative;
  background-color: ${theme.colors.dark};
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: ${props => theme.shadows[props.rarity as keyof typeof theme.shadows]};
  border: 2px solid ${props => {
    switch (props.rarity) {
      case 'legendary':
        return theme.colors.primary;
      case 'epic':
        return theme.colors.secondary;
      case 'rare':
        return theme.colors.accent;
      default:
        return 'rgba(255, 255, 255, 0.2)';
    }
  }};
  transform-style: preserve-3d;
  transition: all 0.3s ease-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${theme.shadows.cardHover};
  }
`;

const CardHeader = styled.div`
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  font-family: ${theme.fonts.primary};
  color: ${theme.colors.primary};
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  text-shadow: 3px 3px 0px rgba(255, 70, 85, 0.3);
`;

const CardDescription = styled.p`
  color: ${theme.colors.text};
  font-size: 0.9rem;
  line-height: 1.5;
`;

const ScoreContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const StarIcon = styled(motion.span)`
  color: ${theme.colors.primary};
  font-size: 1.2rem;
`;

const Score = styled.span`
  font-family: ${theme.fonts.primary};
  color: ${theme.colors.text};
  font-size: 1rem;
`;

const RarityIndicator = styled.div<{ rarity: string }>`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${props => {
    switch (props.rarity) {
      case 'legendary':
        return theme.colors.primary;
      case 'epic':
        return theme.colors.secondary;
      case 'rare':
        return theme.colors.accent;
      default:
        return 'rgba(255, 255, 255, 0.5)';
    }
  }};
  box-shadow: 0 0 8px ${props => {
    switch (props.rarity) {
      case 'legendary':
        return theme.colors.primary;
      case 'epic':
        return theme.colors.secondary;
      case 'rare':
        return theme.colors.accent;
      default:
        return 'rgba(255, 255, 255, 0.3)';
    }
  }};
`;

export const BalatroCard: React.FC<BalatroCardProps> = ({
  title,
  description,
  score,
  rarity,
  className,
}) => {
  return (
    <CardContainer
      className={className}
      rarity={rarity}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <RarityIndicator rarity={rarity} />
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <ScoreContainer>
        <StarIcon
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        >
          ★
        </StarIcon>
        <Score>{score}</Score>
      </ScoreContainer>
    </CardContainer>
  );
}; 
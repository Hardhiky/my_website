import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../styles/GlobalStyles';

const BlogContainer = styled(motion.div)`
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

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const BlogCard = styled(motion.div)`
  background: rgba(6, 4, 12, 0.95);
  border-radius: 16px;
  overflow: hidden;
  border: 2px solid #ff1f1f;
  box-shadow: 
    0 0 20px #ff1f1f,
    0 0 40px rgba(255, 31, 31, 0.4);
  position: relative;
  padding: 1.5rem;
  
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

const BlogTitle = styled.h3`
  font-family: 'Press Start 2P', ${theme.fonts.secondary};
  color: #ff1f1f;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  text-shadow: 0 0 4px #ff1f1f;
  position: relative;
  z-index: 2;
`;

const BlogDescription = styled.p`
  font-family: ${theme.fonts.primary};
  color: #ffffff;
  margin-bottom: 1rem;
  line-height: 1.6;
  position: relative;
  z-index: 2;
`;

const BlogLink = styled(motion.a)`
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
  position: relative;
  z-index: 2;

  &:hover {
    background: rgba(255, 31, 31, 0.1);
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

interface BlogPost {
  id: number;
  title: string;
  description: string;
  url: string;
  date: string;
}

export const Blog: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Why Rust Might Surpass C: A Developer's Perspective",
      description: "An in-depth analysis of Rust's potential to overtake C in systems programming, exploring its safety features, performance characteristics, and growing ecosystem.",
      url: "https://medium.com/@hardhikyd9/why-rust-might-surpass-c-a-developers-perspective-bf9835b4059f",
      date: "2024-03-15"
    }
  ];

  return (
    <BlogContainer {...pageTransition}>
      <Title>Blog Posts</Title>
      <BlogGrid>
        {blogPosts.map(post => (
          <BlogCard
            key={post.id}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <BlogTitle>{post.title}</BlogTitle>
            <BlogDescription>{post.description}</BlogDescription>
            <BlogLink
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Read Article
            </BlogLink>
          </BlogCard>
        ))}
      </BlogGrid>
    </BlogContainer>
  );
}; 
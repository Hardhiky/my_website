import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PageContainer = styled(motion.div)`
  width: 100%;
  max-width: 1200px;
  margin-top: 2rem;
  padding: 2rem;
`;

const AboutCard = styled.div`
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

const Section = styled.section`
  margin-bottom: 2rem;

  h2 {
    font-size: 1.5rem;
    color: #ff1f1f;
    margin-bottom: 1rem;
    font-family: 'Press Start 2P', monospace;
    text-shadow: 0 0 6px #ff1f1f;
  }

  p {
    color: #ffffff;
    line-height: 1.6;
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 1rem 0;

  li {
    color: #ffffff;
    margin-bottom: 0.5rem;
    padding-left: 1.5rem;
    position: relative;

    &:before {
      content: '♦';
      color: #ff1f1f;
      position: absolute;
      left: 0;
      text-shadow: 0 0 6px #ff1f1f;
    }
  }
`;

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3 }
};

export function About() {
  return (
    <PageContainer {...pageTransition}>
      <AboutCard>
        <Title>About Me</Title>
        
        <Section>
          <h2>Background</h2>
          <p>
            I'm that guy who uses Arch btw, and yes, I've compiled my own kernel (because who needs sleep when you can optimize syscalls?). 
            My journey began with a simple `sudo rm -rf /` curiosity (just kidding!) and evolved into a deep passion for systems programming 
            and AI. When I'm not fighting with Rust's borrow checker or trying to convince people that Go's error handling is actually elegant, 
            I'm probably customizing my Neovim config or writing yet another shell script to automate my coffee brewing process.
          </p>
          <p>
            As an ML Engineer and Full Stack Developer, I spend my days teaching machines to think and my nights arguing with 
            compilers. I've survived the infamous "cannot borrow `x` as mutable because it is also borrowed as immutable" 
            battles, and I've learned to embrace the Zen of Go's "if err != nil" mantra. My code is so optimized, it makes 
            Red Bull's pit stops look slow.
          </p>
        </Section>

        <Section>
          <h2>Tech Philosophy</h2>
          <List>
            <li>If it compiles on the first try, it's probably not Rust</li>
            <li>Tabs vs Spaces? Real developers use cat &gt;&gt; file.txt</li>
            <li>The only valid IDE is ed (the standard text editor)</li>
            <li>All bugs are just undocumented features in beta testing</li>
            <li>Time complexity is just a suggestion when you have enough RAM</li>
          </List>
        </Section>

        <Section>
          <h2>Current Adventures</h2>
          <p>
            Currently diving deep into the rabbit hole of OS development with RiX, where I'm learning that 
            writing a kernel is just advanced rubber duck debugging. When I'm not fighting with segfaults or 
            trying to explain to my rubber duck why my interrupt handlers aren't working, I'm probably 
            contributing to open-source projects or experimenting with new ways to make my terminal look even 
            more cyberpunk.
          </p>
        </Section>

        <Section>
          <h2>Off-Track Passions</h2>
          <p>
            When I'm not pushing code to production, you'll find me glued to F1 races, analyzing race strategies 
            like I debug code, and debating whether Ferrari's strategy is more unpredictable than a race condition. 
            I approach programming like an F1 team: continuous integration, rapid deployment, and always looking for 
            that extra millisecond of performance. Box, box for a quick code review!
          </p>
          <p>
            In the world of two wheels, Marc Marquez stands as my ultimate idol. His incredible ability to push beyond 
            limits and comeback from career-threatening injuries shows that with determination, you can overcome any 
            obstacle - whether it's a highside at 150mph or a production bug at 3 AM. Just like MM93's "all in" style, 
            I believe in giving 100% in everything I do, even if it means occasionally sliding into the gravel trap of 
            debugging.
          </p>
        </Section>

        <Section>
          <h2>Beyond The Circuit</h2>
          <List>
            <li>Chess enthusiast - because racing lines and chess moves both require strategic thinking</li>
            <li>Golf player - where precision matters as much as in writing clean code</li>
            <li>Cricket fan - where patience is key, just like waiting for large models to train</li>
            <li>Tennis player - because sometimes you need to serve and volley your way through problems</li>
          </List>
          <p>
            Whether it's calculating the perfect racing line through Eau Rouge, planning moves in chess, 
            perfecting a golf swing, or diving into a cricket analytics, I bring the same analytical mindset 
            and passion for improvement that I apply to my code. After all, life, like racing, is all about 
            finding the right balance between speed and precision.
          </p>
        </Section>

        <Section>
          <h2>Skills & Battle Scars</h2>
          <List>
            <li>Fluent in over 6 million forms of programming (and still can't center a div)</li>
            <li>Professional memory leak investigator in C++</li>
            <li>Certified "It works on my machine" engineer</li>
            <li>Expert in turning coffee into code</li>
            <li>Advanced debugging technique: staring at code until it surrenders</li>
          </List>
        </Section>

        <Section>
          <h2>Education & Enlightenment</h2>
          <List>
            <li>B.Tech in Computer Science (because why debug hardware when you can debug software?)</li>
            <li>Self-taught in the ancient arts of Stack Overflow copy-paste</li>
            <li>PhD in Googling error messages</li>
            <li>Graduated with honors from the University of Vim Exit Strategies</li>
          </List>
        </Section>

        <Section>
          <h2>When Not Coding</h2>
          <p>
            You can find me ricing my Linux setup for the nth time, writing blog posts about why Rust is the future 
            (while secretly enjoying Python's simplicity), or explaining to my friends why they should switch to a 
            tiling window manager. I also enjoy contributing to open-source projects and helping others escape Vim.
          </p>
        </Section>
      </AboutCard>
    </PageContainer>
  );
} 
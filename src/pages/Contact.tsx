import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../styles/GlobalStyles';
import emailjs from '@emailjs/browser';

const ContactContainer = styled(motion.div)`
  width: 100%;
  max-width: 800px;
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
    0 0 12px rgba(255, 31, 31, 0.8),
    0 0 24px rgba(255, 31, 31, 0.4);
  letter-spacing: 2px;
  text-align: center;
`;

const ContactCard = styled(motion.div)`
  background: rgba(6, 4, 12, 0.95);
  border-radius: 16px;
  padding: 2rem;
  border: 2px solid #ff1f1f;
  box-shadow: 
    0 0 20px #ff1f1f,
    0 0 40px rgba(255, 31, 31, 0.4),
    0 0 60px rgba(255, 31, 31, 0.2);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(100, 0, 0, 0.8) 0%,
      rgba(50, 0, 0, 0.4) 100%
    );
    z-index: 1;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
  z-index: 2;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const MessageInputGroup = styled(InputGroup)`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-right: 70px;
`;

const ChatGPTButton = styled.a`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: 2px solid #19C37D;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #19C37D;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 0 10px rgba(25, 195, 125, 0.4);
  z-index: 3;
  
  &:hover {
    background: rgba(25, 195, 125, 0.1);
    box-shadow: 
      0 0 20px rgba(25, 195, 125, 0.6),
      0 0 40px rgba(25, 195, 125, 0.3);
    transform: translateY(-50%) scale(1.1);
  }

  svg {
    width: 20px;
    height: 20px;
    filter: drop-shadow(0 0 4px rgba(25, 195, 125, 0.6));
  }
`;

const Label = styled.label`
  font-family: 'Press Start 2P', ${theme.fonts.secondary};
  color: #ff1f1f;
  font-size: 0.8rem;
  text-shadow: 
    0 0 4px #ff1f1f,
    0 0 8px rgba(255, 31, 31, 0.6);
`;

const Input = styled.input`
  background: rgba(0, 0, 0, 0.5);
  border: 2px solid #ff1f1f;
  border-radius: 8px;
  padding: 0.8rem;
  color: #ffffff;
  font-family: ${theme.fonts.primary};
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    box-shadow: 
      0 0 10px #ff1f1f,
      0 0 20px rgba(255, 31, 31, 0.4);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const TextArea = styled.textarea`
  background: rgba(0, 0, 0, 0.5);
  border: 2px solid #ff1f1f;
  border-radius: 8px;
  padding: 0.8rem;
  color: #ffffff;
  font-family: ${theme.fonts.primary};
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    box-shadow: 
      0 0 10px #ff1f1f,
      0 0 20px rgba(255, 31, 31, 0.4);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const SubmitButton = styled(motion.button)`
  background: transparent;
  color: #ff1f1f;
  border: 2px solid #ff1f1f;
  border-radius: 8px;
  padding: 1rem 2rem;
  font-family: 'Press Start 2P', ${theme.fonts.secondary};
  font-size: 0.8rem;
  cursor: pointer;
  text-transform: uppercase;
  text-shadow: 
    0 0 4px #ff1f1f,
    0 0 8px rgba(255, 31, 31, 0.6);
  box-shadow: 
    0 0 10px rgba(255, 31, 31, 0.2),
    0 0 20px rgba(255, 31, 31, 0.1);
  transition: all 0.3s ease;
  align-self: center;
  margin-top: 1rem;

  &:hover {
    background: rgba(255, 31, 31, 0.1);
    box-shadow: 
      0 0 20px rgba(255, 31, 31, 0.4),
      0 0 40px rgba(255, 31, 31, 0.2);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Message = styled(motion.div)<{ type: 'success' | 'error' }>`
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  text-align: center;
  font-family: 'Press Start 2P', ${theme.fonts.secondary};
  font-size: 0.8rem;
  background: ${props => props.type === 'success' ? 'rgba(0, 255, 0, 0.1)' : 'rgba(255, 0, 0, 0.1)'};
  border: 2px solid ${props => props.type === 'success' ? '#00ff00' : '#ff0000'};
  color: ${props => props.type === 'success' ? '#00ff00' : '#ff0000'};
  text-shadow: 
    0 0 4px ${props => props.type === 'success' ? '#00ff00' : '#ff0000'},
    0 0 8px ${props => props.type === 'success' ? 'rgba(0, 255, 0, 0.6)' : 'rgba(255, 0, 0, 0.6)'};
`;

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3 }
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    boxShadow: '0 0 30px rgba(255, 31, 31, 0.6), 0 0 60px rgba(255, 31, 31, 0.3)',
    transition: { duration: 0.3 }
  },
  tap: {
    scale: 0.95,
    transition: { duration: 0.1 }
  }
};

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const getChatGPTUrl = () => {
    const basePrompt = `I want to send an email to Hardhik Y.

Subject: ${formData.subject || '[Your subject]'}

Current draft:
${formData.message || '[Your message]'}

Please help me improve this message to make it more professional and engaging. Consider:
1. Better structure and flow
2. Professional tone
3. Clear and concise language
4. Proper formatting`;

    return `https://chat.openai.com/?model=gpt-4&prompt=${encodeURIComponent(basePrompt)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Initialize EmailJS with your public key
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      if (!publicKey) {
        throw new Error('EmailJS public key is not configured');
      }
      emailjs.init(publicKey);

      // Send the email
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "hardhikyd9@gmail.com"
        }
      );
      
      setStatus({
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactContainer {...pageTransition}>
      <Title>Contact Me</Title>
      <ContactCard>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="subject">Subject</Label>
            <Input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="What's this about?"
            />
          </InputGroup>

          <MessageInputGroup>
            <Label htmlFor="message">Message</Label>
            <TextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your message here..."
            />
            <ChatGPTButton 
              href={getChatGPTUrl()} 
              target="_blank" 
              rel="noopener noreferrer"
              title="Get help from ChatGPT"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.6 8.3829 14.6201 7.2144a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.4047-.6813zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/>
              </svg>
            </ChatGPTButton>
          </MessageInputGroup>

          <SubmitButton
            type="submit"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </SubmitButton>

          {status.type && (
            <Message
              type={status.type}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {status.message}
            </Message>
          )}
        </Form>
      </ContactCard>
    </ContactContainer>
  );
}; 
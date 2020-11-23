import { motion } from 'framer-motion';
import styled from 'styled-components';

interface ContainerProps {
  color?: string;
}

export const Container = styled(motion.div)<ContainerProps>`
  align-self: stretch;
  background-color: ${props => props.color ?? "#333"};
  cursor: pointer;
  flex: 1;
  margin: 0px 10px;
  padding: 15px;
  transition: .6s transform;

  &:hover {
    z-index: 1;
    transform: scale(1.01);
    box-shadow: 0px 0px 20px #22222222;
  }
`;


export const Title = styled.span`  
  font-size: 56px;
  font-weight: 100;
`;
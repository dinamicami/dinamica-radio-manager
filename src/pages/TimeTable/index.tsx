import React from 'react';
import { Container } from './styles';
import { AnimateSharedLayout } from 'framer-motion';

import Navigation from './components/Navigation';
import ProgramSelector from './components/ProgramSelector';
import TimeLine from './components/TimeLine';

import { TimeTableContextProvider } from './context';

const TimeTable: React.FC = () => {
  return (
    <TimeTableContextProvider>

      <Container>
        <AnimateSharedLayout>
          <Navigation />
          <ProgramSelector />
        </AnimateSharedLayout>
        <TimeLine />
      </Container>
    </TimeTableContextProvider>
  );
}

export default TimeTable;

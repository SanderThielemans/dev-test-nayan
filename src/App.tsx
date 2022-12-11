import React from 'react';
import './App.css';
import { Countdown } from './components/Countdown/Countdown';
import { HeroBanner } from './components/HeroBanner/HeroBanner';
import { Info } from './components/Info/Info';
import { Newsletter } from './components/Newsletter/Newsletter';
import { content } from './config/black-friday';

function App() {
  //const endDate = new Date("December 24, 2022 00:00:00");
  const endDate = new Date("December 24, 2022 00:00:00");

  return (
    <div className="App">
      <HeroBanner
        title={content.hero.title}
        subtitle={content.hero.subtitle}
      >
        <Countdown end={endDate} />
      </HeroBanner>

      <Info blocks={content.info} />

      <Newsletter
        title={content.newsletter.title}
        description={content.newsletter.description}
      />
    </div>
  );
}

export default App;

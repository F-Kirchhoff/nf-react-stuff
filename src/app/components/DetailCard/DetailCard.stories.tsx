import React from 'react';
import DetailCard from './DetailCard';

const TESTSTUFF = {
  id: 1,
  name: "Marf's Magic Cards",
  description: 'A few decks for all the colors',
  categories: ['game', 'collectible', 'art', 'paper'],
};

export default {
  title: 'Component/DetailCard',
  component: DetailCard,
};

export const Regular = (): JSX.Element => <DetailCard content={TESTSTUFF} />;

import React from 'react';
import Card from './Card';

const TESTSTUFF = {
  id: 1,
  name: "Marf's Magic Cards",
  description: 'A few decks for all the colors',
  categories: ['game', 'collectible', 'art', 'paper'],
};

export default {
  title: 'Component/Card',
  component: Card,
};

export const Regular = (): JSX.Element => (
  <Card payload={TESTSTUFF} showDetails={false} />
);
export const Detail = (): JSX.Element => (
  <Card payload={TESTSTUFF} showDetails={true} />
);

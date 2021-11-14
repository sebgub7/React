import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { listData, pageContents } from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero titleText={listData.title} photo={listData.image} />
    <h2>{pageContents.FAQTitle}</h2>
    <p>{pageContents.FAQSubtitle}</p>
  </Container>
);

export default FAQ;

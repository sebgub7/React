import React from 'react';
import { pageContents, listData } from '../../data/dataStore';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';

const Info = () => (
  <Container>
    <Hero titleText={listData.title} photo={listData.image} />
    <h2>{pageContents.infoTitle}</h2>
    <p>{pageContents.infoSubtitle}</p>
  </Container>
);

export default Info;
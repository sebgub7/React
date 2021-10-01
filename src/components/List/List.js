import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js'

class List extends React.Component {
  render() {
    return (
      <section id="List" className={styles.component}>
          <Hero />
      </section>
    )
  }
}

export default List;

import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
//import Creator from '../Creator/Creator.js';
import Icon from '../Icon/Icon.js';

class Column extends React.Component {

  static propTypes = {
    cards: PropTypes.array,
    title: PropTypes.string.isRequired,
    children: PropTypes.string,
    icon: PropTypes.string,
  }

  render() {
    const {title, icon, cards} = this.props;

    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{title}
          <span className={styles.icon}>
            <Icon name={icon} />
          </span>
        </h3>
        <div className={styles.card}>
          {cards.map(cardData => (
            <Card key ={cardData.id} {...cardData} />
          ))}
        </div>
        {/*<div className={styles.creator}>
        </div>*/}
      </section>
    );
  }
}

export default Column;

import React from 'react';
import styles from './SearchResults.scss';
import { settings } from '../../data/dataStore';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Icon from '../Icon/Icon.js';

class SearchResults extends React.Component {
  static propTypes = {
    cards: PropTypes.array,
  }

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  render() {
    const { cards } = this.props;

    return (
      <section className={styles.component}>
        <h3 className={styles.title}>Search Results:
          <span className={styles.icon}>
            <Icon name='search' />
          </span>
        </h3>
        <div className={styles.card}>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
      </section>
    );
  }
}

export default SearchResults;

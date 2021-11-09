import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/ColumnContainer.js';
import {settings, listData} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
//import Creator from '../Creator/Creator.js';

class List extends React.Component {

  static propTypes = {
    photo: PropTypes.string,
    title: PropTypes.node.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array,
  }

  static defaultProps = {
    description: settings.defaultListDescription,
    columns: listData.columns,
  }

  render() {
    const {title, photo, description, columns} = this.props;
    return (
      <section id="List" className={styles.component}>
        <Hero titleText={title} photo={photo} />
        <div className={styles.description}>
          {ReactHtmlParser(description)}
        </div>
        <div className={styles.columns}>
          {columns.map(columnData => (
            <Column key={columnData.id} {...columnData} />
          ))}
        </div>

        {/*<div className={styles.creator}>
          <Creator text={settings.columnCreatorText}>
        </div>
        */}
      </section>
    );
  }
}

export default List;

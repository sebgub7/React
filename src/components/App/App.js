import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';
import {pageContents} from '../../data/dataStore';

class App extends React.Component {
  render() {
    return (<div id="app">
      <main className={styles.component}>
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
        <List image='./src/styles/space.png' title={[
          'Things to do ', <sup key='1'>soon!</sup>,
        ]}/>
      </main>
    </div>);
  }
}

export default App;

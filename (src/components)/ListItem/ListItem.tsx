import React from 'react';
import styles from './ListItem.module.css';

const ListItem: React.FC = () => (
  <div className={styles.ListItem} data-testid="ListItem">
    ListItem Component
  </div>
);

export default ListItem;

/*
 *
 * HomePage
 *
 */

// import React, { memo } from 'react';
import React, { memo, useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';

import WordList from './data';

const HomePage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const response = await fetch('/contact-form/list');
    const users = await response.json();
    setUsers(users);
  }

  return (
    <div>
      <h1>{pluginId}&apos;s HomePage</h1>
      <p>1. Happy coding</p>
      <div>
        <ul>
            {users.map(user => (
              <li>{user.name}</li>
            ))}
        </ul>
      </div>
      <WordList />
    </div>
  );
};


export default memo(HomePage);

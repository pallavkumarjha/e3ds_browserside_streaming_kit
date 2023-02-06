import React from 'react';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

import './App.css';

const Home = () => <span>Home</span>;
const About = () => <span>About</span>;
const Users = () => <span>Users</span>;

const App = () => (

  <Container className="p-3">
    <h1 className="header">Welcome To React-Bootstrap</h1>
    <h2>
      Navigate to{' '}
      <ButtonToolbar className="custom-btn-toolbar">
        <Button>Home</Button>
        <Button>About</Button>
        <Button>Users</Button>
      </ButtonToolbar>
    </h2>
  </Container>

);

export default App;

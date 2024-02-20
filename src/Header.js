import React from 'react';
import './App.css';	
import { Container } from 'react-bootstrap';


const Header = () => {
  return (
    <header className='bg-dark text-light py-3'>
      <Container>
        <h1>Demo bootstrap React App</h1>
      </Container>
    </header>
  );
  }
  
  export default Header;
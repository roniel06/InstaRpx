import React from 'react';
import './App.css';
import Button from './components/button/Button';
import Card from  './components/card/Card'
import Container from './components/card/Container'
import Input from './components/Input/Input';
import Title from './components/title/Title';

function App() {
  return (
    <div className="App">
      <Container>
        <Title/>
        <Card>
        <Input label='Correo' placeholder='Correo'/>
        <Input label='Contraseña' placeholder='Contraseña'/>
        <Button>Enviar</Button>
      </Card>
      </Container>
    
    </div>
  );
}

export default App;

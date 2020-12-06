import * as React from 'react'
import Button from '../../components/button/Button'
import Card from '../../components/card/Card'
import Container from '../../components/card/Container'
import Center from '../../components/center/Center'
import Input from '../../components/Input/Input'
import Title from '../../components/title/Title'
import {Link} from 'react-router-dom'

export default class Login extends React.Component {
  public render() {
    return (
      <div className="App">
        <Container isCentered={true}>
          <Card>
            <Title>Iniciar Sesion</Title>
            <Input label='Correo' placeholder='Correo' />
            <Input label='Contraseña' placeholder='Contraseña' />
            <Button block={true}>Iniciar Sesion</Button>
            <Center>
              <Link to='/register'>Registrarse</Link>
            </Center>
          </Card>
        </Container>

      </div>
    )
  }
}
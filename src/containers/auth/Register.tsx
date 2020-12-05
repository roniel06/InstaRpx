import * as React from 'react'
import Button from '../../components/button/Button'
import Card from '../../components/card/Card'
import Container from '../../components/card/Container'
import Center from '../../components/center/Center'
import Input from '../../components/Input/Input'
import Title from '../../components/title/Title'
import {Link} from 'react-router-dom'

export default class Register extends React.Component {
  public render() {
    return (
        <Container>
          <Card>
            <Title>Registrarse</Title>
            <Input label='Correo' placeholder='Correo' />
            <Input label='Contraseña' placeholder='Contraseña' />
            <Button block={true}>Enviar</Button>
            <Center>
              <Link to='/'>Iniciar Sesion</Link>
            </Center>
          </Card>
        </Container>      
    )
  }
}
import React from "react";
import Button from "../button/Button";
import Card from "../card/Card";
import Container from "../card/Container";
import Center from "../center/Center";
import Input from "../Input/Input";
import { Link } from 'react-router-dom'
import Title from "../title/Title";
import { InjectedFormProps, reduxForm } from 'redux-form'


export default class LoginForm extends React.Component<InjectedFormProps> {
    public render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit}>
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
            </form>

        )
    }
}


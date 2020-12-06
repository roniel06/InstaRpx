import * as React from 'react'
import { Link } from 'react-router-dom'
import { faUser, faNewspaper } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProfileImg from '../progileImg/ProfileImg'
import Button from '../button/Button'
import Card from '../card/Card'

export default class Profile extends React.Component {
    public render() {
        return (
            <div style={styles.container}>
                <div style={styles.row}>
                    <ProfileImg imgUrl='http://placekitten.com/100/100' />
                    <Button>Agregar</Button>
                </div>
                <div style={styles.row}>
                    <Card><img src='http://placekitten.com/100/100'/></Card>
                    <Card><img src='http://placekitten.com/100/100'/></Card>
                    <Card><img src='http://placekitten.com/100/100'/></Card>
                </div>
                <div style={styles.row}>
                    <Card><img src='http://placekitten.com/100/100'/></Card>
                    <Card><img src='http://placekitten.com/100/100'/></Card>
                    <Card><img src='http://placekitten.com/100/100'/></Card>
                </div>
            </div>
        )
    }
}


const styles = {
    container: {
        padding: '15px',     
    } as React.CSSProperties,
    row: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom:'10px'
    } as React.CSSProperties
} 
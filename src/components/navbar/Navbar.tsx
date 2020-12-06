import * as React from 'react'
import { Link } from 'react-router-dom'
import { faUser, faNewspaper } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class NavBar extends React.Component {
    public render() {
        return (
            <div style={styles.container}>
                <Link to='/app/newsfeed'><FontAwesomeIcon icon={faNewspaper} />InstaRpx</Link>
                <div style={styles.profile}>
                    <Link to='/app/profile'><FontAwesomeIcon icon={faUser} />Perfil</Link>
                </div>

            </div>
        )
    }
}


const styles = {
    profile: {
        float: 'right',
        textDecoration: 'none',
        color:'#555'        
    } as React.CSSProperties,
    container: {
        borderBottom: 'solid 1px #aaa',
        padding: '10px 15px',

    } as React.CSSProperties
} 
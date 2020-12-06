import { faRetweet, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'


export default class Footer extends React.Component {
    public render() {
        return (
            <div style={styles.footer}>
                <div style={styles.button}><FontAwesomeIcon icon={faThumbsUp} /> Like</div>
                <div style={styles.button}><FontAwesomeIcon icon={faRetweet} /> Compartir</div>
            </div>
        )
    }
}

const styles = {
    footer: {
        backgroundColor: '#eee',
        marginLeft: '-15px',
        width: 'calc(100% + 30px)',
        display: 'flex',
        padding: '10px 15px'
    },
    button: {
        cursor: 'pointer',
        flex: 1,
        padding: '10px 15px',
        textAlign: 'center'
    } as React.CSSProperties
} 
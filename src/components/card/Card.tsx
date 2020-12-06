import * as React from 'react'


const Card = ({ children }) => {

    return (
        <div style={styles.card}>
            {children}
        </div>
    )

}

const styles = {
    card: {
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        padding: '10px 15px '        

    }
}
export default Card;
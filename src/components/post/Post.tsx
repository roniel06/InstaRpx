import * as React from 'react'
import Footer from '../footer/Footer'

interface IPostProps {
    imgSrc?: string
}

export default class Post extends React.Component<IPostProps> {
    public render() {
        const { imgSrc } = this.props

        return (
            <div style={styles.container}>
                <img src={imgSrc} />
                <Footer/>
            </div>

        )
    }
}

const styles ={
    container: {
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        padding: '10px 15px',
        marginBottom:'10px'
    }    
} 
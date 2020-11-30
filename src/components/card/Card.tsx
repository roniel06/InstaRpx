import * as React from 'react'


export default class Card extends React.Component{
    public render(){
        const { children } = this.props;
        return(
                <div style={styles.card}>
                    {children}
                </div>
        )
    }
}

const styles ={
    card:{
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        padding:'10px 15px ',
        width:'15%',
        height:'15%'
    }
    
}
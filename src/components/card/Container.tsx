import * as React from 'react'


export default class Container extends React.Component{
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
        backgroundColor: '#eee',
        padding:'10px 15px ',
        width:'calc(100vw - 20px)', 
        height:'calc(100vh - 30px)',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }
    
}
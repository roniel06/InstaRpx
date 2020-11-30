import * as React from 'react'


export default class Button extends React.Component{
    public render(){        
        return(
                <button style={styles} {...this.props} />
        )
    }
}

const styles ={
    color:'#fff',
    backgroundColor: '#00D182',
    border: '0px',
    padding: '10px 15px ',
    borderRadius:'4px'
}
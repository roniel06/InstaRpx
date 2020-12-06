import * as React from 'react'


export default class Title extends React.Component{
    public render(){

        return(
            <h2 {...this.props} style={styles} />
        )
    }
}

const styles =
{
 color:'#555',
 
}
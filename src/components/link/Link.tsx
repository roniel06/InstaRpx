import * as React from 'react'


export default class Link extends React.Component {
    public render() {
        const { children } = this.props;
        return (<a {...this.props} style={styles} />)
    }
}

const styles = {
    color: 'blue',
    fontSize:'14px',
    padding:'10px'
}
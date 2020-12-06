import * as React from 'react'


export default class Center extends React.Component {
    public render() {
        const { children } = this.props;
        return (<div {...this.props} style={styles} />)
    }
}

const styles = {
textAlign:'center',
width:'100%'
} as React.CSSProperties
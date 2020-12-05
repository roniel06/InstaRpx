import * as React from 'react'


interface IButton{
    block?: boolean
}

export default class Button extends React.Component<IButton>{
    public render(){       
        const { block = false } = this.props
        return(
                <button style={styles(block)} {...this.props} />
        )
    }
}

const styles = (block: boolean) =>({
    color:'#fff',
    backgroundColor: '#00D182',
    border: '0px',
    padding: '10px 15px ',
    marginBottom:'10px',
    borderRadius:'4px',
    width: block ? '100%' : undefined
})
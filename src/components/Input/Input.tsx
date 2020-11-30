import * as React from 'react'


interface IInputProps{
    placeholder?:string,
    label:string
}

export default class Input extends React.Component<IInputProps>{
    public render(){
        const {label,children}= this.props;
        return(
          
            <div>
                <span style={spanStyle}>{label}</span>
                <input {...this.props} style={styles.input} />
            </div>
        )
    }
}

const spanStyle={
    color: '#777',
    fontSize: '12px',
    textTransform: 'uppercase',
    fontWeight:900
} as React.CSSProperties
const styles =
{

    input: {
        borderRadius: '4px',
        backgroundColor: 'white',
        padding: '10px 15px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 'calc(100% - 30px)',
        marginBottom: '5px'
    }
}
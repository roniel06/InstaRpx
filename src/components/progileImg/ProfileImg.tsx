import * as React from 'react'


interface IProfileImgProps{
    imgUrl?: string
}

export default class ProfileImg extends React.Component<IProfileImgProps>{
    public render(){
        const { imgUrl } = this.props;
        return (
            <div style={styles.container}>
                <img src={imgUrl} style={styles.container}/>
            </div>
        )
    }
}

const styles ={
    img:{
        borderRadius:'100%'
    },
    container:{
        padding:'10px'
    } as React.CSSProperties
}
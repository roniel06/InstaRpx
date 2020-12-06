import * as React from 'react'
import Container from '../../components/card/Container'
import Post from '../../components/post/Post'


export default class NewsFeed extends React.Component{
    public render(){
        return(
            <Container>
                <div style={styles.postContainer}>
                    <Post imgSrc ='http://placekitten.com/300/200'/>
                    <Post imgSrc ='http://placekitten.com/300/200'/>
                </div>                
            </Container>
               
            
        )
    }
}

const styles = {
    postContainer:{
        margin: '0 auto'
    }as React.CSSProperties
} 
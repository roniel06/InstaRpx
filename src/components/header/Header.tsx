import * as React from 'react'
import logo from '.../logo.svg';

export default class Header extends React.Component{

    public render(){
        return (

            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
           
          </header>
        )
    }
}

   
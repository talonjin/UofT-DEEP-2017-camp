import React from 'react';
import Slider from 'material-ui/Slider';
import TopMenu from  './TopMenu';
import Content from './Content';
import ContentContainer from './ContentContainer.js'

// The only smart component
export default class LandingPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }
  render(){
    return(
      <div>
        <TopMenu/>
        <Content/>
      </div>

    )
  }
}


//http://bit.ly/2uzzy7u

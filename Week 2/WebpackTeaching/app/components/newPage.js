import React from 'react';


const style = {
}



export default class IndexPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {}
    }

    render(){

        return (
          <div id = "parentDIV">
            <div id = 'p1'>
                <div id = "y1">
                </div>
                <div id = "y2">
                </div>    
                <div id = "y3">
                </div>  
            </div>
            <div id = 'p2'>
                <div id = "pur1">
                </div>
                <div id = "pur2">
                </div>    
            </div>
            <div id = 'p3'>
                <div id = "yel1">
                </div>
            </div>
            <div id = 'p4'>
                <div id = "blue1">
                </div>
                <div id = "blue2">
                </div> 
                <div id = "blue3">
                </div>
                <div id = "blue4">
                </div> 
                <div id = "blue5">
                </div>
                <div id = "blue6">
                </div>    
            </div>
            <div id = 'p5'>
                <div id = "red1">
                </div>
            </div>
          </div>
        )
    }
}
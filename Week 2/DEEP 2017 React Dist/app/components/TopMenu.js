import React from 'react';

export default class TopMenu extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(

      <div className="topMenu">
         <div id="topMenuLeft">
            <div className="branding">
              <a href="#">DEEP 2017 Web Dev</a>
            </div>
          </div>

       <div id="topMenuRight">
          <div className="topMenuItem">
            <a href="#">Link 1</a>
          </div>
          <div className="topMenuItem">
            <a href="#">Link 2</a>
          </div>
          <div className="topMenuItem">
            <a href="#">Link 3</a>
          </div>
          <div className="topMenuItem">
            <a href="#">Link 4</a>
          </div>
          <div className="topMenuItem">
            <a href="#">link 5</a>
          </div>
        </div>
      </div>


    )
  }
}

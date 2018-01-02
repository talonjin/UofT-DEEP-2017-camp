import React from 'react';

export default class ContentContainer extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>

       <div className="contentContainer">
          <div className="mainBanner"></div>

         <div className="panelContainer">

             <div className="panel">
                <div className="panelBanner"></div>
                <div className="panelText"></div>
              </div>

             <div className="panel">
                <div className="panelBanner"></div>
                <div className="panelText"></div>
              </div>

             <div className="panel">
                <div className="panelBanner"></div>
                <div className="panelText"></div>
            </div>
        </div>
      </div>
      </div>
    )
  }
}

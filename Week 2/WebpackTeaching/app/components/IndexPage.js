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
          <div id = "frontPage">
            <div className = "topMenu">
                <div id = "topMenuR">
                    <div className = "brandName">
                        TALON JIN
                    </div>
                </div>
                <div id = "topMenuL">
                    <div className = "topMenuItem">
                        <a href="">l5 </a>
                    </div>
                    <div className = "topMenuItem">
                        <a href="">l5 </a>
                    </div>
                    <div className = "topMenuItem">
                        <a href="">l5 </a>
                    </div>
                    <div className = "topMenuItem">
                        <a href="">l5 </a>
                    </div>
                    <div className = "topMenuItem">
                        <a href="">l5 </a>
                    </div>
                </div>
            </div>
            <div className = "contentContainer">
                <div className = "mainBanner">
                </div>
                <div className = "panelContainer"> 
                    <div className = "panel">
                        <div className = "panelBanner">
                        </div>
                        <div className = "panelText">
                        </div>
                    </div>

                    <div className = "panel">
                        <div className = "panelBanner">
                        </div>
                        <div className = "panelText">
                        </div>
                    </div>

                    <div className = "panel">
                        <div className = "panelBanner">
                        </div>
                        <div className = "panelText">
                        </div>
                    </div>
            </div>
          </div>
          </div>
        )
    }
}

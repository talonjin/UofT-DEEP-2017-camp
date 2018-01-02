import React from 'react'
import Panel from './Panel';

export default class ContentContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className = "contentContainer">
                <div className = "mainBanner">
                </div>
                <div className = "panelContainer"> 
                    <Panel/>
                    <Panel/>
                    <Panel/> 
            </div>
          </div>

        )
}
}
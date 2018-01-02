import React from 'react'

export default class TopMenu extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
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
        )
    }
}
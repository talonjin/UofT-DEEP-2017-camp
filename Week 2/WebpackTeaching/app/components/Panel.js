import React from 'react'

export default class Panel extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className = "panel">
                <div className = "panelBanner">
                </div>
                <div className = "panelText">
                </div>
            </div>
        )
    }
}
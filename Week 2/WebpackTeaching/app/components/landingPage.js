import React from 'react';
import TopMenu from './TopMenu';
import ContentContainer from './ContentContainer';
import Content from './Content';

export default class LandingPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <TopMenu/>
                <Content/>
            </div>

        )
    }


}
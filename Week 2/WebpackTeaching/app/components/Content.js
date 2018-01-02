import React from 'react'
import UserProfileForm from './UserProfileForm'

export default class Content extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className = "content">
                <UserProfileForm/>
            </div>


        )
    }


}
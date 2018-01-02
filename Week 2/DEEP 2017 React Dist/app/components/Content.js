import React from 'react';
import UserProfileForm from './UserProfileForm'

//dumb component
export default class Content extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div className = "content">
        <UserProfileForm></UserProfileForm>

      </div>
    )
  }
}

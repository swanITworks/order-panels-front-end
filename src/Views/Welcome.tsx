import React from "react"
import LoginButton from "../Components/UI/LoginButton/LoginButton"

const Welcome: React.FC = props => {
  return (
    <div>
      <p>Welcome</p>
      <div>
        <LoginButton />
      </div>
    </div>
  )
}

export default Welcome

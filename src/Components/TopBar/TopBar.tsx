import { Outlet } from "react-router"

const TopBar = () => {
  return (
    <div>
      <p>TOP BAR</p>
      <Outlet />
    </div>
  )
}

export default TopBar

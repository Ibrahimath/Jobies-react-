import { NavLink } from "react-router-dom"

export default function NotFound() {
  return (
    <div>
      <h2>Page not found!</h2>
      <p>We can't find what you seek</p>

      <p>Go to<NavLink to="/">Homepage</NavLink>.</p>
    </div>
  )
}

import "./NavStyle.css"

function Navbar() {
  return (
    <div className="Navbar">
      <div className="topLeft">
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-x-twitter"></i>
        <i class="fa-brands fa-pinterest"></i>
        <i class="fa-brands fa-youtube"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            HOME

          </li>
          <li className="topListItem">
            ABOUT
          </li>
          <li className="topListItem">
            CONTACT
          </li>
          <li className="topListItem">
            LOG IN
          </li>

        </ul>
      </div>
      <div className="topRight">
      <i class="fa-solid fa-magnifying-glass"></i>

      </div>
    </div>
  )
}

export default Navbar
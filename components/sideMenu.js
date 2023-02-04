import Link from "next/link";
import { logout } from "../utils/auth";
import cookie from "js-cookie";

const SideMenu = (props) => (
  <aside className="menu sideMenu">
    <div className="level sideMenuTop">
      <div className="level-left">
        <figure className="image is-64x64 level-item">
          <img src={"../static/sabaiLogo.png"} />
        </figure>

        <h1 className="level-item sideMenuTitle">Biometrics</h1>
      </div>
    </div>
    <p className="menu-label sideMenuItem">{cookie.get("name")}</p>
    <p className="menu-label sideMenuItem">Services</p>
    <ul className="menu-list">
      <li>
        <Link href="/patients" replace>
          <a>Registration</a>
        </Link>
      </li>
      <li>
        <Link href="/queue" replace>
          <a>Queue</a>
        </Link>
      </li>
      <li>
        <Link href="/records" replace>
          <a>Records</a>
        </Link>
      </li>
    </ul>
    <p className="menu-label sideMenuItem">Pharmacy</p>
    <ul className="menu-list">
      <li>
        <Link href="/pharmacy/orders" replace>
          <a>Orders</a>
        </Link>
      </li>
      <li>
        <Link href="/pharmacy/stock" replace>
          <a>Stock</a>
        </Link>
      </li>
    </ul>
    <p className="menu-label sideMenuItem">Others</p>
    <ul className="menu-list">
      <li>
        <Link href="/users" replace>
          <a>Users</a>
        </Link>
      </li>
      <li onClick={logout}>
        <a>Logout</a>
      </li>
    </ul>
  </aside>
);

export default SideMenu;

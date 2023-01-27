import { Routes, Route, Link } from "react-router-dom";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { TodoApp } from "../pages/TodoApp";
import { Contact } from "../pages/Contact";
import { NotFound } from "../pages/NotFound";
import { User } from "../pages/User";
import Users from "../pages/Users";
import NewUser from "../pages/NewUser";
import { UserLayout } from "../layouts/UserLayout";
export const Navigation = () => {
  return (
    <div>
      <nav className="nav">
        <a href="#" style={{ width: "300px" }}>
          🥝
        </a>

        <li>
          <Link to="/" className="nav-item">
            Homepage
          </Link>
        </li>
        <li>
          <Link to="/About" className="nav-item">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/Contact" className="nav-item">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/TodoApp" className="nav-item">
            Todo App
          </Link>
        </li>
        <li>
          <Link to="/Users" className="nav-item">
            Users
          </Link>
        </li>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/TodoApp" element={<TodoApp />} />

        <Route path="/users" element={<UserLayout />}>
          <Route index element={<Users />} />
          <Route path=":id" element={<User />} />
          <Route path="new" element={<NewUser />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

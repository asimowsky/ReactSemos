import { Routes, Route, Link } from "react-router-dom";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { TodoApp } from "../pages/TodoApp";
import { Contact } from "../pages/Contact";
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
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/TodoApp" element={<TodoApp />} />
      </Routes>
    </div>
  );
};

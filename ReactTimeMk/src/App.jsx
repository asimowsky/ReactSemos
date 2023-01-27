import { Navigation } from "./components/Navigation";
import Todo from "./components/Todo";
import "./css/style.css";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { TodoApp } from "./pages/TodoApp";
import { NotFound } from "./pages/NotFound";

import { HomeLayout } from "./layouts/HomeLayout";
import { Sports } from "./components/Sports";
import { Tweets } from "./components/Tweets";
import { Footer } from "./components/Footer";
const App = () => {
  return (
    <>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Sports />} />
            <Route path="tweets" element={<Tweets />} />
          </Route>

          <Route path="/About" element={<About />} />

          <Route path="/TodoApp" element={<TodoApp />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;

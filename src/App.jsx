import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Memos from "./components/Memos";
import Navbar from "./components/Navbar";
import View from "./components/View";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Navbar />
          <Home />
        </div>
      ),
    },
    {
      path: "/memos",
      element: (
        <div>
          <Navbar />
          <Memos />
        </div>
      ),
    },
    {
      path: "/viewMemos/:id",
      element: (
        <div>
          <Navbar />
          <View />
        </div>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

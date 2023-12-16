import './App.css'
import Footer from "./components/Footer.tsx";
import Navbar from "./components/Navbar.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import About from "./components/About.tsx";
import UserInterface from "./components/UserInterface.tsx";
import Home from "./components/Home.tsx";

function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/about",
            element:  <About />
        },
        {
            path: "/ui",
            element:  <UserInterface />
        }
    ]);

  return (
      <>
          <div className={"flex flex-col h-screen justify-between"}>
              <Navbar />
              <main>
                  <RouterProvider router={router} />
              </main>
              <Footer/>
          </div>
      </>
  )
}

export default App

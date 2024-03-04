import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import register from "./pages/register"
  import login from "./pages/login"
  import single from "./pages/single"
  import write from "./pages/write"
  import home from "./pages/home"
  import NavBar from "./components/NavBar"
  import footer from "./components/footer"

  const Layout = () => {
    return (
      <>
      <NavBar/>
      <Outlet/>
      <footer/>
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>This is home!</div>,
    },
    {
        path: "/register",
        element: <div>This is Register!</div>,
      },
      {
        path: "/login",
        element: <div>This is login!</div>,
      },
      {
        path: "/single",
        element: <div>This is single!</div>,
      },
      {
        path: "/write",
        element: <div>This is write!</div>,
      },
    
  ]);

  function  App() {
    return (
      <div>
<RouterProvider router={router}/>
      </div>
    );
    }

    
    
    export default App;

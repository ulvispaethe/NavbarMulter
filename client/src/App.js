import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import { ROUTES } from "./router/router";

const router=createBrowserRouter(ROUTES)
function App() {
  return (
    <RouterProvider router={router}/>

  );
}

export default App;

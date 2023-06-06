import AdminRoot from "../pages/Admin/AdminRoot/AdminRoot";
import Dashboard from "../pages/Admin/Dashboard/Dashboard";
import About from "../pages/Site/About/About";
import Home from "../pages/Site/Home/Home";
import SiteRoot from "../pages/Site/SiteRoot/SiteRoot";

export const ROUTES=[{
    path:"/",
    element:<SiteRoot/>,
    children:[{
        path:"",
        element:<Home/>
    },
{
    path: "about",
    element: <About />
}
]

},{
    path:"admin",
    element:<AdminRoot/>,
    children:[{
        path: "",
        element: <Dashboard />
    }]
}]
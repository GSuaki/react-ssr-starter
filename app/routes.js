import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

export default [
    {
        path: "/",
        component: Home,
        exact: true,
    },
    {
        path: "/login",
        component: Login,
        exact: true,
    },
];

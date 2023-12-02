import {
  createBrowserRouter,
  Routes,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
import Users from "./pages/Users";
import Team from "./pages/team";

const Layout = () => {
  return (
    <div className="flex items-center h-screen w-full">
      <Sidebar />
      <Outlet />
      <Profile />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/",
        element: <Users />,
      },
    ],
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

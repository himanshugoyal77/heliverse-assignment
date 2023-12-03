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
import Team from "./pages/Team";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <div
      className="flex flex-col md:flex-row items-center 
    h-screen w-full md:overflow-y-hidden"
    >
      <Toaster toastOptions={{ duration: 4000 }} />
      <Sidebar />
      <Outlet />
      <div className="hidden md:flex h-full basis-[40%] bg-[#1E212A]">
        <Profile />
      </div>
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
  {
    path: "/create-team",
    element: <Layout />,
    children: [
      {
        path: "/create-team",
        element: <Profile />,
      },
    ],
  },
  {
    path: "*",
    element: <h1>404</h1>,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

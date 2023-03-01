
import { Layout } from './container/Layout/Layout';
import  Messages  from './pages/Messages/Messages';
import {
     BrowserRouter as Router,
     Routes,
     Route,
     useRoutes,
     Navigate,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Calendar from "./pages/Calendar/Calendar";
// import Messages from "./pages/Messages/Messages";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Profile from "./pages/Profile/Profile";

function App() {
     const routes = useRoutes([
          {
               path: "/app",
               element: <Layout />,
               children: [
                    {
                         element: <Navigate to="/app/dashboard" replace />,
                         index: true,
                    },
                    {
                         path: "dashboard",
                         element: <Home />,
                    },
                    {
                         path: "calendar",
                         element: <Calendar />,
                    },
                    {
                         path: "profile",
                         element: <Profile />,
                    },
                    {
                         path: "messages",
                         element: <Messages />,
                    },
                    {
                         path: "*",
                         element: <PageNotFound />,
                    },
               ],
          },
          {
               path: "/",
               element: <Navigate to="/app/dashboard" replace />,
               index: true,
          },
          {
               path: "*",
               element: <PageNotFound />,
               index: true,
          },
     ]);

     return <>{routes}</>;
}

export default App;

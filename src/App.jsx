
import { ConfigProvider } from "antd";
import Teachers from "./pages/Home";
import Clases from "./pages/About";
import LogOut from "./pages/LogOut";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Cart from "./pages/Cart";
import Home from "./Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const App = () => {
  const handleDark=()=>{
    let darkEl=document.getElementById("container")
darkEl.classList.toggle('dark-mode');
}
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "home",
          element: <Teachers />,
        },
        {
          path: "about",
          element: <Clases />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "orders",
          element: <Orders />,
        },
        {
          path:'cart',
          element:<Cart/>,
        },
      ],
    },
    {
      path: "logout",
      element: <LogOut />,
    },
  ]);
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#053074",
          fontSize: 16,
        },
      }}
    >
      
      <RouterProvider router={router}></RouterProvider>
    </ConfigProvider>
  );
};
export default App;

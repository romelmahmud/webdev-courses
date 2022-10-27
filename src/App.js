import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/Routes/routes";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <RouterProvider router={routes} />
      <Toaster />
    </>
  );
}

export default App;

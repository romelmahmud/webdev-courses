import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/Routes/routes";
function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;

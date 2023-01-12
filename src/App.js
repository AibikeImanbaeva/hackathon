import './App.css';
import MainRoutes from "./MainRoutes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <MainRoutes />
    </BrowserRouter>
    </>
  );
}

export default App;

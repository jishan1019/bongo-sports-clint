import "./App.css";
import Header from "./components/AllLayout/ShareLayout/Header/Header";
import Footer from "./components/AllLayout/ShareLayout/Footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="md:ml-12 md:mr-12">
      <Header />
      <div className="min-h-[calc(100vh-120px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;

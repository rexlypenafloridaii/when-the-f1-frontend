import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://when-the-f1-backend.onrender.com";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-main-pattern">
      <BrowserRouter>
        <Header />
        <div className="container mx-auto flex-auto p-4">
          <Content />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

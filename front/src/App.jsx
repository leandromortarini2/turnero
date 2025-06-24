import "./App.css";
import MenuBar from "./components/MenuBar/MenuBar";
import { AppRoutes } from "./routes/Routes";

function App() {
  return (
    <div className="bg-white">
      <MenuBar />
      <AppRoutes />
    </div>
  );
}

export default App;

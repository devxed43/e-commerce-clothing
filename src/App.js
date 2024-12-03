import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        {/* pattern matches path='/' to render index route/comp */}
        <Route index={true} element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;

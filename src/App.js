import { Routes, Route } from "react-router-dom";
import Services from "./Components/Services";
import Login from "./Components/Login";
import PrivateComponet from "./Components/PrivateComponet";
import Dashboard from "./Components/Dashboard";
import Users from "./Components/Users";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<PrivateComponet />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/services" element={<Services />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
export default App;

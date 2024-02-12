import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registerpage from "./pages/Registerpage";
import  Loginpage  from "./pages/loginpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home page</h1>} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/register" element={<Registerpage />} />
        <Route path="/tasks" element={<h1>Tasks page</h1>} />
        <Route path="/add-task" element={<h1>New task</h1>} />
        <Route path="/task-id" element={<h1>Update task</h1>} />
        <Route path="/profile" element={<h1>Profile</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

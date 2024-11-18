
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./pages/NoPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Todos from "./pages/Todos";

import Modal from "./pages/Modal";
import EditPage from "./pages/EditPage";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
       
        <Route path="/" element={<Home/>}/>          
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/todos" element={<Todos />} />
        
        <Route path="*" element={<NoPage />} />
        <Route path="/modal" element={<Modal/>} />
        <Route path="/todos/:id" element={<EditPage/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

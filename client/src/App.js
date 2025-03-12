import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import About from "./pages/About/About";
import TodoList from "./pages/ToDos/TodoList";

//Routes will work like a container
//Route will be a single working route

/*------------------------------
TO APPLY ROUTING FUNCTIONALITY

1) npm i react-router-dom
2) Inside index.js , import Browser Router and wrap the container inside it
3) In App.js , import Routes and Route , and apply the following path according with the element
-------------------------------*/

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/about" element={<About />} />
                <Route path="/todoList" element={<TodoList />} />
            </Routes>
        </div>
    );
}

export default App;

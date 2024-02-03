import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import Button from "./components/Button.jsx";
import HelloWorld from "./components/HelloWorld.jsx";
import User from "./components/User.jsx";
import Task from "./components/Task.jsx";
import Saludar from "./components/Saludar.jsx";
import Posts from "./components/Posts.jsx";
import UsersAdv from "./components/UsersAdv.jsx";
import Counter from "./components/Counter.jsx";
import Msj from "./components/Msj.jsx";
import TaskList from "./components/task/TaskList.jsx";
import TaskForm from "./components/task/TaskForm.jsx";
import { tasks as data } from "./tasks.js";
import App from "./components/task/App.jsx";
import { TaskContext, TaskContextProvider } from "./context/TaskContext.jsx";

/* const handleChange = (e) => {
  console.log(e.target.value);
};

const user = [
  {
    id: 1,
    username: "varoo_",
    image: "https://robohash.org/user1",
  },
  {
    id: 2,
    username: "antoo_",
    image: "https://robohash.org/user2",
  },
]; */

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      {/* <Saludar/>
      <HelloWorld marr={true} />
      <User
      firstName={"Alvaro"}
      year={18}
      married={false}
      address={{ street: "General Savio", num: 3034 }}
      alert= {function() {alert("alerta")}}/>
      <input type="text" onChange={handleChange} /> 
      <Button text="1"/>
      <Task ready />
      <form onSubmit={(e) => {
        e.preventDefault()
        console.log("Enviado");
      }}>
        <h1>Registro de usuario</h1>
        <button>Enviar</button>
      </form>
      <Posts></Posts>
      {user.map((user, i) => {
        return <div  key={i}>
          <h1>{user.username}</h1>;
          <img src={user.image} alt="" />
        </div>
      })}
      <Counter></Counter>
      <Msj></Msj>
      */}
      <TaskContextProvider>
        <App />
      </TaskContextProvider>
    </>
  </React.StrictMode>
);

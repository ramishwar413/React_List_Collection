import { useEffect, useRef, useState } from 'react';
import icon from '../assets/icon.png';
import Listitems from './listitems';

const List = () => {

  const [todoList, setTodoList] = useState([]);
  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();

    if (inputText === "") {
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };

    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    setTodoList((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  const toggle = (id) => {
    setTodoList((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  };

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  return (
    <div className="bg-white place-self-center w-5/12 flex flex-col min-h-[670px]">
      <div className="bg-gray-700 f-18 flex justify-center p-3 max-w-full h-auto">
        <img src={icon} alt="icon" className="w-20" />
        <h2 className="text-3xl text-green-600 font-medium p-5">
          Item List Manager
        </h2>
      </div>
      <div className="flex items-center mt-7 ml-3 gap-2">
        <h1 className="text-4xl font-bold">Item List</h1>
      </div>
      <div className="flex items-center my-8 text-2xl rounded-lg">
        <input ref={inputRef} className="bg-gray-100 w-full text-green-400 m-3 min-h-[56px] rounded-md" type="text" placeholder="Enter item" />
      </div>
      <div className="m-3">
        <button onClick={add} className="w-full text-3xl bg-green-600 h-14 text-white font-medium cursor-pointer">Add item</button>
      </div>
      <div>
        {todoList.map((item, index) => (
          <Listitems key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} toggle={toggle} />
        ))}
      </div>
    </div>
  );
};

export default List;

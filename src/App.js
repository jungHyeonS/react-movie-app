import { useState } from "react";

function App() {
  const [toDo,setToDo] = useState("")
  const [toDos,setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) =>{
    event.preventDefault()
    if(toDo === ""){
      return;
    }

    // ... 으로 현재 배열을 가져와서 새로운 값과 합쳐서 새로운 배열을 만든다
    setToDos(currentArray => [toDo,...currentArray])
    setToDo("")
    
  }
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do.."/>
        <button>Add To Do</button>
      </form>
      <hr></hr>

      {/* map : 하나의 배열에 있는 item을 내가 원하는 무엇이든지로 바꿔주는 역할 */}
      <ul>
        {toDos.map((item,index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      
      
    </div>
  );
}

export default App;

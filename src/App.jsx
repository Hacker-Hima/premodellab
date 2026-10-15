// import {useState} from "react";
// function App(){
//     const [task,settask] = useState("");
//     const [tasks,settasks]=useState([]);
//   function add(){
//       settasks([...tasks,task])
//       settask("")
//   }
//   function delet(index){
//       settasks(tasks.filter((_,i)=> i !== index));
//   }
//   return(
//     <div>
//       <h1>Welcome to to-do tasks</h1>
//       <input
//          type ="text"
//          value={task}
//          onChange={(e)=>settask(e.target.value)}
//          placeholder="enter tasks"
//       />
//       <button onClick={add}>add</button>
//       {tasks.length === 0 && <p> No task added yet </p> }
//       {tasks.map((t,i)=>(
//         <p key={i}>
//         {t}{" "}
//         <button onClick={()=>delet(i)}> delete </button>
//         </p>
//       ))}
//     </div>
//   )
// }
// export default App;



// import { useState } from "react";
// function App() {
//   const [dark, setDark] = useState(false);
//   return (
//     <div style={{
//       backgroundColor: dark ? "black" : "white",
//       color: dark ? "white" : "black",
//       height: "100vh"
//     }}>
//       <h1>Theme Changer</h1>
//       <button onClick={() => setDark(!dark)}>
//         Change Theme
//       </button>
//     </div>
//   );
// }
// export default App;



// import { useState } from "react";
// function App() {
//   const [name, setName] = useState("");
//   const [shows, setShows] = useState([]);
//   async function search() {
//     const res = await fetch(
//       `https://api.tvmaze.com/search/shows?q=${name}`
//     );
//     const data = await res.json();
//     setShows(data);
//   }
//   return (
//     <div>
//       <h1>Show Search</h1>
//       <input
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Enter show name"
//       />
//       <button onClick={search}>Search</button>
//       {shows.map((s) => (
//         <p key={s.show.id}>
//           {s.show.name}
//           <br />
//           <img src={s.show.image?.medium} width="100" />
//         </p>
//       ))}
//     </div>
//   );
// }
// export default App;





// import { useState } from "react";
// function App() {
//   const [name, setName] = useState("");
//   const movies = [
//     "Avatar",
//     "Titanic",
//     "Inception",
//     "Interstellar",
//     "Joker",
//     "Iron Man",
//     "Avengers"
//   ];
//   const result = movies.filter((m) =>
//     m.toLowerCase().includes(name.toLowerCase())
//   );
//   return (
//     <div>
//       <h1>Movie Search</h1>
//       <input
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Type movie name"
//       />
//       {name && result.map((m, i) => (
//         <p key={i}>{m}</p>
//       ))}
//     </div>
//   );
// }
// export default App;


import {React,useState} from "react";

function App(){
  const[name,setName] = useState("");
  const[age,setAge] = useState("");
  const[editid,setEdit]=useState(null)
  const[stud,setStud]=useState([])
  function add(e){
    e.preventDefault();
    const st={
      name:name,
      age:age
    }
    if(editid!==null){
      setStud(stud.map((s,i)=>(
        i===editid?st:s
      )))
    }
    else setStud([...stud,st])
    setEdit(null)
    setName("")
    setAge("")
  }
  function del(ind){
    setStud(stud.filter((_,i)=>(
      i!==ind
    )))
  }
  function edit(s,i){
    setName(s.name)
    setAge(s.age)
    setEdit(i)
  }
  return(
    <div>
      <input value={name} onChange={(e)=>setName(e.target.value)}></input>
      <input value={age} onChange={(e)=>setAge(e.target.value)}></input>
      <button onClick={add}>{editid===null?"ADD":"Update"}</button>
      {stud.map((s,i)=>(
        <p>{s.name}-{s.age} <button onClick={()=>edit(s,i)}>Edit</button><button onClick={()=>del(i)}>delete</button></p>
      ))}
    </div>
  )
}
export default App;
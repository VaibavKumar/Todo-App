import { useState } from "react"

 function CreateTodo(){
    const [tittle,setTittle] = useState("");
    const [description,setDescription]= useState("");

    return(
        <>
        <input id="title" type="text" placeholder="Title" onChange={(e)=>{
            const value = e.target.value;
            setTittle(e.target.value)
        }}></input><br />

        <input id="desc" type="text" placeholder="Description" onChange={(e)=>{
            const value = e.target.value;
            setDescription(e.target.value);
        }}></input><br />

        <button onClick={()=>{
            fetch("http://localhost/3000/todo",{
                method: "POST",
                body:JSON.stringify({
                    tittle:tittle,
                    description:description
                }),
                headers: {
                    "content-type":"application/json"
                }
            })
            .then(async function(res) {
                const json =await res.json();
                alert("Todo created");
            })
        }}>Add a todo</button>
        </>
    )
 }
 export default CreateTodo 
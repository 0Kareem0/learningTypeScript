import Cards from "./components/Cards"
import Alert from "./components/Alert"
import { useState , useEffect } from "react"
export default function App() {
  console.log("third session ✅");
  function firstFunc<T>(value:T):T{
  return value
}
type User = {
  name: string;
  age: number;
}

const handleEve =(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
  console.log(e);
  
}

      const [user, setUser] = useState<User | null>(null)
      const [loading, setLoading] = useState(true)

        useEffect(()=>{
        async function fetchData() {
          await setUser({name:"Kareem", age:25})
          await setLoading(false)
        }
        fetchData()
       },[]) 

      function alertMessage(message:string) {
        alert(message)
      }

      const users = [
        {name:"Kareem", age:25},
        {name:"Ahmed", age:30},
        {name:"Mohamed", age:35}
      ]

console.log(firstFunc<number>(100));
  return (
    <div>
      <button onClick={(e) => {handleEve(e)}}>Click Me</button>
     <Alert alertMessage={alertMessage}/>
      <Cards color="red" title={"Hello"} description={"World"} count={1}/>
      <Cards color="blue" title={"Hello Kareem"} description={"The World is Yours"} />
      {users.map((user) => (
        <Cards key={user.name} color="green" title={user.name} description={user.age.toString()} />
      ))}
        {!loading && user &&<p>{user.name}</p>}
    </div>
  )
}
import Cards from "./components/Cards"
import Alert from "./components/Alert"
import { useState , useEffect, createContext, useContext } from "react"
import useFetch from "./components/useFetch"

type ContextType = {
  userContext:string,
  isLoggedIn:boolean,
  logIn:() => void,
  logOut:() => void,
}
const MyContext = createContext<ContextType | null>(null)

 
export default function App() {
  console.log("contextType✅");
  // generic func
  function firstFunc<T>(value:T):T{
  return value
}
console.log(firstFunc<number>(100));



const [userContext, setUserContext] = useState<string | null>("Kareem")
const [isLoggedIn, setIsLoggedIn] = useState(false)


function logIn (){
  setIsLoggedIn(true)
}

function logOut (){
  setIsLoggedIn(false)
}





type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const data = useFetch<Post[]>(
  "https://jsonplaceholder.typicode.com/posts"
);

console.log(data);


// as const make it readonly 
const numberAsConst = [1,2,3] as const  // works on objects as well
// numberAsConst[1]= 1 
console.log(numberAsConst);
// it will run despite the error If you want a truly immutable use Object.freeze()



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
         function fetchData() {
           setUser({name:"Kareem", age:25})
           setLoading(false)
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

      const value:ContextType = {userContext, isLoggedIn, logIn, logOut}
  return (
    <>
        <MyContext.Provider value = {value}>
         <ChildComponent />
        </MyContext.Provider>
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
        </>
  )
}
  
function ChildComponent(){
  const contextData = useContext(MyContext)
  return (
    <>
    {contextData && JSON.stringify(contextData)}
    </>
  )
}
import Cards from "./components/Cards"
import Alert from "./components/Alert"
export default function App() {
  console.log("third session ✅");
  function firstFunc<T>(value:T):T{
  return value
}

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
     <Alert alertMessage={alertMessage}/>
      <Cards color="red" title={"Hello"} description={"World"} count={1}/>
      <Cards color="blue" title={"Hello Kareem"} description={"The World is Yours"} />
      {users.map((user) => (
        <Cards key={user.name} color="green" title={user.name} description={user.age.toString()} />
      ))}
    </div>
  )
}
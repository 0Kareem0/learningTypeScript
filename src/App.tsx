import Cards from "./components/Cards"
import Alert from "./components/Alert"
export default function App() {
  console.log("second session ✅");
  function firstFunc<T>(value:T):T{
  return value
}

      function alertMessage(message:string) {
        alert(message)
      }

console.log(firstFunc<number>(100));
  return (
    <div>
     <Alert alertMessage={alertMessage}/>
      <Cards title={"Hello"} description={"World"} count={1}/>
      <Cards title={"Hello Kareem"} description={"The World is Yours"} />
    
    </div>
  )
}
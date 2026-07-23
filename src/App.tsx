import Cards from "./components/Cards"
export default function App() {
  console.log("learning");
  function firstFunc<T>(value:T):T{
  return value
}
console.log(firstFunc<number>(100));
  return (
    <div>
      <Cards title={"Hello"} description={"World"} count={1}/>
      <Cards title={"Hello Kareem"} description={"The World is Yours"} />
    </div>
  )
}
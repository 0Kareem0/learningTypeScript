import Cards from "./components/Cards"
export default function App() {
  console.log("learning");
  function firstFunc<T>(value:T):T{
  return value
}
console.log(firstFunc<number>(100));
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-3xl font-bold underline text-white">
        Hello world! typeScript incoming
      </h1>
      <Cards title={"Hello"} description={"World"} />
    </div>
  )
}
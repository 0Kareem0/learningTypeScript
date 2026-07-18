
export default function App() {
  console.log(Math.floor(10.22));
  console.log("Generics And Interfaces ✅");
  function firstFunc<T>(value:T):T{
  return value
}
console.log(firstFunc<number>(100));
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-3xl font-bold underline text-white">
        Hello world! typeScript incoming
      </h1>
      
    </div>
  )
}
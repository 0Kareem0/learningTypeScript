import { useContext } from "react"
import {MyContext} from "../App"

export default function ChildComponent(){
  const contextData = useContext(MyContext)
  return (
    <>
    {contextData && JSON.stringify(contextData)}
    </>
  )
}
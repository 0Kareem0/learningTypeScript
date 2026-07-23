 type alertMessage = {
    alertMessage:(message:string) => void
}
export default function Alert({alertMessage}:alertMessage) {
    return (
        <div className="text-white font-bold text-2xl cursor-pointer">
            <button onClick={()=>alertMessage("Hi Kareem")}>Click Me!</button>
        </div>
    )
}
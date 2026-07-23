
interface CardsProps {
    title?: string;
    description?: string;
    count?:number
}

type ColorProps = "red" | "blue" | "green";

const colorMap = {
    red: "text-red-500",
    blue: "text-blue-500",
    green: "text-green-500"
}

export default function Cards({ title, description,count,color }: CardsProps & {color: ColorProps}) {
    return (
        <>
        <div className={colorMap[color]}>
            <h1>{title},{description},{count}</h1>    
        </div>
        <div>
        </div>
        </>
    )
} 
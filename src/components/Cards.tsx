
interface CardsProps {
    title: string;
    description: string;
    count?:number
}

export default function Cards({ title, description,count }: CardsProps) {
    return (
        <div>
            <h1 className="text-2xl font-bold text-white">{title},{description},{count}</h1>    
        </div>
    )
}
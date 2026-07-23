
interface CardsProps {
    title: string;
    description: string;
}

export default function Cards({ title, description }: CardsProps) {
    return (
        <div className="">
            <h1 className="text-2xl font-bold text-white">{title}</h1>    
            <p className="text-2xl font-bold text-white">{description}</p>
        </div>
    )
}
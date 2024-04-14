export default function Technologies() {
    return (
        <div className="text-white pl-10">
            {items.map(item => (<li className="pl-5 text-xl">{item}</li>))}
        </div>
    )
}
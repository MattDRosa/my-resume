export default function MainContent({ title, paragraph }) {
    return (
        <div className="text-white p-8 pb-0">
            <h1 className="text-3xl font-bold mb-4">{title}</h1>
            <p className="text-2xl">{paragraph}</p>
        </div>
    )
}
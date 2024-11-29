import "../../style/title.css";

export default function Title( { children } ) {
    return (
        <div className="title">
            <h1>{children}</h1>
        </div>
    )
}
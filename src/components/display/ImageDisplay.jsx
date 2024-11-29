export default function ImageDisplay ( { imageName } ) {
    return (
        <div className="circular-image">
            <img src={imageName} alt="" />
        </div>
    )
}
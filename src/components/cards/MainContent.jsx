function MainContent({ title, paragraph }) {
    return (
        <div className="main-content">
            <h1 className="title">{title}</h1>
            <p className="text">{paragraph}</p>
        </div>
    )
}

export default MainContent;
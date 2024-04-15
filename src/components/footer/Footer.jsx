function Footer() {
    return (
        <footer
            className="sticky top-[100vh] bg-gradient-to-t bg-black text-white py-6 bottom-0 w-full">
            <div className="container mx-auto flex justify-center items-center">
                <div className="text-center text-lg">
                    <p>{new Date().getFullYear()}</p>
                    <p>Created by Matheus Rosa</p>
                </div>
                <div className="ml-6">
                    <div className="border-l-2 bg-black h-6 mx-6"></div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

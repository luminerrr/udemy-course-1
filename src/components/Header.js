import Navigation from "./Navigation";

export default function Header() {
    
    return(<>
    <header className="border-b p-3 flex justify-between items-center">
        <span className="font-bold">
            This is header
        </span>

        <Navigation />
    </header>
    </>)
}
import Navigation from "./Navigation";

export default function Header() {
    
    return(<>
    <header className="border-b p-3 flex justify-between items-center">
        <div className="font-bold text-xl">
            AppName
        </div>

        <Navigation />
    </header>
    </>)
}
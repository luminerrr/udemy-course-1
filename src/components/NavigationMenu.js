import { Link } from "react-router-dom"

export default function NavigationMenu(props){

    return(<>
        <div className="font-bold py-3">
            The menu
        </div>
        <ul>
            <li>
                <Link 
                to='/' 
                className='text-blue-300 border-t border-b block py-3'
                onClick={props.closeMenu}>Home</Link>
            </li>
            <li>
                <Link 
                to='/about' 
                className='text-blue-300 border-b block py-3'
                onClick={props.closeMenu}>About</Link>
            </li>
            
        </ul>
        </>)
}
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { useTransition, animated} from "react-spring"
import NavigationMenu from "./NavigationMenu"
export default function Navigation() {
    const [showMenu, setShowMenu] = useState(false)
    

    const maskTransitions = useTransition(showMenu, {
        from: {position:"absolute", opacity:0},
        enter:{opacity:1},
        leave:{opacity:0},
    })

    const menuTransitions = useTransition(showMenu, {
        from: {transform:'translateX(-100%)', opacity:0},
        enter:{transform:'translateX(0%)', opacity:1,},
        leave:{transform:'translateX(-100%)', opacity:0,},
    })

    


    return(
    <nav>
        <span className="text-xl">
            <FontAwesomeIcon
                icon={faBars}
                onClick={()=>setShowMenu(!showMenu)}/>
        </span>

        {maskTransitions((style, item)=>{
            if(item){
                return <animated.div 
                style={style} 
                className='bg-black-t-50 fixed top-0 left-0 w-full h-full z-50'
                onClick={()=>setShowMenu(false)}></animated.div>
            }
            
        })}

        {menuTransitions((style, item)=>{
            if(item){
                return <animated.div 
                        style={style} 
                        className='fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow p-3'>

                        <NavigationMenu 
                        closeMenu={()=>setShowMenu(false)}/>

                        </animated.div>
            }
            
        })}

        
    </nav>)
}
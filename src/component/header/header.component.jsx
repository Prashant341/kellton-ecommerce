import './header.style.scss'
import {Link} from 'react-router-dom'
import { ReactComponent as Logo } from "../../assets/crwns.svg";
const Header=()=>{
    return(
        <>
        <div className='header'>
          <Link
             to ='/'
              className='logo-conatiner'>
              <Logo className='logo'/>
            </Link>
        <div className='options'>
           <Link
             className='options'
             to = '/shop'>
                 SHOP
            </Link>
            <Link
             className='option'
             to = '/signin'>
                 SIGNIN
            </Link>
            <Link
             className='option'
             to = '/contact'>
                 CONTACT
            </Link>
           
        </div>
    </div>
   </>
    )
}
export default Header
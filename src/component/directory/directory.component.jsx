import MenuItem from "../menu-item/MenuItem.component"
import './directory.style.scss'
const Directory=({sections})=>//props
{
    return(
        <>
           <div className='directory-menu'>
                {
                    sections.map(menu =><MenuItem menu={menu}/>)
                }
            </div>
        </>
    )
}
export default Directory
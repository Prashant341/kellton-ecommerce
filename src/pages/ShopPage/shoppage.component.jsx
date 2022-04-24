/*import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import './shoppage.style.scss'
const ShopPage = ()=>{
    return(
        <>
         <CollectionPreview/>
        </>
    )
}
export default Shopage*/

import CollectionPreview from '../../component/collection-preview/collection-preview.component'
import React from 'react'
import SHOP_DATA from './shop.data';
import './shoppage.style.scss'
class ShopPage extends React.Component{
    constructor(){
        super();
        this.state={
            collection:SHOP_DATA
        }
    }
    render(){
        const {collection}=this.state
   
    return(
        <>
        {
            collection.map(
                collection=><CollectionPreview
                key={collection.id}
                collection={collection}
                />
            )
            
        }
        
        </>
    )
}
}
export default ShopPage
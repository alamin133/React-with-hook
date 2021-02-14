import React, {useState} from 'react';

export default ({lists})=>{

    const[activeIndex,setActiveIndex]=useState(null)

    const onTitleClick=(index)=>{
        setActiveIndex(index)

    }

 const renderdItems=lists.map((list,index)=>{

    const active=index===activeIndex ? 'active' : '';
     return(
         <React.Fragment key={list.title}>
         <div className={`title ${active}`}
         onClick={()=>onTitleClick(index)}
          >
             <i className="dropdown icon"></i>
             {list.title}
         </div>
         <div className={`content ${active}`}>
             <p>{list.content}</p>
         </div>
     </React.Fragment>
     );
     
 })


    return<div className="ui styled accordion">
        {renderdItems}
       
        </div>
}
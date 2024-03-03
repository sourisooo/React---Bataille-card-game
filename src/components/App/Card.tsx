

function Card({card, image}){
    
   if(image=='url(./fulldeck.png)') {

    return(

        <div id={card.index} className="echange">

        <div style={{backgroundPositionX:card.positionX, backgroundImage:image,width:'68px',height:'100px'}}></div> 

   
        </div>

    )

   } else {

    return(

        <div id={card.index} className="echange">

        <div style={{backgroundImage:image,width:'68px',height:'100px'}}></div> 

   
        </div>

    )

   }

 

}


export default Card;

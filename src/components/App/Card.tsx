

function Card({card}){
    
   

    return(

        <div id={card.index} className="echange">

        <div style={{backgroundPositionX:card.positionX, backgroundImage:'url(./fulldeck.png)',width:'68px',height:'100px'}}></div> 

   
        </div>

    )

}


export default Card;
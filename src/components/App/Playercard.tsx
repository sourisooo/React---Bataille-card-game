import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { useState } from "react";




function Playercard() {

    const {deck, player, adversaire, outofthedeck, gameover} = useSelector((store:any) => store.deck)

    const dispatch = useDispatch();

    const [image, setimage] = useState('url(./fulldeck.png)');


    const throwthecard = (event) => {

      checkgamestate();

      if (gameover==false){

      dispatch({type:'ORDERCARD'});

      console.log(event.target.parentNode.id)

      let playercardthrow = player.filter(e => e.index ==event.target.parentNode.id);

      dispatch({type:'THROWCARD', payload:playercardthrow[0]});

      dispatch({type:'ADVTHROWCARD', payload:adversaire[0]})

      
      console.log(outofthedeck);}


  }

    const checkgamestate = () => {
  
    console.log(deck.length);
   if(deck.length<2){dispatch({type:'GAMEOVER'}), alert('gameover, please restart the game'), window.location.reload()} 

  }


  return (

    <div style={{display:'flex', flexDirection:'row'}} onClick={throwthecard}>


    {player.map(card => (
        
    <Card card={card} image={image}/>

    ))}

    </div>
  )
}

export default Playercard;

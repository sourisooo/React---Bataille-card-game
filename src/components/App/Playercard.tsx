import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { useState } from "react";




function Playercard() {

    const {deck, player, adversaire, outofthedeck, gameover, discard, adversaireindex, exchange} = useSelector((store:any) => store.deck)

    const dispatch = useDispatch();

    const [image, setimage] = useState('url(./fulldeck.png)');


    const throwthecard = (event) => {

      checkgamestate();

      if (gameover==false){

      dispatch({type:'ORDERCARD'});

      console.log(event.target.parentNode.id)

      let playercardthrow = player.filter(e => e.index ==event.target.parentNode.id);

      dispatch({type:'THROWCARD', payload:playercardthrow[0]});

      dispatch({type:'ORDERCARD'});

        let weakestadvcard = adversaire.filter(e => e.index ==adversaireindex[0]);

        console.log(weakestadvcard[0], adversaireindex);

      dispatch({type:'ADVTHROWCARD', payload:weakestadvcard[0]})

      
      console.log(outofthedeck);}


  }

    const checkgamestate = () => {
  
    console.log(deck.length);
    if((deck.length<2)||(discard>8)||(exchange>8)){dispatch({type:'GAMEOVER'}), alert('gameover, please restart the game'),window.location.reload()} 

  }


  return (

    <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', maxWidth:'100vw', justifyContent:'center'}} onClick={throwthecard}>


    {player.map(card => (
        
    <Card card={card} image={image}/>

    ))}

    </div>
  )
}

export default Playercard;

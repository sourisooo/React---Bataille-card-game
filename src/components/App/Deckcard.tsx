

import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { useEffect, useState } from "react";




function Deckcard() {

    const {deck, player, adversaire, outofthedeck, gameover} = useSelector((store:any) => store.deck);

    const [hidden,sethidden] = useState(true);

    const [image, setimage] = useState('url(./favicon.ico)');


    const dispatch = useDispatch();

    const random = () => {

      let lancer = Math.floor(Math.random()*52);
   
       while (outofthedeck.includes(lancer)) {lancer = Math.floor(Math.random()*52)}
    
       return lancer;
         }


    const choosecard = (event) => {

      checkgamestate();

      if (gameover==false){

      dispatch({type:'ORDERCARD'});

      console.log(event.target.parentNode.id)

      let choosecard = deck.filter(e =>  {return e.index == event.target.parentNode.id });

      dispatch({type:'GETCARD', payload:choosecard[0]});

  
      let randomcardindex2 = random();
  
      let randomcard2 = deck.filter(e =>  {return e.index == randomcardindex2 });
  
      dispatch({type:'ADVGETCARD', payload:randomcard2[0]});

      dispatch({type:'SHUFFLECARD'});}


    }

    const toggle = () => {

      if (hidden==true){sethidden(false), setimage('url(./fulldeck.png)'),  dispatch({type:'ORDERCARD'});} else {sethidden(true), setimage('url(./favicon.ico)'),  dispatch({type:'SHUFFLECARD'});};

  }

  const throwalert = () => {

    alert('you only can trade card while hidden')


  }

  const checkgamestate = () => {
  
    console.log(deck.length);
   if(deck.length<2){sethidden(true), dispatch({type:'GAMEOVER'}), alert('gameover, please restart the game'), window.location.reload()} 

  }
  


  if (hidden==false) {

  return (

    <>

    <button type="button" onClick={toggle}>hide/reveal card</button>

    <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', maxWidth:'100vw'}} onClick={throwalert}>


    {deck.map(card => (
        
    <Card card={card} image={image}/>

    ))}

    </div>

    </>
  )} else {

    return(

      <>

      <button type="button" onClick={toggle}>hide/reveal card</button>
  
      <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', maxWidth:'100vw'}} onClick={choosecard}>
  
  
      {deck.map(card => (
          
      <Card card={card} image={image}/>
  
      ))}
  
      </div>
  
      </>


)

}
}

export default Deckcard;

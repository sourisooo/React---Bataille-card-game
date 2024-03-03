

import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { useState } from "react";




function Deckcard() {

    const {deck, player, adversaire, outofthedeck} = useSelector((store:any) => store.deck);

    const [hidden,sethidden] = useState(true);


    const dispatch = useDispatch();

    const random = () => {

      let lancer = Math.floor(Math.random()*52);
   
       while (outofthedeck.includes(lancer)) {lancer = Math.floor(Math.random()*52)}
    
       return lancer;
         }


    const choosecard = (event) => {

      console.log(event.target.parentNode.id)

      let choosecard = deck.filter(e =>  {return e.index == event.target.parentNode.id });

      dispatch({type:'GETCARD', payload:choosecard[0]});

  
      let randomcardindex2 = random();
  
      let randomcard2 = deck.filter(e =>  {return e.index == randomcardindex2 });
  
      dispatch({type:'ADVGETCARD', payload:randomcard2[0]});


    }

    const toggle = () => {

      if (hidden==true){sethidden(false)} else sethidden(true);

  }

  if (hidden==false) {

  return (

    <>

    <button type="button" onClick={toggle}>hide/reveal card</button>

    <div style={{display:'flex', flexDirection:'row'}} onClick={choosecard}>


    {deck.map(card => (
        
    <Card card={card}/>

    ))}

    </div>

    </>
  )} else {

    return(

<button type="button" onClick={toggle}>hide/reveal decks cards</button>
)

}
}

export default Deckcard;
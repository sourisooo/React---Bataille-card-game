

import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { useState } from "react";




function Adversairecard() {

    const {deck, player, adversaire} = useSelector((store:any) => store.deck)

    const [hidden,sethidden] = useState(true);

    const dispatch = useDispatch();

    const throwthecard = (event) => {

        console.log(event.target.parentNode.id)

        // dispatch({type:'ADVTHROWCARD', payload:event.target.parentNode.id})


    }

    const toggle = () => {

        if (hidden==true){sethidden(false)} else sethidden(true);

    }


if (hidden==false) {
  return (

    <>

    <button type="button" onClick={toggle}>hide/reveal card</button>

    <div style={{display:'flex', flexDirection:'row'}} onClick={throwthecard}>


    {adversaire.map(card => (
        
    <Card card={card} />

    ))}

    </div>

    </>
  )} else {

        return(

    <button type="button" onClick={toggle}>hide/reveal adversaire cards</button>
    )

  }


}

export default Adversairecard;
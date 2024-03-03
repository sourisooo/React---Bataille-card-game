import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";




function Playercard() {

    const {deck, player, adversaire, outofthedeck} = useSelector((store:any) => store.deck)

    const dispatch = useDispatch();


    const throwthecard = (event) => {

      console.log(event.target.parentNode.id)

      let playercardthrow = player.filter(e => e.index ==event.target.parentNode.id);

      dispatch({type:'THROWCARD', payload:playercardthrow[0]});

      dispatch({type:'ADVTHROWCARD', payload:adversaire[0]})

      
      console.log(outofthedeck);


  }

  return (

    <div style={{display:'flex', flexDirection:'row'}} onClick={throwthecard}>


    {player.map(card => (
        
    <Card card={card}/>

    ))}

    </div>
  )
}

export default Playercard;
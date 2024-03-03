import { useDispatch, useSelector } from 'react-redux';
import logo from '../../assets/logo.svg';

import './App.scss';
import Playercard from './Playercard';
import Deckcard from './Deckcard';
import Adversaire from './Adversaire';

function App() {


  const {deck, player, adversaire, outofthedeck} = useSelector((store:any) => store.deck)

  const dispatch = useDispatch();


  const random = () => {

   let lancer = Math.floor(Math.random()*52);

    while (outofthedeck.includes(lancer)) {lancer = Math.floor(Math.random()*52)}
 
    return lancer;
      }
 
  const getcard = () => {

    let randomcardindex = random();

    let randomcard = deck.filter(e =>  {return e.index == randomcardindex });

    console.log(randomcard[0]);

    dispatch({type:'GETCARD', payload:randomcard[0]});

    console.log(deck, player);

    let randomcardindex2 = random();

    let randomcard2 = deck.filter(e =>  {return e.index == randomcardindex2 });

    dispatch({type:'ADVGETCARD', payload:randomcard2[0]});

    console.log(outofthedeck);

  }

  const restart = () => {

    dispatch({type:'RESTART'});


  }


      return (
              
        <>
        
          <button type='button' onClick={getcard}>

            Get card

          </button>

        <p>You have {player.length} cards and {player.reduce((oldvalue, newvalue) => oldvalue + newvalue.number, 0)} points</p>

          <Playercard/>

          <p>It remain {deck.length} cards in the deck</p>

          <Deckcard/>

          <p>Your adversaire has {adversaire.length}  cards and {adversaire.reduce((oldvalue, newvalue) => oldvalue + newvalue.number, 0)} points</p>

            <Adversaire/>

            <p></p>

            <button type='button' onClick={restart}>

           Restart

            </button>

          </>

        
        );
}

export default App;

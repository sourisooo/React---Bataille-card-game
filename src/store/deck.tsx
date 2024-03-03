import { Reducer } from "@reduxjs/toolkit";
import init from "./initdeck";


const initialState = {
    deck:init(),
    player:[],
    adversaire:[],
    outofthedeck:[],
    gameover:false,
    discard:0,
    deckindex:[],
    adversaireindex:[],
    exchange:0,

};

console.log(initialState.deck);



const deck: Reducer<any> = (
  state = initialState,
  action = { type: '@INIT' , payload: undefined}
) => {

    console.log(state.deck);

    console.log(action.payload);

  switch (action.type) {
    case 'GETCARD':
      return {
        ...state,
        deck: [...state.deck.filter(e => { return e.index != action.payload.index; console.log(e.index)})].sort((a,b) => a.number - b.number),
        player: [...state.player, action.payload].sort((a,b) => a.number - b.number),
        outofthedeck: [...state.outofthedeck, action.payload.index],
        deckindex: [...state.deckindex.filter(e => { return e != action.payload.index; console.log(e.index)})].sort((a,b) => a - b),

      };

      case 'ADVGETCARD':
        return {
          ...state,
          deck: [...state.deck.filter(e => { return e.index != action.payload.index; console.log(e.index)})].sort((a,b) => a.number - b.number),
          adversaire: [...state.adversaire, action.payload].sort((a,b) => a.number - b.number),
          outofthedeck: [...state.outofthedeck, action.payload.index],
          deckindex: [...state.deckindex.filter(e => { return e != action.payload.index; console.log(e.index)})].sort((a,b) => a - b),
          adversaireindex: [...state.adversaireindex, action.payload.index].sort((a,b) => a - b),

        };

        case 'THROWCARD':
            return {
              ...state,
              player: [...state.player.filter(e => { return e.index != action.payload.index; console.log(e.index)})].sort((a,b) => a.number - b.number),
              deck: [...state.deck, action.payload].sort((a,b) => a.number - b.number),
              outofthedeck: [...state.outofthedeck.filter(e => { return e != action.payload.index; console.log(e.index)})],
              discard:state.discard+1,
              deckindex: [...state.deckindex, action.payload.index].sort((a,b) => a - b),
       

 
            };

            case 'ADVTHROWCARD':
                return {
                  ...state,
                  adversaire: [...state.adversaire.filter(e => { return e.index != action.payload.index; console.log(e.index)})].sort((a,b) => a.number - b.number),
                  deck: [...state.deck, action.payload].sort((a,b) => a.number - b.number),
                  outofthedeck: [...state.outofthedeck.filter(e => { return e != action.payload.index; console.log(e.index)})],
                  deckindex: [...state.deckindex, action.payload.index].sort((a,b) => a - b),
                  adversaireindex: [...state.adversaireindex.filter(e => { return e != action.payload.index; console.log(e.index)})].sort((a,b) => a - b),
        

                };

                case 'RESTART':
                    return {
                      ...state,
                      adversaire: initialState.adversaire,
                      deck: initialState.deck,
                      outofthedeck: initialState.outofthedeck,
                      player: initialState.player,
                      gameover:false,
                    };


                    case 'ECHANGECARDPART1':
                      return {
                        ...state,
                        adversaire: [...state.adversaire.filter(e => { return e.index != action.payload.index; console.log(e.index)})].sort((a,b) => a.number - b.number),
                        player: [...state.player, action.payload].sort((a,b) => a.number - b.number),
                        adversaireindex: [...state.adversaireindex.filter(e => { return e != action.payload.index; console.log(e.index)})].sort((a,b) => a - b),
                     
                 
  
                      };

                      case 'ECHANGECARDPART2':
                        return {
                          ...state,
                          player: [...state.player.filter(e => { return e.index != action.payload.index; console.log(e.index)})].sort((a,b) => a.number - b.number),
                          adversaire: [...state.adversaire, action.payload].sort((a,b) => a.number - b.number).sort((a,b) => a.number - b.number),
                          adversaireindex: [...state.adversaireindex, action.payload.index].sort((a,b) => a - b),


                        };

                        case 'SHUFFLECARD':
                          return {
                            ...state,
          
                            adversaire: [...state.adversaire].sort(() => Math.random() - 0.5),
                            deck: [...state.deck].sort(() => Math.random() - 0.5),
                       
      
                          };

                          case 'ORDERCARD':
                            return {
                              ...state,
                              player: [...state.player].sort((a,b) => a.number - b.number),
                              adversaire: [...state.adversaire].sort((a,b) => a.number - b.number),
                              deck: [...state.deck].sort((a,b) => a.number - b.number),
                    
        
                            };

                            case 'GAMEOVER':
                              return {
                                ...state,
                                gameover:true,
                                exchangeavailable:false,
          
                              };

                              case 'RETURNTODECK':
                                return {
                                  ...state,
                                  player: [...state.player.filter(e => { return e.index != action.payload.index; console.log(e.index)})].sort((a,b) => a.number - b.number),
                                  deck: [...state.deck, action.payload].sort((a,b) => a.number - b.number),
                                  outofthedeck: [...state.outofthedeck.filter(e => { return e != action.payload.index; console.log(e.index)})],
                                  deckindex: [...state.deckindex, action.payload.index].sort((a,b) => a - b),
                                  exchange:state.exchange+1,
                                };

                                case 'ADVRETURNTODECK':
                                  return {
                                    ...state,
                                    adversaire: [...state.adversaire.filter(e => { return e.index != action.payload.index; console.log(e.index)})].sort((a,b) => a.number - b.number),
                                    deck: [...state.deck, action.payload].sort((a,b) => a.number - b.number),
                                    outofthedeck: [...state.outofthedeck.filter(e => { return e != action.payload.index; console.log(e.index)})],
                                    deckindex: [...state.deckindex, action.payload.index].sort((a,b) => a - b),
                                    adversaireindex: [...state.adversaireindex.filter(e => { return e != action.payload.index; console.log(e.index)})].sort((a,b) => a - b),
        
                                  };

                                  case 'SWAPEXCHANGEMODE':
                                    return {
                                    ...state,
                                    exchangeavailable:action.payload,

                                    };
        
      


    default:
      return state;
  }

};

export default deck;

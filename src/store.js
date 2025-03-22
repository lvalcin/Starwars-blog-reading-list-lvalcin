export const initialStore=()=>{
  return{
    //3 variables fro starwars API (people,vehicles, planets)
    people:[],
    vehicles:[],
    planets:[]
  }
}

export default function storeReducer(store, action = {}) {
  
  if(action.type == "set_people"){
// \\the return below is the action that gives it a new value
    // console.log(action.payload, "PEOPLE SET!")
    return{
      ...store, 
      people: action.payload
    }
  };
  
  if(action.type =="set_vehicles"){
    // console.log(action.payload, "where is my payload????!!!!")
        return{
          ...store, 
          vehicles: action.payload
        }
      };

    if(action.type =="set_planets"){
      return{
        ...store,
        planets: action.payload
      }
    }
  
  
  
  
  
  
  
  
  switch(action.type){
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    default:
      throw Error('Unknown action.');
  }    
}

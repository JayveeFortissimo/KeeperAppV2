import { useState,useReducer } from "react";


const reducer = (state,action) =>{

    switch(action.type){
        case "pushData":
       return [...state,action.Text]
        break;

        case "DELETE":
        return state.filter(element => element.text != action.name)
        break;

        default:
            return state;
            break;
        
    }
     
}

 const Datas = () => {

    const [datas,dispatch] = useReducer(reducer,[]);

    const [Text,SetText] = useState({
        text:""
    })

const textSet = (value,types) =>{
     SetText(eleemets =>{
        return{
            ...eleemets,
            [types]:value
        }
     })
}


     const datasPush = () =>{
        if(Text.text === ""){
alert("Help")
        }else{
            dispatch({type:"pushData",Text:{text:Text.text}})
            SetText(elements => ({...elements,text:""}))
        }
       
     }

     const deleteData = (text) =>{
        dispatch({type:"DELETE",name:text})
     }

     return {datas,datasPush,textSet,Text,deleteData}

}

export default Datas

import { createContext, useState } from "react";




export const kattContext = createContext("")

export const KattProvider = ({children})=>{

    

    function listafeltolt(){
        const lista = [true, true, true, true, true, true, true, true, true]
        for (let i = 0; i < 9; i++) {
          let szam = Math.floor(Math.random() * 2)
          if (szam === 0){
            lista[i]=true
          }else{
            lista[i]=false
          }
        }
          return lista
      }
      const [lista, setLista] = useState(listafeltolt())

    function katt(adat){
        const segedlista=[...lista]
        segedlista[adat]=!segedlista[adat]
        setLista([...segedlista])
    }

      return <kattContext.Provider value={{lista, katt}}>
        {children} 
    </kattContext.Provider>

}

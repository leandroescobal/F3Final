import React, { createContext, useContext, useMemo, useState } from "react";


const initialState = {
  theme: "light",
  data: [],
};


const GlobalContext = createContext();


export function useGlobalContext() {
  return useContext(GlobalContext);
}


export function GlobalContextProvider({ children }) {
  const [state, setState] = useState(initialState);

 
  const toggleTheme = () => {
    setState((prevState) => ({
      ...prevState,
      theme: prevState.theme === "light" ? "dark" : "light",
    }));
  };

  
  const fetchData = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setState((prevState) => ({
        ...prevState,
        data,
      }));
    } catch (error) {
      console.error("Error al obtener datos de la API:", error);
    }
  };

  
  const contextValue = useMemo(() => {
    return {
      ...state,
      toggleTheme,
      fetchData,
    };
  }, [state]);

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
}

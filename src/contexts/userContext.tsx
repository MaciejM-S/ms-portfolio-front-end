import React, { createContext, useState } from "react";

// Create two context:
// UserContext: to query the context state
// UserDispatchContext: to mutate the context state
const UserContext = createContext<{
  theme: string;
  setTheme: any;
  message: string;
  setMessage: any;
  rerender:number;
  setRerender:any
}>({ theme: "ligh", setTheme: null, message: "", setMessage: null, rerender:0, setRerender:null });

// A "provider" is used to encapsulate only the
// components that needs the state in this context
function UserProvider({ children }: any) {
  const [theme, setTheme] = useState("light");
  const [message, setMessage] = useState("");
  const [rerender, setRerender] = useState(0)

  return (
    <UserContext.Provider value={{ theme, setTheme, message, setMessage, rerender, setRerender }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext };

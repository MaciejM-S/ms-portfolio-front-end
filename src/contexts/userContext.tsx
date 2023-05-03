import React, { createContext, useState } from "react";

// Create two context:
// UserContext: to query the context state
// UserDispatchContext: to mutate the context state
const UserContext = createContext<{theme: string; setTheme:any}>({theme:'string', setTheme:null});

// A "provider" is used to encapsulate only the
// components that needs the state in this context
function UserProvider({ children }:any) {
  const [theme, setTheme] = useState('light');

  return (
    <UserContext.Provider value={{theme, setTheme}}>
        {children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext };






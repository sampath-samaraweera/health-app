import React, { createContext, useState, useContext } from 'react';

interface ContextType {
  username: string;
  count: number;
  increment: () => void;
  reset: () => void;
  setUsername: (username: string) => void;
}

// Provide a default value for the context
const Context = createContext<ContextType | undefined>(undefined);

export const Provider = ({ children }: { children: React.ReactNode }) => {
  const [count, setCount] = useState(0);
  const[username, setUsername] = useState('');

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <Context.Provider value={{ 
      username,
      count, 
      increment,
      reset,
      setUsername
    }}>
      {children}
    </Context.Provider>
  );
};

export const useCustomContext = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('useCustomContext must be used within a Provider');
  }
  return context;
};

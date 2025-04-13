import { createContext, FC, ReactNode, useState } from "react";

interface CounterContextProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const CounterContext = createContext<CounterContextProps>({
  count: 0,
  increment: () => {},
  decrement: () => {},
});

interface ChildrenProp {
  children: ReactNode;
}

const CounterProvider: FC<ChildrenProp> = ({ children }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(() => count + 1);
  };
  const decrement = () => {
    setCount(() => count - 1);
  };

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
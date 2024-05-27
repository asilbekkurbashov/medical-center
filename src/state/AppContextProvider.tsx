import { createContext, useContext, useState } from "react";
import { doc } from "../shared/types";

interface I_Context {
  currentDoctor: doc;
  setCurrentDoctor: React.Dispatch<React.SetStateAction<doc>>;
  hour: string | null;
  setHour: React.Dispatch<React.SetStateAction<string | null>>;
}

export const AppContext = createContext({} as I_Context);

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentDoctor, setCurrentDoctor] = useState({} as doc);
  const [hour, setHour] = useState<string | null>(null);

  const value = {
    currentDoctor,
    setCurrentDoctor,
    hour,
    setHour,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppContextProvider;

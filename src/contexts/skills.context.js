import { createContext, useState } from "react";
import data from '../data.json'

export const SkillsContext = createContext();

export const SkillsProvider = ({ children }) => {
  const [skillsJson, setSkillsJson] = useState(data);

  return (
    <SkillsContext.Provider value={{skillsJson, setSkillsJson}}>
      {children}
    </SkillsContext.Provider>
  );
};

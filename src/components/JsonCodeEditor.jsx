import { useContext } from "react";
import ReactJson from "react-json-view";

import { SkillsContext } from "../contexts/skills.context";

const JsonCodeEditor = ({ jsonData }) => {
  const data = useContext(SkillsContext);
  const handleJsonChange = (event) => {
    console.log(event);
  };
  return (
    <div className="w-1/2 p-4 h-96">
       <ReactJson
        src={data}
        theme="monokai"
        onEdit={(edit) => handleJsonChange(edit)}
        displayDataTypes = {false}
        style={{fontSize : '1rem', borderRadius : "0.5rem", padding: "2rem"}}
        collapseStringsAfterLength= {5}
      />
      
    </div>
  );
};

export default JsonCodeEditor;

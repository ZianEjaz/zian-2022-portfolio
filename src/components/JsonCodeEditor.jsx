import JSONInput from "react-json-ide";

const JsonCodeEditor = ({jsonData}) => {

  return (
    <div className="w-1/2 p-4">
      <JSONInput
        style={{ container: { borderRadius: "0.5rem" }}}
        placeholder={jsonData}
        locale={jsonData}
        width="full"
        height = "400px"
      />
    </div>
  );
};

export default JsonCodeEditor;

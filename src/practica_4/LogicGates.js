import { useState } from "react";

const LogicGates = ({ inputValue, checkboxValue, resultValue }) => {
  const [output, setOutput] = useState();

  const selectHandler = (e) => {
    let res;
    let aux = e.target.value;

    console.log(aux);

    switch (aux) {
      case "OR":
        setOutput(Boolean(inputValue || checkboxValue).toString());
        break;
      case "AND":
        setOutput(Boolean(inputValue && checkboxValue).toString());
        break;
      case "NAND":
        setOutput(Boolean(!(inputValue && checkboxValue)).toString());
        break;
      case "NOR":
        setOutput(Boolean(!(inputValue || checkboxValue)).toString());
        break;
      case "XOR":
        setOutput(
          Boolean(
            (inputValue && !checkboxValue) || (!inputValue && checkboxValue)
          ).toString()
        );
        break;

      default:
    }

    setOutput(res);
    resultValue(res === "true" ? 1 : 0);
  };
  return (
    <div>
      <select onChange={selectHandler}>
        <option disabled selected>
          select
        </option>
        <option value="OR">OR</option>
        <option value="AND">AND</option>
        <option value="NAND">NAND</option>
        <option value="NOR">NOR</option>
        <option value="XOR">XOR</option>
      </select>
      <p>{output}</p>
    </div>
  );
};

export default LogicGates;

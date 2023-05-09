import { useEffect, useState } from "react"
import randomColor from "randomcolor";
 
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import SyntaxHighlighter from "react-syntax-highlighter";
import { arduinoLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { IoCopyOutline } from "react-icons/io5";
import { CopyToClipboard } from "react-copy-to-clipboard";

const   Gradeints = () => {

    const [color1,setColor1] = useState(randomColor());
    const [color2,setColor2] = useState(randomColor());
    const [output, setOutput] = useState("");

    useEffect(() =>{
        const gradeint =`linear-gradient(to right,${color1},${color2})`;
        document.body.style.background = gradeint;
        setOutput(`background: ${gradeint}`);
    },[color1,color2]);
   
    const handleChangeColor = (e) => {
        const { name, value } = e.target;
        if (name === "color1") {
          setColor1(value);
        } else if (name === "color2") {
          setColor2(value);
        }
      };

      
  const handleRandomClick = () => {
    setColor1(randomColor());
    setColor2(randomColor());
  };

      

  return (
    <div className="gradient">
        <h1>Create your own gradeint</h1>
        <div className="colorPicker">
            <input type="color" name="color1" id=""  value={color1} onChange={handleChangeColor}/>
            <input type="color" name="color2" id=""  value={color2} onChange={handleChangeColor}/>
        </div>
        <button className='btnRandom' onClick={handleRandomClick}>
        Generate Random gradient!
      </button>
      <div className='output'>
        <SyntaxHighlighter language='css' style={arduinoLight}>
          {output}
        </SyntaxHighlighter>
        <CopyToClipboard text={`background: ${output}`}>
          <IoCopyOutline style={{ cursor: "pointer", fontSize: "25px" }} />
        </CopyToClipboard>
      </div>
       
    </div>
  )
}

export default Gradeints
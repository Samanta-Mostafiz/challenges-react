import "./index";
import { useState } from "react";

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
} 

// started main jsx here afer root app export\\\\\\\
function TipCalculator(){
  const[bill,setBill]=useState("");
  const[percentage1,setPercentage1]=useState(0);
  const[percentage2,setPercentage2]=useState(0);
  const tip = bill * ((percentage1 + percentage2) / 2 / 100);
  function handleReset(){
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }
return(
  <div>
    <BillInput bill={bill} onSetBill={setBill}/>

<SelectPercentage percentage={percentage1} onSelect={setPercentage1} >how much you rate food</SelectPercentage>
<SelectPercentage percentage={percentage2} onSelect={setPercentage2}>how much you rate food</SelectPercentage>


  {bill>0 &&(
    <>
      <Output bill={bill} tip={tip}/>
    <Reset onReset={handleReset}/>
    </>
  )
  }

  </div>
);
}
function BillInput({bill,onSetBill}){
  return(
    <div>
  <label>how much the bill</label> <br/>
  <input type="text" placeholder="bill value" value={bill} onChange={(e)=>onSetBill(Number(e.target.value))} />
    </div>
  );
  }
  function SelectPercentage({percentage,children,onSelect}){
    return(
      <div>
        <label>{children}</label><br/>
    <select value={percentage} onChange={(e)=>(onSelect(Number(e.target.value)))}>
      <option value="0">poor</option>
      <option value="5">average</option>
      <option value="10">good</option>
      <option value="15">outstanding</option>
    </select>
      </div>
    );
    }
    function Output({bill,tip}){
      return(
        <div>
      <h3>    You pay ${bill + tip} (${bill} + ${tip} tip) </h3>
        </div>
      );
      }
    
    
    function Reset({onReset}){
       return(
  <div>
      <button onClick={onReset}>Reset</button>
  </div>
);
}























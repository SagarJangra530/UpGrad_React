import React , {useState, useEffect} from 'react'
import onbulb from './on.jpg';
import offbulb from './off.jpg';

export default function TextArea() {
    const mystyle = {
        padding: "10px",
        margin: "30px",
        width : "80%"
      };
     
    const mystyleButton = {
      padding: "10px",
      margin: "30px",
      width : "20%",
      fontSize : "20px"
    };
    
      const handleOnChange = (event)=>{
        setText(event.target.value);
          
        if(text.toLowerCase() === "on"){
          setBulb({data : "OFF", src : onbulb});
        }
        
        if(text.toLowerCase() === "off"){
          setBulb({data : "ON", src : offbulb});
        }
    
        setData("Typing...");
      }

      const [Data, setData] = useState("")
      const [text, setText] = useState("Type Something !");
      
     

      const onClickHandler = () => {
        setText("");
        setData("");
      }
      const [bulb, setBulb] = useState({data : "ON", src : offbulb});

      useEffect(()=>{
        console.log("Do not touch the BULB !");
      },[bulb])
      
      const onClickHandlerForBulb = ()=>{
        if(bulb.data === "ON")
         setBulb({data : "OFF", src : onbulb});
         else{
          setBulb({data : "ON", src : offbulb});
         }
      }
      
  return (
    <div className="mb-3">
    <textarea  className="form-control"  value={text} onChange={handleOnChange} style={mystyle} placeholder="Leave a comment here" id="myBox" ></textarea>
    <button type="button" className="btn btn-primary" onClick={onClickHandler} style={mystyleButton}>Clear</button>
    <div style={mystyle}>{Data}</div>
    <img src={bulb.src} alt="idk" />
    <button type="button" className="btn btn-primary" onClick={onClickHandlerForBulb} style={mystyleButton}>{bulb.data}</button>
    </div>
  )
}



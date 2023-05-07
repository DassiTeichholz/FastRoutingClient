import { useState,useRef } from 'react';
import { useNavigate } from "react-router-dom";
function Manager(){
  let Navigate=useNavigate()
  let nameRef=useRef("");



   function sss(){debugger
      //console.log(nameRef.current);
    
    let v=nameRef.current.value;
     if(nameRef.current.value===""){
        document.getElementById("div").style.display="block"
        return;
     }
     else{
        document.getElementById("div").style.display="none"
        Navigate("/JsonUploader", { state: { centerName: nameRef.current.value } });
     }
   }


    return<>
    
       <h1>הוספת מרכז חדש למערכת</h1>
       <label>הכנס את שם המרכז</label>
       <input ref={nameRef} type='text'></input>
       <button onClick={sss}>הבא</button>
       <div id="div" style={{display:"none"}}>שדה הקלט לא הוזן כנדרש</div>
    
    
    </>
}
export default  Manager;
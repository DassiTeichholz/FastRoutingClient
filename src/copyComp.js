import React, { useRef, useState } from 'react';
import MyComponent from './ImageUploader';
import { useLocation } from 'react-router-dom';

function MyComponentContainer(props) {
    const location = useLocation();
    

    // const centerName = location.state.centerName;
    // const jsonFile = location.state.jsonFile;


    const countRef = useRef(0)
    const [AllDetails, setAllDetails] = useState([])
    const [componentArray1, setcomponentArray] = useState([]);
    let componentArray = []

    const copy2 = () => {
        //setcomponentArray([...componentArray,<MyComponent setAllDetails={setAllDetails}  />]);

    }
const ssss=()=>{
    if(AllDetails.length==0){
     document.getElementById('err').style.display='block'
     return
    }
    else{
        document.getElementById('err').style.display='none'

    }
    console.log(componentArray1);
    console.log(AllDetails);
    debugger

}
    const copy = () => {
        

        // Loop through the items array and create a new instance of MyComponent for each item
        for (let i = 0; i < (countRef.current.valueAsNumber); i++) {
            componentArray.push(i);

        }
        setcomponentArray(componentArray)
    }

    return (
        <div>
            <div>
                <label>הכנס מספר</label>
                <input id="quantity" name="quantity" ref={countRef} type='number' min="1" step="1" />
                <button onClick={copy}>copy elements</button>

            </div>
            {componentArray1.map((item)=>(
                
               // <MyComponent AllDetails={AllDetails} setAllDetails={setAllDetails} item={item} />
               <div>
               <MyComponent AllDetails={AllDetails} setAllDetails={setAllDetails} item={item} />
               <br />
               <br></br>
               <br></br>
             </div>
             
            ))}

            <button onClick={ssss}>ssss</button>
            <div id='err' style={{ display: 'none' }}>לא העלת אף תמונה</div>


        </div>
    );
}

export default MyComponentContainer;

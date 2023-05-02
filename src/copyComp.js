import React, { useRef, useState } from 'react';
import MyComponent from './ImageUploader';

function MyComponentContainer(props) {
    const countRef = useRef(0)
    const [AllDetails, setAllDetails] = useState([])
    const [componentArray1, setcomponentArray] = useState([]);
    let componentArray = []

    const copy2 = () => {
        //setcomponentArray([...componentArray,<MyComponent setAllDetails={setAllDetails}  />]);

    }
const ssss=()=>{
    console.log(componentArray1);
    console.log(AllDetails);

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
                <input ref={countRef} type='number' />
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


        </div>
    );
}

export default MyComponentContainer;

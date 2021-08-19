import ClipLoader from "react-spinners/ClipLoader";
import './LoadingIndicator.scss'
import {useState} from 'react'

function LoadingIndicator() {
    let [color, setColor] = useState("#ffffff");
    return (
      <div className="indicator">
        <ClipLoader color={color}/>
      </div>
    )
}

export default LoadingIndicator
import ClipLoader from "react-spinners/ClipLoader";
import './LoadingIndicator.scss'

function LoadingIndicator() {
    return (
      <div className="indicator">
        <ClipLoader/>
      </div>
    )
}

export default LoadingIndicator
import { useNavigate} from "react-router-dom";
import './pcButton.css'

interface ButtonProps{
    text: string;
    path: string;
}

function pcButton({text, path}: ButtonProps) {
    const navigate = useNavigate();
  return (
    <>
      <button className="buttonComponent" onClick={() => navigate(path)}>
        {text}
      </button>
    </>
  )
}

export default pcButton
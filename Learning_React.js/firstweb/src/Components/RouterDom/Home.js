import { useNavigate } from "react-router-dom";


export default function Home(){

const navigate=useNavigate();

function goBack(){
    navigate("/Menu");
    // Navigate();
}

    return(
        <>
            <div>This is Home page</div>
            <button type="button" 
            onClick={goBack}>Go to menu</button>
        </>
    );
}
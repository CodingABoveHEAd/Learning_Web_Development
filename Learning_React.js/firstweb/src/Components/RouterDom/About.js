import { useParams } from "react-router-dom";

export default function About({count}){
    
    const {category,top}=useParams();
    return(
        <>
            <div>This is About {count} page with {category} category and {top} topic</div>
        </>
    );
}
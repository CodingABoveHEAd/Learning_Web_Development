import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Menu() {
    const navigate = useNavigate();
    const [category, setCategory] = useState("default");
    const [top, setTop] = useState("default");

    function Aboutpage() {
        navigate(`/about/${category}/${top}`); 
    }

    return (
        <>
            <Outlet />
            <div>This is the Menu page</div>

            <label>Category: </label>
            <input 
                type="text" 
                value={category} 
                onChange={(e) => setCategory(e.target.value)} 
            />

            <label> Topic: </label>
            <input 
                type="text" 
                value={top} 
                onChange={(e) => setTop(e.target.value)} 
            />

            <button type="button" onClick={Aboutpage}>
                Go to About Page
            </button>
        </>
    );
}

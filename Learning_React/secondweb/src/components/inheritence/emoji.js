import React from "react";


class Emoji extends React.Component{
    addemoji(text,emoji) {
        return emoji +" "+ text +" "+ emoji;
    }
    render(override){
        let text="I am the emoji component";
        if(override)text=override;
        return(
            <>
                <p>{text}</p>;
            </>
        )
    }
}

export default Emoji;
import { Container,Items,Global } from "./components.styles";
// import  Global  from "./components.styles";

export default function Navbar(){
    return(
        <>
        <Global />
        <Container backgroundColor="green">
           <Items><a href="#">Home</a></Items>
           <Items><a href="#">About</a></Items>
           <Items><a href="#">Login</a></Items>
           <Items><a href="#">Products</a></Items>
        </Container>
        </>
    );
}


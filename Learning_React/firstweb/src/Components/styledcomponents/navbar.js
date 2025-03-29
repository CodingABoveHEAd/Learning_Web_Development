import { Container,Items } from "./components.styles";

export default function Navbar(){
    return(
        <Container>
           <Items>Home</Items>
           <Items>About</Items>
           <Items>Login</Items>
           <Items>Products</Items>
        </Container>
    );
}
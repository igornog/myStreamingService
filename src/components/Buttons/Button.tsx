import styled from "styled-components";

type Props = {
    children: React.ReactNode; // 👈️ type children
  };

const ButtonStyled = styled.div`
    align-self: end;
    color: black;
    font-weight: bold;
    text-decoration: none;
    background-color: white;
    border-radius: 14px;
    padding: 0.5rem 2rem;

    @media screen and (max-width: 769px) {
      margin: 4rem 0 2rem;
      align-self: center;
    }
`


const Button = (props: Props) => {  
    return (
      <>
        <ButtonStyled>{props.children}</ButtonStyled>
      </>
    );
  }
  
  export default Button;
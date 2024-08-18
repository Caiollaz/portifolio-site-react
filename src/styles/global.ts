import 'bootstrap/dist/css/bootstrap.min.css';
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,100..900;1,100..900&display=swap');

    * {
        font-family: "Epilogue", sans-serif;
        background-color: ${(props) => props.theme.colors.siteBackground};
    }
`;

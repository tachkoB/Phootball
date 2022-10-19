import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 100%); 
    color: black;

    &:hover {
        background-color: aliceblue;
        cursor: pointer;
    }

    > * { 
        color: black;
        height: 3rem;
        padding: 0.5rem;
        border: 1px solid black;
        font-size: 1.5rem;
    }
`
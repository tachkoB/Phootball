import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 100%); 
    color: black;
    height: 5rem;

    &:hover {
        background-color: aliceblue;
        cursor: pointer;
    }

    > * { 
        color: black;
        padding: 0.5rem;
        border: 1px solid black;
        font-size: 1.5rem;
        display: flex;
        align-items: center;

    }
`
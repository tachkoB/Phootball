import styled from "styled-components";

export const Container = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 7px;

    > div > * { 
        color: black;
        height: 3rem;
        padding: 0.5rem;
        border: 1px solid black;
        font-size: 1.5rem;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    > div {
        display: grid;
        grid-template-columns: repeat(7, calc(100% / 7)); 
     
    }

`
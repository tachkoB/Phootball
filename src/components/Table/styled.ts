import styled from "styled-components";

export const Container = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 7px;

    > div > * { 
        color: black;
        padding: 0.5rem;
        font-size: 1.5rem;
    }

    > div > div > span { 
        color: black;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    > div {
        display: grid;
        grid-template-columns: repeat(6, calc(100% / 6)); 
    }

`
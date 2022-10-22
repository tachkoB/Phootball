import styled from "styled-components";

export const Container = styled.div`
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`

export const Wrapper = styled.div`
     position: relative;
     width: 60%;

     > img {
        width : 100%;
     }
`

export const Field = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-areas: 
     '. lb lmf lwf la'
     'gk . cam ca .'
     '. rb rmf rwf ra'
    ;

    > div:nth-child(1) {
        grid-area: gk;
    }
    > div:nth-child(2) {
        grid-area: lb;
    }
    > div:nth-child(3) {
        grid-area: rb;
    }
    > div:nth-child(4) {
        grid-area: lmf;
    }
    > div:nth-child(5) {
        grid-area: cam;
    }
    > div:nth-child(6) {
        grid-area: rmf;
    }
    > div:nth-child(7) {
        grid-area: lwf
    }
    > div:nth-child(8) {
        grid-area: ca
    }
    > div:nth-child(9) {
        grid-area: rwf
    }
    > div:nth-child(10) {
        grid-area: ra
    }
    > div:nth-child(11) {
        grid-area: la
    }

    > div:not(:first-child) {
        justify-self: baseline;
    }

    > div {
        align-self: center;
    }
    
    > div:first-child {
        justify-self: center;
    }
`


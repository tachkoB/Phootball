import { colors } from "colors/index";
import styled from "styled-components";

export const Button = styled.button`
    background-color: ${colors.primary};
    color: ${colors.secondary};
    cursor: pointer;
    height: 3rem;
    width: 6rem;
    font-size: 1rem;
    padding: 0.5rem;
    border-radius: 0.5rem;

    &:hover {
        background-color: ${colors.secondary};
        color: ${colors.primary};
    }
`
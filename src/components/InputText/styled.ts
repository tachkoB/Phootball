import { colors } from "colors/index";
import styled from "styled-components";

export const Input = styled.input`
    height: 3rem;
    color: black;
    padding: 0.5rem;
    border-radius: 0.5rem;
    font-size: 1rem;
    &:focus {
        outline: 2px solid ${colors.secondary};
    }
`
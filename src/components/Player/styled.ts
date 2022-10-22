import styled, { css, keyframes } from "styled-components";

// Components
import Avatar from "components/Avatar";

export const Img = styled(Avatar)`
    border-radius: 50%;
    height: 3rem;
    width: 3rem;
`


const pulse = keyframes`
	0% {
		transform: scale(0.85);
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
        border-radius: 50%;
	}

	70% {
		transform: scale(1);
		box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
        border-radius: 50%;
	}

	100% {
		transform: scale(0.85);
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
        border-radius: 50%;
	}
`

export const Container = styled.div<{isLoading:boolean}>`
    ${({isLoading})=> isLoading && css`animation: ${pulse} 2s infinite;`}
`

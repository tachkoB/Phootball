import styled, { css, keyframes } from "styled-components";

// Components
import Avatar from "components/Avatar";

export const Img = styled(Avatar)`
    border-radius: 50%;
    height: 5rem;
    width: 5rem;
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
	cursor: pointer;
	background-color: white;
	padding: 0.5rem;
	opacity: 0.8;
	width: 8rem;
	> * {
		color: black;
	}
`

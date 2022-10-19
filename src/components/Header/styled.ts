import { NavLink } from "react-router-dom";
import styled from 'styled-components'

// Colors
import { colors } from 'colors/index'

export const Header = styled.header`
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  > div {
    display: flex;
  }

  > div > img {
    width: 3rem;
    border-radius: 50%;
    margin-left: 1rem;
  }

  > div > p {
    font-size: 3rem;
    margin-left: 1rem;
  }

  > nav  > ul {
    display: flex;
    list-style-type: none;
    margin-right: 8rem;
  }

  > nav > ul > li {
  
    margin-left: 1rem;
    font-size: 1.5rem;
  }
`
export const Link = styled(NavLink)`
  text-decoration: none;
  padding: 0.5rem;

  &.active {
    color: ${colors.secondary};
  }

  &:hover {
    color: ${colors.secondary};
    border-bottom: 3px solid rgba(0, 0, 0, 0.2);
  }
`




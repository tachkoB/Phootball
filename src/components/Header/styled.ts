import { NavLink } from "react-router-dom";
import styled from 'styled-components'

// Colors
import { colors } from 'colors/index'

export const Link = styled(NavLink)`
  text-decoration: none;
  padding: 0.5rem;
  &.active {
    color: ${colors.secondary};
  }
`

export const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked ~ ul {
    display: block;
  }
`


export const SmallNav = styled.nav`
  display: none;

  img {
    margin-right: 1rem;
  }

  ul {
    position: absolute;
    top: 5rem;
    left: 0;
    right: 0;
    display: none;

    > li {
      height: 4rem;
      display: flex;
      align-items: center;
      background-color: ${colors.primary};
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    }
  }
  
  @media (max-width: 768px) {
    display: flex;
  }

`
export const BigNav = styled.nav`
    display: none;
  > ul {
    display: flex;
    list-style-type: none;
    margin-right: 8rem;
  }

  > ul > li {
    margin-left: 1rem;
    font-size: 1.5rem;
  }

  position: relative;

  ${Link} {

    &:hover {
    color: ${colors.secondary};
    border-bottom: 3px solid rgba(0, 0, 0, 0.2);
    }
  }
  @media (min-width: 768px) {
      display: block;
  }
`

export const Header = styled.header`
  position: fixed;
  height: 5rem;
  display: flex;
  width: 100%;
  top: 0;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  background-color: ${colors.primary};
  > a {
    &:hover {
    border-bottom: 0;
    }
  }

  > a > div {
    display: flex;
    align-items: center;
  }

  > a > div > img {
    width: 3rem;
    border-radius: 50%;
    margin-left: 1rem;
  }

  > a > div > p {
    font-size: 3rem;
    margin-left: 1rem;
  }


`




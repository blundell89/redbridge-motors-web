import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import icon from '../assets/icons8-wheel-48.png';
import logo from '../assets/logo.svg';
import Routes from './Routes';

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;

  ul {
    list-style: none;
    display: flex;
    font-size: 1.2rem;
    padding: 0;
    margin: 0;
  }

  li {
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-family: 'Oswald', sans-serif;

    &:not(:last-child)::after {
      content: '';
      background: url(${icon}) no-repeat;
      background-size: 1rem;
      height: 1rem;
      width: 1rem;
      margin: 0 1rem;
    }
  }
`;

const Logo = styled.img`
  max-width: 100%;
  max-height: 4rem;
  margin: 1rem;
`;

const StyledNavLink = styled(NavLink)`
  color: #000;
  text-decoration: none;

  &:hover {
    color: gray;
  }

  &.active {
    text-decoration: underline;
  }
`;

export default () => (
  <div className="row text-center">
    <div className="col-md-6 offset-md-3">
      <a href="/"><Logo src={logo} className="mb-2" alt="Redbridge Motors logo" /></a>
      <Nav>
        <ul>
          <li>
            <StyledNavLink exact to={Routes.home}>
              Home
          </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to={Routes.about}>About</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to={Routes.findMyCar}>Car Finder</StyledNavLink>
          </li>
        </ul>
      </Nav>
    </div>
  </div>
);

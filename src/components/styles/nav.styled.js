import styled, { css } from "styled-components";

const navbar = css`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;

const bgLight = css`
  background-color: rgba(248, 249, 250, 1);
`;

const navbarlight = css`
  color: rgba(0, 0, 0, 0.9);
`;

export const ContainerFluid = styled.div`
  width: 100%;
  padding-right: 0.75rem;
  padding-left: 0.75rem;
  margin-right: auto;
  margin-left: auto;
`;

export const NavBrand = styled.a`
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  text-decoration: none;
  white-space: nowrap;
`;

export const NavBar = styled.nav`
  ${navbar}
  ${bgLight}
  ${navbarlight}
`;

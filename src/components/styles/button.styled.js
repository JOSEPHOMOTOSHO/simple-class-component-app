import styled from "styled-components";

export const Btn = styled.button`
  width: 80px;
  cursor: pointer;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;
  &:focus {
    outline: 0;
    text-decoration: none;
  }

  &:hover {
    text-decoration: none;
  }
`;

export const BtnSecondary = styled(Btn)`
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
  &:focus {
    box-shadow: 0 0 0 0.2rem rgb(108 117 125 / 50%);
  }

  &:hover {
    color: #fff;
    background-color: #5a6268;
    border-color: #545b62;
  }
`;

export const BtnSmall = styled(BtnSecondary)`
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.2rem;
`;

export const BtnDanger = styled(BtnSmall)`
  margin: 2px;
  background-color: red;
`;

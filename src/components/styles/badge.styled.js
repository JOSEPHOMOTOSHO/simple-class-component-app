import styled from "styled-components";

export const BadgeMargin = styled.span`
  margin: 0.5rem;
`;

export const BadgePrimary = styled(BadgeMargin)`
  color: ${(props) => (props.warn ? "#212529" : "#fff")};
  background-color: ${(props) => (props.warn ? "#ffc107" : "#007bff")};
`;

export const Badge = styled(BadgePrimary)`
  display: inline-block;
  padding: 0.25em 0.4em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
  width: 30px;
`;

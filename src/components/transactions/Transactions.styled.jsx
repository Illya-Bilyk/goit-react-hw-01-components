import styled from 'styled-components';

export const Table = styled.table`
  table-layout: fixed;
  width: 700px;
  border-collapse: collapse;
`;
export const THead = styled.thead`
  background-color: blue;

  font-size: 32px;
`;
export const Tbody = styled.tbody`
  text-align: center;
  background-color: #fff;
  &: nth-child(even) {
    background-color: Lightgreen;
  } ;
`;
export const Th = styled.th`
  color: #fff;
  padding-top: 10px;
  padding-bottom: 10px;
  border-right: 1px solid white;
  &:last-child {
    border-right: none;
  }
`;
export const Td = styled.td`
  padding-top: 10px;
  padding-bottom: 10px;
  border-right: 1px solid #ccc;
  &:last-child {
    border-right: none;
  }
  font-size: 24px;
  color: rgb(94, 82, 82);
`;

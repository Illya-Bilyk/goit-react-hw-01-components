import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
`;
export const Item = styled.li`
  -webkit-box-shadow: 0px 5px 10px 6px rgba(34, 60, 80, 0.22);
  -moz-box-shadow: 0px 5px 10px 6px rgba(34, 60, 80, 0.22);
  box-shadow: 0px 5px 10px 6px rgba(34, 60, 80, 0.22);
  height: 75px;
  width: 300px;
  margin-bottom: 25px;

  display: flex;
  align-items: center;
`;
export const Status = styled.span`
  margin-right: 10px;
  margin-left: 10px;
  height: 25px;
  width: 25px;

  border-radius: 50%;
  display: inline-block;
  ${props =>
    props.isOnline ? `background-color: green` : `background-color: red`}
`;
export const Avatar = styled.img`
  margin-right: 10px;
  width: 65px;
  height: 65px;
`;
export const Name = styled.p`
  margin-right: 10px;
  font-size: 25px;
`;

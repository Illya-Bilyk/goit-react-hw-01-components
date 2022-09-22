import styled from 'styled-components';
export const ProfileWrap = styled.div`
  border: solid;
  width: 400px;
  height: 500px;
`;
export const Description = styled.div`
  width: 400px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: solid;
  padding-top: 15px;
  background-color: #ffffff;
`;
export const Avatar = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
`;
export const Name = styled.p`
  margin: 0;
  font-size: 32px;
  margin-bottom: 20px;
`;
export const UserInfo = styled.p`
  margin: 0;
  margin-bottom: 20px;
  font-size: 24px;
  color: gray;
`;
export const StatsList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
  width: 400px;
  height: 132px;
  background-color: rgb(201, 201, 201);
`;
export const Stats = styled.li`
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 133px;
  border-right: solid;
  &:last-child {
    border-right: none;
  }
`;
export const Label = styled.span`
  font-size: 24px;
  color: rgb(59, 59, 59);
  padding-bottom: 10px;
`;
export const Quantity = styled.span`
  font-size: 24px;
`;

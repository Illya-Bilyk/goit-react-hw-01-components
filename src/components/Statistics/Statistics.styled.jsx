import styled from 'styled-components';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const Statistic = styled.div`
  width: 400px;
  border: solid;
  margin-bottom: 10px;
  ${props => (props.title ? `height: 200px` : ` height: 100px;`)}
`;
export const Title = styled.h2`
    margin:0;
    font-size: 24px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    color: rgb(49, 49, 49);
}
`;

export const StatList = styled.ul`
  margin: 0;
  padding: 0;

  display: flex;
  justify-content: space-around;
  height: 100px;
`;
export const Item = styled.li`
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${getRandomHexColor};
`;
export const Label = styled.span`
  font-size: 20px;
  padding-bottom: 10px;
  color: #fff;
`;
export const Percentage = styled.span`
  font-size: 32px;
  color: #fff;
`;

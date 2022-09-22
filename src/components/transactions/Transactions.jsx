import { Table, THead, Tbody, Th, Td } from './Transactions.styled';

function capitalizeFirstLetter(item) {
  const capitalized = item.charAt(0).toUpperCase() + item.slice(1);

  return capitalized;
}

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <THead>
        <tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </tr>
      </THead>

      {items.map(item => (
        <Tbody key={item.id}>
          <tr>
            <Td>{capitalizeFirstLetter(item.type)}</Td>
            <Td>{item.amount}</Td>
            <Td>{item.currency}</Td>
          </tr>
        </Tbody>
      ))}
    </Table>
  );
};

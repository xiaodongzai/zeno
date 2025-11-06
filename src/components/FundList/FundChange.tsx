const FundChange = ({ value }: { value: string }) => {
  const changeNumber = parseFloat(value);
  if (isNaN(changeNumber)) {
    return <span>-</span>;
  }
  return (
    <span
      className={`text-sm ${changeNumber >= 0 ? 'text-red-500' : 'text-green-500'}`}
    >
      {changeNumber >= 0 ? '+' : '-'}
      {Math.abs(changeNumber).toFixed(2)}%
    </span>
  );
};

export default FundChange;

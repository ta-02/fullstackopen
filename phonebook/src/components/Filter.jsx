const Filter = ({ newFilter, handleFilterChange }) => {
  return (
    <div>
      Filter Name:
      <input value={newFilter} onChange={handleFilterChange} />
    </div>
  );
};

export default Filter;

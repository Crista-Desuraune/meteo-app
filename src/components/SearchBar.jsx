function SearchBar({ value, onChange, onClear }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Rechercher une ville..."
      />
      <button onClick={onClear}>Effacer</button>
    </div>
  );
}

export default SearchBar;

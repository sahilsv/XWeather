const Searchbar = ({ city, setCity, onSearch, placeholder}) => {

  return (
    <div className="search-bar">
      <form onSubmit={(e)=>onSearch(e.preventDefault())}>
      <input
        type="text"
        value={city}
        onChange={(e)=>setCity(e.target.value)}
        placeholder={placeholder}
        autoComplete="off"
        name="city"
      />
      <button type="submit">Search</button>

      </form>
          </div>
  );
};
export default Searchbar;
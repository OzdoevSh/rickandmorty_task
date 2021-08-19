import './Filter.scss'
const Filter = (props) => {
  const handleInputChange = (event) => {
    props.handleFilter({
      value: event.target.value,
      key: event.target.id,
    });
  };


  return (
    <form className="form">
      <input
        type="text"
        id="searchBox"
        name="searchBox"
        className="searchBox"
        placeholder="Type a character's name"
        onChange={handleInputChange}
      />

      <div>
        <label className="label" htmlFor="status">
          Status
        </label>
        <select
          className="select"
          name="status"
          id="status"
          onChange={handleInputChange}
        >
          <option value="all">All</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
        <label className="label" htmlFor="gender">
          Gender
        </label>
        <select
          className="select"
          name="gender"
          id="gender"
          onChange={handleInputChange}
        >
          <option value="all">All</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
    </form>
  );
};

export default Filter;
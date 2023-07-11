export default function Filter({ filter }) {
  return (
    <>
      <div>
        <label for="Filter">Filter</label>
        <select
          aria-label=".form-select-lg example"
          className="roundedcommon btn btn-outline-secondary mx-3 form-select form-select-sm "
          name="Filter"
          id="filter"
          onChange={(e) => filter(e.target.value)}
        >
          <option value="hotels" className="dropdown-item">
            Hotel
          </option>
          <option value="restaurants" className="dropdown-item">
            Resturant
          </option>
          <option value="attractions" className="dropdown-item">
            Attraction
          </option>
        </select>
      </div>
    </>
  );
}

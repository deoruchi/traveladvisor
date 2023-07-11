import { CiCalendar } from "react-icons/ci";
export default function Button() {
  return (
    <>
      <div className="col-2 col-md-2 col-lg-1 ">
        <button
          className="btn btn-outline-secondary roundedcommon "
          type="button"
          aria-expanded="false"
        >
          <CiCalendar /> Enter Dates
        </button>
      </div>
    </>
  );
}

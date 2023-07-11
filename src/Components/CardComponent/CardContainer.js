import img1 from "./rohan-g--mwNJswDlXE-unsplash.jpg";
import { BsCircle, BsCircleFill, BsHeart } from "react-icons/bs";
export default function CardContainer({
  numb,
  name,
  address,
  rank,
  url,
  review,
}) {
  return (
    <>
      <div className="container-fluid my-3 shadow rounded-3">
        <div className="row ">
          <div className="col-12 col-md-5  img-cap-top  ">
            <div class="like-button">
              <BsHeart className="bg-white rounded-circle p-1 heart start-md-75 " />
            </div>
            <img
              src={url ? url : img1}
              width="120px"
              height="100%"
              className="card-image"
            ></img>
          </div>

          <div class="card-body col-12 col-md-7">
            <h6 class="card-title">
              {numb + 1}.{name}
            </h6>
            <div></div>

            <div className="containerdiv">
              <ul className="row liststyle">
                <li>
                  <BsCircleFill />
                </li>
                <li>
                  <BsCircleFill />
                </li>
                <li>
                  <BsCircleFill />
                </li>
                <li>
                  <BsCircleFill />
                </li>

                <li>
                  <BsCircle />
                </li>
              </ul>
              <p className="rev text-secondary">{review}</p>
            </div>

            <p className="small text-secondary">{rank}</p>
          </div>
        </div>
      </div>
    </>
  );
}

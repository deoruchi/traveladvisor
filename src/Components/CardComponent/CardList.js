import React, { createRef, useEffect, useState } from "react";
import CardContainer from "./CardContainer";
import { Slider } from "./Slider";
import "./Card.css";
export const CardList = ({ cardData, childvalue, load }) => {
  const [refref, setrefref] = useState([]);

  console.log(cardData);
  return (
    <div className="overflow-scroll ">
      <p className="small text-secondary">
        {cardData ? cardData.length : 0} places sorted by traveler favorites{" "}
      </p>

      {load ? (
        <>loading...</>
      ) : (
        <div className="container-fluid cards">
          {cardData?.map((e, i) => {
            if (e.name !== undefined)
              return (
                <CardContainer
                  numb={i}
                  name={e.name}
                  address={e.address}
                  rank={e.ranking}
                  url={e.photo?.images?.medium?.url}
                  review={e.num_reviews}
                  selected={Number(childvalue) === i}
                />
              );
          })}
        </div>
      )}
    </div>
  );
};

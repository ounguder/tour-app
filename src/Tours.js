import React from "react";
import Tour from "./Tour";

const Tours = ({ tourList, removeItem }) => {
  return (
    <>
      <section>
        <div className="title">
          <h2>Our Tours</h2>
          <div className="underline"></div>
        </div>
        <div>
          {tourList.map((tour) => {
            return (
              <>
                <Tour key={tour.id} {...tour} removeItem={removeItem} />
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default Tours;

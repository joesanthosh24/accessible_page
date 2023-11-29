"use client";
import { useEffect, useState } from "react";

import ServicesComponent from "../../components/Services";

export default function Services() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("/api/services")
      .then((res) => res.json())
      .then((returnedData) => setData(returnedData));
  }, []);

  if (!data) {
    return <div>Loading</div>;
  }
  return (
    <>
      <div className="jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h1>{data.headerTitle}</h1>
              <p>{data.mainParagraph}</p>
            </div>
            <div className="col-md-4 d-flex justify-content-center">
              {data.image && (
                <img
                  className="img-fluid"
                  src={data.image.src}
                  alt={data.image.alt}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      {data.services && <ServicesComponent services={data.services} />}
    </>
  );
}

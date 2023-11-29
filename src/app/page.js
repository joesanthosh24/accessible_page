"use client";
import HomeContentWithLinkContainer from "@/components/HomeContentWithLinkContainer";
import { useEffect, useState } from "react";

export default function Home() {
  let [data, setData] = useState({});

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((items) => setData(items));
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <>
      <div className="jumbotron">
        <div className="container">
          <h1>{data.headerTitle}</h1>
          <p>{data.mainParagraph}</p>
        </div>
      </div>

      <div className="container">
        <h2 className="community">{data.empowerCommunity}</h2>
        <div className="row">
          <HomeContentWithLinkContainer
            rowContent={data.rowContent && data.rowContent.approach}
          />
          <HomeContentWithLinkContainer
            rowContent={data.rowContent && data.rowContent.services}
          />
          <HomeContentWithLinkContainer
            rowContent={data.rowContent && data.rowContent.testimonials}
          />
        </div>
        <hr />
      </div>
    </>
  );
}

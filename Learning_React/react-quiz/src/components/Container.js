import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import useTopicList from "../Hooks/useTopiclist";
// import styled from "../styles/container.module.css";
import "../styles/global.css";
import Item from "./Item";

export default function Container() {
  const [Page, setPage] = useState(1);
  const { load, error, topics, hasMore } = useTopicList(Page);
  // console.log("Current page:", Page);
  // console.log("Topics loaded:", topics.length);

  return (
    <div>
      {topics.length > 0 && (
        <InfiniteScroll
          dataLength={topics.length}
          hasMore={hasMore}
          loader="Loading....."
          next={() => setPage(1)}
        >
          {topics.map((topic) => (
            <Link to="/quiz" key={topic.ID}>
              <Item
                name={topic.name}
                image={topic.image}
                id={topic.ID}
                noq={topic.noq}
              />
            </Link>
          ))}
        </InfiniteScroll>
      )}
      {/* style={{ fontSize: 25, marginTop: 20, textTlign: "center" }} */}
      {!load && topics.length === 0 && <p className="load">No data found</p>}
      {load && <p className="load">Loading.....</p>}
      {error && <p className="load">There was an error!</p>}
    </div>
  );
}

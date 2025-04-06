import React from "react";
import { Link } from "react-router-dom";
import styled from "../styles/container.module.css";
import "../styles/global.css";
import Item from "./Item";

const styles = {
  color: "black",
};

export default function Container() {
  return (
    <div className={styled.cont}>
      <Link className={styled.link} to="/quiz">
        <Item
          name="#01 Binary Search Quiz"
          image="/HTML_Template/images/bs.jpg"
        />
      </Link>
      <Link className={styled.link} to="/quiz">
        <Item
          name="#02 Two Pointer Quiz"
          image="/HTML_Template/images/photo_2025-04-01_12-09-14.jpg"
        />
      </Link>

      <Link className={styled.link} to="/quiz">
        <Item
          name="#03 Linked List Quiz"
          image="/HTML_Template/images/photo_2025-04-01_12-09-29.jpg"
        />
      </Link>

      <Link className={styled.link} to="/quiz">
        <Item
          name="#04 Graph Quiz"
          image="/HTML_Template/images/photo_2025-04-01_12-09-26.jpg"
        />
      </Link>

      <Link className={styled.link} to="/quiz">
        <Item
          name="#05 Tree Quiz"
          image="/HTML_Template/images/photo_2025-04-01_12-09-39.jpg"
        />
      </Link>

      <Link className={styled.link} to="/quiz">
        <Item
          name="#06 DP Quiz"
          image="/HTML_Template/images/photo_2025-04-01_12-09-33.jpg"
        />
      </Link>

      <Link className={styled.link} to="/quiz">
        <Item
          name="#07 Array Quiz"
          image="/HTML_Template/images/photo_2025-04-01_12-09-36.jpg"
        />
      </Link>

      <Link className={styled.link} to="/quiz">
        <Item
          name="#08 Hashing Quiz"
          image="/HTML_Template/images/photo_2025-04-01_12-09-43.jpg"
        />
      </Link>
    </div>
  );
}

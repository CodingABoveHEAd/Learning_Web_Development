import React from "react";
import styled from "../styles/container.module.css";
import "../styles/global.css";
import Item from "./Item";

export default function Container() {
  return (
    <div className={styled.cont}>
      <Item
        name="#01 Binary Search Quiz"
        image="/HTML_Template/images/bs.jpg"
      />
      <Item
        name="#02 Two Pointer Quiz"
        image="/HTML_Template/images/photo_2025-04-01_12-09-14.jpg"
      />
      <Item
        name="#03 Linked List Quiz"
        image="/HTML_Template/images/photo_2025-04-01_12-09-29.jpg"
      />
      <Item
        name="#04 Graph Quiz"
        image="/HTML_Template/images/photo_2025-04-01_12-09-26.jpg"
      />
      <Item
        name="#05 Tree Quiz"
        image="/HTML_Template/images/photo_2025-04-01_12-09-39.jpg"
      />
      <Item
        name="#06 DP Quiz"
        image="/HTML_Template/images/photo_2025-04-01_12-09-33.jpg"
      />
      <Item
        name="#07 Array Quiz"
        image="/HTML_Template/images/photo_2025-04-01_12-09-36.jpg"
      />
      <Item
        name="#08 Hashing Quiz"
        image="/HTML_Template/images/photo_2025-04-01_12-09-43.jpg"
      />
    </div>
  );
}

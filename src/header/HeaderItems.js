// Clickable Items with image
import React from "react";
import "./header.scss";
import { Icon } from "@iconify/react";

export function HeaderItems(props) {
  const icons = props.icons;
  const iconsList = icons.map((icon) => (
    <li key={icon.name}>
      <a href="#">
        <Icon className="icon-style" icon={icon.icon} />
      </a>
    </li>
  ));

  return (
    <div>
      <ul className="list-horizontal">{iconsList}</ul>
    </div>
  );
}

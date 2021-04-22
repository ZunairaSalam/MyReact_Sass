// Clickable Items with image
import React from "react";
import "./sidebar.scss";
import { Icon, InlineIcon } from "@iconify/react";

export function SidebarItems(props) {
  const list = props.list;
  const listItems = list.map((list) => (
    <li key={list.name}>
      <a href="#" className="sidebar-item">
        <Icon icon={list.icon} className="icon-style" />
        {list.name}
      </a>
    </li>
  ));

  return (
    <div>
      <ul className="list-style">{listItems} </ul>
    </div>
  );
}

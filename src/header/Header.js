// Header.js

import React from "react";
import { HeaderItems } from "./HeaderItems";
import youtubeLogo from "../assets/youtube-logo.png";
import "./header.scss";
import SearchField from "react-search-field";

import videoPlus from "@iconify-icons/mdi/video-plus";

import baselineApps from "@iconify-icons/ic/baseline-apps";

import bxsBell from "@iconify-icons/bx/bxs-bell";

import userAvatarFilled from "@iconify-icons/carbon/user-avatar-filled";

import micOn28Filled from "@iconify-icons/fluent/mic-on-28-filled";

export function Header() {
  const micIcon = [{ name: "mic", icon: micOn28Filled }];
  const icons = [
    {
      name: "create",
      icon: videoPlus
    },

    {
      name: "youtube-apps",
      icon: baselineApps
    },
    {
      name: "bell",
      icon: bxsBell
    },
    {
      name: "profile",
      icon: userAvatarFilled
    }
  ];

  return (
    <div>
      <div className="header">
        <span className="header-left">
          <a href="#">
            <img className="logo-style" alt="youtube logo" src={youtubeLogo} />
            <p>YouTube</p>
          </a>
        </span>

        <span className="header-center">
          <SearchField className="searchbar" />
          <HeaderItems icons={micIcon} />
        </span>

        <span className="header-right">
          <HeaderItems icons={icons} />
        </span>
      </div>
    </div>
  );
}

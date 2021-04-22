import React from "react";

import { SidebarItems } from "./SidebarItems";

import homeFilled from "@iconify-icons/ant-design/home-filled";

import compassAlt from "@iconify-icons/el/compass-alt";

import baselineSubscriptions from "@iconify-icons/ic/baseline-subscriptions";

import baselineVideoLibrary from "@iconify-icons/ic/baseline-video-library";
import historyIcon from "@iconify-icons/codicon/history";

import sharpWatchLater from "@iconify-icons/ic/sharp-watch-later";
import bxsLike from "@iconify-icons/bx/bxs-like";
import settingsSolid from "@iconify-icons/clarity/settings-solid";
import flagFilled from "@iconify-icons/ant-design/flag-filled";

import bxsHelpCircle from "@iconify-icons/bx/bxs-help-circle";

import bxsMessageError from "@iconify-icons/bx/bxs-message-error";

export function Sidebar(props) {
  const list = [
    { name: "Home", icon: homeFilled },
    { name: "Explore", icon: compassAlt },
    { name: "Subscriptions", icon: baselineSubscriptions },

    { name: "Library", icon: baselineVideoLibrary },
    { name: "Your Videos", icon: historyIcon },
    { name: "Watch Later", icon: sharpWatchLater },
    { name: "Liked Videos", icon: bxsLike },

    { name: "Settings", icon: settingsSolid },
    { name: "Report History", icon: flagFilled },
    { name: "Help", icon: bxsHelpCircle },
    { name: "Send Feedback", icon: bxsMessageError }
  ];

  return (
    <div>
      <span>
        <SidebarItems list={list} />
      </span>
    </div>
  );
}

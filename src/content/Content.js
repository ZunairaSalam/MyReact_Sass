import React from "react";
import { ContentItems } from "./ContentItems";
import { Tags } from "./Tags";
import astronaut from "../assets/astronaut.jpg";
import lightning from "../assets/lightning.jpg";
import party from "../assets/party.jpg";
import security from "../assets/security.jpg";
import tech from "../assets/tech.jpg";
import vaccine from "../assets/vaccine.jpg";
import food from "../assets/food.jpg";
import buildings from "../assets/buildings.jpg";
import travel from "../assets/travel.jpg";
import code from "../assets/code.jpg";
import hike from "../assets/hike.jpg";
import gaming from "../assets/gaming.jpg";

export function Content() {
  const videos = [
    {
      url: astronaut,
      title: "Astronaut in Space",
      channel: "ABC world",
      views: "1.2M views"
    },
    {
      url: lightning,
      title: "Lightning in Sky",
      channel: "ABC world",
      views: "1.2M views"
    },
    {
      url: party,
      title: "Party Song",
      channel: "ABC world",
      views: "1.2M views"
    },
    {
      url: security,
      title: "Security Tips & Tricks",
      channel: "ABC world",
      views: "1.2M views"
    },
    {
      url: tech,
      title: "Technology 101",
      channel: "ABC world",
      views: "1.2M views"
    },
    {
      url: vaccine,
      title: "COVID-19 Vaccine",
      channel: "ABC world",
      views: "1.2M views"
    },
    {
      url: food,
      title: "Healthy diet plan",
      channel: "ABC world",
      views: "1.2M views"
    },
    {
      url: hike,
      title: "Hiking Trip to Europe",
      channel: "ABC world",
      views: "1.2M views"
    },
    {
      url: buildings,
      title: "Modern Architecture 2021",
      channel: "ABC world",
      views: "1.2M views"
    },
    {
      url: gaming,
      title: " Epic Gaming Setup!",
      channel: "ABC world",
      views: "1.2M views"
    },
    {
      url: travel,
      title: "Most Beautiful Trip",
      channel: "ABC world",
      views: "1.2M views"
    },
    {
      url: code,
      title: "Coding 101 with Max",
      channel: "ABC world",
      views: "1.2M views"
    }
  ];

  return (
    <div class="content-container">
      <Tags />
      <ContentItems videos={videos} />
    </div>
  );
}

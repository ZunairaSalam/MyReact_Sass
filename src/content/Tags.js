import React from "react";

export function Tags() {
  const tags = [
    "food",
    "hollywood",
    "tv",
    "music",
    "lifehacks",
    "math",
    "computer"
  ];
  const taglist = tags.map((tag) => (
    <div>
      <li>
        <button class="round-button">{tag}</button>
      </li>
    </div>
  ));
  return (
    <div>
      <ul class="tag-list">{taglist}</ul>
    </div>
  );
}

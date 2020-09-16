import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Reveal } from "semantic-ui-react";

export default function Charm({ name, color, iconID, icon }) {
  return (
    <div className="d-flex border rounded p-1 mr-3">
      <Reveal animated="move down">
        <Reveal.Content
          className="d-flex justify-content-center bg-white"
          style={{ width: "5rem" }}
          visible
        >
          <FontAwesomeIcon
            className="d-flex align-items-center bg-white"
            color={color}
            size="lg"
            icon={[`${iconID}`, `${icon}`]}
          />
        </Reveal.Content>
        <Reveal.Content className="d-flex justify-content-center" hidden>
          {name}
        </Reveal.Content>
      </Reveal>
    </div>
  );
}

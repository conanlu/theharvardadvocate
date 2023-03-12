/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Themed } from "theme-ui";
import { theme } from "../theme/theme.js";

const headerColor = theme['colors']['headerColor'];

const imageListElementSx = {
  maxWidth: "100%",
  padding: "0.8em",
  a: {
    color: "text",
    textDecoration: "none",
  },
  ".listItemImage img": {
    width: "100%",
  },
  ".listItem": {
    display: "flex",
    flexDirection: "column",
    gap: "0.1em",
    textAlign: "center",
    alignItems: "center",
  },
  h4: {
    "fontFamily": "Poppins",
    "fontSize": "0.7em",
    color: headerColor,
  },
  padding: "1em",
};

const imageListElementSx_home = {
  maxWidth: "100%",
  // padding: "0.8em",
  a: {
    color: "text",
    textDecoration: "none",
  },
  ".listItemImage img": {
    width: "100%",
  },
  ".listItem": {
    display: "flex",
    flexDirection: "column",
    // gap: "0.1em",
    // textAlign: "center",
    // alignItems: "center",
  },
  h4: {
    "fontFamily": "Poppins",
    "fontSize": "0.8em",
    // color: headerColor,
  },
 //  padding: "1em",



};

export default function ImageListElement(props) {
  // console.log(props.item)
  return (
    <div sx={props.home ? imageListElementSx_home : imageListElementSx}>

      
      <Link to={"/" + props.item.slug.current} key={props.item.slug.current}>
        <div className="listItem">
          <div className="listItemImage">
            {props.item.mainImage ? (
              <img src={props.item.mainImage.asset.url} alt="" />
            ) : // TODO: better (more robust) check for this
            props.item.images && props.item.images[0] ? (
              <img src={props.item.images[0].asset.url} alt="" />
            ) : null}
          </div>
          <div>
          {props.home ? <Themed.h3><i>Art • {props.item.issue.title}</i></Themed.h3> : ""}
            <Themed.h2>{props.item.title}</Themed.h2>
          </div>
          <div>
            {"authors" in props.item && (
              <Themed.h4>
                By{" "}
                {
                  //TODO: link to author page
                }
                {props.item.authors
                  .map(({ name }) => name).join(", ")}
              </Themed.h4>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}


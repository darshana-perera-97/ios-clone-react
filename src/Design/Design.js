import React from "react";
import { isMobile } from "react-device-detect";
import Browser from "./Browser/Browser";
import Mobile from "./Mobile/Mobile";

export default function Design() {
      console.log(isMobile)
  return <div>
      {!isMobile && <Browser/>}
      {isMobile && <Mobile/>}
  </div>;
}

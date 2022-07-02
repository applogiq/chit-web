/* ************************** Import Packages *************************** **/
import dynamic from "next/dynamic";
import React from "react";

/* ************************** Import Components *************************** **/
const ChitScheme = dynamic(() => import("./ChitSchemeComponent"), {
  ssr: false,
}); // To fix "Warning: Expected server HTML to contain a matching <tag> in <tag>."

const ChitSchemeRoute = () => {
  return <ChitScheme />;
};

export default ChitSchemeRoute;

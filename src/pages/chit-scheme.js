/* ************************** Import Packages *************************** **/
import dynamic from "next/dynamic";
import React from "react";
import { useSelector } from "react-redux";

/* ************************** Import Components *************************** **/
const ChitScheme = dynamic(() => import("./ChitSchemeComponent"), {
  ssr: false,
}); // To fix "Warning: Expected server HTML to contain a matching <tag> in <tag>."

const ChitSchemeRoute = () => {
  const loading = useSelector((state) => state?.joinscheme?.loading);
  return <ChitScheme loading={loading} />;
};

export default ChitSchemeRoute;

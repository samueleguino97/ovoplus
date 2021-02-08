import * as React from "react";

export type LogoProps = { width?: number };

function Logo({ width }: LogoProps) {
  return <img style={{ width: width || "250px" }} src="/logo.png" />;
}

export default Logo;

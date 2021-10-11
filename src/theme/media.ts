import { useEffect, useState } from "react";
import { css } from "styled-components/macro";
import { breakpoints as sizes, BreakPoints } from "theme/breakpoints";

export type Sizes = keyof BreakPoints;

export type MediaServiceType = {
  atLeastDesktop: (...args: any[]) => any;
  atLeastLaptop: (...args: any[]) => any;
  atLeastLaptopL: (...args: any[]) => any;
  atLeastLaptopML: (...args: any[]) => any;
  atLeastLaptopM: (...args: any[]) => any;
  atLeastMobile: (...args: any[]) => any;
  atLeastMobileL: (...args: any[]) => any;
  atLeastTablet: (...args: any[]) => any;
  atLeastTabletL: (...args: any[]) => any;
  desktop: (...args: any[]) => any;
  laptop: (...args: any[]) => any;
  laptopL: (...args: any[]) => any;
  laptopM: (...args: any[]) => any;
  mobile: (...args: any[]) => any;
  mobileL: (...args: any[]) => any;
  tablet: (...args: any[]) => any;
  tabletL: (...args: any[]) => any;
};

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  (acc as any)[label as keyof Sizes] = (
    literals: TemplateStringsArray,
    ...args: any[]
  ) =>
    css`
      @media (max-width: ${sizes[label as Sizes]}px) {
        // @ts-ignore
        ${css(literals, ...args)}
      }
    `;
  (acc as any)[
    "atLeast" + label[0].toUpperCase() + label.slice(1, label.length)
  ] = (literals: TemplateStringsArray, ...args: any[]) => {
    return css`
      @media (min-width: ${sizes[label as Sizes] + 1}px) {
        // @ts-ignore
        ${css(literals, ...args)}
      }
    `;
  };

  return acc;
}, {});

export function useMedia(size: Sizes): boolean {
  const getSize = () => {
    if (window.innerWidth <= sizes[size]) {
      return true;
    }

    return false;
  };

  const [isSize, setIsSize] = useState(getSize());

  useEffect(() => {
    const handleResize = () => {
      setIsSize(getSize());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line
  }, []);

  return isSize;
}

export default media as MediaServiceType;

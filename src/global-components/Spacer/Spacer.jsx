import styled from "styled-components";
import { QUERIES } from "../../Breakpoint";

function getDestopSize(p) {
   return p?.$desktop;
}

function getLaptopSize(p) {
   return p?.$laptop ?? p?.$desktop;
}

function getMobileSize(p) {
   return p?.$mobile ?? p?.$desktop;
}

const Spacer = styled.span`
   display: block;
   width: ${getDestopSize}px;
   min-width: ${getDestopSize}px;
   height: ${getDestopSize}px;
   min-height: ${getDestopSize}px;

   @media ${QUERIES.tabletAndDown} {
      width: ${getLaptopSize}px;
      min-width: ${getLaptopSize}px;
      height: ${getLaptopSize}px;
      min-height: ${getLaptopSize}px;
   }

   @media ${QUERIES.mobileAndDown} {
      width: ${getMobileSize}px;
      min-width: ${getMobileSize}px;
      height: ${getMobileSize}px;
      min-height: ${getMobileSize}px;
   }
`;

export default Spacer;

import styled, { keyframes } from "styled-components";
import { QUERIES } from "../../Breakpoint";

const marquee = keyframes`
   from {
      transform: var(--brandsContentStart);
   }
   to {
      transform: var(--brandsContentEnd);
   }
`;

const Wrapper = styled.section`
   overflow: hidden;
`;

const Content = styled.div`
   --brandsContentTime: 12000ms;
   --brandsContentStart: translateX(-95%);
   --brandsContentEnd: translateX(10%);
   display: flex;
   gap: 120px;
   text-wrap: nowrap;
   transform-origin: center;
   animation: ${marquee} var(--brandsContentTime) linear infinite alternate both;

   @media ${QUERIES.mobileAndDown} {
      & {
         --brandsContentTime: 15000ms;
         --brandsContentStart: translateX(-510%);
         --brandsContentEnd: translateX(10%);
      }
   }
`;

const Name = styled.h4`
   font-size: 6rem;
   font-weight: 500;
`;

export { Wrapper, Name, Content };

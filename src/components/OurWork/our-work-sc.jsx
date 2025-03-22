import styled from "styled-components";
import { QUERIES } from "../../Breakpoint";

const Wrapper = styled.section`
   display: grid;
   grid-template-columns: 1fr auto 1fr;
   gap: 20px;
`;

const Filler = styled.div``;

const CardWrapper = styled.article`
   display: grid;
   grid-template-columns: 1fr 1fr;
   gap: 32px;

   @media ${QUERIES.mobileAndDown} {
      grid-template-columns: 1fr;
   }
`;

const Card = styled.div`
   /* for border radius */
   overflow: hidden;
   background-color: var(--cardBgColor);
   border-radius: 32px;
   display: grid;
   aspect-ratio: 1 / 1;
   cursor: pointer;
`;

const CardImageWrapper = styled.div`
   grid-column: 1 / -1;
   grid-row: 1 / -1;
   justify-self: center;
   align-self: start;
`;

const ContentWrapper = styled.div`
   --slideUpTransition: all 500ms ease-out;
   grid-column: 1 / -1;
   grid-row: 1 / -1;
   justify-self: center;
   align-self: end;
   transition: var(--slideUpTransition);
   transform: translateY(55%);

   ${Card}:hover & {
      transform: translateY(0%);
   }
`;

const CardHeading = styled.p`
   font-size: 1.8rem;
   padding: 0 25px;
   text-align: center;
   margin-bottom: 16px;

   @media ${QUERIES.tabletAndDown} {
      font-size: 1.4rem;
   }

   @media ${QUERIES.tabletAndDown} {
      font-size: 1.2rem;
   }
`;

const BadgeWrapper = styled.div`
   display: flex;
   justify-content: center;
   gap: 8px;

   margin-bottom: 38px;
   opacity: 0;
   transition: var(--slideUpTransition);

   ${Card}:hover & {
      opacity: 1;
   }

   @media ${QUERIES.tabletAndDown} {
      & {
         margin-bottom: 22px;
      }
   }
`;

const Badge = styled.article`
   background-color: hsl(0 0% 6%);
   color: hsl(0 0% 100%);
   padding: 8px 16px;
   font-size: 0.6875rem;
   border-radius: 9999999px;
`;

export {
   Wrapper,
   CardWrapper,
   Card,
   CardImageWrapper,
   CardHeading,
   Filler,
   BadgeWrapper,
   Badge,
   ContentWrapper,
};

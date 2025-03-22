import styled from "styled-components";
import { QUERIES } from "../../Breakpoint";

const Wrapper = styled.section`
   display: grid;
   grid-template-columns: 1fr auto 1fr;
   gap: 20px;
`;

const Filler = styled.div``;

const DesignerWrapper = styled.article`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 96px;

   @media ${QUERIES.tabletAndDown} {
      & {
         gap: 48px;
      }
   }
`;

const Info = styled.div`
   text-align: center;

   p {
      font-weight: 600;
      font-size: 0.875rem;
   }

   span {
      font-family: "Instrument Serif", serif;
      font-size: 1.125rem;
   }
`;

const Heading = styled.h2`
   font-size: 10.625rem;
   font-weight: 800;
   line-height: 0.9;
   text-align: center;
   text-transform: uppercase;
   text-wrap: balance;

   @media ${QUERIES.tabletAndDown} {
      & {
         font-size: 7.4rem;
      }
   }

   @media ${QUERIES.mobileAndDown} {
      & {
         font-size: 3.625rem;
      }
   }
`;

const SubHeading = styled.h4`
   font-family: "Instrument Serif", serif;
   font-size: 4rem;
   font-weight: 400;
   line-height: 1;
   text-align: center;
   text-wrap: balance;

   @media ${QUERIES.tabletAndDown} {
      & {
         font-size: 2.8rem;
      }
   }

   @media ${QUERIES.mobileAndDown} {
      & {
         font-size: 1.2rem;
      }
   }
`;

const DesignerCardWrapper = styled.article`
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
   isolation: isolate;

   @media ${QUERIES.tabletAndDown} {
      & {
         grid-template-columns: 1fr 1fr;
         gap: 20px;
      }
   }

   @media ${QUERIES.mobileAndDown} {
      & {
         grid-template-columns: 1fr;
         gap: 20px;
      }
   }
`;

const DesignerCard = styled.article`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 20px;
   transform-origin: bottom;
   transform: skew(0deg, 20deg);
   transition: all 600ms ease-in-out;

   &:hover {
      transform: skew(0deg, 20deg) translate(0%, -5%);
   }

   &:first-of-type {
      transform: skew(0deg, 20deg) translate(50px, -20px);
      z-index: 2;
   }

   &:first-of-type:hover {
      transform: skew(0deg, 20deg) translate(50px, calc(-20px + -5%));
   }

   &:last-of-type {
      transform: skew(0deg, 20deg) translate(-50px, 30px);
      z-index: -1;
   }

   &:last-of-type:hover {
      transform: skew(0deg, 20deg) translate(-50px, calc(30px + -5%));
   }

   @media ${QUERIES.tabletAndDown} {
      &,
      &:first-of-type,
      &:last-of-type {
         transform: none;
      }

      &:hover,
      &:first-of-type:hover,
      &:last-of-type:hover {
         transform: none;
      }

      &:first-of-type {
         grid-column: 1 / -1;
      }
   }
`;

const DesignerCardImageWrapper = styled.div`
   width: 250px;
   height: 350px;
   background-color: cadetblue;
   border-radius: 20px;
   /* for border radius */
   overflow: hidden;
   filter: grayscale(1);
`;

const DesignerCardInfo = styled.div`
   text-align: center;

   p {
      font-size: 0.875rem;
      font-weight: 800;
      text-transform: uppercase;
   }

   span {
      font-family: "Instrument Serif", serif;
      font-size: 1.125rem;
   }
`;

export {
   Wrapper,
   Filler,
   DesignerWrapper,
   Info,
   Heading,
   SubHeading,
   DesignerCardWrapper,
   DesignerCard,
   DesignerCardImageWrapper,
   DesignerCardInfo,
};

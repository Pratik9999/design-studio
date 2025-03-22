import styled, { keyframes } from "styled-components";
import { QUERIES } from "../../Breakpoint";

const Wrapper = styled.section`
   display: grid;
   grid-template-columns: 1fr auto 1fr;
   gap: 20px;
`;

const Filler = styled.div``;

const HeroWrapper = styled.div`
   perspective: 800px;
   transform-style: preserve-3d;
   display: grid;
   grid-template-columns: 1fr 1fr;
   grid-template-areas:
      "header header"
      "photo cta";
   gap: 20px 40px;

   @media ${QUERIES.mobileAndDown} {
      & {
         grid-template-columns: 1fr;
         grid-template-areas:
            "header"
            "photo"
            "cta";
      }
   }
`;

const Heading = styled.h2`
   grid-area: header;
   font-size: 8rem;
   font-weight: 500;
   text-align: center;
   letter-spacing: -0.02em;
   text-wrap: balance;
   line-height: 1;
   max-width: 1000px;
   margin: 0 auto;
   will-change: transform;
   transform: rotateX(-0.1deg);

   span {
      font-family: "Instrument Serif", serif;
      font-style: italic;
   }

   @media ${QUERIES.tabletAndDown} {
      & {
         font-size: 5.4rem;
      }
   }

   @media ${QUERIES.mobileAndDown} {
      & {
         font-size: 2.6rem;
      }
   }
`;

const maganizeAnimation = keyframes`
   0% {
      transform: skew(-20deg, 6deg) translate(-54px, 20px) rotate(12deg);
   }
   25% {
      transform: skew(4deg, 7deg) translate(474px, -339px) rotate(-29deg);
   }
   50% {
      transform: skew(-19deg, 9deg) translate(454px, -30px) rotate(9deg);
   }
   75% {
      transform: skew(-6deg, 6deg) translate(-175px, -286px) rotate(-37deg);
   }
   100% {
      transform: skew(-20deg, 6deg) translate(-54px, 20px) rotate(12deg);
   }
`;

const ImageWrapper = styled.div`
   grid-column: 1;
   grid-row: 1 / 3;
   justify-self: end;
   align-self: end;
   max-width: 220px;
   transform-origin: center;
   will-change: transform;

   animation: ${maganizeAnimation} 16000ms both infinite
      cubic-bezier(0.79, 0.14, 0.15, 0.86);
   animation-delay: 500ms;

   @media ${QUERIES.tabletAndDown} {
      & {
         animation: none;
         transform: skew(-20deg, 6deg) translate(-35px, 20px) rotate(12deg);
      }
   }

   @media ${QUERIES.mobileAndDown} {
      & {
         transform: skew(-20deg, 6deg) rotate(12deg);
         grid-row: 2;
         justify-self: center;
         align-self: center;
      }
   }
`;

const CtaWrapper = styled.div`
   /* grid declartion */
   grid-area: cta;
   justify-self: start;
   align-self: start;

   /* flex declartion */
   display: flex;
   flex-direction: column;
   align-items: start;
   gap: 50px;

   max-width: 372px;

   p {
      font-size: 0.9375rem;
   }

   @media ${QUERIES.mobileAndDown} {
      & {
         /* grid declartion */
         justify-self: center;
         align-self: center;

         /* flex declartion */
         justify-content: center;
         align-items: center;

         text-align: center;
      }
   }
`;

export { Wrapper, Filler, HeroWrapper, Heading, ImageWrapper, CtaWrapper };

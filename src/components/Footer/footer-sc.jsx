import styled, { keyframes } from "styled-components";
import { QUERIES } from "../../Breakpoint";

const Wrapper = styled.footer`
   /* for Heading text */
   overflow: hidden;
   isolation: isolate;
`;

const HeadingWrapper = styled.div`
   display: flex;
   gap: 40px;
   align-items: center;
   text-wrap: nowrap;
   position: relative;
   z-index: -1;
`;

const slideHeading = keyframes`
   from {
      transform: translateX(0%);
   }
   to {
      transform: translateX(20%);
   }
`;

const Heading = styled.h4`
   font-size: 8rem;
   font-weight: 400;
   text-align: center;
   text-wrap: nowrap;
   animation: ${slideHeading} 8000ms infinite alternate
      cubic-bezier(0.46, 0.03, 0.52, 0.96);

   span {
      font-family: "Instrument Serif", serif;
      font-style: italic;
   }

   @media ${QUERIES.mobileAndDown} {
      & {
         font-size: 4rem;
      }
   }
`;

const slideSendIcon = keyframes`
   0% {
      transform: translateX(-2200%);
   }
   40% {
      transform: translateX(108%);
   }
   50% {
      transform: translateX(108%);
   }
   60% {
      transform: translateX(108%);
   }
   100% {
      transform: translateX(2200%);
   }
`;

const SendIconWrapper = styled.div`
   width: 32px;
   height: 32px;
   animation: ${slideSendIcon} 4000ms infinite alternate-reverse
      cubic-bezier(0.46, 0.03, 0.52, 0.96);
`;

const LinkWrapper = styled.ul`
   display: flex;
   gap: 24px;

   li {
      font-size: 0.75rem;
      color: hsl(0deg 0% 38%);
   }

   @media ${QUERIES.mobileAndDown} {
      & {
         flex-direction: column;
         text-align: center;
      }
   }
`;

const GridWrapper = styled.article`
   display: grid;
   gap: 68px;
   justify-content: center;
   justify-items: center;
   position: relative;
   isolation: isolate;
`;

const MailBoxWrapper = styled.div`
   position: absolute;
   justify-self: center;
   align-self: start;
   width: 700px;

   @media ${QUERIES.tabletAndDown} {
      & {
         width: 686px;
      }
   }

   @media ${QUERIES.mobileAndDown} {
      & {
         width: 386px;
      }
   }
`;

const ImageFiller = styled.div`
   width: 100%;
   height: 345px;

   @media ${QUERIES.mobileAndDown} {
      & {
         height: 166px;
      }
   }
`;

const GradientBox = styled.div`
   background: linear-gradient(180deg, #212121 0%, rgba(15, 15, 15, 0) 100%);
   border-radius: 32px 32px 0px 0px;
   width: 96%;
   height: 190px;
   /* grid-column: 1 / -1; */
   position: absolute;
   z-index: -1;
   justify-self: center;
   align-self: center;

   @media ${QUERIES.mobileAndDown} {
      & {
         width: 90%;
         height: 390px;
      }
   }
`;

export {
   Wrapper,
   Heading,
   HeadingWrapper,
   LinkWrapper,
   GridWrapper,
   MailBoxWrapper,
   ImageFiller,
   GradientBox,
   SendIconWrapper,
};

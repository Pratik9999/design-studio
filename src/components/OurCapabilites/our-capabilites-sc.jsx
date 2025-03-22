import styled from "styled-components";
import { QUERIES } from "../../Breakpoint";

const Wrapper = styled.section`
   display: grid;
   grid-template-columns: 1fr auto 1fr;
   gap: 20px;
`;

const Filler = styled.div``;

const CapabilitesWrapper = styled.article`
   display: grid;
   grid-template-columns: 1fr 1fr;

   @media ${QUERIES.tabletAndDown} {
      & {
         grid-template-columns: 1fr;
      }
   }
`;

const LinkWrapper = styled.ul`
   display: grid;
   grid-template-columns: 1fr 1fr;
   justify-content: space-between;
   gap: 8px 32px;

   li {
      font-size: 1.6rem;
      min-width: 290px;
   }

   @media ${QUERIES.tabletAndDown} {
      & {
         li {
            min-width: 260px;
         }
      }
   }

   @media ${QUERIES.mobileAndDown} {
      & {
         grid-template-columns: 1fr;
         text-align: center;
         gap: 16px 32px;

         li {
            font-size: 1.2rem;
            min-width: 100%;
         }
      }
   }
`;

const Heading = styled.h4`
   font-family: "Instrument Serif", serif;
   font-size: 4rem;
   font-weight: 400;
   margin-bottom: 26px;

   @media ${QUERIES.tabletAndDown} {
      & {
         text-align: center;
         font-size: 3.625rem;
      }
   }
`;

export { Wrapper, Filler, CapabilitesWrapper, LinkWrapper, Heading };

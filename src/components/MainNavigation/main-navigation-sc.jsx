import styled from "styled-components";

const Wrapper = styled.section`
   display: grid;
   grid-template-columns: 1fr auto 1fr;
   position: sticky;
   top: 48px;
   z-index: 9999;
`;

const Filler = styled.div``;

const NavWrapper = styled.ul`
   padding: 1rem 1.5rem;
   display: flex;
   gap: 1.5rem;
   font-size: 0.875rem;
   font-weight: 500;
   background-color: hsla(0 0 11% / 80%);
   border-radius: 9999999px;
   backdrop-filter: blur(2px);
`;

export { Wrapper, Filler, NavWrapper };

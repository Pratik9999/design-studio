import styled from "styled-components";

const Wrapper = styled.button`
   overflow: hidden;
   cursor: pointer;
   background-color: hsl(0 0 100%);
   border: none;
   padding: 18px 32px;
   font-size: 0.875rem;
   font-weight: 600;
   border-radius: 9999999px;
   display: flex;
   align-items: center;
   gap: 12px;

   img {
      transition: transform 400ms ease-in-out;
   }

   &:hover img {
      transform: translateX(20%);
   }
`;

export { Wrapper };

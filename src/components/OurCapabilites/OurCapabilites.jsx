import {
   CapabilitesWrapper,
   Filler,
   Heading,
   LinkWrapper,
   Wrapper,
} from "./our-capabilites-sc";

function OurCapabilties() {
   const links = [
      "Web design",
      "Visual design",
      "Product design",
      "Ecommerce",
      "Product Manger",
      "Back-end",
      "UX & UI design",
      "Front-end",
      "Art direction",
      "Responsive",
   ];

   return (
      <Wrapper>
         <Filler />
         <CapabilitesWrapper>
            <Filler />
            <div>
               <Heading>Our Capabilties</Heading>
               <LinkWrapper>
                  {links.map((link) => (
                     <li key={link}>{link}</li>
                  ))}
               </LinkWrapper>
            </div>
         </CapabilitesWrapper>
         <Filler />
      </Wrapper>
   );
}

export default OurCapabilties;

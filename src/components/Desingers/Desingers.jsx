import {
   DesignerCard,
   DesignerCardImageWrapper,
   DesignerCardInfo,
   DesignerCardWrapper,
   DesignerWrapper,
   Filler,
   Heading,
   Info,
   SubHeading,
   Wrapper,
} from "./desingers-sc";
import designer1 from "../../assets/designer-1.jpg";
import designer2 from "../../assets/designer-2.jpg";
import designer3 from "../../assets/designer-3.jpg";

function Desingers() {
   const designersArr = [
      {
         src: designer1,
         alt: "designer-1",
         name: "Zara Kennedy",
         designation: "Founder",
      },
      {
         src: designer2,
         alt: "designer-2",
         name: "Riley Howells",
         designation: "Developer",
      },
      {
         src: designer3,
         alt: "designer-3",
         name: "Lily Thompson",
         designation: "Art Director",
      },
   ];

   return (
      <Wrapper>
         <Filler />
         <DesignerWrapper>
            <Info>
               <p>Since 2017</p>
               <span>We are award winning design studio</span>
            </Info>

            <Heading>From London, UK.</Heading>

            <SubHeading>
               We hold the conviction that excellent design transcends mere
               appearance — it serves as a vital medium for communication and
               engagement.
            </SubHeading>

            <Filler />

            <DesignerCardWrapper>
               {designersArr.map(({ src, alt, name, designation }) => (
                  <DesignerCard key={name}>
                     <DesignerCardImageWrapper>
                        <img src={src} alt={alt} />
                     </DesignerCardImageWrapper>
                     <DesignerCardInfo>
                        <p>{name}</p>
                        <span>{designation}</span>
                     </DesignerCardInfo>
                  </DesignerCard>
               ))}
            </DesignerCardWrapper>
         </DesignerWrapper>
         <Filler />
      </Wrapper>
   );
}

export default Desingers;

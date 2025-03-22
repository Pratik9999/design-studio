import {
   Badge,
   BadgeWrapper,
   Card,
   CardHeading,
   CardImageWrapper,
   CardWrapper,
   ContentWrapper,
   Filler,
   Wrapper,
} from "./our-work-sc";
import bitcoin from "../../assets/bitcoin.png";
import grassMobile from "../../assets/grass-mobile.png";
import sweatshirt from "../../assets/sweatshirt.png";
import earth from "../../assets/earth.png";

function OurWork() {
   const cardsArr = [
      {
         src: bitcoin,
         alt: "bitcoin",
         text: "The future of Web3 on Bitcoin",
         bgColor: "hsl(252deg, 74%, 39%)",
      },
      {
         src: grassMobile,
         alt: "grass-mobile",
         text: "Not ordinary app for not ordinary ",
         bgColor: "hsl(95deg, 73%, 58%)",
      },
      {
         src: sweatshirt,
         alt: "sweatshirt",
         text: "May the 4th with you",
         bgColor: "hsl(0deg, 0%, 17%)",
      },
      {
         src: earth,
         alt: "earth",
         text: "Frogotten Wikipedia articles",
         bgColor: "hsl(22deg, 84%, 55%)",
      },
   ];

   return (
      <Wrapper>
         <Filler />
         <CardWrapper>
            {cardsArr.map(({ src, text, bgColor, alt }) => (
               <Card style={{ "--cardBgColor": bgColor }} key={text}>
                  <CardImageWrapper>
                     <img src={src} alt={alt} />
                  </CardImageWrapper>
                  <ContentWrapper>
                     <CardHeading>{text}</CardHeading>
                     <BadgeWrapper>
                        <Badge>Branding</Badge>
                        <Badge>Website</Badge>
                        <Badge>App</Badge>
                     </BadgeWrapper>
                  </ContentWrapper>
               </Card>
            ))}
         </CardWrapper>
         <Filler />
      </Wrapper>
   );
}

export default OurWork;

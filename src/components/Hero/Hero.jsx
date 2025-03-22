import {
   CtaWrapper,
   Filler,
   Heading,
   HeroWrapper,
   ImageWrapper,
   Wrapper,
} from "./hero-sc";

import heroCardImg from "../../assets/hero-card-2.png";
import Button from "../../global-components/Button";

function Hero() {
   return (
      <Wrapper>
         <Filler />
         <HeroWrapper>
            <Heading>
               <span>the</span> INSTRUMENT DESIGN <span>studio</span>
            </Heading>
            <ImageWrapper>
               <div>
                  <img src={heroCardImg} alt="hero-card" />
               </div>
            </ImageWrapper>
            <CtaWrapper>
               <p>
                  The Instrument's a fresh design studio vibing out of London.
                  We'll hook you up with killer branding, turn your design
                  dreams into reality, and build a dope websites.
               </p>
               <Button>Work with us</Button>
            </CtaWrapper>
         </HeroWrapper>
         <Filler />
      </Wrapper>
   );
}

export default Hero;

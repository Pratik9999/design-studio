import mailbox from "../../assets/mailbox.png";
import Button from "../../global-components/Button";
import {
   GradientBox,
   GridWrapper,
   Heading,
   HeadingWrapper,
   ImageFiller,
   LinkWrapper,
   MailBoxWrapper,
   SendIconWrapper,
   Wrapper,
} from "./footer-sc";
import sendIcon from "../../assets/send-icon.svg";

function Footer() {
   const links = [
      "About",
      "Careers",
      "Privacy Policy",
      "Instagram",
      "Linkedin",
      "Dribbble",
   ];

   return (
      <Wrapper>
         {/* <Filler /> */}
         <GridWrapper>
            <GradientBox />
            <ImageFiller />
            <MailBoxWrapper>
               <img src={mailbox} alt="mailbox" />
            </MailBoxWrapper>

            <HeadingWrapper>
               <Heading>
                  <span>hello</span> at <span>instrument</span> dot{" "}
                  <span>com</span>
               </Heading>
               <SendIconWrapper>
                  <img src={sendIcon} alt="send-icon" />
               </SendIconWrapper>
               <Heading>
                  <span>hello</span> at <span>instrument</span> dot{" "}
                  <span>com</span>
               </Heading>
            </HeadingWrapper>

            <Button>Get in Touch</Button>
            <LinkWrapper>
               {links.map((link) => (
                  <li key={link}>{link}</li>
               ))}
            </LinkWrapper>
         </GridWrapper>
         {/* <Filler /> */}
      </Wrapper>
   );
}

export default Footer;

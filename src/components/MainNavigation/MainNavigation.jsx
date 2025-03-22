import { Filler, NavWrapper, Wrapper } from "./main-navigation-sc";

function MainNavigation() {
   return (
      <Wrapper>
         <Filler />
         <nav>
            <NavWrapper>
               <li>Work</li>
               <li>About</li>
               <li>Contact</li>
            </NavWrapper>
         </nav>
         <Filler />
      </Wrapper>
   );
}

export default MainNavigation;

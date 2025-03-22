import { Wrapper } from "./button-sc";
import arrowRigth from "../../svg/arrow-right.svg";

function Button({ children, otherProps }) {
   return (
      <Wrapper {...otherProps}>
         {children}
         <img src={arrowRigth} alt="arrow-right" />
      </Wrapper>
   );
}

export default Button;

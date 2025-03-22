import { Content, Name, Wrapper } from "./brands-sc";

function Brands() {
   const brandsArr = [
      "Meta",
      "Samsung",
      "Intel Corporation",
      "Oracle",
      "Adobe",
      "Figma",
   ];

   return (
      <Wrapper>
         <Content>
            {brandsArr.map((brand) => (
               <Name key={brand}>{brand}</Name>
            ))}
         </Content>
      </Wrapper>
   );
}

export default Brands;

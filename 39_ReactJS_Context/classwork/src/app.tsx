import React, { FunctionComponent, useCallback, useState } from "react";
import { Container } from "./shared/layout/grid";
import { Locale } from "./templates/locale";
import { ShopCart } from "./templates/cart";
import { CheckoutPage } from "./pages/checkout";
import { ProductsPage } from "./pages/products";
import {
  StyledGrid,
  StyledContent,
  StyledHeader,
  StyledHeaderWrapper,
  StyledSidebar,
  StyledToolbar,
} from "./app.styled";
import { Product } from "./domain/product";

export const App: FunctionComponent = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const handleProductAdd = useCallback((product: Product): void => {
    setProducts((state) => [...state, product]);
  }, []);

  return (
    <StyledGrid>
      <StyledHeader>
        <Container>
          <StyledHeaderWrapper>
            <h1>React Marketplace</h1>
            <StyledToolbar>
              <Locale />
              <ShopCart items={products} />
            </StyledToolbar>
          </StyledHeaderWrapper>
        </Container>
      </StyledHeader>
      <StyledSidebar>
        <Container>
          <CheckoutPage items={products} />
        </Container>
      </StyledSidebar>
      <StyledContent>
        <Container>
          <ProductsPage onProductAdd={handleProductAdd} />
        </Container>
      </StyledContent>
    </StyledGrid>
  );
};

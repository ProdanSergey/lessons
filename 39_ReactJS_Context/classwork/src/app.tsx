import React, { FunctionComponent } from "react";
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

const AppComponent: FunctionComponent = () => {
	return (
		<StyledGrid>
			<StyledHeader>
				<Container>
					<StyledHeaderWrapper>
						<h1>React Marketplace</h1>
						<StyledToolbar>
							<Locale />
							<ShopCart />
						</StyledToolbar>
					</StyledHeaderWrapper>
				</Container>
			</StyledHeader>
			<StyledSidebar>
				<Container>
					<CheckoutPage />
				</Container>
			</StyledSidebar>
			<StyledContent>
				<Container>
					<ProductsPage />
				</Container>
			</StyledContent>
		</StyledGrid>
	);
};

export const App = React.memo(AppComponent);
App.displayName = "MemoApp";

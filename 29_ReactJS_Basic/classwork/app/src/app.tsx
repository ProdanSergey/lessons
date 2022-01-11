import { Component } from "react"
import { 	
	bestSellers,
	discountCars,
	japanizesCars 
} from './mock-data';
import { Cars } from './components/cars';

interface AppHeaderProps {
	title: string;
}

const AppHeader = ({ title }: AppHeaderProps) => {
	return (
		<header>
			<h1>{title}</h1>
		</header>
	)
}

interface AppBodyProps {
	title: string;
}

class AppBody extends Component<AppBodyProps> {
	handleTitleClick(title: string) {
		return () => {
			alert(title)
		}
	}

	render() {
		const { title } = this.props;

		return (
			<main>
				<header>
					<h2>{title}</h2>
				</header>
				<Cars categories={
					[
						bestSellers,
						discountCars,
						japanizesCars
					]
				}/>
				
			</main>
		)
	}
}

export const App = () => {
	return (
		<>
			<AppHeader title="Awesome Cars"/>
			<AppBody title="Categories" />
		</>
	);
}
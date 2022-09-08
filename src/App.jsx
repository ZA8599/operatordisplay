import styles from "./App.module.scss";

import OperatorLayout from "./page/OperatorPage";
import Footer from "./component/Footer";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
`;

function App() {
	return (
		<Container>
			<OperatorLayout />
			<Footer />
		</Container>
	);
}

export default App;

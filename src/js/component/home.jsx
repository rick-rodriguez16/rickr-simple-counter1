import React from "react";
import propTypes from "prop-types";
import SimpleCounter from "./simpleCounter";
import calculateSeconds from "../lib/time";


const Home = (props) => {
	
	return (
		<>
			<div>
				<SimpleCounter 
					hundredThousandsDigit = {calculateSeconds(props.counter, 100000)}
					tenThousandsDigit = {calculateSeconds(props.counter, 10000)}
					thousandsDigit = {calculateSeconds(props.counter, 1000)}
					hundredsDigit = {calculateSeconds(props.counter, 100)}
					tensDigit = {calculateSeconds(props.counter, 10)}
					onesDigit = {calculateSeconds(props.counter, 1)}
				/>
			</div>
		</>
	);
};

Home.propTypes = {
	hundredThousandsDigit: propTypes.number,
	tenThousandsDigit: propTypes.number,
	thousandsDigit: propTypes.number,
	hundredsDigit: propTypes.number,
	tensDigit: propTypes.number,
	onesDigit: propTypes.number
}

export default Home;

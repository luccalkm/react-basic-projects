import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
	const [loading, setLoading] = useState(false);
	const [tours, setTours] = useState([]);
	const [error, setError] = useState(false);

	const removeTour = (id) => {
		const newTours = tours.filter((tour) => tour.id !== id);
		setTours(newTours);
	};

	const fetchTours = async () => {
		setLoading(true);
		try {
			const response = await fetch(`${url}`);
			const tours = await response.json();
			setLoading(false);
			setError(false);
			setTours(tours);
		} catch (error) {
			setLoading(false);
			setError(true);
		}
	};

	useEffect(() => {
		fetchTours();
	}, []);

	if (error) {
		return (
			<main>
				<h2 style={{ textAlign: "center " }}>Algo inesperado aconteceu!</h2>
				<h2 style={{ textAlign: "center " }}>Tente Novamente!</h2>
				<div style={{ width: "50%", marginTop: "2rem" }} className='underline'></div>
			</main>
		);
	}

	if (loading) {
		return (
			<main>
				<Loading />
			</main>
		);
	}

	if (tours.length === 0) {
		return (
			<main>
				<div className='title'>
					<h2>No Tours left.</h2>
					<button
						className='btn'
						onClick={() => {
							fetchTours();
						}}>
						Refresh tours
					</button>
				</div>
			</main>
		);
	}

	return (
		<main>
			<p className='btn'>Left: {tours.length}</p>
			<Tours tours={tours} removeTour={removeTour} />
		</main>
	);
}

export default App;

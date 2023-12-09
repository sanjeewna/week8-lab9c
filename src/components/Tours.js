import { tours } from "../data";
import Tour from "./Tour";
import Title from "./Title";
import { useState } from "react";

function Tours() {
	const [toursData, setToursData] = useState(tours);
	return (
		<div>
			<section className="section" id="tours">
				<Title title="featured" span="tours" />
				<div className="section-center featured-center">
					{toursData.map((tour) => (
						<Tour key={tour.id} {...tour} />
					))}
				</div>
			</section>
		</div>
	);
}

export default Tours;
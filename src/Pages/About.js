import { motion } from "framer-motion"

const About = () => {
	return (
		<div>
			<motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
				<div className="flow-text" style={{ padding: "2vmin" }}>
					<div style={{ textAlign: "center", padding: "1rem" }}>
						<h4 className="about-header" style={{ color: "black", fontSize: "2rem" }}>
							Robotron's Dictionary <span style={{ fontSize: "5vmin", color: "red", padding: "2px" }}>.</span>
						</h4>
					</div>

					<p className="about-paragraph" style={{ color: "grey", fontSize: "3vmin" }}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae iure commodi molestiae pariatur ullam amet voluptatibus! Et esse, voluptatum enim error dolorem itaque recusandae
						deleniti eius vel, optio nihil aliquam! Aut facere ratione expedita sequi earum corporis fugiat eveniet quam, recusandae neque, nam nesciunt vitae quia possimus eos repellat
						maxime. Placeat atque rem at nihil veniam facere, accusantium ut culpa! Id, in maxime officiis, quos sapiente illum numquam excepturi at illo est facere sint quibusdam mollitia
						ducimus magnam repellendus veniam voluptatem vel. Optio inventore, sunt quae modi ea quam id?
					</p>
				</div>
			</motion.div>
		</div>
	)
}

export default About

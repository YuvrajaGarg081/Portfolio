const About = () => {
	return (
		<>
			<section id="about" className="border-t border-linesoft">
				<div className="max-w-355 mx-auto px[6vw] pt-[5vw] pb-[7vw]">
					<div className="flex items-center justify-center mb-10">
						<h2 className="font-display font-bold tracking-[-0.01em] text-[clamp(1.6rem,3.2vw,2.2rem)] m-0">
							About
						</h2>
					</div>
					<div className="grid p-8">
						<p className="text-inkdim text-[1.05rem mb-[1.1rem]">
							Most of my work sits at the edge of product design and front-end development —
							I&rsquo;m happiest when I&rsquo;m the one who both designs a thing and builds the
							first version of it. Outside of client work I write essays about design process,
							usually the unglamorous parts: the drafts that didn&rsquo;t work, the decisions made
							under deadline, the tools that quietly shape how a team thinks.
						</p>
						<p className="text-inkdim text-[1.05rem m-0">
							I&rsquo;m currently based in Bristol, working with a small studio three days a week
							and taking on independent projects the rest of the time.
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;

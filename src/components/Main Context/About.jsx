import resumex from "../../assets/doc/resume.pdf";

const About = ({ name }) => {
	return (
		<>
			<section id="about" className="border-t border-linesoft">
				<div className="max-w-355 mx-auto px[6vw] pt-[5vw] pb-[7vw]">
					<div className="flex items-center justify-center mb-10">
						<h2 className="font-display font-bold tracking-[-0.01em] text-[clamp(1.6rem,3.2vw,2.2rem)] m-0">About</h2>
					</div>
					<div className="grid p-8">
						<p className="text-inkdim text-[1.05rem mb-[1.1rem]">
							Hi, I'm {name}, a junior full stack developer who loves turning ideas into web apps people can actually
							use.
							<br />I work with the MERN Stack (MongoDB, ExpressJS, ReactJS and NodeJS) and style my interfaces with
							Bootstrap and TailwindCSS. I like having a hand in every layer of a project, from designing the database
							and building RESTAPIs to crafting a clean, user-friendly front end.
							<br />
							One project I&rsquo;m proud of is the Smart Healthcare Appointment System,a platform for booking and
							mananging patients appointments. It taught me alot about structuring data, handling authentication, and
							designing for real users.
							<br />
							I&rsquo;m still early in my career, which I&rsquo;m curious, I learn fast, and I enjoy a good debugging
							challenge. When I&rsquo;m not coding,I&rsquo;m exploring new tools or working on side projects.
						</p>
						<p className="text-inkdim text-[1.05rem m-0">
							I&rsquo;m currently open to junior developer roles freelance work. Let&rsquo;s build something together.
						</p>
					</div>

					<div className="flex w-full max-w-md flex-col items-stretch gap-3 p-6 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
						<a
							href="#projects"
							className="flex w-50 max-w-md flex-col items-center justify-center gap-2 overflow-hidden rounded-xl bg-crimson px-6 py-3 font-semibold text-white shadow-lg shadow-crimson/30 transition hover:shadow-xl hover:shadow-crimson/40 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-crimson/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white active:translate-y-px motion-reduce:transition-none dark:focus-visible:ring-offset-slate-950"
						>
							<span className="relative">View My Projects</span>
						</a>
						<a
							href={resumex}
							download
							className="group inline-flex items-center justify-center gap-2 rounded-xl border-2 border-crimson px-6 py-3 font-semibold text-crimson transition hover:bg-crimson-tint focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-crimson/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white active:translate-y-px motion-reduce:transition-none dark:border-indigo-400 dark:text-indigo-300 dark:hover:bg-indigo-400/10 dark:focus-visible:ring-offset-slate-950"
						>
							<svg
								className="h-5 w-5 transition-transform duration-200 group-hover:translate-y-0.5 motion-reduce:transition-none"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth={2}
								strokeLinecap="round"
								strokeLinejoin="round"
								aria-hidden="true"
							>
								<path d="M12 3v12m0 01-4-4m4 4l4-4M4 20h16" />
							</svg>
							Download Resume
						</a>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;

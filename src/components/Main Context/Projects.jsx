import { Link } from "react-router-dom";
const tag = {
	structure: {
		bstc: "HTML5",
	},
	style: {
		bsty: "CSS3",
	},
	responsive: {
		bresp: "JavaScript",
	},
};

const Accent = {
	coral: { border: "border-t-coral", text: "text-coral" },
	violet: { border: "border-t-violet", text: "text-violet" },
	teal: { border: "border-t-teal", text: "text-teal" },
	goal: { border: "border-t-goal", text: "text-goal" },
};

const domain = {
	full: "fullstack",
	front: "front",
	back: "back",
};

const Projs = [
	{
		title: "Smart Healthcare System",
		link: `/`,
		tag: "Product design · 2026",
		accent: "coral",
		description: "A budgeting app built for irregular income — designed and shipped end to end.",
		art: (
			<svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
				<rect width="240" height="150" fill="var(--paper)" />
				<rect
					x="30"
					y="30"
					width="180"
					height="90"
					rx="6"
					fill="color-mix(in srgb, var(--coral) 14%, transparent)"
					stroke="var(--coral)"
					strokeWidth="1.6"
				/>
				<line x1="30" y1="70" x2="210" y2="70" stroke="var(--line)" strokeWidth="1" />
				<circle cx="90" cy="98" r="14" fill="var(--gold)" />
			</svg>
		),
	},
	{
		title: "GYM Workout Buddy",
		link: `/`,
		tag: "Side project · 2025",
		accent: "violet",
		description: "A minimal note-taking tool for researchers, with offline-first sync.",
		art: (
			<svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
				<rect width="240" height="150" fill="var(--paper)" />
				<g stroke="var(--line)" strokeWidth="1">
					<line x1="40" y1="40" x2="200" y2="40" />
					<line x1="40" y1="70" x2="200" y2="70" />
					<line x1="40" y1="100" x2="140" y2="100" />
				</g>
				<rect
					x="40"
					y="40"
					width="60"
					height="60"
					rx="6"
					fill="color-mix(in srgb, var(--violet) 16%, transparent)"
					stroke="var(--violet)"
					strokeWidth="1.6"
				/>
			</svg>
		),
	},
	{
		title: "Task Manager",
		link: `${domain.full}/TaskManager`,
		tag: "Design system · 2024",
		accent: "teal",
		description: "Brand and web design for an independent radio archive project.",
		art: (
			<svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
				<rect width="240" height="150" fill="var(--paper)" />
				<polygon
					points="120,30 200,110 40,110"
					fill="color-mix(in srgb, var(--teal) 16%, transparent)"
					stroke="var(--teal)"
					strokeWidth="1.6"
				/>
				<line x1="80" y1="110" x2="80" y2="130" stroke="var(--line)" strokeWidth="1" />
				<line x1="160" y1="110" x2="160" y2="130" stroke="var(--line)" strokeWidth="1" />
			</svg>
		),
	},
	{
		title: "Password Generator",
		link: `${domain.front}/password-generator`,
		tag: "Product design · 2026",
		accent: "coral",
		description: "A budgeting app built for irregular income — designed and shipped end to end.",
		art: (
			<svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
				<rect width="240" height="150" fill="var(--paper)" />
				<rect
					x="30"
					y="30"
					width="180"
					height="90"
					rx="6"
					fill="color-mix(in srgb, var(--coral) 14%, transparent)"
					stroke="var(--coral)"
					strokeWidth="1.6"
				/>
				<line x1="30" y1="70" x2="210" y2="70" stroke="var(--line)" strokeWidth="1" />
				<circle cx="90" cy="98" r="14" fill="var(--gold)" />
			</svg>
		),
	},
	{
		title: "Field Notes",
		link: `/`,
		tag: "Side project · 2025",
		accent: "violet",
		description: "A minimal note-taking tool for researchers, with offline-first sync.",
		art: (
			<svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
				<rect width="240" height="150" fill="var(--paper)" />
				<g stroke="var(--line)" strokeWidth="1">
					<line x1="40" y1="40" x2="200" y2="40" />
					<line x1="40" y1="70" x2="200" y2="70" />
					<line x1="40" y1="100" x2="140" y2="100" />
				</g>
				<rect
					x="40"
					y="40"
					width="60"
					height="60"
					rx="6"
					fill="color-mix(in srgb, var(--violet) 16%, transparent)"
					stroke="var(--violet)"
					strokeWidth="1.6"
				/>
			</svg>
		),
	},
	{
		title: "Signal House",
		link: `/`,
		tag: "Design system · 2024",
		accent: "teal",
		description: "Brand and web design for an independent radio archive project.",
		art: (
			<svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
				<rect width="240" height="150" fill="var(--paper)" />
				<polygon
					points="120,30 200,110 40,110"
					fill="color-mix(in srgb, var(--teal) 16%, transparent)"
					stroke="var(--teal)"
					strokeWidth="1.6"
				/>
				<line x1="80" y1="110" x2="80" y2="130" stroke="var(--line)" strokeWidth="1" />
				<line x1="160" y1="110" x2="160" y2="130" stroke="var(--line)" strokeWidth="1" />
			</svg>
		),
	},
];

const Projects = () => {
	return (
		<>
			<section id="projects" className="border border-linesoft">
				<div className="max-w-355 mx-auto px-[6vw] pt-[5vw] pb-[7vw]">
					<div className="flex items-center justify-center mb-5">
						<h2 className="font-display font-bold tracking-[-0.01em] text-[clamp(1.6rem,3.2vw,2.2rem)] m-0">
							Projects
						</h2>
					</div>
					<div className="flex items-center justify-center mb-5">
						<p className="rounded-full border border-white px-6.25 py-1.5">
							<Link className="border-2 bg-gray-600 text-coral rounded-xl px-1.25 py-[0.5px]" to={`${domain.front}`}>
								Front
							</Link>
							<Link className="bg-gray-600 text-gold rounded-xl" to={`/${domain.full}`}>
								FullStack
							</Link>
						</p>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-3">
						{Projs.map((projs) => {
							const accent = Accent[projs.accent];
							<Link
								to={`/${projs.link}`}
								key={projs.title}
								className={`group rounded-lg border-t-[3px] overflow-hidden border border-linesoft ${accent.border} bg-paper2 flex flex-col
              transition-transform duration-200 hover:-translate-y-1`}
							>
								<div className="aspect-16/10 border-b border-linesoft">{projs.art}</div>
								<div className="px-6 py-5">
									<h3 className={`font-display font-semibold text-[1.15rem] ${accent.text} m-0 mb-2`}>{projs.title}</h3>
									<p className="text-sm text-inkdim leading-relaxed m-0">{projs.description}</p>
									<span className={`inline-block mt-3 5 text-xs font-semibold ${accent.border}`}>{projs.tag}</span>
								</div>
							</Link>;
						})}
					</div>
				</div>
			</section>
		</>
	);
};

export default Projects;

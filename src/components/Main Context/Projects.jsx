const Projs = [
	{
		title: "Smart Healthcare System",
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
		title: "Loose Change",
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

const Accent_var = {
	coral: "var(--coral)",
	violet: "var(--violet)",
	teal: "var(--teal)",
	goal: "var(--goal)",
};

const Accent_text = {
	coral: "text-coral",
	violet: "text-violet",
	teal: "text-teal",
	goal: "text-goal",
};

const Projects = () => {
	return (
		<>
			<section id="projects" className="border border-linesoft">
				<div className="max-w-355 mx-auto px-[6vw] pt-[5vw] pb-[7vw]">
					<div className="flex items-center justify-center mb-10">
						<h2 className="font-display font-bold tracking-[-0.01em] text-[clamp(1.6rem,3.2vw,2.2rem)] m-0">
							Projects
						</h2>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-3">
						{Projs.map((projs) => (
							<a
								key={projs.title}
								href="#"
								className="group rounded-lg overflow-hidden border border-linesoft bg-paper2 flex flex-col
              transition-transform duration-200 hover:-translate-y-1"
								style={{ borderTopColor: Accent_var[projs.accent], borderTopWidth: "3px" }}
							>
								<div className="aspect-16/10 border-b border-linesoft">{projs.art}</div>
								<div className="px-6 py-5">
									<h3 className="font-display font-semibold text-[1.15rem] m-0 mb-2">
										{projs.title}
									</h3>
									<p className="text-sm text-inkdim leading-relaxed m-0">{projs.description}</p>
									<span className="inline-block mt-3 5 text-xs font-semibold ${Accent_txt[projs.asscent]}">
										{projs.tag}
									</span>
								</div>
							</a>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default Projects;

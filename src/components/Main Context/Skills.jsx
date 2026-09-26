const Groups = [
	{
		title: "Front-End",
		accent: "coral",
		skills: ["HTML5", "CSS3", "JavaScript"],
	},
	{
		title: "Back-End",
		accent: "violet",
		skills: ["NodeJS", "ExpressJs"],
	},
	{
		title: "DataBases",
		accent: "teal",
		skills: ["MongoDB", "MySQL"],
	},
];

const Accent_Classes = {
	coral: { border: "border-t-coral", dot: "bg-coral", text: "text-coral" },
	violet: { border: "border-t-violet", dot: "bg-violet", text: "text-violet" },
	teal: { border: "border-t-teal", dot: "bg-teal", text: "text-teal" },
};

const Skills = () => {
	return (
		<section id="skills" className="border-t border-linesoft">
			<div className="max-w-355 mx-auto px-[6vw] pt-[7vw] pb-[7vw]">
				<div className="flex items-center justify-center mb-10">
					<h2 className="font-display font-bold tracking-[-0.01rem] text-[clamp(1.6rem,3.2vw,2.2rem)] m-0">
						Skills
					</h2>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{Groups.map((group) => {
						const accent = Accent_Classes[group.accent];
						return (
							<div
								key={group.title}
								className={`rounded-lg border-t-[3px] ${accent.border}  border-x border-b border-linesoft bg-paper2 px-6 py-6`}
							>
								<div className="flex items-center gap-2 mb-4">
									<span className={`w-2 h-2 rounded-full ${accent.dot}`} />
									<h3 className="font-display font-semibold text-[1.05rem] m-0">{group.title}</h3>
								</div>
								<div className="flex flex-wrap gap-2">
									{group.skills.map((skill) => (
										<span
											key={skill}
											className={`text-sm text-inkdim bg-paper border border-linesoft ${accent.border} rounded-full px-3.5 py-1.5`}
										>
											{skill}
										</span>
									))}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Skills;

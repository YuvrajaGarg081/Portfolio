const CERTS = [
	{
		title: "HTML5",
		issued: "Infosys Springboard",
		year: "Sep 2025",
		accent: "violet",
	},
	{
		title: "CSS3",
		issued: "Infosys Springboard",
		year: "Dec 2025",
		accent: "teal",
	},
	{
		title: "MERN Stack Development",
		issued: "Execellence Technology",
		year: "Oct 2025",
		accent: "pael",
	},
];

const ACCENT = {
	coral: { bg: "bg-coral/10", text: "text-coral", ring: "ring-coral/25" },
	violet: { bg: "bg-violet/10", text: "text-violet", ring: "ring-violet/25" },
	teal: { bg: "bg-teal/10", text: "text-teal", ring: "ring-teal/25" },
	pael: { bg: "bg-teal/10", text: "text-teal", ring: "ring-teal/25" },
};

const Certificate = () => {
	return (
		<>
			<section id="certificate" className="border border-linesoft">
				<div className="max-w-260 mx-auto px-[6vw] pt-[7vw] pb-[7vw]">
					<div className="flex items-center justify-center mb-10">
						<h2 className="font-display font-bold tracking-[-0.01em] text-[clamp(1.6rem,3.2vw,2.2rem)] m-0">
							Certifications
						</h2>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
						{CERTS.map((cert) => {
							const c = ACCENT[cert.accent];
							return (
								<div
									key={cert.title}
									className="rounded-lg border border-linesoft bg-paper2 px-5 py-6 flex flex-col items-start gap-3"
								>
									<span className={`w-10 h-10 rounded-full flex items-center justify-center ring-1 ${c.bg} ${c.ring}`}>
										<svg
											viewBox="0 0 24 24"
											className={`w-5 h-5 ${c.text}`}
											fill="none"
											stroke="currentColor"
											strokeWidth="1.8"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<circle cx="12" cy="8" r="5" />
											<path d="M8.5 12.5 7 21l5-2.5 5 2.5-1.5-8.5" />
										</svg>
									</span>
									<div>
										<h3 className="font-display font-semibold text-[1rem] leading-snug m-0">{cert.title}</h3>
										<p className="text-sm text-inkdim m-0 mt-1">{cert.issued}</p>
									</div>
									<span className="text-sm font-medium text-inkdim mt-auto">{cert.year}</span>
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
};

export default Certificate;

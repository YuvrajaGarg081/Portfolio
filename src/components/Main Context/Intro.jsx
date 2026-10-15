// import profile from "../../assets/img/Yuvraj_Garg.jpeg";

const links = {
	linkedin: "https://linkedin.com/in/yuvraj-garg0187",
	github: "https://github.com/YuvrajAGarg081",
	portfolio: "https://garginfo.co.in",
};

const Intro = ({ name }) => {
	return (
		<section id="home" className="relative isolate overflow-hidden">
			<div
				className="hero-glow absolute inset-x-[-10%] top-[-10%] h-[130%] -z-10 pointer-events-none"
				aria-hidden="true"
			/>

			<div className="max-w-260 mx-auto px-[6vw] pt-[9vw] pd-[7vw]">
				<div className="grid grid-cols-1 md:grid-cols-[1fr_0.9fr] gap-12 md:gap-[4vw] items-center">
					<div>
						<div className="inline-flex item-center gap-2 rounded-full bg-paper2 border border-line px-3.5 py-1.5 mb-6">
							<span className="w-1.5 h-1.5 rounded-full bg-teal shadow-[0_0_0_3px_color-mix(in_srgb,var(--teal)_22%,transparent)]" />{" "}
							<span className="text-xs font-medium text-inkdim">Open to Work</span>
						</div>
						<div className="flex items-center gap-2 text-inkdim font-medium text-lg mb-2">Hi,</div>

						<h1 className="font-display font-bold text-[clamp(2.2rem,6vw,3.4rem)] leading-[1.15] mb-6">
							I&rsquo;m <span className="text-coral">{name}</span>
							<br />
							Full Stack Development
						</h1>

						<p className="max-w-[42ch] text-inkdim text-[1.05rem] leading-relaxed mb-7">
							I design small products and write about the process — based in Bristol, working with teams who want the
							boring parts done well too.
						</p>

						<a
							href="#contact"
							className="inline-flex items-center gap-2 text-white font-semibold text-sm rounded-full bg-linear-to-r from-coral to-voilet px-6 py-3 mb-7
              shadow-[0_10px_24px_-12px_color-mix(in_srgb,var(--violet)_55%,transparent)]
              hover:-translate-y-0.5 hover:shadow-[0_14px_28px_-12px_color-mix(in_srgb,var(--coral)_55%,transparent)] transition-all duration-200"
						>
							Let&rsquo;s Talk
							<svg
								viewBox="0 0 24 24"
								className="w-4 h-4"
								fill="none"
								stroke="currentColor"
								strokeWidth={2}
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<line x1={5} y1={12} x2={19} y2={12} />
								<polyline points="13 6 19 12 13 18" />
							</svg>
						</a>

						<div className="flex items-centers gap-3">
							<a
								href={`${links.linkedin}`}
								target="_blank"
								aria-label="LindedIn profile"
								className="w-9 h-9 flex items-center justify-center rounded-full bg-coral/10 text-coral hover:bg-coral hover:text-white transition-colors"
							>
								<svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.6">
									<rect x={3} y={3} width={18} height={18} rx={3} />
									<line x1={7} y1={10} x2={7} y2={17} />
									<circle cx={7} cy={7} r={0.6} fill="currentColor" stroke="none" />
									<path d="M11 17v-4.5a2 2 0 0 1 4 0V17" />
									<line x1={11} y1={10} x2={11} y2={17} />
								</svg>
							</a>
							<a
								href={`${links.github}`}
								target="_blank"
								aria-label="Code repository"
								className="w-9 h-9 flex items-center justify-center rounded-full bg-teal/10 text-teal hover:bg-teal hover:text-white transition-colors"
							>
								<svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.6">
									<polyline points="8 7 3 12 8 17" />
									<polyline points="16 7 21 12 16 17" />
								</svg>
							</a>
							<a
								href={`${links.portfolio}`}
								aria-label="Portfolio"
								className="w-9 h-9 flex items-center justify-center rounded-full bg-violet/10 text-violet hover:bg-violet hover:text-white transition-colors"
							>
								<svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.6">
									<circle cx="12" cy="12" r="9" />
									<path d="M8 12h8M12 8v8" />
								</svg>
							</a>
						</div>
					</div>

					<div className="" aria-hidden="true">
						<svg viewBox="0 0 400 400" className="w-full h-auto max-w-95 mx-auto">
							<svg width={160} height={160} viewBox="0 0 160 160">
								<defs>
									<clipPath id="c">
										<circle cx={80} cy={80} r={80} />
									</clipPath>
								</defs>
								<circle cx={80} cy={80} r={80} fill="var(--linesoft)" />
								<g clipPath="">
									<circle cx={80} cy={62} r={28} fill="var(--line)" />
									<ellipse cx={80} cy={160} rx={55} ry={52} fill="var(--plane)" />
								</g>
							</svg>

							<text fontSize={"8.4"} fill="var(--inkdim)" className="font-display" letterSpacing="1.5">
								<textPath href="#ringPath" textLength="750" lengthAdjust="spacing">
									FULL STACK • DEVELOPMENT • FULL STACK • DEVELOPMENT •{" "}
								</textPath>
								<text fontSize="8.4">
									<textPath href="#introBadgeRing" startOffset="0%"></textPath>
								</text>
							</text>

							{/* Scattered accents */}
							<circle cx="300" cy="90" r="12" opacity="50%" fill="none" stroke="var(--teal)" strokeWidth="2.4" />
						</svg>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Intro;

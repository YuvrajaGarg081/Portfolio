const links = {
	linkedin: "https://linkedin.com/in/yuvraj-garg0187",
	github: "https://github.com/YuvrajAGarg081",
	portfolio: "https://garginfo.co.in",
};

const Intro = () => {
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
							I&rsquo;m <span className="text-coral">Yuvraj Garg</span>
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

					<div className="relative" aria-hidden="true">
						<svg viewBox="0 0 400 400" className="w-full h-auto max-w-95 mx-auto">
							<path
								transform="translate(210,190) rotate(18) scale(2.1)"
								fill="none"
								stroke="var(-violet)"
								strokeWidth="1.4"
								opacity="0.55"
								d="M45.7,-58.3C5.8,-49.6,68.4,-34.4,72.7,-17.5C77,-0.6,76,17.9,68.1,32.6C,60.3,47.3,45.6,58.1,29.4,64,2C13.2,70.3,-4.5,71.6,-21.1,67.2C-37.7,62.8,-53.2,52.6,-63.1,38.1C-73,23.6,-77.3,4.8,-74.1,-12.5C-70.9,-29.8,-60.2,-45.6,-46,-54.5C-31.8,-63.4,-15.9,-65.4,0.9,-66.6C17.7,-67.8,35.5,-68.2,45.7,-58.3Z"
							/>
							<path
								transform="translate(190,205) rotate(-10) scale(2.05)"
								fill="var(--coral)"
								d="M42.1,-54.8C54.4,-46.3,63.5,-32.7,67.6,-17.2C71.7,-1.7,70.8,15.7,63.2,29.9C55.6,44.1,41.3,55.1,25.6,61.4C9.9,67.7,-7.2,69.3,-23.1,64.8C-39,60.3,-53.7,49.7,-62.4,35.2C-71.1,20.7,-73.8,2.3,-70,-14.6C-66.2,-31.5,-55.9,-46.9,-42.1,-55.3C-28.3,-63.7,-14.2,-65.1,0.8,-66.3C15.7,-67.5,29.8,-63.3,42.1,-54.8Z"
							/>

							{/* Scattered accents */}
							<circle cx="300" cy="90" r="12" fill="none" stroke="var(--teal)" strokeWidth="2.4" />

							{/* Spinning circular badge */}
							<g className="badge-spin">
								<path id="introBadgeRing" fill="none" d="M 300,270 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
								<circle
									cx="300"
									cy="270"
									r="40"
									fill="var(--paper)"
									stroke="var(--line)"
									strokeWidth="1"
									strokeDasharray="2 4"
								/>
								<text fontSize="8.4" fill="var(--ink-dim)" letterSpacing="1.5">
									<textPath href="#introBadgeRing" startOffset="0%">
										FULL STACK • DEVELOPMENT • FULL STACK • DEVELOPMENT •
									</textPath>
								</text>
							</g>
						</svg>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Intro;

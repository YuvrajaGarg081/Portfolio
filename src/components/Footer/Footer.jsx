const Footer = (pname) => {
	return (
		<footer id="contact" className="border-t border-linesoft">
			<div className="max-w-355 mx-auto px-[6vw] pt-[7vw] pb-5">
				<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-10 border-b border-linesoft mb-8">
					<h2 className="font-display font-bold tracking-[-0.01em] text-[clamp(1.9rem,5vw,3rem)] leading-[1.15] max-w-[16ch] m-0">
						Say hello, or send a draft you&rsquo;re stuck on.
					</h2>
					<a
						href="mailto:gyuvraj0108@gmail.com"
						className="inline-flex items-center justify-center gap-2 text-white font-semibold text-[0.98rem] bg-linear-to-r from-coral to-violet rounded-md px-7 py-4 min-h-11 whitespace-nowrap shadow-[0_10px_24px_-12px_color-mix(in_srgb,var(--violet)_60%,transparent)] hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-12px_color-mix(in_srgb,var(--coral)_60%,transparent)] transition-all duration-200"
					>
						Get in touch
					</a>
				</div>
				<div className="flex flex-col items-center justify-center md:flex-row gap-3 text-inkdim text-[0.85rem]">
					{/* <div>© 2026 {pname}</div> */}
					<div>&copy; 2026 Yuvraj Garg All right are reserved</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

import { useState } from "react";

const LINKS = [
	{ href: "#home", label: "Home" },
	{ href: "#about", label: "About" },
	{ href: "#skills", label: "Skills" },
	{ href: "#projects", label: "Projects" },
	{ href: "#education", label: "Education" },
	{ href: "#contact", label: "Contact" },
];

const Header = () => {
	const [open, setOpen] = useState(false);

	return (
		<header className="sticky top-0 z-60 backdrop-blur-md bg-paper/90 border-b border-linesoft">
			<nav className="max-w-260 mx-auto flex items-center justify-between py-4.5 px-[6vw] relative">
				<a
					href="\"
					className="font-display font-bold tracking-[-0.01em] text-lg text-ink no-underline"
				>
					Yuvraj's Portfolio
				</a>

				<button
					type="button"
					onClick={() => setOpen((v) => !v)}
					aria-label="Toggle menu"
					aria-expanded={open}
					className="md:hidden flex flex-col justify-center gap-1.25 w-11 h-11 relative z-70"
				>
					<span
						className={`block w-5.5 h-0.5 bg-ink transition-transform duration-300 ${open ? "translate-y-1.75 rotate-45" : ""}`}
					/>
					<span
						className={`block w-5.5 h-0.5 bg-ink transition-opacity duration-300 ${open ? "opacity-0" : ""}`}
					/>
					<span
						className={`block w-5.5 h-0.5 bg-ink transition-transform duration-300 ${open ? "-translate-y-1.75 -rotate-45" : ""}`}
					/>
				</button>

				<div
					className={`fixed md:static top-0 right-0 md:right-auto h-screen md:h-auto
            w-[min(78vw,320px)] md:w-auto
            bg-paper md:bg-transparent
            border-l md:border-0 border-line
            flex flex-col md:flex-row gap-0 md:gap-[2.2rem]
            px-[8vw] md:px-0 pt-22.5 md:pt-0 pb-8 md:pb-0
            transition-transform duration-300
            ${open ? "translate-x-0" : "translate-x-full md:translate-x-0"}`}
				>
					{LINKS.map((link) => (
						<a
							key={link.href}
							href={link.href}
							onClick={() => setOpen(false)}
							className="font-display md:font-body font-semibold md:font-normal text-2xl md:text-[0.95rem] text-ink md:text-inkdim py-4 md:py-0 border-b md:border-0 border-linesoft no-underline hover:text-ink transition-colors"
						>
							{link.label}
						</a>
					))}
				</div>

				{open && (
					<button
						type="button"
						aria-label="Close menu"
						onClick={() => setOpen(false)}
						className="md:hidden fixed inset-0 bg-black/25 z-55 cursor-default"
					/>
				)}
			</nav>
		</header>
	);
};

export default Header;

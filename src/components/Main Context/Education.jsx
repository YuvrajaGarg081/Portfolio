const Entries = [
	{
		title: "B.E. Computer Science Engineering ",
		place: "Chandigarh University, Mohali",
		cpyear: "2026",
	},
	{
		title: "XII Non Medical",
		place: "Mother Teacher School",
		cpyear: "2022",
	},
	{
		title: "X",
		place: "YS School Barnala",
		cpyear: "2020",
	},
];

const Education = () => {
	return (
		<section id="education" className="border-t border-linesoft">
			<div className="max-w-355 mx-auto px-[6vw] pt-[7vw] pb-[7vw]">
				<div className="flex items-baseline justify-between mb-0">
					<h2 className="font-display font-bold tracking-[-0.01rem] text-[clamp(1.6rem,3.2vw,2.2rem)] m-0">
						Education
					</h2>
					<span className="text-sm font-semibold text-teal bg-teal/10 rounded-full px-3.5 py-1.5">
						Year
					</span>
				</div>

				{Entries.map((entry, i) => (
					<div
						key={entry.title}
						className={`flex flex-col sm:flex-row sm-item-baseline sm:items-baseline sm:justify-between gap-1 py-5 border-t border-linesoft
							${i === Entries.length - 1 ? "border-b" : ""}`}
					>
						<div>
							<h3 className="font-display font-semibold text-[1.05rem] m-0">{entry.title}</h3>
							<p className="text-sm text-inkdim m-0 mt-1">{entry.place}</p>
						</div>
						<span className="text-sm font-medium text-inkdim whitespace-nowrap">
							{entry.cpyear}
						</span>
					</div>
				))}
			</div>
		</section>
	);
};

export default Education;

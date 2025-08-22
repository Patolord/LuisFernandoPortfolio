export const FloatingShapes = () => {
	return (
		<div className="fixed inset-0 pointer-events-none z-0">
			<div className="absolute top-20 left-10 w-16 h-16 border border-sky-400/20 rotate-45 animate-pulse"></div>
			<div className="absolute top-40 right-20 w-12 h-12 border border-sky-300/15 rounded-full animate-bounce"></div>
			<div className="absolute bottom-40 left-20 w-8 h-20 border border-sky-500/10 animate-pulse"></div>
			<div className="absolute top-60 left-1/3 w-6 h-6 bg-sky-400/10 rotate-45 animate-ping"></div>
			<div className="absolute bottom-60 right-1/4 w-10 h-10 border border-sky-300/20 rounded-full animate-pulse"></div>
			<div className="absolute top-1/3 right-10 w-14 h-14 border border-sky-400/15 rotate-12 animate-bounce"></div>
		</div>
	);
};

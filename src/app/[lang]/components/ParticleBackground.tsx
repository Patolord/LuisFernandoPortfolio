"use client";

interface Particle {
	id: string;
	left: number;
	top: number;
	animationDelay: number;
	animationDuration: number;
}

// Pre-calculated static particles to ensure perfect SSR/client match
const PARTICLES: Particle[] = [
	{
		id: "particle-0",
		left: 15,
		top: 25,
		animationDelay: 0.5,
		animationDuration: 3.2,
	},
	{
		id: "particle-1",
		left: 85,
		top: 60,
		animationDelay: 1.2,
		animationDuration: 4.1,
	},
	{
		id: "particle-2",
		left: 45,
		top: 80,
		animationDelay: 2.1,
		animationDuration: 3.7,
	},
	{
		id: "particle-3",
		left: 70,
		top: 15,
		animationDelay: 0.8,
		animationDuration: 4.5,
	},
	{
		id: "particle-4",
		left: 25,
		top: 45,
		animationDelay: 1.8,
		animationDuration: 3.4,
	},
	{
		id: "particle-5",
		left: 90,
		top: 35,
		animationDelay: 0.3,
		animationDuration: 4.2,
	},
	{
		id: "particle-6",
		left: 55,
		top: 70,
		animationDelay: 2.5,
		animationDuration: 3.8,
	},
	{
		id: "particle-7",
		left: 10,
		top: 90,
		animationDelay: 1.5,
		animationDuration: 4.0,
	},
	{
		id: "particle-8",
		left: 80,
		top: 20,
		animationDelay: 0.9,
		animationDuration: 3.6,
	},
	{
		id: "particle-9",
		left: 35,
		top: 55,
		animationDelay: 2.2,
		animationDuration: 4.3,
	},
	{
		id: "particle-10",
		left: 65,
		top: 85,
		animationDelay: 1.1,
		animationDuration: 3.9,
	},
	{
		id: "particle-11",
		left: 20,
		top: 30,
		animationDelay: 2.8,
		animationDuration: 3.5,
	},
	{
		id: "particle-12",
		left: 95,
		top: 65,
		animationDelay: 0.6,
		animationDuration: 4.4,
	},
	{
		id: "particle-13",
		left: 40,
		top: 10,
		animationDelay: 1.9,
		animationDuration: 3.3,
	},
	{
		id: "particle-14",
		left: 75,
		top: 50,
		animationDelay: 2.6,
		animationDuration: 4.1,
	},
	{
		id: "particle-15",
		left: 30,
		top: 75,
		animationDelay: 0.4,
		animationDuration: 3.7,
	},
	{
		id: "particle-16",
		left: 60,
		top: 40,
		animationDelay: 1.6,
		animationDuration: 4.2,
	},
	{
		id: "particle-17",
		left: 85,
		top: 95,
		animationDelay: 2.3,
		animationDuration: 3.4,
	},
	{
		id: "particle-18",
		left: 50,
		top: 25,
		animationDelay: 1.3,
		animationDuration: 4.0,
	},
	{
		id: "particle-19",
		left: 5,
		top: 60,
		animationDelay: 2.9,
		animationDuration: 3.8,
	},
];

export const ParticleBackground = () => {
	return (
		<div className="absolute inset-0 overflow-hidden">
			{PARTICLES.map((particle) => (
				<div
					key={particle.id}
					className="absolute w-1 h-1 bg-sky-400/30 rounded-full animate-pulse"
					style={{
						left: `${particle.left}%`,
						top: `${particle.top}%`,
						animationDelay: `${particle.animationDelay}s`,
						animationDuration: `${particle.animationDuration}s`,
					}}
				/>
			))}
		</div>
	);
};

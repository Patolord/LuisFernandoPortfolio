"use client";

import {
	type Container,
	type ISourceOptions,
	MoveDirection,
	OutMode,
} from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useId, useMemo, useState } from "react";

export const ParticleBackground = () => {
	const [init, setInit] = useState(false);
	const particlesId = useId();

	// this should be run only once per application lifetime
	useEffect(() => {
		initParticlesEngine(async (engine) => {
			// you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
			// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
			// starting from v2 you can add only the features you need reducing the bundle size
			await loadSlim(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	const particlesLoaded = async (container?: Container): Promise<void> => {
		console.log(container);
	};

	const options: ISourceOptions = useMemo(
		() => ({
			particles: {
				number: {
					value: 150,
				},
				move: {
					direction: MoveDirection.none,
					enable: false,
					outModes: {
						default: OutMode.bounce,
					},
					random: true,
					speed: 0.1,
					straight: false,
				},
				opacity: {
					animation: {
						enable: true,
						speed: 1,
						sync: false,
					},
					value: { min: 0, max: 1 },
				},
				size: {
					value: { min: 0.1, max: 1 },
				},
			},
			detectRetina: true,
			fullScreen: false,
			background: {
				color: "transparent",
			},
		}),
		[],
	);

	if (init) {
		return (
			<div className="absolute inset-0 overflow-hidden pointer-events-none w-full h-full">
				<Particles
					id={particlesId}
					particlesLoaded={particlesLoaded}
					options={options}
					className="w-full h-full"
				/>
			</div>
		);
	}

	return null;
};

export default ParticleBackground;

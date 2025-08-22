import { ImageResponse } from "next/og";

// Image metadata
export const size = {
	width: 1200,
	height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image({
	params,
}: {
	params: Promise<{ lang: "en" | "pt-BR" }>;
}) {
	const { lang } = await params;
	return new ImageResponse(
		<div
			style={{
				fontSize: 48,
				background: "linear-gradient(180deg, #0f172a 0%, #1e293b 100%)",
				color: "white",
				width: "100%",
				height: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				padding: "40px",
			}}
		>
			{/* Airplane Icon */}
			<div
				style={{
					fontSize: 72,
					color: "#38bdf8",
					marginBottom: "20px",
					display: "flex",
				}}
			>
				✈️
			</div>

			{/* Main Title */}
			<div
				style={{
					fontSize: 60,
					fontWeight: "bold",
					textAlign: "center",
					marginBottom: "20px",
					background: "linear-gradient(90deg, #38bdf8 0%, #0ea5e9 100%)",
					backgroundClip: "text",
					color: "transparent",
				}}
			>
				Luis Fernando dos Santos
			</div>

			{/* Subtitle */}
			<div
				style={{
					fontSize: 32,
					color: "#94a3b8",
					textAlign: "center",
					marginBottom: "30px",
				}}
			>
				{lang === "pt-BR"
					? "Consultor em Engenharia Aeronáutica"
					: "Aviation Engineering Consultant"}
			</div>

			{/* Experience Badge */}
			<div
				style={{
					display: "flex",
					alignItems: "center",
					backgroundColor: "#1e40af",
					padding: "12px 24px",
					borderRadius: "8px",
					fontSize: 24,
					color: "white",
				}}
			>
				{lang === "pt-BR"
					? "18+ Anos de Experiência em Aviação Comercial"
					: "18+ Years Experience in Commercial Aviation"}
			</div>
		</div>,
		{
			...size,
		},
	);
}

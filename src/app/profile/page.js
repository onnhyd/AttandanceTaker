"use client";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ResponsiveBar } from "@nivo/bar";
import { ResponsiveLine } from "@nivo/line";

export default function Profile() {
	return (
		<div className="flex flex-col min-h-[100dvh]">
			<header className="bg-primary text-primary-foreground px-4 py-6 md:px-6 md:py-8">
				<div className="container flex items-center justify-between">
					<div className="space-y-1">
						<h1 className="text-2xl font-bold">John Doe</h1>
						<p className="text-sm text-primary-foreground/80">
							Grade 10, Class A
						</p>
					</div>
					<div className="space-x-4">
						<Link
							href="#"
							className="inline-flex items-center rounded-md bg-primary-foreground px-4 py-2 text-sm font-medium text-primary shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
							prefetch={false}
						>
							View Profile
						</Link>
						<Link
							href="#"
							className="inline-flex items-center rounded-md border border-transparent bg-transparent px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary-foreground/10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
							prefetch={false}
						>
							Contact
						</Link>
					</div>
				</div>
			</header>
			<main className="flex-1 py-8 md:py-12">
				<div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					<div className="col-span-2 lg:col-span-1">
						<Card>
							<CardHeader>
								<CardTitle>Attendance</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="grid grid-cols-7 gap-1">
									{Array.from({ length: 30 }).map((_, i) => (
										<div
											key={i}
											className={`h-6 w-6 rounded-sm ${
												i % 5 === 0
													? "bg-green-500"
													: i % 7 === 0
													? "bg-yellow-500"
													: "bg-red-500"
											}`}
										/>
									))}
								</div>
							</CardContent>
						</Card>
					</div>
					<div>
						<Card>
							<CardHeader>
								<CardTitle>Test Scores</CardTitle>
							</CardHeader>
							<CardContent>
								<BarChart className="w-full aspect-[2/1]" />
							</CardContent>
						</Card>
					</div>
					<div>
						<Card>
							<CardHeader>
								<CardTitle>Assignment Grades</CardTitle>
							</CardHeader>
							<CardContent>
								<LineChart className="w-full aspect-[2/1]" />
							</CardContent>
						</Card>
					</div>
					<div className="col-span-2 lg:col-span-1">
						<Card>
							<CardHeader>
								<CardTitle>Overall Progress</CardTitle>
							</CardHeader>
							<CardContent>
								<LineChart className="w-full aspect-square" />
							</CardContent>
						</Card>
					</div>
				</div>
			</main>
		</div>
	);
}

function BarChart(props) {
	return (
		<div {...props}>
			<ResponsiveBar
				data={[
					{ name: "Jan", count: 111 },
					{ name: "Feb", count: 157 },
					{ name: "Mar", count: 129 },
					{ name: "Apr", count: 150 },
					{ name: "May", count: 119 },
					{ name: "Jun", count: 72 },
				]}
				keys={["count"]}
				indexBy="name"
				margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
				padding={0.3}
				colors={["#2563eb"]}
				axisBottom={{
					tickSize: 0,
					tickPadding: 16,
				}}
				axisLeft={{
					tickSize: 0,
					tickValues: 4,
					tickPadding: 16,
				}}
				gridYValues={4}
				theme={{
					tooltip: {
						chip: {
							borderRadius: "9999px",
						},
						container: {
							fontSize: "12px",
							textTransform: "capitalize",
							borderRadius: "6px",
						},
					},
					grid: {
						line: {
							stroke: "#f3f4f6",
						},
					},
				}}
				tooltipLabel={({ id }) => `${id}`}
				enableLabel={false}
				role="application"
				ariaLabel="A bar chart showing data"
			/>
		</div>
	);
}

function LineChart(props) {
	return (
		<div {...props}>
			<ResponsiveLine
				data={[
					{
						id: "Desktop",
						data: [
							{ x: "Jan", y: 43 },
							{ x: "Feb", y: 137 },
							{ x: "Mar", y: 61 },
							{ x: "Apr", y: 145 },
							{ x: "May", y: 26 },
							{ x: "Jun", y: 154 },
						],
					},
					{
						id: "Mobile",
						data: [
							{ x: "Jan", y: 60 },
							{ x: "Feb", y: 48 },
							{ x: "Mar", y: 177 },
							{ x: "Apr", y: 78 },
							{ x: "May", y: 96 },
							{ x: "Jun", y: 204 },
						],
					},
				]}
				margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
				xScale={{
					type: "point",
				}}
				yScale={{
					type: "linear",
				}}
				axisTop={null}
				axisRight={null}
				axisBottom={{
					tickSize: 0,
					tickPadding: 16,
				}}
				axisLeft={{
					tickSize: 0,
					tickValues: 5,
					tickPadding: 16,
				}}
				colors={["#2563eb", "#e11d48"]}
				pointSize={6}
				useMesh={true}
				gridYValues={6}
				theme={{
					tooltip: {
						chip: {
							borderRadius: "9999px",
						},
						container: {
							fontSize: "12px",
							textTransform: "capitalize",
							borderRadius: "6px",
						},
					},
					grid: {
						line: {
							stroke: "#f3f4f6",
						},
					},
				}}
				role="application"
			/>
		</div>
	);
}

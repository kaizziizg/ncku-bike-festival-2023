import * as React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import ErrorPage from "./error-page";
import Root from "./routes/Root";
import DashBoard from "./routes/DashBoard"
import EventRegistration from "./routes/EventRegistration"
import Souvenir from "./routes/Souvenir"
import Sponsor from "./routes/Sponsor"
import WebsiteTraffic from "./routes/WebsiteTraffic";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				errorElement: <ErrorPage />,
				children: [
					{ index: true, element: <DashBoard /> },
					{
						path: "DashBoard",
						element: <DashBoard />,
					},
					{
						path: "EventRegistration",
						element: <EventRegistration />,
					},
					{
						path: "Souvenir",
						element: <Souvenir />,
					},
					{
						path: "Sponsor",
						element: <Sponsor />,
					},
					{
						path: "WebsiteTraffic",
						element: <WebsiteTraffic />,
					},
				],
			},
		],
	},
]);

export default function Routes() {
	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
}

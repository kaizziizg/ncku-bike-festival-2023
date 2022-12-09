import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArticleIcon from "@mui/icons-material/Article";
import BarChartIcon from "@mui/icons-material/BarChart";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import AddReactionIcon from "@mui/icons-material/AddReaction";

import { NavLink, Link } from "react-router-dom";

import "./css/listItem.css";
let activeStyle = {
	// textDecoration: "underline",
};
export const mainListItems = (
	<React.Fragment>
		<NavLink
			to="DashBoard"
			style={({ isActive }) => (isActive ? activeStyle : undefined)}
		>
			<ListItemButton>
				<ListItemIcon>
					<DashboardIcon />
				</ListItemIcon>
				<ListItemText primary="Dashboard" />
			</ListItemButton>
		</NavLink>

		<NavLink
			to="EventRegistration"
			style={({ isActive }) => (isActive ? activeStyle : undefined)}
		>
			<ListItemButton>
				<ListItemIcon>
					<AddReactionIcon />
				</ListItemIcon>
				<ListItemText primary="活動報名紀錄" />
			</ListItemButton>
		</NavLink>

		<NavLink
			to="Souvenir"
			style={({ isActive }) => (isActive ? activeStyle : undefined)}
		>
			<ListItemButton>
				<ListItemIcon>
					<ShoppingCartIcon />
				</ListItemIcon>
				<ListItemText primary="紀念品購買紀錄" />
			</ListItemButton>
		</NavLink>

		<NavLink
			to="Sponsor"
			style={({ isActive }) => (isActive ? activeStyle : undefined)}
		>
			<ListItemButton>
				<ListItemIcon>
					<AddBusinessIcon />
				</ListItemIcon>
				<ListItemText primary="贊助廠商" />
			</ListItemButton>
		</NavLink>

		<NavLink
			to="WebsiteTraffic"
			style={({ isActive }) => (isActive ? activeStyle : undefined)}
		>
			<ListItemButton>
				<ListItemIcon>
					<BarChartIcon />
				</ListItemIcon>
				<ListItemText primary="網站流量" />
			</ListItemButton>
		</NavLink>
	</React.Fragment>
);

export const secondaryListItems = (
	<React.Fragment>
		<ListSubheader component="div" inset>
			編輯文章
		</ListSubheader>

		<ListItemButton>
			<ListItemIcon>
				<ArticleIcon />
			</ListItemIcon>
			<ListItemText primary="活動介紹" />
		</ListItemButton>

		<ListItemButton>
			<ListItemIcon>
				<ArticleIcon />
			</ListItemIcon>
			<ListItemText primary="主題專欄" />
		</ListItemButton>
	</React.Fragment>
);

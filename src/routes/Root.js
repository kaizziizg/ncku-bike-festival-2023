import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import Badge from "@mui/material/Badge";
import MuiAppBar from "@mui/material/AppBar";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";

import List from "@mui/material/List";

import Divider from "@mui/material/Divider";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import MuiDrawer from "@mui/material/Drawer";
import { mainListItems, secondaryListItems } from "../listItems";

import {
	Outlet,
} from "react-router-dom";



const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(["width", "margin"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const Drawer = styled(MuiDrawer, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	"& .MuiDrawer-paper": {
		position: "relative",
		whiteSpace: "nowrap",
		width: drawerWidth,
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
		boxSizing: "border-box",
		...(!open && {
			overflowX: "hidden",
			transition: theme.transitions.create("width", {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
			width: theme.spacing(7),
			[theme.breakpoints.up("sm")]: {
				width: theme.spacing(9),
			},
		}),
	},
}));

export default function Root() {
	const [open, setOpen] = React.useState(true);
	const toggleDrawer = () => {
		setOpen(!open);
		console.log(open);
	};

	return (
		<div>
			<Box sx={{ display: "flex" }}>
				{/* <AppBar position="static"> */}
				<AppBar position="absolute" open={open}>
					<Toolbar>
						<IconButton
							size="large"
							edge="start"
							color="inherit"
							aria-label="open drawer"
							sx={{
								marginRight: "36px",
								//
								...(open && { display: "none" }),
							}}
							onClick={toggleDrawer}
						>
							<MenuIcon />
						</IconButton>

						<Typography
							variant="h6"
							component="div"
							sx={{ flexGrow: 1 }}
						>
							成功大學單車節 後台
						</Typography>
						{/* Icon的按鈕不要用Button包 不然會很大塊*/}
						<IconButton color="inherit">
							{/* Badge 訊息數量 */}
							<Badge badgeContent={4} color="secondary">
								<LoginIcon />
							</Badge>
						</IconButton>
					</Toolbar>
				</AppBar>
				<Drawer
					variant="permanent"
					open={open}
					sx={{ height: "100vh" }}
				>
					<Toolbar
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "flex-end",
							px: [1],
						}}
					>
						<IconButton onClick={toggleDrawer}>
							<ChevronLeftIcon />
						</IconButton>
					</Toolbar>
					<Divider />
					<List component="nav">
						{mainListItems}
						<Divider sx={{ my: 1 }} />
						{secondaryListItems}
					</List>
				</Drawer>
				<Box
					component="main"
					sx={{
						backgroundColor: (theme) =>
							theme.palette.mode === "light"
								? theme.palette.grey[100]
								: theme.palette.grey[900],
						flexGrow: 1,
						height: "100vh",
						overflow: "auto",
					}}
				>
					{/* 避免被上面吃掉 多放一個toolBar */}
					<Toolbar />
					<Outlet/>
				</Box>
			</Box>
		</div>
	);
}

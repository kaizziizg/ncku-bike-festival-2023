import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";


export default function Sponsor() {
    return(
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
						<Grid container spacing={3}>
							{/* Chart */}
							<Grid item xs={12} md={8} lg={9}>
								<Paper
									sx={{
										p: 2,
										display: "flex",
										flexDirection: "column",
										height: 240,
									}}
								>
									贊助商!!
								</Paper>
							</Grid>
							{/* Recent Deposits */}
							<Grid item xs={12} md={4} lg={3}>
								<Paper
									sx={{
										p: 2,
										display: "flex",
										flexDirection: "column",
										height: 240,
									}}
								>
									測試2
								</Paper>
							</Grid>
							{/* Recent Orders */}
							<Grid item xs={12}>
								<Paper
									sx={{
										p: 2,
										display: "flex",
										flexDirection: "column",
									}}
								>
									測試3
								</Paper>
							</Grid>
							<Grid item xs={12}>
								<Paper
									sx={{
										p: 2,
										display: "flex",
										flexDirection: "column",
									}}
								>
									測試4
								</Paper>
							</Grid>
						</Grid>
					</Container>
    )

}
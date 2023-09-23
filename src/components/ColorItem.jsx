import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";

export const ColorItem = ({ item }) => {
  return (
    <Card sx={{ bgcolor: `${item}`, margin: "10px", padding: "10px" }}>
      <CardContent>
        <Grid container spacing={1} align="center">
          <Grid item xs={12} sx={{ height: "100px", padding: "10px" }}>
            <Typography sx={{ fontWeight: "bold" }} variant="h4">
              {item}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

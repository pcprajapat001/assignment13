import React, { useState } from "react";

import { Grid } from "@mui/material";
import { ColorItem } from "./ColorItem";

export const ColorList = () => {
  const [data, setData] = useState([
    "red",
    "green",
    "skyblue",
    "pink",
    "blue",
    "brown",
    "yellow",
    "aqua",
  ]);
  return (
    <Grid container spacing={1} sx={{ padding: "3px" }}>
      {data.map((item) => (
        <Grid item xs={4}>
          <ColorItem item={item.toUpperCase()} />
        </Grid>
      ))}
    </Grid>
  );
};

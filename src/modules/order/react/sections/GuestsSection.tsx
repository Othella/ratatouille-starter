"use client";

import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useGuestsSection } from "@ratatouille/modules/order/react/sections/use-guests-section";
export const GuestsSection: React.FC<{}> = () => {
  const presenter = useGuestsSection();

  return (
    <Box sx={{ marginTop: 2 }}>
      <Typography variant="h5">Guests</Typography>
      <Grid sx={{ paddingTop: 2 }} rowSpacing={4}>
        {presenter.guests.map((guest) => (
          <Box key={Math.random()} sx={{ paddingTop: 2 }}>
            <GuestRow
              id={guest.id}
              firstName={guest.firstName}
              lastName={guest.lastName}
              age={guest.age}
              onChange={presenter.updateGuest}
              remove={presenter.removeGuest}
            />
          </Box>
        ))}
      </Grid>
      <Grid
        container
        direction={"row"}
        spacing={1}
        marginTop={2}
        alignItems={"center"}
      >
        <Grid item>
          <Button
            variant="contained"
            color="inherit"
            onClick={presenter.addGuest}
          >
            Add Guest
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={presenter.onNext}
          >
            Next Step
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export const GuestRow: React.FC<{
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  onChange: (id: string, key: string, value: any) => void;
  remove: (id: string) => void;
}> = ({ id, firstName, lastName, age, onChange, remove }) => {
  return (
    <Box>
      <Grid container direction={"row"} spacing={1} alignItems={"center"}>
        <Grid item>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <TextField
              variant="standard"
              value={firstName}
              onChange={(e) => onChange(id, "firstName", e.target.value)}
            />
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <TextField
              variant="standard"
              value={lastName}
              onChange={(e) => onChange(id, "lastName", e.target.value)}
            />
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl>
            <FormLabel>Age</FormLabel>
            <TextField
              variant="standard"
              value={age}
              onChange={(e) => onChange(id, "age", parseInt(e.target.value))}
            />
          </FormControl>
        </Grid>
        <Box sx={{ marginTop: 2 }}>
          <Button
            variant="contained"
            onClick={() => remove(id)}
            color="error"
            startIcon={<DeleteIcon />}
          >
            Remove
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

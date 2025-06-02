"use client";

import {
  Autocomplete,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { BsCalendar2DateFill } from "react-icons/bs";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";

const locations = ["London", "Paris", "NY", "Barcelona", "Istanbul"];

export default function SearchBox() {
  const [selectedTrip, setSelectedTrip] = useState<string>("one-way");

  const [from, setFrom] = useState<string | null>(null);
  const [to, setTo] = useState<string | null>(null);

  const [journeyDate, setJourneyDate] = useState<Dayjs | null>(null);
  const [returnDate, setReturnDate] = useState<Dayjs | null>(null);

  const handleTripSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTrip(event.target.value);
  };

  const handleSearch = () => {
    console.log("From:", from);
    console.log("To:", to);
    console.log("Trip Type:", selectedTrip);
    console.log("Journey Date:", journeyDate?.format("YYYY-MM-DD"));
    if (selectedTrip === "round-way") {
      console.log("Return Date:", returnDate?.format("YYYY-MM-DD"));
    }
  };

  return (
    // main div
    <div className="relative bg-white rounded-lg p-4 sm:p-8 mt-4 sm:mt-12 w-[95%] sm:w-full mx-auto shadow-md">
      {/* Trip Type */}
      <div className="mb-6">
        <FormControl component="fieldset" fullWidth>
          <RadioGroup value={selectedTrip} onChange={handleTripSelect} row>
            <FormControlLabel
              value="one-way"
              control={
                <Radio
                  sx={{
                    color: "#162456",
                    "&.Mui-checked": { color: "#000" },
                  }}
                />
              }
              label="One Way"
              sx={{
                "& .MuiFormControlLabel-label": {
                  fontSize: { xs: "0.75rem", sm: "1rem" },
                },
              }}
            />
            <FormControlLabel
              value="round-way"
              control={
                <Radio
                  sx={{
                    color: "#162456",
                    "&.Mui-checked": { color: "#000" },
                  }}
                />
              }
              label="Round Way"
              sx={{
                "& .MuiFormControlLabel-label": {
                  fontSize: { xs: "0.75rem", sm: "1rem" },
                },
              }}
            />
          </RadioGroup>
        </FormControl>
      </div>

      <div className="flex flex-col xl:flex-row lg:flex-nowrap gap-8 justify-between mb-6">
        {/* From & To */}
        <div className="flex flex-col lg:flex-row sm:flex-nowrap gap-6 xl:gap-8 flex-shrink-0 flex-grow-0 lg:flex-grow xl:basis-1/2 min-w-0">
          {/* From */}
          <div className="flex items-center gap-2 flex-grow min-w-[150px] max-w-[250px] min-h-[48px]">
            <FaMapLocation className="sm:text-2xl text-[#162456]" />
            <Autocomplete
              options={locations}
              value={from}
              onChange={(_, newValue) => setFrom(newValue)}
              sx={{ width: { xs: "100%", sm: "90%" }, flexGrow: 1 }}
              freeSolo
              renderInput={(params) => (
                <TextField {...params} label="From" variant="standard" />
              )}
            />
          </div>
          {/* To */}
          <div className="flex items-center gap-2 flex-grow  min-w-[150px] max-w-[250px] min-h-[48px]">
            <FaLocationArrow className="sm:text-2xl text-[#162456]" />
            <Autocomplete
              options={locations}
              value={to}
              onChange={(_, newValue) => setTo(newValue)}
              sx={{ width: { xs: "100%", sm: "90%" }, flexGrow: 1 }}
              freeSolo
              renderInput={(params) => (
                <TextField {...params} label="To" variant="standard" />
              )}
            />
          </div>
        </div>

        {/* Dates and Search */}
        <div className="flex flex-col lg:flex-row sm:flex-nowrap items-center gap-6 sm:gap-8 flex-shrink-0 flex-grow-0 lg:flex-grow xl:basis-[40%] min-w-0 justify-center sm:justify-start">
          {/* Journey Date */}
          <div className="flex items-center gap-2 flex-grow min-w-[175px] max-w-[350px] min-h-[48px]">
            <BsCalendar2DateFill className="sm:text-2xl text-[#162456]" />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                label="Journey Date"
                value={journeyDate}
                onChange={(newValue) => setJourneyDate(newValue)}
                slotProps={{ textField: { size: "small", fullWidth: true } }}
                sx={{ width: "100%" }}
              />
            </LocalizationProvider>
          </div>

          {/* Return Date */}
          {selectedTrip === "round-way" && (
            <div className="flex items-center gap-2 flex-grow min-w-[175px] max-w-[350px] min-h-[48px]">
              <FaMapLocation className="sm:text-2xl text-[#162456]" />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                  label="Return Date"
                  value={returnDate}
                  onChange={(newValue) => setReturnDate(newValue)}
                  slotProps={{ textField: { size: "small", fullWidth: true } }}
                  sx={{ width: "100%" }}
                />
              </LocalizationProvider>
            </div>
          )}

          {/* Search Button */}
        </div>
      </div>
      <div className="absolute left-1/2 -bottom-5 transform -translate-x-1/2 flex justify-center flex-shrink-0 min-w-[120px] max-w-[140px]">
        <Button
          onClick={handleSearch}
          variant="contained"
          sx={{
            backgroundColor: "#FDC700",

            textTransform: "none",
            fontSize: "18px",
            color: "#162456",
            fontWeight: {
              sm: "400",
              lg: "600",
            },
            py: 1,
            "&:hover": { backgroundColor: "#162456", color: "white" },
            width: "100%",
            maxWidth: 140,
            minWidth: 120,
          }}
        >
          Search
        </Button>
      </div>
    </div>
  );
}

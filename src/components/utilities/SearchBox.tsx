"use client";

import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { BsCalendar2DateFill } from "react-icons/bs";

export default function SearchBox() {
  const [selectedTrip, setSelectedTrip] = useState<string>("one-way");

  // Proper typing for the onChange handler
  const handleTripSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedTrip(value);
    console.log(value);
  };

  return (
    <div className="bg-white rounded-lg p-8 mt-4 sm:mt-12 w-[95%] sm:w-[80%] mx-auto">
      <div className="mb-2">
        <FormControl component="fieldset" fullWidth>
          <RadioGroup
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={selectedTrip}
            onChange={handleTripSelect}
            row
            sx={{ display: "flex", flexDirection: "row" }}
          >
            <FormControlLabel
              value="one-way"
              control={
                <Radio
                  sx={{
                    color: "#162456",
                    "&.Mui-checked": {
                      color: "#000",
                    },
                  }}
                />
              }
              label="One Way"
            />
            <FormControlLabel
              value="round-way"
              control={
                <Radio
                  sx={{
                    color: "#162456",
                    "&.Mui-checked": {
                      color: "#000",
                    },
                  }}
                />
              }
              label="Round Way"
            />
          </RadioGroup>
        </FormControl>
      </div>

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  ${
          selectedTrip === "round-way" ? "xl:grid-cols-5" : "xl:grid-cols-4"
        } items-center justify-center gap-8 w-full`}
      >
        <div className="col-span-1 flex items-center gap-2">
          <FaMapLocation className="text-3xl" />
          <div>
            <p>From</p>
            <p>From</p>
          </div>
        </div>
        <div className="col-span-1 flex items-center gap-2 ">
          <FaLocationArrow className="text-3xl" />
          <div>
            <p>To</p>
            <p>To</p>
          </div>
        </div>
        <div
          className={`${
            selectedTrip === "round-way" ? "col-span-2" : "col-span-1"
          } flex items-center gap-8`}
        >
          <div className="flex items-center gap-2">
            <BsCalendar2DateFill className="text-3xl" />
            <div>
              <p>Journey Date</p>
              <p>Pick A Date</p>
            </div>
          </div>
          {selectedTrip === "round-way" && (
            <div className="flex items-center gap-2">
              <FaMapLocation className="text-3xl" />
              <div>
                <p>Return Date</p>
                <p>Pick A Date</p>
              </div>
            </div>
          )}
        </div>
        <div>
          <Button
            sx={{
              backgroundColor: "#162456",
              "&:hover": {
                backgroundColor: "#0e1832",
              },
            }}
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  colors: () => colors,
  datasets: () => datasets,
  themes: () => themes
});
module.exports = __toCommonJS(stdin_exports);
const themes = {
  "light": {
    "name": "light",
    "text": "#222",
    "muted": "#777",
    "pale": "#f0f0f0",
    "background": "#fff"
  },
  "dark": {
    "name": "dark",
    "text": "#fff",
    "muted": "#bbb",
    "pale": "#333",
    "background": "#222"
  }
};
const colors = {
  cat: ["#206095", "#A8BD3A", "#003C57", "#27A0CC", "#118C7B", "#F66068", "#746CB1", "#22D0B6", "lightgrey"],
  seq: ["#d5f690", "#5bc4b1", "#2e9daa", "#0079a2", "#005583"],
  nodata: "#999"
};
const datasets = {
  population: {
    table: "population",
    label: "Population",
    chart: "NumBlock",
    unit: "people",
    format: ",",
    rows: [
      { key: "all", label: "all" }
    ]
  },
  density: {
    table: "density",
    label: "Density",
    chart: "NumBlock",
    unit: "people per hectare",
    format: ".1f",
    rows: [
      { key: "all", label: "all" }
    ]
  },
  agemed: {
    table: "agemed",
    label: "Average (median) age",
    chart: "NumBlock",
    unit: "years",
    format: ".0f",
    rows: [
      { key: "all", label: "all" }
    ]
  },
  age10yr: {
    table: "age10yr",
    label: "Age profile",
    chart: "ProfileChart",
    unit: "%",
    format: ".0f",
    rows: [
      { key: "0-9", label: "Age 0 to 9" },
      { key: "10-19", label: "Age 10 to 19" },
      { key: "20-29", label: "Age 20 to 29" },
      { key: "30-39", label: "Age 30 to 39" },
      { key: "40-49", label: "Age 40 to 49" },
      { key: "50-59", label: "Age 50 to 59" },
      { key: "60-69", label: "Age 60 to 69" },
      { key: "70-79", label: "Age 70 to 79" },
      { key: "80plus", label: "Age 80 plus" }
    ]
  },
  sex: {
    table: "population",
    label: "Sex",
    chart: "BarChart",
    unit: "%",
    format: ".0f",
    rows: [
      { key: "female", label: "Female" },
      { key: "male", label: "Male" }
    ]
  },
  ethnicity: {
    table: "ethnicity",
    label: "Ethnicity",
    chart: "BarChart",
    unit: "%",
    format: ".0f",
    rows: [
      { key: "white", label: "White" },
      { key: "asian", label: "Asian" },
      { key: "black", label: "Black" },
      { key: "mixed", label: "Mixed" },
      { key: "other", label: "Other" }
    ]
  },
  health: {
    table: "health",
    label: "General health",
    chart: "BarChart",
    unit: "%",
    format: ".0f",
    rows: [
      { key: "good", label: "Good" },
      { key: "fair", label: "Fair" },
      { key: "bad", label: "Bad" }
    ]
  },
  economic: {
    table: "economic",
    label: "Economic activity",
    chart: "BarChart",
    unit: "%",
    format: ".0f",
    rows: [
      { key: "employee", label: "Employee" },
      { key: "self-employed", label: "Self-employed" },
      { key: "student", label: "Student (employed)" },
      { key: "unemployed", label: "Unemployed" },
      { key: "inactive", label: "Inactive" }
    ]
  },
  travel: {
    table: "travel",
    label: "Travel to work",
    chart: "BarChart",
    unit: "%",
    format: ".0f",
    rows: [
      { key: "train_metro", label: "Train/metro" },
      { key: "bus", label: "Bus" },
      { key: "taxi", label: "Taxi" },
      { key: "car_van", label: "Car/van" },
      { key: "moto", label: "Motorbike/scooter" },
      { key: "bicycle", label: "Bicycle" },
      { key: "foot", label: "On foot" },
      { key: "home", label: "Work from home" },
      { key: "other", label: "Other" }
    ]
  },
  tenure: {
    table: "tenure",
    label: "Housing tenure",
    chart: "BarChart",
    unit: "%",
    format: ".0f",
    rows: [
      { key: "owned", label: "Owner occupied" },
      { key: "shared_ownership", label: "Shared ownership" },
      { key: "rented_private", label: "Rented (private)" },
      { key: "rented_social", label: "Rented (social)" },
      { key: "rent_free", label: "Rent free" }
    ]
  }
};

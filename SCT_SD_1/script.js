const from_val = document.querySelector("#from"); //input
let to_val = document.querySelector("#to"); //output
const from_unit = document.querySelector("#from_unit"); //unit of conversion
const to_unit = document.querySelector("#to_unit"); //unit of conversion
const rate = document.querySelector(".rate");

function convert_rate(from, to){
    if (from == "celsius") {
        if (to == "fahrenheit") return "F = (C * 9)/5 + 32";
        if (to == "kelvin") return "K = C+ 273.15";
        if (to == "celsius") return "C = C";
    } else if (from == "fahrenheit") {
        if (to == "celsius") return "C = (F- 32)* 5/ 9";
        if (to == "kelvin") return "K = (F- 32)* 5/9 + 273.15";
        if (to == "fahrenheit") return "F = F";
    } else if (from == "kelvin") {
        if (to == "celsius") return "C = K- 273.15";
        if (to == "fahrenheit") return "F = (K- 273.15)* 9/5 +32";
        if (to == "kelvin") return "K = K";
    }
}

function convert(value, from, to){
    if (from == to) return value; // No conversion needed
    if (from == "celsius") {
        if (to == "fahrenheit") return (value * 9) / 5 + 32;
        if (to == "kelvin") return value + 273.15;
    } else if (from == "fahrenheit") {
        if (to == "celsius") return (value - 32) * 5 / 9;
        if (to == "kelvin") return (value - 32) * 5 / 9 + 273.15;
    } else if (from == "kelvin") {
        if (to == "celsius") return value - 273.15;
        if (to == "fahrenheit") return (value - 273.15) * 9 / 5 + 32;
    }
    return NaN; // In case of invalid input
}

function update_to_val(){
    const fromValue = parseFloat(from_val.value);
    const fromUnitValue = from_unit.value;
    const toUnitValue = to_unit.value;

    if (isNaN(fromValue)) to_val.value = "";
    else {
        to_val.value = convert(fromValue, fromUnitValue, toUnitValue).toFixed(2)
        rate.textContent = convert_rate(fromUnitValue, toUnitValue);
    };
}

function update_from_val(){
    const fromValue = parseFloat(to_val.value);
    const fromUnitValue = to_unit.value;
    const toUnitValue = from_unit.value;

    if (isNaN(fromValue)) from_val.value = "";
    else{ 
        from_val.value = convert(fromValue, fromUnitValue, toUnitValue).toFixed(2)
        rate.textContent = convert_rate(fromUnitValue, toUnitValue);
    };
}

from_val.addEventListener("input", update_to_val);
from_unit.addEventListener("change", update_to_val);
to_unit.addEventListener("change", update_to_val);
to_val.addEventListener("input",update_from_val);

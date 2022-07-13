//Q1 Store Mark's and John's mass and height in variables.

const markMass = 80;
const markHeight = 1.8;
const johnMass = 75;
const johnHeight = 1.75;

//Q2 Calculate both their BMIs and store their BMIs in variables.

const markBMI = markMass / (markHeight * markHeight);
const johnBMI = johnMass / (johnHeight * johnHeight);

console.log("02 Marks BMI is", markBMI, " Johns BMI is ", johnBMI);

console.log(
  "--------------------------------------------------------------------"
);

//Q3 Create a boolean variable containing information about whether Mark has a higher BMI than John.

const markMoreBeefCake = markBMI > johnBMI ? "yes " : "no";
console.log("03-04: Is Mark's BMI bigger than John's:", markMoreBeefCake);

console.log(
  "--------------------------------------------------------------------"
);

//Q4 Print a string to the console containing the variable from step 3 using string interpolation. (e.g. "Is Mark's BMI higher than John's? Why yes, it's [boolean], it is").

console.log(
  "--------------------------------------------------------------------"
);

//Q5 Create an *if* statement which prints the name and BMI of the person with the highest BMI.console.log(

if (markBMI > johnBMI) {
  console.log(
    "05 Mark's BMI of",
    markBMI.toFixed(2),
    " is bigger than John's BMI of",
    johnBMI.toFixed(2)
  );
} else {
  console.log("05 Johns BMI of", johnBMI, "is bigger");
}

console.log(
  "--------------------------------------------------------------------"
);

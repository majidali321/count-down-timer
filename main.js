#! /usr/bin/env node
import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";
const res = await inquirer.prompt({
    name: "inputUser",
    type: "number",
    message: "please enter amount of seconds",
    validate: (input) => {
        if (isNaN(input)) {
            return "please enter a valid num";
        }
        else if (input > 60) {
            return "enter must be in 60 seconds";
        }
        else {
            return true;
        }
    }
});
let input = res.inputUser;
function StartTime(val) {
    const IntTime = new Date().setSeconds(new Date().getSeconds() + val);
    const interval = new Date(IntTime);
    setInterval((() => {
        const currentTime = new Date();
        const TimeDiff = differenceInSeconds(interval, currentTime);
        if (TimeDiff <= 0) {
            console.log("time has expired");
            process.exit();
        }
        const min = Math.floor((TimeDiff % (3600 * 24)) / 3600);
        const sec = Math.floor(TimeDiff % 60);
        console.log(`${min.toString().padStart(2, "0")} : ${sec.toString().padStart(2, "0")}`);
    }), 1000);
}
StartTime(input);

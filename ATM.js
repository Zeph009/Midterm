/**
 *   @author King, Dan
 *   @version 0.0.1
 *   @summary Atm
 *   @todo Nothing
 */

"use strict";
const PROMPT = require('readline-sync');

let continueResponse;
let menuSelect;
let personA=[1000,1000];
let personB=[1000,1000];
let pin=[1234,5678];
let currentName, currentNum, currentPin;

/**
 * @method
 * @desc The dispatch method for our program
 * @returns {null}
 */
function main() {
       if(logIn());
        setContinueResponse();
        while (continueResponse === 1) {
           menu();
            if(menuSelect===1){
                withdraw();
            }
            else if(menuSelect===2){
                deposit();
            }
            else if(menuSelect===3){
                transfer();
            }
            else {
                inquiry();
            }
            setContinueResponse();

        }
}

main();

/**
 * @method
 * @desc continueResponse mutator
 * @returns {null}
 */
function setContinueResponse() {
    if (continueResponse === 1 || continueResponse === 0) {
        continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        while (continueResponse !== 0 && continueResponse !== 1) {
            console.log(`${continueResponse} is an incorrect value. Please try again.`);
            continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        }
    } else {
        continueResponse = 1;
    }
}
function menu() {
    menuSelect = Number(PROMPT.question(`\nFor Withdrawal press [1], For Deposit press [2], For transfer press [3] for balance inquiry press [4]`));
    while (menuSelect !== 1 && menuSelect !== 2 && menuSelect!==3 && menuSelect !== 4 ) {
        console.log(`${menuSelect} is an incorrect value. Please try again.`);
        menuSelect = Number(PROMPT.question(`\nFor Withdrawal press [1], For Deposit press [2], For transfer press [3] for balance inquiry press [4]`));
    }
}
function logIn() {
    currentName = PROMPT.question('\nPlease enter your name ');
    currentNum = PROMPT.question('\nPlease enter your account number ');
    for (let i = 0; i < 3; i++) {
        currentPin = Number(PROMPT.question('\nPlease enter your pin '));
        for (let j = 0; j < 2; j++) {
            if (currentPin === pin[j]) {
                return true;
            }
        }
        if (i === 2) {
            console.log('\nOut of tries');
            return false;
        }

    }
}
function inquiry() {
    if (currentPin===1234) {
        console.log('\nSavings Account balance: '+personA[0]);
        console.log('\nChecking Account balance: '+personA[1]);
    }
    else{
        console.log('\nSavings Account balance: '+personB[0]);
        console.log('\nChecking Account balance: '+personB[1]);
    }

}
function deposit(){
    let i;
    while(i!==0&&i!==1) {
        i = Number(PROMPT.question('\nPress 0 for Savings, Press 1 for checkings '));
    }
    let amount= Number(PROMPT.question('\nEnter amount to deposit '));
    if (currentPin===1234) { //personA
        if (i === 0) {//savings
            console.log('\nDepositing ' + amount + ' into Savings Account');
            personA[i] = personA[i] + amount;
            console.log('\nSavings Account balance: '+personA[i]);
        }
        else{//checking
            console.log('\nDepositing ' + amount + ' into Checking');
            personA[i] = personA[i] + amount;
            console.log('\nChecking Account balance: '+personA[i]);
        }
    }
    else{//personB
        if (i === 0) {
            console.log('\nDepositing ' + amount + ' into Savings Account');
            personB[i] = personB[i] + amount;
            console.log('\nSavings Account balance: '+personB[i]);
        }
        else{
            console.log('\nDepositing ' + amount + ' into Checking');
            personB[i] = personB[i] + amount;
            console.log('\nChecking Account balance: '+personB[i]);
        }
    }


}
function withdraw(){
    let i;
    while(i!==0&&i!==1) {
        i = Number(PROMPT.question('\nPress 0 for Savings, Press 1 for checkings '));
    }
    let amount= Number(PROMPT.question('\nEnter amount to withdraw '));
    if (currentPin===1234) { //personA
        if (i === 0) {//savings
            console.log('\nWithdrawing ' + amount + ' from Savings Account');
            personA[i] = personA[i] - amount;
            console.log('\nSavings Account balance: '+personA[i]);
        }
        else{//checking
            console.log('\nWithdrawing ' + amount + ' from Checking');
            personA[i] = personA[i] - amount;
            console.log('\nChecking Account balance: '+personA[i]);
        }
    }
    else{//personB
        if (i === 0) {
            console.log('\nWithdrawing ' + amount + ' from Savings Account');
            personB[i] = personB[i] - amount;
            console.log('\nSavings Account balance: '+personB[i]);
        }
        else{
            console.log('\nWithdrawing ' + amount + ' from Checking');
            personB[i] = personB[i] - amount;
            console.log('\nChecking Account balance: '+personB[i]);
        }
    }


}
function transfer(){
    let i;
    while(i!==0&&i!==1) {
        i = Number(PROMPT.question('\nPress 0 to transfer from Savings, Press 1 for checkings '));
    }
    let amount= Number(PROMPT.question('\nEnter amount to transfer '));
    if (currentPin===1234) { //personA
        if (i === 0) {//savings
            console.log('\nTransfering ' + amount + ' from Savings Account into checkings ');
            personA[0] = personA[0] - amount;//from savings
            personA[1] = personA[1] + amount;//into checkings
            console.log('\nSavings Account balance: '+personA[0]);
            console.log('\nChecking Account balance: '+personA[1]);
        }
        else{//checking
            console.log('\nTransfering ' + amount + ' from Checkings Account into Savings ');
            personA[1] = personA[1] - amount;
            personA[0] = personA[0] + amount;//into checkings
            console.log('\nChecking Account balance: '+personA[1]);
            console.log('\nSavings Account balance: '+personA[0]);
        }
    }
    else{//personB
        if (i === 0) {//savings
            console.log('\nTransfering ' + amount + ' from Savings Account into checkings ');
            personB[0] = personB[0] - amount;//from savings
            personB[1] = personB[1] + amount;//into checkings
            console.log('\nSavings Account balance: '+personB[0]);
            console.log('\nChecking Account balance: '+personB[1]);
        }
        else{//checking
            console.log('\nTransfering ' + amount + ' from Checkings Account into Savings ');
            personB[1] = personB[1] - amount;
            personB[0] = personB[0] + amount;//into checkings
            console.log('\nChecking Account balance: '+personB[1]);
            console.log('\nSavings Account balance: '+personB[0]);
        }
    }


}

// Created by: Ava Venturino
// Created on: Mar 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Assignment4-HTML/sw.js", {
    scope: "/ICS2O-Assignment4-HTML/",
  });
}

/**
 * Input
 */
function myButtonClicked() {
  //input
  const largePizza = document.getElementById("largePizza").checked;
  const extraLargePizza = document.getElementById("extraLargePizza".checked);
  const topping1 = document.getElementById("topping1".checked);
  const topping2 = document.getElementById("topping2").checked;
  const topping3 = document.getElementById("topping3").checked;
  const topping4 = document.getElementById("topping4").checked;

  var pizzaPrice = 0;
  var toppingPrice = 0;

  var tax = 0;
  var totalPrice = 0;

  //process
  if (largePizza == true) {
    pizzaPrice = 6.0;
    document.getElementById("largePizza").innerHTML = "Large Pizza";
  } else if (extraLargePizza == true) pizzaPrice = 10.0;
  document.getElementById("largePizza").innerHTML = "Extra Large Pizza";

  if (topping1 == true) {
    toppingPrice = 1.0;
    document.getElementById("topping1").innerHTML = "One Topping";
  } else if (topping2 == true) {
    toppingPrice = 1.75;
    document.getElementById("topping2").innerHTML = "Two Toppings";
  } else if (topping3 == true) {
    toppingPrice = 2.5;
    document.getElementById("topping3").innerHTML = "Three Toppings";
  } else {
    toppingPrice = 3.35;
    document.getElementById("topping4").innerHTML = "Four Toppings";

    //output
    tax = (pizzaPrice + toppingPrice) * 0.13;
    finalPrice = tax + (pizzaPrice + toppingPrice);

    document.getElementById("answers").innerHTML =
      "Your pizza will be $" + finalPrice.toFixed(2);
  }
}

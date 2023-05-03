// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

'use strict'
// This program will check your age and tell you whether or not you can watch certain movies

function checkAge() {
  // Declare variables.
  const age = parseInt(document.getElementById("age").value)

  // Check age and tell user if they can watch the movie.
  if (age >= 18) {
    document.getElementById('answer').innerHTML = "You can watch R rated movies alone."
  } else if (age >= 13) {
    document.getElementById('answer').innerHTML = "You can watch PG rated movies alone."
  } else {
    document.getElementById('answer').innerHTML = "You can watch G rated movies alone."
  }
}

"use strict";

const ingredients = ["3/4 c. butter, softened", "3/4 c. white sugar", "3/4 c. packed light brown sugar", "2 eggs", "1 tsp. vanilla extract", "1 1/4 c. all-purpose flour", "1 tsp. baking soda", "3/4 tsp. ground cinnamon", "1/2 tsp. salt", "2 3/4 c. rolled oats", "1 c. raisins"];

const get_random_color = () => {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

let $title_h1;
let $apply_button;
// TODO make variables for:
// colored box
// recipe paragraph
// recipe list
// graffiti text

const apply_changes = () => {
  change_title();
  // TODO call the 3 other updates
}

const change_title = () => {
  $title_h1.text("HW9 P1 DONE :)");
}

const change_color = () => {
  /* TODO calling this function should change the background-color
     attribute of the colored box to a random color. We have provided
     a helper function 'get_random_color' that will give you a random
     color hexcode. */
}

const change_recipe_text = () => {
  /* TODO calling this function should change the recipe text to have
     a larger font size (see the 'font-size' attribute). Specifically,
     24px. */
}

const change_recipe_list = () => {
  /* TODO write a for loop (or map, if you feel so inclined) to add
     each of the ingredients as list elements to the recipe list. */
}

const change_graffiti = () => {
  /* TODO change the text of the graffiti text to instead read
     "PENGUINZ RULE" */
}



$(document).ready(() => {
  $title_h1 = $(".title");
  $apply_button = $("#changebutton");
  $apply_button.click(apply_changes);
  /* TODO bind each of the other jquery objects 
     and add a click handler to the colored box */
});


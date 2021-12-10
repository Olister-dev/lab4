function obj_function(x, y) {
  return 3 * x ** 2 - 3 * x * y + 2 * y ** 2 - 10 * x - 8 * y + 5;
}

function pattern_search(
  start_x = 2,
  start_y = 2,
  increment = 1,
  step_decr = 10,
  accuracy = 0.001
) {
  let curr_x = start_x;
  let curr_y = start_y;

  let f_min = obj_function(curr_x, curr_y);

  while (increment >= accuracy) {
    let changed = true;
    while (changed) {
      if (obj_function(curr_x + increment, curr_y) < f_min) {
        curr_x = curr_x + increment;
        f_min = obj_function(curr_x, curr_y);
      } else if (obj_function(curr_x - increment, curr_y) < f_min) {
        curr_x = curr_x - increment;
        f_min = obj_function(curr_x, curr_y);
      } else if (obj_function(curr_x, curr_y + increment) < f_min) {
        curr_y = curr_y + increment;
        f_min = obj_function(curr_x, curr_y);
      } else if (obj_function(curr_x, curr_y - increment) < f_min) {
        curr_y = curr_y - increment;
        f_min = obj_function(curr_x, curr_y);
      } else {
        changed = false;
      }
      console.log(
        `Точка x= ${curr_x}, y= ${curr_y}, мінімальне значення= ${f_min}`
      );
    }

    increment = increment / step_decr;
  }
}

pattern_search();

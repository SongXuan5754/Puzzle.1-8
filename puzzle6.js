right();

if(getColor() == "blue"){
  down();
  down();
  down();
  if(getColor() == "blue"){
    right();
    down();
  }
  else if(getColor() == "red"){
    left();
    down();
  }
}

if(getColor() == "red"){
  up();
  up();
  up();
  
  if(getColor() == "blue"){
    right();
    up();
  }
  else if(getColor() == "red"){
    left();
    up();
  }
}

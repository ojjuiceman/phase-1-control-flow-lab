
function scuberGreetingForFeet(feet) {
  if (feet <= 400) {
    return 'This one is on me!';
  }

  else if (feet >= 2001 && feet <= 2499) {
    return 'I will gladly take your thirty bucks.';
  }
  else if (feet >= 2501) {
    return 'No can do.';
  }
    
  
}

function ternaryCheckCity(bity){
  if (bity == "NYC") {
    return "Ok, sounds good.";
  }
  else if (bity != "NYC") {
    return "No go.";
  }

}

function switchOnCharmFromTip(tipp){
  if (tipp == "generous") {
    return 'Thank you so much.';
  }
  else if (tipp == "not as generous") {
    return "Thank you.";
  }
  else if (tipp != "generous" && tipp != "not as generous") {
    return "Bye.";
  }
}
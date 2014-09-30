// Check for 'else' statements. Very controversial

function isAnswerToLifeUniverseAndEverything(num){
  if(num === 42){
    return true;
  }
  else {
    return false;
  }
};

// Better rewritten as:

function isAnswerToLifeUniverseAndEverything(num){
  if(num === 42){
    return true;
  }
  return false;
};
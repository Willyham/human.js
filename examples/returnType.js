// Inconsistent return type

function inconsistent(){
  if(num === 42){
    return 42;
  }
  return false;
}

// Should always be a number

function consistent(){
  if(num === 42){
    return 1;
  }
  return 0;
}

// With strings

function inconsistent(){
  if(str === 'rgbarg'){
    return 'blah';
  }
  return false;
}

// Should be a string

function consistent(){
  if(str === 'rgbarg'){
    return 'test';
  }
  return '';
}
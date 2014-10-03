// Inconsistent return type

function inconsistent(){
  var num = 42;
  if(num === 42){
    return num;
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
  var str = 'rgbarg';
  if(str === 'rgbarg'){
    return str;
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
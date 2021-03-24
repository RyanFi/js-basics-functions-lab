//check if input is > or < 42
//subtract
//return
function distanceFromHqInBlocks(blockNumber) {
  if (blockNumber > 42) {
    return blockNumber - 42;
  }
  else {
    return 42 - blockNumber;
  }
}

//call above
//multiply by feet
//return
function distanceFromHqInFeet(blockNumber) {
  return (distanceFromHqInBlocks(blockNumber) * 264);
}

//take arguments and compare
//subtract lower from higher
//multiply by feet
//return
function distanceTravelledInFeet(pickup, dropoff) {
  if (pickup > dropoff) {
    return 264 * (pickup - dropoff)
  }
  else {
    return 264 * (dropoff - pickup)
  }
}

//determine distance (above)
function calculatesFarePrice(pickup, dropoff) {
  if (distanceTravelledInFeet(pickup, dropoff) < 400) {
    return 0;
  }
  else if (distanceTravelledInFeet(pickup, dropoff) > 400 && distanceTravelledInFeet(pickup, dropoff) < 2000) {
      return (distanceTravelledInFeet(pickup, dropoff) - 400) * 0.02;
  }
  else if (distanceTravelledInFeet(pickup, dropoff) > 2000 && distanceTravelledInFeet(pickup, dropoff) < 2500) {
      return 25;
  }
  else {
      return "cannot travel that far";
  }
}
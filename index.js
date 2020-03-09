const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

let totalBatteries = 0;

let totalBatters = batteryBatches.reduce(function(totalBatteries, element){
  return totalBatteries + element}
)

reducer
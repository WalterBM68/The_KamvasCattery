
function weeklyWage(band, weeklyHours){
  let newName = weeklyHours.split(',');
  let num = 0;
  for(let i = 0; i < newName.length; i++){
    let newNumber = Number(newName[i]);
    num += newNumber;
  }
  if(newName.length !== 7){
    return 'missing day';
 }
  else if(band === 'A' ){
    return 23 * num;
 }else if(band === 'B' ){
    return 37 * num;
 }else if(band === 'C' ){
    return 51 * num;
 }else if(band !== 'A' && band !== 'B' && band !== 'C'){
     return 0;
 }
}
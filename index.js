function scuberGreetingForFeet(distance) {
  if (distance <= 400 ){
    console.log("This one is on me!");
  } else if (distance > 2000, distance < 2500) {
    console.log("I will gladly take your thirty bucks.");
  } else if (distance > 2500) {
    console.log ("No can do.");
  }
}
scuberGreetingForFeet(199);
scuberGreetingForFeet(2001);
scuberGreetingForFeet(2501);

function ternaryCheckCity (city){
  city === "NYC" ? console.log('Ok, sounds good.'): console.log('No go.');
  }
  ternaryCheckCity('NYC');
  ternaryCheckCity('Pittsburgh');

  function switchOnCharmFromTip (tip) {
    switch (tip) {
      case 'generous':
        console.log("Thank you so much.");
        break;
      case 'not as generous':
        console.log('Thank you.');
        break;
      default:
        console.log('Bye.');
    }
  }
  switchOnCharmFromTip('generous');
  switchOnCharmFromTip('not as generous');
  switchOnCharmFromTip('thanks for everything');
//Start here

var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

var storyText = "It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."

var insertX = "Willy the Goblin
Big Daddy
Father Christmas"

var insertY = "the soup kitchen
Disneyland
the White House"

var insertZ = "spontaneously combusted
melted into a puddle on the sidewalk
turned into a slug and crawled away"
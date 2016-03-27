

var question_one = {
  message: 'Tacos or Pizza?',
  paths: [
    {label: 'Tacos', scenario: 'mexico'},
    {label: 'Pizza', scenario: 'italy'}
  ]
};

var mexico = {
  message: 'Surfing or Snowboarding?',
  paths: [
    {label: 'Surfing', scenario: 'brazil'},
    {label: 'Snowboarding', scenario: 'switzerland'}
  ]
};

var italy = {
  message: 'Island getaway or a safari adventure',
  paths: [
    {label: 'Island!', scenario: 'thailand'},
    {label: 'Safari!', scenario: 'egypt'}
  ]
};

var brazil = {
  message: 'romantic comdies or action/adventure?',
  paths: [
    {label: 'romantic comedies', scenario: 'italy'},
    {label: 'action!!', scenario: 'egypt'}
  ]
};

var switzerland = {
  message: 'stay up all night fiestas or early bird sunrise walks?',
  paths: [
    {label: 'up all night!', scenario: 'thailand'},
    {label: 'up early before the crowds!', scenario: 'italy'}
  ]
};

var thailand = {
  message: 'Big city or out into the wild?',
  paths: [
    {label: 'City', scenario: 'tokyo'}
    // {label: 'Nature', scenario: 'california'}
  ]
};

var egypt = {
  message: 'end of game',
  paths: [
    {label: 'Play again', scenario: 'question_one'}
  ]
};

  var tokyo = {
  message: 'end of game',
  paths: [
    {label: 'Play again', scenario: 'question_one'}
  ]
};


export default {
  question_one,
  mexico,
  italy,
  brazil,
  switzerland,
  thailand,
  egypt,
  tokyo
}
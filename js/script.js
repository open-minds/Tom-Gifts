function Redirection() {
  var data = document.getElementById('coupon').value;
  console.log(data);

  /* window.open("https://www.udemy.com"); */
  Dict = {
    'Swing Trading' : 'https://www.udemy.com/swing-trading-using-algorithmic-signals-free/',
    'CompTIA Network' : 'https://www.udemy.com/network-plus-practice-questions/?couponCode=FREEFORFRIENDS',
    'Java' : 'https://www.udemy.com/java-java300/',
    'Vue' : 'https://www.udemy.com/vue-vuex/',
    'Visual Swift' : 'https://www.udemy.com/swift-memory-mastery/?couponCode=SPRINGFREE',

  }
  if (Dict.hasOwnProperty(data)) {
    window.open(Dict[data]);
    document.getElementById('validation').style.display='none'
  }
  else{
    console.log('ERROR')
    document.getElementById('validation').style.display='block'
  }
}
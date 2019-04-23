function Redirection() {
  var data = document.getElementById('coupon').value;
  console.log(data);

  /* window.open("https://www.udemy.com"); */
  Dict = {
    '7861' : 'https://www.udemy.com/c-programming-from-basics-to-advance/?couponCode=FREE_COUPON_LV',
    '7862' : 'https://www.udemy.com/network-attacks-and-security/?couponCode=ONE_LAKH_FREE',
    '7863' : 'https://www.udemy.com/flutter-mobile-development/?couponCode=FREECOUPON',
    '7864' : 'https://www.udemy.com/kotlin-series/?couponCode=FREECOUPON',
    '7865' : 'https://mail.google.com/mail/u/0/#inbox/FMfcgxwCgLsXdJDTnBfSDrFwKGHXFhxC',
    '7866' : 'https://www.udemy.com/android-project-base-app-development-course-build-real-app/?couponCode=NEWCOURSEFREEPROMO',
    '7867' : 'https://www.udemy.com/artificial-intelligence-website-creation-2018-no-coding/?couponCode=IROCKWITHAI',
    '7868' : 'https://www.udemy.com/front-end-web-development/?couponCode=FBFREE18',
    '7869' : 'https://www.udemy.com/web-development-with-new-framework/?couponCode=CODEMAD',
    '7870' : 'https://www.udemy.com/python-programming-from-basics-to-advance/?couponCode=PYTHONFREE',
    '7871' : 'https://www.udemy.com/photo-manipulation-with-adobe-photoshop-amazing-designs/?couponCode=LIMITED',
    '7872' : 'https://www.udemy.com/algorithms-for-beginners/?couponCode=ALGO-BEGIN',
    '7873' : 'https://www.udemy.com/3ds-max-modeling/?couponCode=GAMEMODEL',
    '7874' : 'https://www.udemy.com/software-engineering-processes/?couponCode=SE-ESSENTIALS',
    '7875' : 'https://www.udemy.com/software-engineering-basics/?couponCode=SE-BASICS',
    '7876' : 'https://www.udemy.com/data-structures-algorithms/?couponCode=DATASTRUCTURES-ALGOS',
    '7877' : 'https://www.udemy.com/linux-terminal-command-basics/?couponCode=LINUXCMDBASICSFREE1',
    '7878' : 'https://www.udemy.com/draft/812104/?couponCode=FREEBIES',
    '7879' : 'https://www.udemy.com/photoshop-2019-creating-awesome-designs-and-manipulations/?couponCode=FIRSTCOUPON',
    '7880' : 'https://www.udemy.com/learn-2d-game-special-effect-animation-in-photoshop/?couponCode=FREECODE&siteID=TnL5HPStwNw-L9ZG88kuVusRtx4yEwW0Hw&LSNPUBID=TnL5HPStwNw&awc=6554_1555016627_1f0dd91c3fac053029f8135534f442e4&utm_source=Growth-Affiliate&utm_medium=Affiliate-Window&utm_campaign=Campaign-Name&utm_term=13430&utm_content=Placement',
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

var FreeCourses = {
  'Swing Trading' : 'https://www.udemy.com/swing-trading-using-algorithmic-signals-free/',
    'CompTIA Network' : 'https://www.udemy.com/network-plus-practice-questions/?couponCode=FREEFORFRIENDS',
    'Java' : 'https://www.udemy.com/java-java300/',
    'Vue' : 'https://www.udemy.com/vue-vuex/',
    'Visual Swift' : 'https://www.udemy.com/swift-memory-mastery/?couponCode=SPRINGFREE',
    'c++ Programming' : 'https://www.udemy.com/c-programming-from-basics-to-advance/?couponCode=FREE_COUPON_LV',
    'Network Attacks' : 'https://www.udemy.com/network-attacks-and-security/?couponCode=ONE_LAKH_FREE',
    'Flutter and Dart' : 'https://www.udemy.com/flutter-mobile-development/?couponCode=FREECOUPON',
    'kotlin programming' : 'https://www.udemy.com/kotlin-series/?couponCode=FREECOUPON',
    'javascript ES6-9' : 'https://www.udemy.com/javascript-es6-es9-typescript-the-complete-guide/?couponCode=JS_2019',
    'Android ReactApp' : 'https://www.udemy.com/android-project-base-app-development-course-build-real-app/?couponCode=NEWCOURSEFREEPROMO',
    'AI Website Creation' : 'https://www.udemy.com/artificial-intelligence-website-creation-2018-no-coding/?couponCode=IROCKWITHAI',
    'Front End' : 'https://www.udemy.com/front-end-web-development/?couponCode=FBFREE18',
    'Web New Frameworks' : 'https://www.udemy.com/web-development-with-new-framework/?couponCode=CODEMAD',
    'Complete Python' : 'https://www.udemy.com/python-programming-from-basics-to-advance/?couponCode=PYTHONFREE',
    'Photo Manipulation AdobeP' : 'https://www.udemy.com/photo-manipulation-with-adobe-photoshop-amazing-designs/?couponCode=LIMITED',
    'Algorithms' : 'https://www.udemy.com/algorithms-for-beginners/?couponCode=ALGO-BEGIN',
    'SE-ESSENTIALS' : 'https://www.udemy.com/software-engineering-processes/?couponCode=SE-ESSENTIALS',
    'SE-BASICS' : 'https://www.udemy.com/software-engineering-basics/?couponCode=SE-BASICS',
    'Data Structure' : 'https://www.udemy.com/data-structures-algorithms/?couponCode=DATASTRUCTURES-ALGOS',
    'Linux CMD' : 'https://www.udemy.com/linux-terminal-command-basics/?couponCode=LINUXCMDBASICSFREE1',
    '3D games' : 'https://www.udemy.com/3ds-max-modeling/?couponCode=GAMEMODEL',
    '2D-Unity-plateform' : 'https://www.udemy.com/draft/812104/?couponCode=FREEBIES',
    '2D-GmaeCharacter' : 'https://www.udemy.com/the-ultimate-2d-game-character-design-animation-course/?couponCode=FREEVER101&awc=6554_1555016831_7633e37b177d3b0b7384393844dfcbb9&utm_source=Growth-Affiliate&utm_medium=Affiliate-Window&utm_campaign=Campaign-Name&utm_term=13430&utm_content=Placement',
    '2D-SpecialEffect' : 'https://www.udemy.com/learn-2d-game-special-effect-animation-in-photoshop/?couponCode=FREECODE&siteID=TnL5HPStwNw-L9ZG88kuVusRtx4yEwW0Hw&LSNPUBID=TnL5HPStwNw&awc=6554_1555016627_1f0dd91c3fac053029f8135534f442e4&utm_source=Growth-Affiliate&utm_medium=Affiliate-Window&utm_campaign=Campaign-Name&utm_term=13430&utm_content=Placement',
    'Unity Multyplayer' : 'https://www.udemy.com/unity-multiplayer-make-a-shooter-game-code-included/?couponCode=WONDER55P9&awc=6554_1555016789_a98704e074528c14a964b1cb7d6ab09f&utm_source=Growth-Affiliate&utm_medium=Affiliate-Window&utm_campaign=Campaign-Name&utm_term=13430&utm_content=Placement',
    'Tic Tac Toe' : 'https://www.udemy.com/tic-tac-toe-sfml/?couponCode=SFMLTTT-CFREE4&awc=6554_1555016648_55d0e0104411d3e78bec289a64eb61aa&utm_source=Growth-Affiliate&utm_medium=Affiliate-Window&utm_campaign=Campaign-Name&utm_term=13430&utm_content=Placement',
    'ML Basics' : 'https://www.udemy.com/machine-learning-basics-building-regression-model-in-python/?couponCode=LRPY_AP2K19',
    'after effect CC' : 'https://www.udemy.com/after-effects-cc/?couponCode=FREEUPGRADE',
    'Mobile App Design' : 'https://www.udemy.com/-mobile-app-design/?couponCode=MOBILEICONS',
    'Adobe Illustrator' : 'https://www.udemy.com/adobe-illustrator-in-an-easy-way-create-awesome-designs/?couponCode=CPN2019',
    'Talking Robots' : 'https://www.udemy.com/talking-robots-artificial-intelligence-audiobook-creation/?couponCode=ROBOTSTALKNICE',
    '.NET TCP UDP' : 'https://www.udemy.com/websockets-tcp-and-udp-in-c-net-core-30/?couponCode=FBFREE2',
    'VCS' : 'https://www.udemy.com/deep-dive-on-version-control-system/?couponCode=CODEMAD',
    'Adobe Master Class' : 'https://www.udemy.com/adobe-for-beginners/?couponCode=REVIEWPLS',
    'Linux Beginners' : 'https://www.udemy.com/linux-system-admin/?couponCode=FREE19',
    'digital painting' : 'https://www.udemy.com/the-ultimate-guide-to-digitally-painting-everything/?couponCode=FREETIME',
}
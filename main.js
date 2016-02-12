module.exports = {
  taxes: function(money){
    if ( money <= 10 ) return money * 0.1;
    if ( money <= 20 ) return money * 0.07;
    if ( money <= 30 ) return money * 0.05;
    if ( money > 30 ) return money * 0.03;
  }
}

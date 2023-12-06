var cardsArry = [];
var valOfHendCards =0;
var valOfHendCards2 =0;
var DvalOfHendCards =0;
var useCardsCount = 0;
var ace =0;
var ace2 =0;
var cardsOnHand = [];
var cardsOnHand2 = [];
var DcardsOnHand = [];

for(let i = 0; i < 52; i++) {
 cardsArry.push(1);
}

function giveCard () {
  $("#split").addClass('hide');
    if (useCardsCount === 52) {
        alert("you allready withdrow all the cards");
    }
  var cardNum = Math.floor(Math.random()*52);
  if(cardsArry[cardNum] === 0) {
    return giveCard();
  } else {
   useCardsCount++;
   cardsArry[cardNum] = 0;
   var cardType = Math.floor(cardNum/13);
   cardNum = cardNum%13 + 1;
   cardsOnHand.push(cardNum);
   if (cardsOnHand.length === 2 && cardNum === cardsOnHand[0]) {
    $("#split").removeClass('hide');
   }
   switch (cardNum) {
    case 1:
      ace++;
      break;
    case 11:
      valOfHendCards--;
      break;
    case 12:
      valOfHendCards = valOfHendCards -2;
      break;
    case 13:
      valOfHendCards = valOfHendCards -3;
      break;
   }
   valOfHendCards += cardNum;
   switch (cardType) {
    case 0:
      return $('#yourCards').append(` ${cardNum} Hearts `), distanceFrom21 ();
      break;
    case 1:
      return $('#yourCards').append(` ${cardNum} Diamonds `), distanceFrom21 ();
      break;
    case 2:
      return $('#yourCards').append(` ${cardNum} Spades `), distanceFrom21 ();
      break;
    case 3:
      return $('#yourCards').append(` ${cardNum} Clubs `), distanceFrom21 ();
      break;
   }
  }
}

function giveCard2 () {
  if (useCardsCount === 52) {
      alert("you allready withdrow all the cards");
  }
var cardNum2 = Math.floor(Math.random()*52);
if(cardsArry[cardNum2] === 0) {
  return giveCard2();
} else {
 useCardsCount++;
 cardsArry[cardNum2] = 0;
 var cardType = Math.floor(cardNum2/13);
 cardNum2 = cardNum2%13 + 1;
 cardsOnHand2.push(cardNum2);
 switch (cardNum2) {
  case 1:
    ace2++;
    break;
  case 11:
    valOfHendCards2--;
    break;
  case 12:
    valOfHendCards2 = valOfHendCards2 -2;
    break;
  case 13:
    valOfHendCards2 = valOfHendCards2 -3;
    break;
 }
 valOfHendCards2 += cardNum2;
 switch (cardType) {
  case 0:
    return $('#yourCards2').append(` ${cardNum2} Hearts `), distance2From21 ();
    break;
  case 1:
    return $('#yourCards2').append(` ${cardNum2} Diamonds `), distance2From21 ();
    break;
  case 2:
    return $('#yourCards2').append(` ${cardNum2} Spades `), distance2From21 ();
    break;
  case 3:
    return $('#yourCards2').append(` ${cardNum2} Clubs `), distance2From21 ();
    break;
 }
}
}

function distanceFrom21 () {
  if (ace !== 0 && valOfHendCards+10 <= 21) {
    return $('#result').html(valOfHendCards + 10);
  } else if (valOfHendCards > 21) {
    return $('#result').html("YOU LOST");
   } else {
    return $('#result').html(valOfHendCards);
   }
}

function distance2From21 () {
  if (ace2 !== 0 && valOfHendCards2+10 <= 21) {
    return $('#result2').html(valOfHendCards2 + 10);
  } else if (valOfHendCards2 > 21) {
    return $('#result2').html("YOU LOST");
   } else {
    return $('#result2').html(valOfHendCards2);
   }
}

function DdistanceFrom21 () {
  if (DvalOfHendCards > 21) {
    return $('#result2').html("YOU LOST");
   } else {
    return $('#result2').html(valOfHendCards2);
   }
}

function splitDeck () {
  switch (ace) {
    case 2 || 1:
      valOfHendCards -= 1;
      valOfHendCards2 = valOfHendCards;
      $("#cardsPile2").removeClass('hide');
      $("#title2").removeClass('hide');
      $("#split").addClass('hide');
      let $strCardsToArry = $('#yourCards').text().split("  ");
    return distanceFrom21() ,$('#result').html(valOfHendCards) ,$('#result2').html(valOfHendCards2) ,$('#yourCards').html($strCardsToArry[0]), $("#yourCards2").html($strCardsToArry[1]);
    break;
  }
    valOfHendCards = valOfHendCards/2;
    valOfHendCards2 = valOfHendCards;
    $("#cardsPile2").removeClass('hide');
    $("#title2").removeClass('hide');
    $("#split").addClass('hide');
    let $strCardsToArry = $('#yourCards').text().split("  ");
    return distanceFrom21() ,$('#result').html(valOfHendCards) ,$('#result2').html(valOfHendCards2) ,$('#yourCards').html($strCardsToArry[0]), $("#yourCards2").html($strCardsToArry[1]); 
  }

  function dealerMove() {
      if (useCardsCount === 52) {
          alert("you allready withdrow all the cards");
      }
    var DcardNum = Math.floor(Math.random()*52);
    if(cardsArry[DcardNum] === 0) {
      return dealerMove();
    } else {
     useCardsCount++;
     cardsArry[DcardNum] = 0;
     var DcardType = Math.floor(DcardNum/13);
     DcardNum = DcardNum%13 + 1;
     DcardsOnHand.push(DcardNum);
     switch (DcardNum) {
      case 1:
        DvalOfHendCards +=10;
        break;
      case 11:
        DvalOfHendCards--;
        break;
      case 12:
        DvalOfHendCards = DvalOfHendCards -2;
        break;
      case 13:
        DvalOfHendCards = DvalOfHendCards -3;
        break;
     }
     DvalOfHendCards += DcardNum;
     switch (DcardType) {
      case 0:
        $('#dealerCards').append(` ${DcardNum} Hearts `);
        break;
      case 1:
        $('#dealerCards').append(` ${DcardNum} Diamonds `);
        break;
      case 2:
        $('#dealerCards').append(` ${DcardNum} Spades `);
        break;
      case 3:
        $('#dealerCards').append(` ${DcardNum} Clubs `);
        break;
     }
    }
    var dealerPoint = $('#result').val();
    if(DvalOfHendCards > 21 &&  dealerPoint !== "YOU LOST") {
    /*  return*/ $('#result').html("YOU WON!!!");
    } else if(DcardsOnHand.length > 1 && DvalOfHendCards <=16 && DvalOfHendCards <= valOfHendCards) {
      dealerMove();
    } else {
      if(DvalOfHendCards > valOfHendCards) {
      /*  return*/$('#result').html("YOU LOST All OF YOUR BET, TRY AGIAN");
      } else if(DvalOfHendCards === valOfHendCards) {
      /*  return*/$('#result').html("YOU GOT YOUR MONEY BACK");
      } else {
       /*  return*/$('#result').html("YOU WON!!!");
      }
    }
  }

function betVal() {
    var betVal = $('#bet').val()
    $("#betVal").text(betVal);
}

function removeClassHide(idName) {
  $("#" + idName).removeClass('hide');
}

$(document).ready(function () {
  $('#split').click(function() {
    splitDeck();
  })
})

$(function () {
  $('#cardsPile2').click(function () {
    giveCard2();
  })
})

$(function () {
    $('#cardsPile').click(function() {
        giveCard();
    })
})

$(function () {
    $('#form').submit(function (event) {
        event.preventDefault();
        dealerMove();
        giveCard();
        giveCard();
        var betVal = parseInt($('#bet').val());
        betVal = 1000 - betVal;
        $('#money').text(betVal);
    })
})
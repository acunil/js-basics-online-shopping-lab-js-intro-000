var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var obj = {};
 obj = { "itemName" : item , "itemPrice" : Math.floor(Math.random() * 100) + 1};
 cart.push(obj);
 return(`${item} has been added to your cart.`);
}

function viewCart() {
  if(cart.length===0){
    return "Your shopping cart is empty.";
  } else if(cart.length===1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  } else {
    var stringArray = [];
    for (var i=0; i<cart.length; i++){
      stringArray.push(`${(i==cart.length-1 ? 'and ' : '')}${cart[i].itemName} at $${cart[i].itemPrice}${(i==cart.length-1 ? '' : ', ')}`);
    }
    var itemString = stringArray.join('');
    return `In your cart, you have ${itemString}.`;
  }
}

function total() {
  var s = 0;
  for (var element of cart){
    s += element.itemPrice;
  }
  return s;
}


/* why the fuck does the function viewCart run first??

function removeFromCart(item) {
  var q = 0;
  var n = "wait";
  var contents = viewCart();
  while (q<cart.length+1){
    if(cart[q].itemName !== item){
      console.log(`${cart[q].itemName} is not ${item}. Continuing check...`);
      console.log(q);
      q++;
    } else if (cart[q].itemName == item){
      n = q;
      console.log(n);
      cart.splice(cart[n], 1);
      return contents;
    } else if (q == cart.length+1){
      return "That item is not in your cart.";
    }
  }
  return "end instruction";
}

*/


function removeFromCart(item){
  var stringArray = [];
  var q;
    for (var i=0; i<cart.length; i++){
      stringArray.push(cart[i].itemName);
    }
  q = stringArray.indexOf(item);
  if (q >= 0){
    cart.splice(cart[q], 1);
    return `${item} removed.`;
  } else {
    return "That item is not in your cart.";
  }
}





function placeOrder(cardNumber) {
  // write your code here
}


addToCart("one");
addToCart("two");
addToCart("three");
addToCart("four");
addToCart("five");
addToCart("six");

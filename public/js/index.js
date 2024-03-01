

$(document).ready(function () {
 
  
  $.get("http://localhost/GO/api/v1/shoes", function (response) {
    // Lặp qua mỗi đôi giày trong mảng dữ liệu
    response.data.forEach(function (shoe) {
      var content =
        '<div class="shoe-item">' +
        '<img src="' +
        shoe.image +
        '" alt="' +
        shoe.name +
        '" width="304px" height="304px" />' +
        "<h3>" +
        shoe.name +
        "</h3>" +
        '<p class="desc">' +
        shoe.description +
        "</p>" +
        '<div  class="d-flex mb-20">' +
        '<p class="price">$' +
        shoe.price +
        "</p>" +
        '<div class="addCart">Add To Cart</div>' +
        '<div  class="addCart d-none img-check"><img src="public/assets/check.png" alt=""></div>' +
        "</div>" +
        "</div>";

      $(".shoeItem").append(content);
    });
    const btn = document.querySelectorAll(".addCart");
    //dem 
    btn.forEach(function (btn, index) {
      btn.addEventListener("click", function (event) {
        // get info shoes
        var shoeItem = btn.closest(".shoe-item");
        var shoeName = shoeItem.querySelector("h3").textContent;
        var shoePrice = shoeItem.querySelector(".price").textContent;
        var shoeImg = shoeItem.querySelector("img").getAttribute("src");
        var shoeDesc = shoeItem.querySelector(".desc").textContent;
        addCart(shoeName,shoeDesc,shoeImg,shoePrice)


        var addCartElement = shoeItem.querySelector('.addCart');
        if (addCartElement) {
          addCartElement.style.display = 'none';
        }
      
        var imgCheckElement = shoeItem.querySelector('.img-check');
        if (imgCheckElement) {
          imgCheckElement.classList.add('d-block');
          imgCheckElement.classList.add('po-eve-none');
        }
      });
    });
  });
});
//addcart
function addCart(shoeName,shoeDesc,shoeImg,shoePrice){
  var add =  document.createElement('div')
  var content = '<div class="item-shoe-cart d-flex"><div class=""><img class="bg-gray bo-ra-50" width="126px" height="126px" src="'+shoeImg+'" alt=""/></div><div class="right-info-item"><div class="name-shoe"><h3 style="font-size: 13px">'+shoeName+'</h3></div><p class="price">'+shoePrice+'</p><div class="foot-info-item d-flex"><div class="qty"><input type="number" id="quantity" name="quantity" min="1" value="1"/></div><div class="delete-item"><img src="public/assets/trash.png" width="16px" height="16px" alt=""/></div></div></div></div>';

  add.innerHTML = content;

  var list_order = document.querySelector(".list-order")
  list_order.append(add)
  cartTotal();
  deleteCart();
} 
//total cart

function cartTotal(){
  var cartItem = document.querySelectorAll(".list-order .item-shoe-cart")
  var total = 0
  // console.log(cartItem);
  for(var i = 0; i < cartItem.length; i++){
    var inputValue = cartItem[i].querySelector("input").value
    var shoePriceString = cartItem[i].querySelector(".price").innerHTML;
    //remove $
    var shoePrice = parseFloat(shoePriceString.replace("$", ""));
    var totalItem = (inputValue * shoePrice)
    total = total + totalItem;
  }
  var fntotal = document.querySelector(".total")
  fntotal.innerHTML = "$" + total;
  inputChange()

  var cartEmpty = document.querySelector(".cart-empty");

if (total === 0) {
  // Nếu tổng giỏ hàng là 0, thêm thông báo "Your cart is empty."
  var content = '<p class="po-rela">Your cart is empty.</p>';
  
  // Xác định phần tử ".list-order" để thêm thông báo vào
  var listOrder = document.querySelector(".list-order");
  
  // Kiểm tra nếu phần tử ".cart-empty" không tồn tại
  if (!cartEmpty) {
    // Tạo một phần tử ".cart-empty" và thêm nội dung vào
    cartEmpty = document.createElement("div");
    cartEmpty.classList.add("cart-empty");
    cartEmpty.innerHTML = content;
    
    // Thêm phần tử ".cart-empty" vào phần tử ".list-order"
    listOrder.appendChild(cartEmpty);
  } else {
    // Nếu phần tử ".cart-empty" đã tồn tại, chỉ cần cập nhật nội dung
    cartEmpty.innerHTML = content;
  }
} else {
  // Nếu tổng giỏ hàng không phải 0, kiểm tra nếu phần tử ".cart-empty" tồn tại và loại bỏ nó
  if (cartEmpty) {
    cartEmpty.remove();
  }
}

  
  
}
//delete cart
function deleteCart(){
  var cartItem = document.querySelectorAll(".list-order .item-shoe-cart")

  for(var i = 0; i < cartItem.length; i++){
    var deleteItem = document.querySelectorAll(".delete-item")
    deleteItem[i].addEventListener("click", function (event) {

      var cartDelete = event.target
      var cartItemR = cartDelete.closest(".item-shoe-cart");
      // console.log(cartItemR);
      cartItemR.remove()
      
      cartTotal()
    
    });
  }
 
}
function inputChange(){
  var cartItem = document.querySelectorAll(".list-order .item-shoe-cart")

  for(var i = 0; i < cartItem.length; i++){
    var inputValue = cartItem[i].querySelector("input")
    inputValue.addEventListener("change", function () {
      cartTotal()
    });
  }
}
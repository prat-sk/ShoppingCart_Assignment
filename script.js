//============================================================================================================================
//cart
var cart=[];
var Item=function(name,price,quantity)
{
    this.name=name;
    this.price=price;
    this.quantity=quantity;
    return this;
}
//============================================================================================================================
//add quantity function

function additem(b,q)
{
    console.log(b,q);
    var btnid=document.getElementById('plus_'+b);
    var initialqty=document.getElementById('quantity_'+q);
    var finalqty=parseInt(initialqty.value)+1;
    initialqty.value=finalqty;
    return initialqty;
}
document.getElementById("plus_1").addEventListener("click",function(){ additem(1,1);});
document.getElementById("plus_2").addEventListener("click",function(){ additem(2,2);});
document.getElementById("plus_3").addEventListener("click",function(){ additem(3,3);});
document.getElementById("plus_4").addEventListener("click",function(){ additem(4,4);});
document.getElementById("plus_5").addEventListener("click",function(){ additem(5,5);});
document.getElementById("plus_6").addEventListener("click",function(){ additem(6,6);});
document.getElementById("plus_9").addEventListener("click",function(){ additem(9,9);});
document.getElementById("plus_10").addEventListener("click",function(){ additem(10,10);});
document.getElementById("plus_11").addEventListener("click",function(){ additem(11,11);});
document.getElementById("plus_12").addEventListener("click",function(){ additem(12,12);});
document.getElementById("plus_13").addEventListener("click",function(){ additem(13,13);});
document.getElementById("plus_14").addEventListener("click",function(){ additem(14,14);});
document.getElementById("plus_15").addEventListener("click",function(){ additem(15,15);});
document.getElementById("plus_16").addEventListener("click",function(){ additem(16,16);});
document.getElementById("plus_17").addEventListener("click",function(){ additem(17,17);});
document.getElementById("plus_18").addEventListener("click",function(){ additem(18,18);});
//============================================================================================================================
// subtract quantity function

function subtractitem(b,q) 
{
    console.log(b,q);
    var btnid=document.getElementById('minus_'+b);
    var initialqty=document.getElementById('quantity_'+q);
    // alert(initialqty);
    var finalqty=parseInt(initialqty.value)-1;
    if(finalqty > 0)
        initialqty.value=finalqty;
    else
        initialqty.value = 0;
    return initialqty;
}


document.getElementById("minus_1").addEventListener("click",function(){ subtractitem(1,1); });
document.getElementById("minus_2").addEventListener("click",function(){ subtractitem(2,2); });
document.getElementById("minus_3").addEventListener("click",function(){ subtractitem(3,3); });
document.getElementById("minus_4").addEventListener("click",function(){ subtractitem(4,4); });
document.getElementById("minus_5").addEventListener("click",function(){ subtractitem(5,5); });
document.getElementById("minus_6").addEventListener("click",function(){ subtractitem(6,6); });
document.getElementById("minus_9").addEventListener("click",function(){ subtractitem(9,9); });
document.getElementById("minus_10").addEventListener("click",function(){ subtractitem(10,10); });
document.getElementById("minus_11").addEventListener("click",function(){ subtractitem(11,11); });
document.getElementById("minus_12").addEventListener("click",function(){ subtractitem(12,12); });
document.getElementById("minus_13").addEventListener("click",function(){ subtractitem(13,13); });
document.getElementById("minus_14").addEventListener("click",function(){ subtractitem(14,14); });
document.getElementById("minus_15").addEventListener("click",function(){ subtractitem(15,15); });
document.getElementById("minus_16").addEventListener("click",function(){ subtractitem(16,16); });
document.getElementById("minus_17").addEventListener("click",function(){ subtractitem(17,17); });
document.getElementById("minus_18").addEventListener("click",function(){ subtractitem(18,18); });
//============================================================================================================================
//Add to Cart Function

function addItemToCart(name,price,quantity,btnid)
{

     var n=document.getElementById(name).innerHTML;
     var p=document.getElementById(price).innerHTML
     var q=document.getElementById(quantity).value;
    //console.log(btnid);
     var cost=parseInt(p);
     var count=parseInt(q);
    if(count == 0)
    {
        document.getElementById('errormsg').innerHTML="Quantity cannot be 0";
    }
    else
    {
        document.getElementById('errormsg').innerHTML="";
        var item=new Item(n,cost,count);
        // console.log(item);
        cart.push(item);
        saveCart();
        var buttonMyCart = document.getElementById('cartcount');
        buttonMyCart.innerHTML = "(" + cart.length + ")";
        showinCart();
        // hide add to cart button
        var buttonAdd = document.getElementById('buttonAdd_' +btnid);
        buttonAdd.style.display = "none";
        // display remove from cart button
        var buttonRemove = document.getElementById('buttonRemove_' +btnid);
        buttonRemove.style.display = "block";
    }
        
}
console.log(cart);


document.getElementById("buttonAdd_1").addEventListener("click",function(){ addItemToCart('name_1','price_1','quantity_1',1); });
document.getElementById("buttonAdd_2").addEventListener("click",function(){ addItemToCart('name_2','price_2','quantity_2',2); });
document.getElementById("buttonAdd_3").addEventListener("click",function(){ addItemToCart('name_3','price_3','quantity_3',3); });
document.getElementById("buttonAdd_4").addEventListener("click",function(){ addItemToCart('name_4','price_4','quantity_4',4); });
document.getElementById("buttonAdd_5").addEventListener("click",function(){ addItemToCart('name_5','price_5','quantity_5',5); });
document.getElementById("buttonAdd_6").addEventListener("click",function(){ addItemToCart('name_6','price_6','quantity_6',6); });
document.getElementById("buttonAdd_9").addEventListener("click",function(){ addItemToCart('name_9','price_9','quantity_9',9); });
document.getElementById("buttonAdd_10").addEventListener("click",function(){ addItemToCart('name_10','price_10','quantity_10',10); });
document.getElementById("buttonAdd_11").addEventListener("click",function(){ addItemToCart('name_11','price_11','quantity_11',11); });
document.getElementById("buttonAdd_12").addEventListener("click",function(){ addItemToCart('name_12','price_12','quantity_12',12); });
document.getElementById("buttonAdd_13").addEventListener("click",function(){ addItemToCart('name_13','price_13','quantity_13',13); });
document.getElementById("buttonAdd_14").addEventListener("click",function(){ addItemToCart('name_14','price_14','quantity_14',14); });
document.getElementById("buttonAdd_15").addEventListener("click",function(){ addItemToCart('name_15','price_15','quantity_15',15); });
document.getElementById("buttonAdd_16").addEventListener("click",function(){ addItemToCart('name_16','price_16','quantity_16',16); });
document.getElementById("buttonAdd_17").addEventListener("click",function(){ addItemToCart('name_17','price_17','quantity_17',17); });
document.getElementById("buttonAdd_18").addEventListener("click",function(){ addItemToCart('name_18','price_18','quantity_18',18); });

//============================================================================================================================================
//Remove Item from Cart Function

function removeItemFromCart(name,btnid)
{
    var n=document.getElementById(name).innerHTML;
    console.log(btnid);
    for(var i=0;i<cart.length;i++)
    {
        if(cart[i].name==n)
        {
            //console.log(cart[i]);
            cart.splice(i,1);
            saveCart();
            break;
        }
    }
    //console.log(cart);
    var buttonMyCart = document.getElementById('cartcount');
    buttonMyCart.innerHTML = "(" + cart.length + ")";
    showinCart();
    saveCart();
    // hide add to cart button
    var buttonAdd = document.getElementById('buttonAdd_' +btnid);
    buttonAdd.style.display = "block";

    // display remove from cart button
    var buttonRemove = document.getElementById('buttonRemove_' +btnid);
    buttonRemove.style.display = "none";
    resetqty(btnid);
}

document.getElementById("buttonRemove_1").addEventListener("click",function(){ removeItemFromCart('name_1',1); });
document.getElementById("buttonRemove_2").addEventListener("click",function(){ removeItemFromCart('name_2',2); });
document.getElementById("buttonRemove_3").addEventListener("click",function(){ removeItemFromCart('name_3',3); });
document.getElementById("buttonRemove_4").addEventListener("click",function(){ removeItemFromCart('name_4',4); });
document.getElementById("buttonRemove_5").addEventListener("click",function(){ removeItemFromCart('name_5',5); });
document.getElementById("buttonRemove_6").addEventListener("click",function(){ removeItemFromCart('name_6',6); });
document.getElementById("buttonRemove_9").addEventListener("click",function(){ removeItemFromCart('name_9',9); });
document.getElementById("buttonRemove_10").addEventListener("click",function(){ removeItemFromCart('name_10',10); });
document.getElementById("buttonRemove_11").addEventListener("click",function(){ removeItemFromCart('name_11',11); });
document.getElementById("buttonRemove_12").addEventListener("click",function(){ removeItemFromCart('name_12',12); });
document.getElementById("buttonRemove_13").addEventListener("click",function(){ removeItemFromCart('name_13',13); });
document.getElementById("buttonRemove_14").addEventListener("click",function(){ removeItemFromCart('name_14',14); });
document.getElementById("buttonRemove_15").addEventListener("click",function(){ removeItemFromCart('name_15',15); });
document.getElementById("buttonRemove_16").addEventListener("click",function(){ removeItemFromCart('name_16',16); });
document.getElementById("buttonRemove_17").addEventListener("click",function(){ removeItemFromCart('name_17',17); });
document.getElementById("buttonRemove_18").addEventListener("click",function(){ removeItemFromCart('name_18',18); });

//============================================================================================================================
//Clear Cart
function clearCart()
{
   cart.splice(0,cart.length);
   saveCart();
   showinCart();

}
//clearCart();
//============================================================================================================================
//Count Items in Cart
function countCart()
{
    var Itemcount=0;
    for(var i=0;i<=cart.length;i++)
    {
        Itemcount+=cart[i].quantity;
    }
    return Itemcount;
}

//======================================================================================================================
//Reset quantity of products
 function resetqty()
{
    document.getElementsByClassName('qty').value=0;
}

//============================================================================================================================
//Show in Cart
function showinCart()
{
    var mydiv=document.getElementById('cartlist');
            mydiv.innerHTML="";
            var table = '<table id="carttable" border="1px solid #ffffff;" align="center" <thead> <tr> <th>Sr.No</th> <th>Item</th> <th>Price</th> <th>Quantity</th> <th>Total</th> </tr></thead> <tbody>'
            var totalprice=0;
            for(var i=0; i<cart.length;i++)
            {
                table +='<tr>';
                table +='<td>'+(i+1)+'</td>';
                table +='<td>'+ cart[i].name+'</td>';
                table +='<td>Rs.'+ cart[i].price+'</td>';
                table +='<td>'+ cart[i].quantity+'</td>';
                table +='<td>Rs.'+(cart[i].price)*(cart[i].quantity)+'</td>';
                table +='<tr>';
                totalprice+=(cart[i].price)*(cart[i].quantity);
            
            }
            table += '</tbody> <tfoot> <tr> <td colspan="4">Total Price</td> <td>Rs' + totalprice + '</td> </tr> </tfoot></table>';   
            mydiv.innerHTML=table;
         saveCart();
        var clearbutton=document.createElement("button");
        clearbutton.setAttribute("id","clearcart");
        clearbutton.innerHTML="Clear Cart";
        mydiv.appendChild(clearbutton);
        clearbutton.addEventListener("click",function(){
            clearCart();
            resetqty();
            // document.location.href="index.html";
        var cartcount = document.getElementById('cartcount');
        cartcount.innerHTML = "(" + 0 + ")";
        });
        var order=document.createElement("button");
        order.innerHTML="Place Order";
        order.setAttribute("id","placeorder");
        order.setAttribute("class","orderbtn");
        mydiv.appendChild(order);
        document.getElementById("placeorder").addEventListener("click",function(){
            var userlogin=document.getElementById("cartlogin");
            var category=document.getElementById("categories");
            var vegetables=document.getElementById("vegetables_section");
            var slider=document.getElementById("sliderwindow");
            var fruits=document.getElementById("fruits_section");
            var dairy=document.getElementById("dairy_section");
            var grocery=document.getElementById("grocery_section");
            var tableid=document.getElementById("carttable");
            var orderbtn=document.getElementById("placeorder");
            orderbtn.style.display="none";
            clearbutton.style.display="none";
            tableid.style.display="none";
            grocery.style.display="none";
            dairy.style.display="none";
            vegetables.style.display="none";
            slider.style.display="none";
            fruits.style.display="none";
            category.style.display="none";
            userlogin.style.display="block";

        });
        var tableid=document.getElementById("carttable");
        var orderbtn=document.getElementById("placeorder");
        if(cart.length==0)
        {
            tableid.style.display="none";
            clearbutton.style.display="none";
            orderbtn.style.display="none";
        }
       
}
//======================================================================================================================
//Show Fruits Section

    document.getElementById("fruits_link").addEventListener("click",function(){
    
    var vegetables=document.getElementById("vegetables_section");
    var slider=document.getElementById("sliderwindow");
    var fruits=document.getElementById("fruits_section");
    var dairy=document.getElementById("dairy_section");
    var grocery=document.getElementById("grocery_section");
    dairy.style.display="none";
    grocery.style.display="none";
    vegetables.style.display="none";
    slider.style.display="none";
    fruits.style.display="block";
    
    showinCart();

    
});
//======================================================================================================================
//Show Vegetables Section

    document.getElementById("vegetables_link").addEventListener("click",function(){
    
    var vegetables=document.getElementById("vegetables_section");
    var slider=document.getElementById("sliderwindow");
    var fruits=document.getElementById("fruits_section");
    var dairy=document.getElementById("dairy_section");
    var grocery=document.getElementById("grocery_section");
    dairy.style.display="none";
    grocery.style.display="none";
    fruits.style.display="none";
    slider.style.display="none";
    vegetables.style.display="block";
    showinCart();
});

//======================================================================================================================
//Show Dairy Section

    document.getElementById("dairy_link").addEventListener("click",function(){
    
    var vegetables=document.getElementById("vegetables_section");
    var slider=document.getElementById("sliderwindow");
    var fruits=document.getElementById("fruits_section");
    var dairy=document.getElementById("dairy_section");
    var grocery=document.getElementById("grocery_section");
    fruits.style.display="none";
    slider.style.display="none";
    grocery.style.display="none";
    vegetables.style.display="none";
    dairy.style.display="block";
    showinCart();
});

//======================================================================================================================
//Show Grocery Section

    document.getElementById("grocery_link").addEventListener("click",function(){
    
    var vegetables=document.getElementById("vegetables_section");
    var slider=document.getElementById("sliderwindow");
    var fruits=document.getElementById("fruits_section");
    var dairy=document.getElementById("dairy_section");
    var grocery=document.getElementById("grocery_section");
    fruits.style.display="none";
    slider.style.display="none";
    vegetables.style.display="none";
    dairy.style.display="none";
    grocery.style.display="block";
    showinCart();
});
document.getElementById("cartcount").addEventListener("click",function(){
    var showcart=document.getElementById("cartlist");
    if(showcart.style.display == "none")
    {
        showcart.style.display="block";
    }
    else
    {
        showcart.style.display="none";
    }
});

function saveCart(){
    localStorage.setItem("myCart",JSON.stringify(cart));
}
function loadCart(){
   cart=JSON.parse(localStorage.getItem("myCart"));
}

//==================================Login Form Script===============================================================================

var users=[];
var createUser=function(fname,lname,user_id,password,cnfpassword)
{

    this.fname=fname;
    this.lname=lname;
    this.user_id=user_id;
    this.password=password;
    this.cnfpassword=cnfpassword;
}
function saveUsers(){
    localStorage.setItem("users",JSON.stringify(users));
}
function loadUsers(){
    users=JSON.parse(localStorage.getItem("users"));
}
//============================================================================================================================
//  Validate User function
  document.getElementById("logIn").addEventListener("click",function(){ validateuser(); });
 function validateuser()
{
    loadUsers();
    // console.log(users);
    var uid=document.getElementById('loguid').value;
    var pass=document.getElementById('logpass').value;
    for(var i=0;i<users.length;i++)
    {
        if((users[i].user_id == uid) && (users[i].password != pass))
        {
           document.getElementById("loginerrormsg").innerHTML="Incorrect Password";
        }
        else if((users[i].user_id == uid) && (users[i].password == pass))
        {
            var info=document.getElementById("customerinfo");
            info.innerHTML= 'Hello '+users[i].fname+" "+users[i].lname+' your order will be delivered within 4 hours, here is your order summery:';
            // var mydiv=document.getElementById('cartlist');
            var cartbtn=document.getElementById("clearcart");
            var orderbtn=document.getElementById("placeorder");
            var loginblock=document.getElementById("cartlogin");
            cartbtn.style.display="none";
            orderbtn.style.display="none";
            // mydiv.style.display="block";
            loginblock.style.display="none";
            var mydiv=document.getElementById('cartlist');
            mydiv.innerHTML="";
            var table = '<table id="carttable" border="1px solid #ffffff;" align="center" <thead> <tr> <th>Sr.No</th> <th>Item</th> <th>Price</th> <th>Quantity</th> <th>Total</th> </tr></thead> <tbody>'
            var totalprice=0;
            for(var i=0; i<cart.length;i++)
            {
                table +='<tr>';
                table +='<td>'+(i+1)+'</td>';
                table +='<td>'+ cart[i].name+'</td>';
                table +='<td>Rs.'+ cart[i].price+'</td>';
                table +='<td>'+ cart[i].quantity+'</td>';
                table +='<td>Rs.'+(cart[i].price)*(cart[i].quantity)+'</td>';
                table +='<tr>';
                totalprice+=(cart[i].price)*(cart[i].quantity);
            
            }
            table += '</tbody> <tfoot> <tr> <td colspan="4">Total Price</td> <td>Rs' + totalprice + '</td> </tr> </tfoot></table>';   
            mydiv.innerHTML=table;

            var shoptext=document.getElementById("gratitude");
            shoptext.innerHTML="Thank You For Shopping with Us, Please Visit Again."
            var logout=document.createElement("button");
            logout.setAttribute("id","logoutbtn");
            logout.setAttribute("class","logoutbtn");
            logout.innerHTML="Logout";
            mydiv.appendChild(logout);
            logout.addEventListener("click",function(){
                document.location.href="index.html";
            });
            document.getElementById("loginerrormsg").innerHTML="Login Successful";
    
        }
        else
        {
            document.getElementById("loginerrormsg").innerHTML="User is not Registered, Please Sign Up First";
        }
    }
}
//=======================================================================================================================================
//Register User Function
document.getElementsByClassName("signup_button")[0].addEventListener("click",function(){ registerUser('firstname','lastname','uid','pwd','cnfpwd')});
function registerUser(f_name,l_name,useridd,pwd,cnfpwd)
{
    //console.log(f_name,l_name,useridd,pwd,cnfpwd);
    var fn=document.getElementById(f_name).value;
    var ln=document.getElementById(l_name).value;
    var uid=document.getElementById(useridd).value;
    var pass=document.getElementById(pwd).value;
    var cnfpass=document.getElementById(cnfpwd).value;
    console.log(fn,ln,uid,pass,cnfpass);
    // users.length=0;
   if(users.length==0)
   {
       
                // console.log('first user');
                if(fn==''||ln==''||uid==''||pass==''||cnfpass=='')
                {
                    document.getElementById('errormessage').innerHTML="Fields cannot be empty";
                }
                else if(pass!=cnfpass)
                {
                    document.getElementById('errormessage').innerHTML='Password and Confirm Password Field do not Match';
                }
                else
                {
                    var newuser=new createUser(fn,ln,uid,pass,cnfpass);
                    users.push(newuser);
                    saveUsers();
                    document.getElementById('errormessage').innerHTML=" SignUp Successful";
                }
   }
   else
   {
        if((users[0].user_id==uid)||(fn==''||ln==''||uid==''||pass==''||cnfpass==''))
        {
            document.getElementById('errormessage').innerHTML="Either a field is empty or Try another User ID";
        }
         //console.log(users)
        else{
                for(var i=0;i<users.length;i++)
               {
                    if(users[i].user_id==uid) 
                    {
                        document.getElementById('errormessage').innerHTML="Try Different User Id";
                        return false;
                    }
                    else if(pass!=cnfpass)
                    {
                        document.getElementById('errormessage').innerHTML='Password and Confirm Password Field do not Match';
                    }
                    else
                    {
                        var newuser=new createUser(fn,ln,uid,pass,cnfpass);
                        users.push(newuser);
                        document.getElementById('errormessage').innerHTML=" SignUp Successful";
                        saveUsers();
                        return false;
                        // console.log('first user SignUp Successful');
                    }
               }
           }
      }
}
//console.log(users);
//============================================================================================================================
// display and hide login/signup function
document.getElementsByClassName("toplogin_link")[0].addEventListener("click",function(){ show('div1'); });
document.getElementsByClassName("topsignup_link")[0].addEventListener("click",function(){ show('div2'); });
document.getElementsByClassName("signup_click")[0].addEventListener("click",function(){ show('div2');  });
document.getElementsByClassName("newlogin")[0].addEventListener("click",function(){show('div1'); });

var currentDiv = document.getElementById("div1");
 function show(divID) {
        var div = document.getElementById(divID);

        currentDiv.style.display = "none";
        div.style.display = "block";

        currentDiv = div;
}


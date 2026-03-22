
const products = [
{id:1,name:"Laptop",price:50000,cat:"electronics",img:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1000&q=80"},
{id:2,name:"Phone",price:20000,cat:"electronics",img:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1000&q=80"},
{id:3,name:"Shoes",price:1500,cat:"fashion",img:"https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1000&q=80"},
{id:4,name:"Watch",price:3000,cat:"fashion",img:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=80"},
{id:5,name:"Bluetooth Speaker",price:2500,cat:"electronics",img:"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=1000&q=80"},
{id:6,name:"Gaming Mouse",price:1200,cat:"electronics",img:"https://images.unsplash.com/photo-1632160871990-be30194885aa?auto=format&fit=crop&w=1000&q=80"},
{id:7,name:"T-Shirt",price:700,cat:"fashion",img:"https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1000&q=80"},
{id:8,name:"Jeans",price:1800,cat:"fashion",img:"https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=1000&q=80"},
{id:9,name:"Power Bank",price:1500,cat:"electronics",img:"https://images.unsplash.com/photo-1644571669401-9ab344866592?auto=format&fit=crop&w=1000&q=80"},
{id:10,name:"Headphones",price:2200,cat:"electronics",img:"https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?auto=format&fit=crop&w=1000&q=80"},
{id:11,name:"Smart TV",price:45000,cat:"electronics",img:"https://images.unsplash.com/photo-1615986200762-a1ed9610d3b1?auto=format&fit=crop&w=1000&q=80"},
{id:12,name:"Wireless Earbuds",price:4200,cat:"electronics",img:"https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=1000&q=80"},
{id:13,name:"Backpack",price:1200,cat:"fashion",img:"https://images.unsplash.com/photo-1671764673184-740ebf2cd637?auto=format&fit=crop&w=1000&q=80"},
{id:14,name:"Sunglasses",price:1599,cat:"fashion",img:"https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=1000&q=80"},
{id:15,name:"Coffee Maker",price:6500,cat:"electronics",img:"https://images.unsplash.com/photo-1707241358597-bafcc8a8e73d?auto=format&fit=crop&w=1000&q=80"},
{id:16,name:"Fitness Band",price:2999,cat:"electronics",img:"https://images.unsplash.com/photo-1758348844348-acaf8d854665?auto=format&fit=crop&w=1000&q=80"},
{id:17,name:"Jacket",price:2599,cat:"fashion",img:"https://images.unsplash.com/photo-1649433911119-7cf48b3e8f50?auto=format&fit=crop&w=1000&q=80"},
{id:18,name:"Perfume",price:2299,cat:"fashion",img:"https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1000&q=80"},
{id:19,name:"Desk Lamp",price:899,cat:"electronics",img:"https://images.unsplash.com/photo-1526040652367-ac003a0475fe?auto=format&fit=crop&w=1000&q=80"},
{id:20,name:"Camping Tent",price:5999,cat:"fashion",img:"https://images.unsplash.com/photo-1631635589499-afd87d52bf64?auto=format&fit=crop&w=1000&q=80"},
{id:21,name:"Tablet",price:25000,cat:"electronics",img:"https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=1000&q=80"},
{id:22,name:"Smartwatch",price:15000,cat:"electronics",img:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=80"},
{id:23,name:"Wireless Headset",price:3500,cat:"electronics",img:"https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=1000&q=80"},
{id:24,name:"Mechanical Keyboard",price:8000,cat:"electronics",img:"https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1000&q=80"},
{id:25,name:"Gaming Chair",price:12000,cat:"electronics",img:"https://images.unsplash.com/photo-1636487658592-db4db6e729a7?auto=format&fit=crop&w=1000&q=80"},
{id:26,name:"Drone",price:30000,cat:"electronics",img:"https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1000&q=80"},
{id:27,name:"Fitness Tracker",price:4999,cat:"electronics",img:"https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=1000&q=80"},
{id:28,name:"Smart Home Hub",price:5500,cat:"electronics",img:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1000&q=80"},
{id:29,name:"Wireless Mouse",price:1800,cat:"electronics",img:"https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=1000&q=80"},
{id:30,name:"External Hard Drive",price:4000,cat:"electronics",img:"https://images.unsplash.com/photo-1763833294545-e38e4fab1961?auto=format&fit=crop&w=1000&q=80"},
{id:31,name:"Smartphone Case",price:800,cat:"electronics",img:"https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=1000&q=80"},
{id:32,name:"Laptop Stand",price:1500,cat:"electronics",img:"https://images.unsplash.com/photo-1641247530943-6af2b42e5f06?auto=format&fit=crop&w=1000&q=80"},
{id:33,name:"USB Cable",price:300,cat:"electronics",img:"https://images.unsplash.com/photo-1633315921943-c4c12f35db16?auto=format&fit=crop&w=1000&q=80"},
{id:34,name:"Monitor",price:15000,cat:"electronics",img:"https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1000&q=80"},
{id:35,name:"Webcam",price:2500,cat:"electronics",img:"https://images.unsplash.com/photo-1726127461372-547b9ffa4236?auto=format&fit=crop&w=1000&q=80"},
{id:36,name:"Router",price:3500,cat:"electronics",img:"https://images.unsplash.com/photo-1606420187127-dae7c868fa7a?auto=format&fit=crop&w=1000&q=80"},
{id:37,name:"Smart Bulb",price:1200,cat:"electronics",img:"https://images.unsplash.com/photo-1711006155490-ec01a0ecf0de?auto=format&fit=crop&w=1000&q=80"},
{id:38,name:"Air Purifier",price:8000,cat:"electronics",img:"https://images.unsplash.com/photo-1436473849883-bb3464c23e93?auto=format&fit=crop&w=1000&q=80"},
{id:39,name:"Electric Heater",price:2000,cat:"electronics",img:"https://images.unsplash.com/photo-1547186577-a3f4fa07c2ef?auto=format&fit=crop&w=1000&q=80"},
{id:40,name:"Blender",price:4500,cat:"electronics",img:"https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=1000&q=80"}
];

let cart = JSON.parse(localStorage.getItem("cart"))||[];

function displayProducts(list=products){
const el=document.getElementById("product-list"); if(!el) return;
el.innerHTML="";
list.forEach(p=>{
el.innerHTML+=`<div class='product'>
<img src='${p.img}' onerror="this.onerror=null;this.src='https://via.placeholder.com/300x200?text=Image+not+available';" alt='${p.name}'>
<h3>${p.name}</h3>
<p>₹${p.price}</p>
<button onclick='addToCart(${p.id})'>Add to Cart</button>
</div>`;
});}

function addToCart(id){
cart.push(products.find(p=>p.id==id));
localStorage.setItem("cart",JSON.stringify(cart));
updateCart(); alert("Item added to cart ✅");}

function updateCart(){
const c=document.getElementById("cart-count"); if(c) c.innerText=cart.length;}

function filterCategory(cat){
if(cat==='all') displayProducts();
else displayProducts(products.filter(p=>p.cat===cat));}

// search
const search=document.getElementById("search");
if(search){search.addEventListener("input",e=>{
displayProducts(products.filter(p=>p.name.toLowerCase().includes(e.target.value.toLowerCase())));
});}

// cart page
const cartDiv=document.getElementById("cart-items");
if(cartDiv){
let total=0;
cartDiv.innerHTML="";
cart.forEach((item,i)=>{
total+=item.price;
cartDiv.innerHTML+=`<div>
${item.name} - ₹${item.price}
<button onclick='removeItem(${i})'>Remove</button>
</div>`;
});
document.getElementById("total").innerText="Total: ₹"+total;
}

function removeItem(i){
cart.splice(i,1);
localStorage.setItem("cart",JSON.stringify(cart));
location.reload();}

function clearCart(){
localStorage.removeItem("cart");
location.reload();}

// slider
let images=[
"https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da",
"https://images.unsplash.com/photo-1523275335684-37898b6baf30",
"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
];
let i=0;
setInterval(()=>{
let s=document.getElementById("slide");
if(s){ i=(i+1)%images.length; s.src=images[i]; }
},3000);

updateCart();
displayProducts();
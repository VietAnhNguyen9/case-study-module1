class Product{
    name
    price
    img
    constructor(img, name, price) {
        this.img = img;
        this.name = name;
        this.price = price;
    }
}
let p1 = new Product("img/chamsocda2.webp" ,"Kem trị mụn", "230.000 đ")
let p2 = new Product( "img/chamsocda4.webp","Nước hoa hồng", "210.000 đ" )
let p3 = new Product(  "img/nuochoa1.webp","Scandal", "1.290.000 đ")
let p4 = new Product( "img/nuochoa3.webp","Coco Chanel", "4.110.000 đ")
let p5 = new Product( "img/nuochoa5.webp","Versace Eros", "1.290.000 đ")
let p6 = new Product( "img/phukien1.webp","Túi đựng mỹ phẩm", "290.000 đ")
let p7 = new Product( "img/chamsoctoc4.webp","Dầu gội Tsubaki","290.000 đ")
let p8 = new Product( "img/chamsoctoanthan1.webp","Sữa dưỡng thể","230.000 đ")
let total = [p1, p2, p3, p4, p5, p6, p7, p8]

function show(){
    let string = ""
    for (let i=0;i<total.length;i++){
        string += `<div style="width: 300px; margin: 10px;padding:12px 15px"  ><img src=" ${total[i].img}" STYLE="height: 180px; width: 180px;">`
        string += "<p>"+total[i].name+"</p>"
        string += "<p>"+total[i].price+"</p>"
        string += "<button onclick='cart("+i+")' type=\"button\" class=\"btn btn-outline-danger\">Mua ngay</button>\n" +
            "<button type=\"button\" class=\"btn btn-outline-warning\">Xem chi tiết</button>\n</div>"
    }
    document.getElementById("show").innerHTML=string;
}
show();
let arrCart = []
function cart(index) {
    let newImg = total[index].img;
    let newName = total[index].name;
    let newPrice = total[index].price;
    let newCart = new Product(newImg, newName, newPrice);
    arrCart.push(newCart);
    console.log(arrCart);
    alert("Đã thêm sản phẩm vào giỏ hàng")
    let str = ""
    for(let i=0;i<arrCart.length;i++) {
        str += `<p>${arrCart[i].name}  -  ${arrCart[i].price}</p>`
    }
    document.getElementById("result").innerHTML = str
}
function display() {
    let display = document.getElementById("display");
    display.style.display = "block";
    return display;
}




//store the products array in localstorage as "products"

function product(type,desc,price,image){
    this.type=type;
    this.desc=desc;
    this.price=price;
    this.image=image;
}

let arr=JSON.parse(localStorage.getItem("products"))||[];

function myproduct(event){
    event.preventDefault();

    let form=document.getElementById("products");
    let type=form.type.value;
    let desc=form.desc.value;
    let price=form.price.value;
    let image=form.image.value;

    let prod=new product(type,desc,price,image)
    console.log(prod)
    arr.push(prod)

    localStorage.setItem("products",JSON.stringify(arr));
    window.location.reload;
}

function joor(){
    let arr=JSON.parse(localStorage.getItem("products"))||[];
    console.log(arr)

    let all_products=document.getElementById("all_products");
    all_products.innerHTML=null;

    arr.forEach(function(elem,index){

        var box=document.createElement("div");
        
        var Image=document.createElement("img");
        Image.src=elem.image
      
        var Type=document.createElement("h2");
        Type.innerText=elem.type;
      
        var Desc=document.createElement("h4");
        Desc.innerText=elem.desc;
      
        var Price=document.createElement("h4");
        Price.innerText=elem.price;
      
        var btn=document.createElement("button")
        btn.innerText="Remove Product"
        btn.style.backgroundColor="green";
        btn.style.cursor="pointer";
        btn.addEventListener("click",function(){
      
          remove(index);
        })
      
      
        box.append(Image,Type,Desc,Price,btn)
        all_products.append(box)
      
      })
    
}
joor()

function remove(index){
    let arr=JSON.parse(localStorage.getItem("products"))||[];

    let newarr=arr.filter(function(elem,i){
        if(i==index){
            let trash=JSON.parse(localStorage.getItem("trash"))||[]

            trash.push(elem);
            localStorage.setItem("trash",JSON.stringify(trash));
        }
        else{
            return i!==index;
        }
    });
    localStorage.setItem("products",JSON.stringify(newarr))
    joor();
}








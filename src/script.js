fetch("https://s3-ap-southeast-1.amazonaws.com/he-public-data/smartQFood8bef5a2.json").then((data)=>{
    //console.log(data);
    return data.json();
}).then((completedata)=>{
    
       // console.log(completeddata[2].title);
       let data1="";
       completedata.map((values)=>{
        data1+=`<div class="card">
        <h1 class="title"><a>Item:</a> ${values.itemname}</h1>
        <p class="receipe"><a>AavailableTime:</a> ${values.availabletime}</p>
        <p class="price"><a>Rs:</a> ${values.price}</p>
        <button>Add To Cart</button>
    </div>`

       });
       document.getElementById("cards").innerHTML=data1;

    
}).catch((err)=>{
    console.log(err);
})
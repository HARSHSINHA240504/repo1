fetch("https://fakestoreapi.com/products").then((data)=>{
    // console.log(data);
    return data.json();//converted to obj
}).then((objectData)=>{
    console.log(objectData[0].title);
    let tableData="";
    objectData.map((val)=>{
        tableData+=`<tr>
        <td>${val.title}</td>
        <td>${val.description}</td>
        <td>${val.Price}</td>
        <td><img src =${val.image}/></td>
      </tr>`;
    });
    document.getElementById("table_body").innerHTML=tableData;
}).catch((err)=>{

    console.log("Error 404");
})
const jsonForm = document.querySelector("#jsonForm"); 
const csvForm = document.querySelector("#csvForm"); 
const bConvert = document.querySelector("#bConvert"); 

bConvert.addEventListener("click",e=>{
    convertJSONtoCSV();
});

function convertJSONtoCSV(){
    let json;
    let keys = [];
    let values = [];

    try {
        json = JSON.parse(jsonForm.value);
    } catch (error) {
        console.log("formato incorrecto",error);
        alert("Formato incorrecto");
        return;
       
    }

    if(Array.isArray(json)){
            json.forEach(item=>{
                const nkeys = Object.keys(item);

                if(keys.length === 0){
                    keys = [...nkeys]
                }else{
                    if(nkeys.length !== keys.length){
                            throw new Error("Numero de propiedades diferentes");
                    }else{
                        console.log("ok");
                    }
                }
                const row = keys.map(k=>{
                    return item[k];
                });
                 console.log(row);
                values.push([...row]);
                console.log(item);
            });
            console.log(keys);
            console.log(values);
            values.unshift(keys);
            const text = values.map(v=> v.join(",")).join("\n");
            csvForm.value = text;
    }else{
        alert("no es un arreglo de objetos");
    }
}

/*
JSON
[
  {
   "id":0,
   "nombre": "diego" ,
    "edad" : 25
  },
{
   "id":1,
   "nombre": "Nilou" ,
    "edad" : 21
  }

]
*/

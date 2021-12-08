const fs= require('fs');
const crearArchivo= (base=5, listar=false) =>{
  
  
  
   return new Promise((resolve, reject) =>{
    console.log('***************');
    console.log('tabla del:', base);
    console.log("***************");

  let salida ='';

    for (let i = 0; i <= 12; i++) {
        salida +=`${ base } x ${ i } = ${ base*i }\n`
         }
         console.log(salida);
        fs.writeFileSync(`tabla-${ base }.txt`, salida,(err)=>{
             if(err) throw err;
             if(listar)
             {
              console.log(salida);
              resolve(`tabla-${ base }.txt`,salida);
             }

        })

   })
  }
  module.exports={
    crearArchivo
  }

const { boolean } = require('yargs');
const {crearArchivo}=require('./helpers/multiplicar');
const argv= require('yargs')
.option('b',{
    alias:'base',
    demandOption:true,
    type:'number',
})

.option('l',{
    alias:'listar',
    type:'boolean',
    demandOption:true,
    default:false,
    

    })

.check((argv, options)=>{
        if(isNaN(argv.b)){
            throw 'La base tiene que ser un numero';
        }
       return true;
        })


.argv;



console.clear();

console.log(argv);

crearArchivo(argv.b, argv.l)
.then(nombreArchivo=> console.log(nombreArchivo, 'Creado'))
.catch(err=>console.log(err));

//const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const calcularPocentajes=async(
    valorPM10,
    valorPM2punto5,
    valorNO2,
    valorCO,
    valorS02)=>{    
    let response= await fetch("https://misiontic2022upb.vercel.app/api/air-quality/limits");
    let limits= await response.json();
    console.log("limits");

    console.log(limits);
    let porcentajePM10= limits.limitePM10?valorPM10*100/limits.limitePM10:0;
    let porcentajePMpunto2=limits.limitePM2punto5? valorPM2punto5*100/limits.limitePM2punto5:0;
    let porcentajeNO2= limits.limiteNO2? valorNO2*100/ limits.limiteNO2:0;
    let porcentajeCO= limits.limiteCO?  valorCO*100/ limits.limiteCO:0;
    let porcentajeSO2= limits.limiteS02?  valorS02*100/ limits.limiteS02:0;
    let salida={
        porcentajePM10:porcentajePM10,
        porcentajePM2punto5:porcentajePMpunto2,
        porcentajeNO2:porcentajeNO2,
        porcentajeCO:porcentajeCO,
        porcentajeS02:porcentajeSO2   
    }
    console.log(salida);
    return salida;
    };

const registrarAQI=async(value)=>{
    let indice=-1;
    let response= await fetch("https://misiontic2022upb.vercel.app/api/air-quality/aqi-ranges");
    let rangosAQI= await response.json();
    console.log("rangosAQI");

    console.log(rangosAQI);

    if (value<0 ||value>300){
        return "fuera_de_rango"
    }else{
        console.log("value=" +value);
        let result

        rangosAQI.forEach(rango=>{
            if (value>=rango.de && value<=rango.hasta){
                console.log(rango.etiqueta);
                result= rango.etiqueta;
                
            }
        });
        return result;
    };
}


module.exports.registrarAQI= registrarAQI;
module.exports.calcularPocentajes= calcularPocentajes;

//registrarAQI(50);
//calcularPocentajes(4,100,100,100,100)
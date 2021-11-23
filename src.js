const calcularPocentajes=(limitePM10,limitePM2punto5, limiteNO2, limiteCO, limiteS02, valorPM10, valorPM2punto5, valorNO2, valorCO,valorS02)=>{    
    let porcentajePM10= limitePM10?valorPM10*100/limitePM10:0;
    let porcentajePMpunto2=limitePM2punto5? valorPM2punto5*100/limitePM2punto5:0;
    let porcentajeNO2= limiteNO2? valorNO2*100/ limiteNO2:0;
    let porcentajeCO= limiteCO?  valorCO*100/ limiteCO:0;
    let porcentajeSO2= limiteS02?  valorS02*100/ limiteS02:0;
    let salida={
        porcentajePM10:porcentajePM10,
        porcentajePM2punto5:porcentajePMpunto2,
        porcentajeNO2:porcentajeNO2,
        porcentajeCO:porcentajeCO,
        porcentajeS02:porcentajeSO2   
    }
    console.log(salida);
    return salida;
}

const registrarAQI=(value)=>{

    if (value<0 ||value>300){
        return "fuera_de_rango"
    }else{
        console.log("value=" +value);
        let result

        global.rangosAQI.forEach(rango=>{
            if (value>=rango.de && value<=rango.hasta){
                console.log(rango.etiqueta);
                result= rango.etiqueta;
                
            }
        })
        return result;
    }
}

global.rangosAQI=[
    {etiqueta: 'excelente', de: 0, hasta:30},
    {etiqueta: 'bueno', de: 31, hasta:50},
    {etiqueta: 'moderado', de: 51, hasta:100},
    {etiqueta: 'bajo', de: 101, hasta:150},
    {etiqueta: 'insalubre', de: 151, hasta:200},
    {etiqueta: 'peligroso', de: 201, hasta:300}
]

module.exports.registrarAQI= registrarAQI;
module.exports.calcularPocentajes= calcularPocentajes;
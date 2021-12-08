const nombreMenorGas = async ()=>{
    let response = await fetch ("https://misiontic2022upb.vercel.app/api/air-quality/limits");
    let array = []
    let respuesta = await response.json()
    for(let i in respuesta){
        if (i !== "limitePM10" && i !== "limitePM2punto5"){
            array.push(
                [i, respuesta[i]]
            )
        }
    }
    array.sort((a, b) => {
        return a[1] - b[1]
    })
    return array[0][0].substr(6)
};

module.exports.nombreMenorGas = nombreMenorGas;
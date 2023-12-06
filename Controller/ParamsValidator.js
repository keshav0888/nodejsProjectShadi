function ParamValidator(paramsBody,paramsNames,paramsWithNull,blankParams){
    if(blankParams==undefined)
       blankParams=[];
    return new Promise(function (resolve) {
        let inputParamsError={};
        inputParamsError.undefinedParams=[];
        inputParamsError.blankParams=[]
        inputParamsError.nullParams=[]
        paramsNames.forEach(name => {
            if(paramsBody[name]===undefined){
                inputParamsError.undefinedParams.push(name)
            }else{
                if(paramsBody[name]==null || paramsBody[name].toString().toUpperCase()==="NULL" && !paramsWithNull.includes(name)){
                    inputParamsError.nullParams.push(name)
                }
            }
        });
        resolve(inputParamsError)
    })
}
module.exports=ParamValidator
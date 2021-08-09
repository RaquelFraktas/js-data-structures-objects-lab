// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value){
    // const newDriver= {...driver}
    // newDriver[key] = value;
    // return newDriver;
    return Object.assign({},driver,{[key]: value});
    
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
     driver[key]= value;
     return driver
    // return Object.assign(driver,{[key]: value});
    //both work
}

function deleteFromDriverByKey(driver, key){
    const updatedDriver = Object.assign({}, driver);
    // const updatedDriver = driver
    delete updatedDriver[key];
    return updatedDriver
}

function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key];
    return driver;
}
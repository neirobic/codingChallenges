const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    /* (number, number, number) => bool
        Given distanceToPump = distance to nearest pump,
        mpg = how many miles per gallon your car runs on,
        fuelLeft = how many gallons of fuel are left in your tank,
        return true if you can make it to the pump with the fuel you have left,
        false otherwise.
        
        zeroFuel(2,2,2) //true;
        zeroFuel(2,1,1) //false;
        zeroFuel(2,2,0) //false
        zeroFuel(0,2,2) //true
    
    */
        return distanceToPump <= mpg * fuelLeft;
        
    };
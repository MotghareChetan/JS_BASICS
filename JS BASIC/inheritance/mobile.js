class Mobile {

    constructor(brandName) {
        this.brandName = brandName;
    }
    makeCall() {
        console.log("Voice Call !!")

    }

    sendSMS() {
        console.log("Text Message !!")
    }
}

class Samsung extends Mobile {
    constructor(modelNumber, brandName) {
        super(brandName);
        this.modelNumber = modelNumber;
    }
    makeCall() {  //override
        super.makeCall()
        console.log("Voice and Video Call !!")

    }

    security() {
        console.log("Samsung Knox")
    }

}

const feature = new Samsung("GALAXY S23", "SAMSUNG");
console.log("BRAND NAME :--> " + feature.brandName)
console.log("MODEL NUMBER :-->  " + feature.modelNumber)
feature.makeCall();
feature.sendSMS();
feature.security();
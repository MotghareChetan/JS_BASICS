class sale {

    constructor(otp){
        this.#otp=otp;
    }
    date = "28/03/2023"
    Brand = "Samsung"
    ModelNo = "S23"
    #price = 79000   // to make private
    #otp
    buy() {
        console.log("Sale start on -->  " + this.date)
    }
     
    payment()
    {
        console.log("ENTER PAYMENT OTP --> " + this.#otp)
        if(this.#otp === 9802)
        {
            console.log("Order Done!!!")
            this.orderDetail();
        }else if(this.#otp != undefined)
        {
            console.log(typeof this.#otp)
            console.log("Wrong OTP")
        }
    }

    orderDetail() {
        
        console.log("***** YOUR ORDER DETAILS ******")
        console.log("Brand Name --> " + this.Brand)
        console.log("Model No --> " + this.ModelNo)
        console.log("Price --> " + this.#price)
    }
}

const order = new sale()

order.buy();
order.payment();



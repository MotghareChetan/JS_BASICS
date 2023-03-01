class Presale{
        date = "28/03/2023"
        Brand = "Samsung"
        ModelNo = "S23"
        #price = 79000   // to make private

        buy()
        {
            console.log("Sale start on -->  " + this.date)
        }

        orderDetail()
        {
            console.log("Brand Name --> " + this.Brand)
            console.log("Model No --> " + this.ModelNo)
            console.log("Price --> " +  this.#price)
        }
}
exports.Pre = Presale;

// const sale = new Presale();

// sale.buy();
// sale.orderDetail();
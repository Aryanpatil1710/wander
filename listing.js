const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSChema = new Schema ({
    title: {
        type : String,
        require: true,
    },
    descriptiom: String,
    image: {
        type : String,
        default: 
         "https://images.unsplash.com/photo-1573261289561-d584b9e07feb?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        set: (v) =>
         v === "" 
        ? "https://images.unsplash.com/photo-1573261289561-d584b9e07feb?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        : v,
    },
    price: Number,
    
    location: String,
    country: String,
});
    
const listing = mongoose.model("listing" , listingSchema);
module.exports = Listing;
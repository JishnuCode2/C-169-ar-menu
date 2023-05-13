AFRAME.registerComponent("marker-handler", {
    init: async function(){
        this.el.addEventListener("markerFound", ()=>{
            console.log("Marker Is Found")
            this.handleMarkerFound()
        });
        this.el.addEventListener("markerLost",()=>{
            console.log("Marker is Lost")
            this.handleMarkerLost()
        })
    },

    handleMarkerFound: function(){
        //changing div visibility 
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = "flex" ; 

        var ratingButton = document.getElementById("rating-button");
        var orderButton = document.getElementById("order-button")
        
        //Handling click events
        ratingButton.addEventListener("click", function(){
            swal({
                icon: "warning",
                title: "Rate Dish",
                text: "Work in Progress"
            });
        });
        
        orderButton.addEventListener("click", function(){
            swal({
                icon: "https://i.imgur.com/4NZ6uLY.jpg",
                title: "Thanks for Ordering" ,
                text: "Your Order will be served soon at your table"
            });
        })
        
        
    },

    handleMarkerLost: function(){
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = "none";
    }
})
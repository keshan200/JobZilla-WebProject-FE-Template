$(document).ready(()=>{


    $.ajax({

       url:"http://localhost:8080/api/v1/job/count",
       method:"GET",

       success:(res)=>{
          console.log("sucsess")

           if (res && res.data) {
               $("#jobCount").text(`Showing ${res.data} jobs`);
           }
       },

       error:(err)=>{
           console.log("sucsess")
       }

    })

})
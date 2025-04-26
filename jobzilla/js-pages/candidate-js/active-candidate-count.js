$(document).ready(()=>{


    $.ajax({

        url:"http://localhost:8080/api/v1/candidate/count",
        method:"GET",

        success:(res)=>{
            console.log("sucsess")

            if (res && res.data) {
                $("#candidateCount").text(`Showing ${res.data} candidates`);
            }
        },

        error:(err)=>{
            console.log("sucsess")
        }

    })

})
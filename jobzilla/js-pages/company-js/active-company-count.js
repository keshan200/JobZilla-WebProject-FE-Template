$(document).ready(()=>{


    $.ajax({

        url:"http://localhost:8080/api/v1/company/count",
        method:"GET",

        success:(res)=>{
            console.log("sucsess")

            if (res && res.data) {
                $("#companyCount").text(`Showing ${res.data} companies`);
            }
        },

        error:(err)=>{
            console.log("sucsess")
        }

    })

})
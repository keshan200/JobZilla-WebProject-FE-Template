$(document).ready(function () {

    let authToken = localStorage.getItem("authToken");

    $.ajax({
       url:"http://localhost:8080/api/v1/jobCategory/getAll",
       method:"GET",

       headers:{
           "Authorization": "Bearer " + authToken
       } ,

       success:(response)=>{

           if (Array.isArray(response)) {
               let categories = $("#j-category");
               let jobcatePage = $("#category");

               categories.append('<option disabled selected value="">Select Category</option>');
               jobcatePage.append('<option disabled selected value="">All Categories</option>');

               response.forEach((cat) => {
                   if (cat.jobCatName) {
                       console.log("job CAt",cat.jobCatName)
                       let getCat = `<option value="${cat.jobCatId}">${cat.jobCatName}</option>`;
                       let getcatforJoblistPage = `<option>${cat.jobCatName}</option>`

                       jobcatePage.append(getcatforJoblistPage)
                       categories.append(getCat);
                   }
               });
               $('#j-category').selectpicker('refresh');
           } else {
               console.error("Unexpected response format:", response);
           }

       } ,


       error:(err)=>{

       }

    })










})
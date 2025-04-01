$(document).ready( ()=> {

    $.ajax({

        url:`http://localhost:8080/api/v1/job/getJobsByJobId/{jobId}`,
        method:"GET",

        success:(response)=>{
            console.log("response",response)
            loadJobs(response)
        },

        error:(error)=>{
            console.error("Error:", error.responseText);
        }

    })
})










function loadJobs(jobs) {

    let container = $(".job-container");
    container.empty();
    console.log("job set eka",jobs)


    jobs.forEach(job => {
        let companyCard =
            ` 
                
                `;

        container.append(companyCard);
    });


    $(document).on("click", ".tit", function (event) {
        event.preventDefault();

        let companyId = $(this).data("cid");
        localStorage.setItem("cid", companyId);

        console.log("Stored Company ID:", companyId);
        window.location.href = "employer-detail-v2.html";
    });

}
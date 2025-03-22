$("#loginBtn").click(()=>{

    let email = $("#loginEmail").val();
    let password = $("#loginPassword").val();


    $.ajax({
        url: "http://localhost:8080/api/v1/auth/signIn",
        method:"POST",
        contentType: "application/json",
        data: JSON.stringify({
            email: email,
            password: password,
        }),
        headers: {
            Authorization: "Bearer " + token,
        },
        success: function(data) {
            alert("suc")
            console.log("Success:", data);

            let genToken = data.token;
            localStorage.setItem("authToken", genToken);

            $("#sign_up_popup2").modal('hide');
            $("#signUpButton").hide();
          /*  $("#authSection").html(`
                <div class="welcome-message">
                    <i class="feather-user"></i> Welcome, <strong>${username}</strong>
                </div>
            `);*/
            $("#authSection").css("display", "none");

        },
        error: function(xhr, status, error) {
            console.error("Error:", error);

            if (xhr.status === 403) {
                $("#alertMessage").html(`
                    <div style="border-radius: 20px" class="alert alert-danger" role="alert">
                       <strong>Account Restricted!</strong> Your account is currently inactive and cannot be used to log in. 
                       Please contact <a href="mailto:support@example.com" class="alert-link">support@example.com</a> or call us at <strong>+1-800-123-456</strong> for assistance.
                    </div>
                `);
            } else if (xhr.status === 401) {

                $("#logCredAlertMessage").html(
                    `
                    <div class="alert alert-danger" role="alert">
                    Oops! Your email or password doesn't match our records. Please try again.
                     </div>
                          `
                 )

            } else {
                alert("An error occurred. Please try again.");
            }
        }

    })

})









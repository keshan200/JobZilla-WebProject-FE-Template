





$(document).ready(function () {
    $("#loginBtn").click(() => {

        let email = $("#loginEmail").val();
        let password = $("#loginPassword").val();

        $.ajax({
            url: "http://localhost:8080/api/v1/auth/signIn",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify({
                email: email,
                password: password,
            }),
            success: function (response) {

                    let Authtoken = response.data.token;
                    let role = response.data.role;
                    let name = response.data.name;
                    let uid = response.data.id;

                    localStorage.setItem("authToken", Authtoken);
                    localStorage.setItem("userEmail", email);
                    localStorage.setItem("role", role);
                    localStorage.setItem("name", name);
                    localStorage.setItem("loggedUser",uid)

                    console.log(Authtoken)
                console.log(uid)



                console.log("Modal එක hide වෙයි...");
                $("#sign_up_popup2").modal('hide');
                $("#signUpButton").hide();

                console.log("authSection update වෙයි...");
                $("#authSection").html(`
                    <div class="welcome-message">
                        <i class="feather-user"></i> Welcome, <strong>${name}</strong>!
                    </div>
                `);
                $("#authSection").css("display", "block");




            },
            error: function (xhr, status, error) {
                console.error("Error:", error);

                if (xhr.status === 403) {
                    $("#alertMessage").html(`
                    <div style="border-radius: 20px" class="alert alert-danger" role="alert">
                       <strong>Account Restricted!</strong> Your account is currently inactive and cannot be used to log in. 
                       Please contact <a href="mailto:support@example.com" class="alert-link">support@example.com</a> or call us at <strong>+1-800-123-456</strong> for assistance.
                    </div>
                `);
                } else if (xhr.status === 401) {
                    $("#logCredAlertMessage").html(`
                    <div class="alert alert-danger" role="alert">
                     Oops! Your email or password doesn't match our records. Please try again.
                     </div>
                `);
                } else {
                    alert("An error occurred. Please try again.");
                }
            }
        });
    });
});
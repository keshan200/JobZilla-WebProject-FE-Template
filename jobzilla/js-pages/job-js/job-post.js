/*
$(document).ready(function () {
    $('#jobdetails-btn').click(function (e) {
        e.preventDefault();

        // Collect input data
        const formData = {
            jobTitle: $('#jobTitl').val(),
            jobCategory: $('#j-category').val(),
            jobType: $('#s-category').val(),
            offeredSalary: $('#salary').val(),
            experience: $('#experience').val(),
            qualification: $('#qualifications').val(),
            gender: $('#gender').val(),
            country: $('#country').val(),
            city: $('#city').val(),
            location: $('#location').val(),
            email: $('#email').val(),
            website: $('#website').val(),
            est_since: $('#estsince').val(),
            fulladdress: $('#complete-address').val(),
            jobDescription: $('#desc').val(),
            startDate: $('#sdate').val(),
            endDate: $('#edate').val(),
        };


        console.log("Job Title:", $('#jobTitl').val());
        console.log("Job Category:", $('#j-category').val());
        console.log("Latitude:", $('#latitude').val());
        console.log("Longitude:", $('#longitude').val());
        console.log("Description:", $('#desc').val());



        if (!formData.jobTitle || !formData.jobCategory || !formData.jobType || !formData.email) {
            alert('Please fill in all required fields.');
            return;
        }

        console.log('Submitting Job Details:', formData);
        const token = localStorage.getItem('authToken');

        if (!token) {
            alert('Authentication token is missing. Please log in again.');
            return;
        }

        $.ajax({
            url: 'http://localhost:8080/api/v1/job/save',
            type: 'POST',
            headers: {
                'Authorization': 'Bearer'+ token
            },
            data: JSON.stringify(formData),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (response) {

                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#0a4aeb',
                    cancelButtonColor: '#dd3333',
                    confirmButtonText: 'Yes, confirm it!',
                    cancelButtonText: 'Cancel'
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire(
                            'Done!',
                            'Your action has been confirmed.',
                            'success'
                        );
                    }
                });
            },
            error: function (xhr, status, error) {

                const errorMessage = xhr.responseJSON?.message || 'An error occurred while submitting job details.';
                alert('Failed to submit job details: ' + errorMessage);
                console.error('Error:', error);
            },
        });
    });
});
*/


$(document).ready(function () {
    $('#jobdetails-btn').click(function (e) {
        e.preventDefault();


        const formData = {
            jobTitle: $('#jobTitl').val(),
            jobCategory: $('#j-category').val(),
            jobType: $('#s-category').val(),
            offeredSalary: $('#salary').val(),
            experience: $('#experience').val(),
            qualification: $('#qualifications').val(),
            gender: $('#gender').val(),
            country: $('#country').val(),
            city: $('#city').val(),
            location: $('#location').val(),
            email: $('#email').val(),
            website: $('#website').val(),
            est_since: $('#estsince').val(),
            fulladdress: $('#complete-address').val(),
            jobDescription: $('#desc').val(),
            startDate: $('#sdate').val(),
            endDate: $('#edate').val(),
        };

        console.log("Job Title:", $('#jobTitl').val());
        console.log("Job Category:", $('#j-category').val());
        console.log("Latitude:", $('#latitude').val());
        console.log("Longitude:", $('#longitude').val());
        console.log("Description:", $('#desc').val());

        if (!formData.jobTitle || !formData.jobCategory || !formData.jobType || !formData.email) {
            alert('Please fill in all required fields.');
            return;
        }

        console.log('Submitting Job Details:', formData);
        const token = localStorage.getItem('authToken');

        if (!token) {
            alert('Authentication token is missing. Please log in again.');
            return;
        }

        // Show the confirmation alert first
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#0a4aeb',
            cancelButtonColor: '#dd3333',
            confirmButtonText: 'Yes, confirm it!',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                // Proceed with the form submission only after confirmation
                $.ajax({
                    url: 'http://localhost:8080/api/v1/job/save',
                    type: 'POST',
                    headers: {
                        'Authorization': 'Bearer ' + token
                    },
                    data: JSON.stringify(formData),
                    contentType: 'application/json; charset=utf-8',
                    dataType: 'json',
                    success: function (response) {


                        Swal.fire(
                            'Done!',
                            'Your action has been confirmed and the job details are saved.',
                            'success'
                        );
                    },
                    error: function (xhr, status, error) {
                        const errorMessage = xhr.responseJSON?.message || 'An error occurred while submitting job details.';
                        alert('Failed to submit job details: ' + errorMessage);
                        console.error('Error:', error);
                    },
                });
            } else {
                Swal.fire(
                    'Cancelled',
                    'Your action has been cancelled.',
                    'error'
                );
            }
        });
    });
});

$(document).ready(function () {
    let currentPage = 1;
    let totalPages = 5;


    loadPage(currentPage);

    function loadPage(page) {
        $.ajax({
            url: "http://localhost:8080/api/v1/company/getAll",
            method: "GET",
            data: { page: page - 1, size: 10 },
            success: function (response) {
                loadCompanies(response.content);
                totalPages = response.totalPages;
                updatePagination(page);
            },
            error: function (error) {
                console.error("Error loading page:", error);
            }
        });
    }


    function loadCompanies(companies) {
        let container = $(".companies-container");
        container.empty();

        companies.forEach(company => {
            let companyCard = `
                <div class="twm-employer-list-wrap">
                    <ul>
                        <li>
                            <div class="twm-employer-list-style1 mb-5">
                                <div class="twm-media">
                                    <img src="${company.logo_img}" alt="#">
                                </div>
                                <div class="twm-mid-content">
                                    <a class="tit twm-job-title" data-cid="${company.cid}">
                                        <h4>${company.company_name}</h4>
                                    </a>
                                    <p class="twm-job-address">${company.full_address}</p>
                                    <a href="employer-detail.html" class="twm-job-websites site-text-primary">Accountancy</a>
                                </div>
                                <div class="twm-right-content">
                                    <div class="twm-jobs-vacancies"><span>25</span>Vacancies</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>`;
            container.append(companyCard);
        });
    }


    function updatePagination(page) {
        $(".page-num").removeClass("active");
        $(`.page-num[data-page=${page}]`).addClass("active");

        if (page === 1) {
            $("#prevPage").addClass("disabled");
        } else {
            $("#prevPage").removeClass("disabled");
        }

        if (page === totalPages) {
            $("#nextPage").addClass("disabled");
        } else {
            $("#nextPage").removeClass("disabled");
        }
    }


    $(".page-num").click(function () {
        let page = $(this).data("page");
        currentPage = page;
        loadPage(page);
    });


    $("#prevPage").click(function () {
        if (currentPage > 1) {
            currentPage--;
            loadPage(currentPage);
        }
    });


    $("#nextPage").click(function () {
        if (currentPage < totalPages) {
            currentPage++;
            loadPage(currentPage);
        }
    });
});

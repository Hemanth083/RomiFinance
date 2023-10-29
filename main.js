let Body = document.body;
let Width = window.innerWidth;
let Hight = window.innerHeight;
Body.style.width = Width + "px";
Body.style.Hight = Hight + "px";

document.addEventListener("DOMContentLoaded", function () {
    // Function to create and populate a donut chart
    function createDonutChart(canvasId, chartTitle, chartData) {
        const ctx = document.getElementById(canvasId).getContext("2d");

        new Chart(ctx, {
            type: "doughnut",
            data: {
                labels: chartData.labels,
                datasets: [
                    {
                        label: chartTitle,
                        data: chartData.data,
                        backgroundColor: [
                            "rgba(63, 81, 181, 0.5)",
                            "rgba(77, 182, 172, 0.5)",
                            "rgba(66, 133, 244, 0.5)",
                            "rgba(156, 39, 176, 0.5)",
                        ],
                    },
                ],
            },
            options: {
                cutout: 110,
                borderWidth: 1,
                hoverBorderWidth: 2,
                plugins: {
                    legend: {
                        display: true,
                        position: "bottom",
                    },
                },
            },
        });
    }

    // Data for the first donut chart
    const donutChartData1 = {
        // label: ["94% in liquidaty", "6% not in staked"];
        data: [94, 6],
    };

    // Data for the second donut chart
    const donutChartData2 = {
        data: [49.5, 50.49],
    };

    // Create and populate the first donut chart
    createDonutChart("donut-chart-1", "", donutChartData1);

    // Create and populate the second donut chart
    createDonutChart("donut-chart-2", "", donutChartData2);
});




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

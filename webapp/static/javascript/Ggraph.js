// 그래프 데이터와 설정
const ctx = document.getElementById('memberChart').getContext('2d');
const memberChart = new Chart(ctx, {
    type: 'line', // 선 그래프 유형
    data: {
        labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'], // x축 레이블
        datasets: [
            {
                label: '가입회원',
                data: [0, 1, 2, 1, 0, 0, 1, 5, 6, 0, 0, 0], // 가입회원 월별 데이터
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderWidth: 2,
                fill: true
            },
            {
                label: '탈퇴회원',
                data: [0, 0, 1, 0, 0, 1, 2, 4, 3, 0, 0, 0], // 탈퇴회원 월별 데이터
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderWidth: 2,
                fill: true
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: '가입 탈퇴 회원'
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: '월'
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: '회원 수'
                }
            }
        }
    }
});

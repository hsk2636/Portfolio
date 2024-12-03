// 그래프 데이터와 설정
const ctx = document.getElementById('memberChart').getContext('2d');
const memberChart = new Chart(ctx, {
    type: 'bar', // 막대 그래프 유형
    data: {
        labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'], // x축 레이블
        datasets: [
            {
                label: '가입회원',
                data: [0, 1, 2, 1, 0, 0, 1, 5, 6, 0, 0, 0], // 가입회원 월별 데이터
                backgroundColor: 'rgba(255, 99, 132, 0.5)', // 막대 채우기 색상
                borderColor: 'rgba(255, 99, 132, 1)', // 막대 테두리 색상
                borderWidth: 1
            },
            {
                label: '탈퇴회원',
                data: [0, 0, 1, 0, 0, 1, 2, 4, 3, 0, 0, 0], // 탈퇴회원 월별 데이터
                backgroundColor: 'rgba(54, 162, 235, 0.5)', // 막대 채우기 색상
                borderColor: 'rgba(54, 162, 235, 1)', // 막대 테두리 색상
                borderWidth: 1
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' // 범례 위치
            },
            title: {
                display: true,
                text: '가입 탈퇴 회원' // 그래프 제목
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: '월' // x축 제목
                }
            },
            y: {
                beginAtZero: true, // y축 0부터 시작
                title: {
                    display: true,
                    text: '회원 수' // y축 제목
                }
            }
        }
    }
});

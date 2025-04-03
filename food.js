function solution(food) {
    var answer = '';

    // 1번 음식부터 반복 (0번은 물이라서 제외)
    for (let i = 1; i < food.length; i++) {
        // 각 음식 수를 절반으로 나눠서 문자열에 추가
        const count = Math.floor(food[i] / 2);
        answer += String(i).repeat(count);
    }

    // 가운데에 물(0)을 넣고, 오른쪽은 왼쪽을 뒤집은 것
    const reversed = answer.split('').reverse().join('');
    answer = answer + '0' + reversed;

    return answer;
}

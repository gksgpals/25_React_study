function solution(arr) {
    // 최대공약수(GCD) 함수 (유클리드 호제법)
    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }

    // 최소공배수(LCM) 함수
    function lcm(a, b) {
        return (a * b) / gcd(a, b);
    }

    // 배열 전체에 대해 누적 최소공배수 계산
    return arr.reduce((acc, cur) => lcm(acc, cur));
}

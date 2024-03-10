// 무방향 그래프에서 사이클 여부 확인
function isCycle(x, prev) {
    // 현재노드 방문 처리
    visited[x] = true;
    // x의 인접노드 하나씩 확인ㅁ
    for (let y of graph[x]) {
        // 다음 노드를 아직 방문하지 않았고
        if (!visited[y]) {
            // 다음 노드 기준으로 사이클이면
            if (isCycle(y, x)) return true;
        
        // 방문한 적 있고, 직전 노드가 아니면 사이클
        } else if (y != prev) {
            return true;
        }
    }
}
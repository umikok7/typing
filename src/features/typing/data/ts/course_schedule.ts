function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const graph: number[][] = Array.from({ length: numCourses }, () => []);
    const indegree = new Array(numCourses).fill(0);
    for (const p of prerequisites) {
        graph[p[1]].push(p[0]);
        indegree[p[0]]++;
    }
    const queue: number[] = [];
    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] === 0) {
            queue.push(i);
        }
    }
    let done = 0;
    while (queue.length > 0) {
        const course = queue.shift()!;
        done++;
        for (const next of graph[course]) {
            indegree[next]--;
            if (indegree[next] === 0) {
                queue.push(next);
            }
        }
    }
    return done === numCourses;
}

import 'dart:collection';

class Solution {
  bool canFinish(int numCourses, List<List<int>> prerequisites) {
    List<List<int>> graph = List.generate(numCourses, (_) => []);
    List<int> indegree = List.filled(numCourses, 0);
    for (var p in prerequisites) {
      graph[p[1]].add(p[0]);
      indegree[p[0]]++;
    }
    Queue<int> queue = Queue();
    for (var i = 0; i < numCourses; i++) {
      if (indegree[i] == 0) {
        queue.add(i);
      }
    }
    int done = 0;
    while (queue.isNotEmpty) {
      int course = queue.removeFirst();
      done++;
      for (var next in graph[course]) {
        indegree[next]--;
        if (indegree[next] == 0) {
          queue.add(next);
        }
      }
    }
    return done == numCourses;
  }
}

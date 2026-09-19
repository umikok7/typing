class LRUCache {
  final int _capacity;
  final Map<int, int> _cache = <int, int>{};

  LRUCache(int capacity) : _capacity = capacity;

  int get(int key) {
    if (!_cache.containsKey(key)) {
      return -1;
    }
    final value = _cache[key]!;
    _cache.remove(key);
    _cache[key] = value;
    return value;
  }

  void put(int key, int value) {
    _cache.remove(key);
    _cache[key] = value;
    if (_cache.length > _capacity) {
      _cache.remove(_cache.keys.first);
    }
  }
}

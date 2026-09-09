import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Map;

class LRUCache {
    private final int capacity;
    private final Map<Integer, Integer> cache = new LinkedHashMap<>(16, 0.75f, true);

    public LRUCache(int capacity) {
        this.capacity = capacity;
    }

    public int get(int key) {
        Integer value = cache.get(key);
        return value == null ? -1 : value;
    }

    public void put(int key, int value) {
        cache.put(key, value);
        if (cache.size() > capacity) {
            Iterator<Integer> keys = cache.keySet().iterator();
            cache.remove(keys.next());
        }
    }
}

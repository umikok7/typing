class Trie {
  final List<Trie?> _children = List.filled(26, null);
  bool _isEnd = false;

  void insert(String word) {
    Trie node = this;
    for (int i = 0; i < word.length; i++) {
      final int idx = word.codeUnitAt(i) - 97;
      node._children[idx] ??= Trie();
      node = node._children[idx]!;
    }
    node._isEnd = true;
  }

  bool search(String word) {
    final node = _searchPrefix(word);
    return node != null && node._isEnd;
  }

  bool startsWith(String prefix) {
    return _searchPrefix(prefix) != null;
  }

  Trie? _searchPrefix(String prefix) {
    Trie node = this;
    for (int i = 0; i < prefix.length; i++) {
      final Trie? next = node._children[prefix.codeUnitAt(i) - 97];
      if (next == null) {
        return null;
      }
      node = next;
    }
    return node;
  }
}

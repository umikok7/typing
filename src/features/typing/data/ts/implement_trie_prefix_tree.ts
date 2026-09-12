class Trie {
    private children: (Trie | null)[];
    private isEnd: boolean;

    constructor() {
        this.children = new Array(26).fill(null);
        this.isEnd = false;
    }

    insert(word: string): void {
        let node: Trie = this;
        for (const ch of word) {
            const idx = ch.charCodeAt(0) - 97;
            if (node.children[idx] === null) {
                node.children[idx] = new Trie();
            }
            node = node.children[idx]!;
        }
        node.isEnd = true;
    }

    search(word: string): boolean {
        const node = this.searchPrefix(word);
        return node !== null && node.isEnd;
    }

    startsWith(prefix: string): boolean {
        return this.searchPrefix(prefix) !== null;
    }

    private searchPrefix(prefix: string): Trie | null {
        let node: Trie | null = this;
        for (const ch of prefix) {
            node = node.children[ch.charCodeAt(0) - 97];
            if (node === null) {
                return null;
            }
        }
        return node;
    }
}

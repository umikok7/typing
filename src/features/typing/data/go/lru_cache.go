package main

type Node struct {
	key   int
	value int
	prev  *Node
	next  *Node
}

type LRUCache struct {
	capacity int
	cache    map[int]*Node
	head     *Node
	tail     *Node
}

func Constructor(capacity int) LRUCache {
	return LRUCache{
		capacity: capacity,
		cache:    make(map[int]*Node),
	}
}

func (c *LRUCache) Get(key int) int {
	node, ok := c.cache[key]
	if !ok {
		return -1
	}
	c.moveToFront(node)
	return node.value
}

func (c *LRUCache) Put(key int, value int) {
	if node, ok := c.cache[key]; ok {
		node.value = value
		c.moveToFront(node)
		return
	}
	node := &Node{key: key, value: value}
	c.cache[key] = node
	c.pushFront(node)
	if len(c.cache) > c.capacity {
		c.removeTail()
	}
}

func (c *LRUCache) moveToFront(node *Node) {
	if c.head == node {
		return
	}
	c.unlink(node)
	c.pushFront(node)
}

func (c *LRUCache) pushFront(node *Node) {
	node.prev = nil
	node.next = c.head
	if c.head != nil {
		c.head.prev = node
	}
	c.head = node
	if c.tail == nil {
		c.tail = node
	}
}

func (c *LRUCache) removeTail() {
	old := c.tail
	c.unlink(old)
	delete(c.cache, old.key)
}

func (c *LRUCache) unlink(node *Node) {
	if node.prev != nil {
		node.prev.next = node.next
	} else {
		c.head = node.next
	}
	if node.next != nil {
		node.next.prev = node.prev
	} else {
		c.tail = node.prev
	}
	node.prev = nil
	node.next = nil
}

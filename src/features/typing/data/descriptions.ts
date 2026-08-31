import type { ProblemDescription, ProblemExample } from '../types';

function d(
  statement: string,
  examples: ProblemExample[],
  constraints: string[]
): ProblemDescription {
  return { statement, examples, constraints };
}

export const descriptions: Record<string, ProblemDescription> = {
  'two-sum': d(
    '给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出和为目标值 target 的那两个整数，并返回它们的数组下标。你可以假设每种输入只会对应一个答案，并且同一个元素在答案里不能重复出现。你可以按任意顺序返回答案。',
    [
      {
        input: 'nums = [2,7,11,15], target = 9',
        output: '[0,1]',
        explanation: '因为 nums[0] + nums[1] == 9，返回 [0, 1]。'
      },
      { input: 'nums = [3,2,4], target = 6', output: '[1,2]' }
    ],
    ['2 <= nums.length <= 10^4', '-10^9 <= nums[i] <= 10^9', '-10^9 <= target <= 10^9', '只会存在一个有效答案']
  ),
  'add-two-numbers': d(
    '给你两个非空的链表，表示两个非负的整数。它们每位数字都是按照逆序的方式存储的，并且每个节点只能存储一位数字。请你将两个数相加，并以相同形式返回一个表示和的链表。你可以假设除了数字 0 之外，这两个数都不会以 0 开头。',
    [
      {
        input: 'l1 = [2,4,3], l2 = [5,6,4]',
        output: '[7,0,8]',
        explanation: '342 + 465 = 807。'
      }
    ],
    ['每个链表中的节点数在范围 [1, 100] 内', '0 <= Node.val <= 9', '题目数据保证列表表示的数字不含前导零']
  ),
  'longest-substring-without-repeating-characters': d(
    '给定一个字符串 s，请你找出其中不含有重复字符的最长子串的长度。',
    [
      {
        input: 's = "abcabcbb"',
        output: '3',
        explanation: '因为无重复字符的最长子串是 "abc"，所以其长度为 3。'
      },
      { input: 's = "bbbbb"', output: '1' }
    ],
    ['0 <= s.length <= 5 * 10^4', 's 由英文字母、数字、符号和空格组成']
  ),
  'median-of-two-sorted-arrays': d(
    '给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的中位数。算法的时间复杂度应该为 O(log(m+n))。',
    [
      { input: 'nums1 = [1,3], nums2 = [2]', output: '2.00000', explanation: '合并数组 = [1,2,3]，中位数 2。' },
      { input: 'nums1 = [1,2], nums2 = [3,4]', output: '2.50000', explanation: '合并数组 = [1,2,3,4]，中位数 (2+3)/2 = 2.5。' }
    ],
    ['1 <= m + n <= 2000', '-10^6 <= nums1[i], nums2[i] <= 10^6']
  ),
  'longest-palindromic-substring': d(
    '给你一个字符串 s，找到 s 中最长的回文子串。',
    [
      { input: 's = "babad"', output: '"bab"', explanation: '"aba" 同样是符合题意的答案。' },
      { input: 's = "cbbd"', output: '"bb"' }
    ],
    ['1 <= s.length <= 1000', 's 仅由数字和英文字母组成']
  ),
  'container-with-most-water': d(
    '给定一个长度为 n 的整数数组 height。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i])。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。返回容器可以储存的最大水量。不能倾斜容器。',
    [
      { input: 'height = [1,8,6,2,5,4,8,3,7]', output: '49', explanation: '容器能够容纳水的最大值为 49。' }
    ],
    ['n == height.length', '2 <= n <= 10^5', '0 <= height[i] <= 10^4']
  ),
  '3sum': d(
    '给你一个整数数组 nums，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k，同时还满足 nums[i] + nums[j] + nums[k] == 0。请你返回所有和为 0 且不重复的三元组。',
    [{ input: 'nums = [-1,0,1,2,-1,-4]', output: '[[-1,-1,2],[-1,0,1]]' }],
    ['3 <= nums.length <= 3000', '-10^5 <= nums[i] <= 10^5']
  ),
  'letter-combinations-of-a-phone-number': d(
    '给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按任意顺序返回。数字与字母的对应关系与电话按键相同。',
    [
      { input: 'digits = "23"', output: '["ad","ae","af","bd","be","bf","cd","ce","cf"]' },
      { input: 'digits = ""', output: '[]' }
    ],
    ['0 <= digits.length <= 4', "digits[i] 是范围 ['2', '9'] 的一个数字"]
  ),
  'remove-nth-node-from-end-of-list': d(
    '给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。',
    [{ input: 'head = [1,2,3,4,5], n = 2', output: '[1,2,3,5]' }],
    ['链表中结点的数目为 sz，1 <= sz <= 30', '0 <= Node.val <= 100', '1 <= n <= sz']
  ),
  'valid-parentheses': d(
    "给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s，判断字符串是否有效。有效字符串需满足：左括号必须用相同类型的右括号闭合；左括号必须以正确的顺序闭合；每个右括号都有一个对应的相同类型的左括号。",
    [
      { input: 's = "()[]{}"', output: 'true' },
      { input: 's = "(]"', output: 'false' }
    ],
    ['1 <= s.length <= 10^4', 's 仅由括号组成']
  ),
  'merge-two-sorted-lists': d(
    '将两个升序链表合并为一个新的升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。',
    [{ input: 'list1 = [1,2,4], list2 = [1,3,4]', output: '[1,1,2,3,4,4]' }],
    ['两个链表的节点数目范围是 [0, 50]', '-100 <= Node.val <= 100', 'l1 和 l2 均按非递减顺序排列']
  ),
  'generate-parentheses': d(
    '数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且有效的括号组合。',
    [{ input: 'n = 3', output: '["((()))","(()())","(())()","()(())","()()()"]' }],
    ['1 <= n <= 8']
  ),
  'merge-k-sorted-lists': d(
    '给你一个链表数组，每个链表都已经按升序排列。请你将所有链表合并到一个升序链表中，返回合并后的链表。',
    [{ input: 'lists = [[1,4,5],[1,3,4],[2,6]]', output: '[1,1,2,3,4,4,5,6]' }],
    ['k == lists.length', '0 <= k <= 10^4', '0 <= lists[i].length <= 500', '每个链表都按升序排列']
  ),
  'search-in-rotated-sorted-array': d(
    '整数数组 nums 按升序排列，数组中的值互不相同。在传递给函数之前，nums 在预先未知的某个下标 k 上进行了旋转。给你旋转后的数组 nums 和一个整数 target，如果 nums 中存在这个目标值 target，则返回它的下标，否则返回 -1。必须设计一个时间复杂度为 O(log n) 的算法。',
    [{ input: 'nums = [4,5,6,7,0,1,2], target = 0', output: '4' }],
    ['1 <= nums.length <= 5000', 'nums 中的每个值都独一无二']
  ),
  'find-first-and-last-position-of-element-in-sorted-array': d(
    '给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。如果数组中不存在目标值 target，返回 [-1, -1]。必须设计并实现时间复杂度为 O(log n) 的算法。',
    [{ input: 'nums = [5,7,7,8,8,10], target = 8', output: '[3,4]' }],
    ['0 <= nums.length <= 10^5', '-10^9 <= nums[i] <= 10^9']
  ),
  'trapping-rain-water': d(
    '给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。',
    [{ input: 'height = [0,1,0,2,1,0,1,3,2,1,2,1]', output: '6' }],
    ['n == height.length', '1 <= n <= 2 * 10^4', '0 <= height[i] <= 10^5']
  ),
  permutations: d(
    '给定一个不含重复数字的数组 nums，返回其所有可能的全排列。你可以按任意顺序返回答案。',
    [{ input: 'nums = [1,2,3]', output: '[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]' }],
    ['1 <= nums.length <= 6', '所有整数互不相同']
  ),
  'rotate-image': d(
    '给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。你必须在原地旋转图像，这意味着你需要直接修改输入的二维矩阵，请不要使用另一个矩阵来旋转图像。',
    [{ input: 'matrix = [[1,2,3],[4,5,6],[7,8,9]]', output: '[[7,4,1],[8,5,2],[9,6,3]]' }],
    ['n == matrix.length == matrix[i].length', '1 <= n <= 20']
  ),
  'group-anagrams': d(
    '给你一个字符串数组，请你将字母异位词组合在一起。可以按任意顺序返回结果列表。字母异位词指由相同字母重新排列组合后得到的新字符串。',
    [
      {
        input: 'strs = ["eat","tea","tan","ate","nat","bat"]',
        output: '[["bat"],["nat","tan"],["ate","eat","tea"]]'
      }
    ],
    ['1 <= strs.length <= 10^4', '0 <= strs[i].length <= 100']
  ),
  'maximum-subarray': d(
    '给你一个整数数组 nums，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。子数组是数组中的一个连续部分。',
    [
      {
        input: 'nums = [-2,1,-3,4,-1,2,1,-5,4]',
        output: '6',
        explanation: '连续子数组 [4,-1,2,1] 的和最大，为 6。'
      }
    ],
    ['1 <= nums.length <= 10^5', '-10^4 <= nums[i] <= 10^4']
  ),
  'merge-intervals': d(
    '以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi]。请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。',
    [{ input: 'intervals = [[1,3],[2,6],[8,10],[15,18]]', output: '[[1,6],[8,10],[15,18]]' }],
    ['1 <= intervals.length <= 10^4', 'intervals[i].length == 2']
  ),
  'climbing-stairs': d(
    '假设你正在爬楼梯。需要 n 阶你才能到达楼顶。每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？',
    [
      { input: 'n = 2', output: '2', explanation: '有两种方法可以爬到楼顶：1 阶 + 1 阶；2 阶。' },
      { input: 'n = 3', output: '3' }
    ],
    ['1 <= n <= 45']
  ),
  'binary-tree-inorder-traversal': d(
    '给定一个二叉树的根节点 root，返回它的中序遍历。',
    [{ input: 'root = [1,null,2,3]', output: '[1,3,2]' }],
    ['树中节点数目在范围 [0, 100] 内', '-100 <= Node.val <= 100']
  ),
  'binary-tree-level-order-traversal': d(
    '给你二叉树的根节点 root，返回其节点值的层序遍历（即逐层地，从左到右访问所有节点）。',
    [{ input: 'root = [3,9,20,null,null,15,7]', output: '[[3],[9,20],[15,7]]' }],
    ['树中节点数目在范围 [0, 2000] 内', '-1000 <= Node.val <= 1000']
  ),
  'best-time-to-buy-and-sell-stock': d(
    '给定一个数组 prices，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。你只能选择某一天买入这只股票，并选择在未来的某一个不同的日子卖出该股票。设计一个算法来计算你所能获取的最大利润。如果你不能获取任何利润，返回 0。',
    [
      {
        input: 'prices = [7,1,5,3,6,4]',
        output: '5',
        explanation: '在第 2 天（价格 = 1）买入，在第 5 天（价格 = 6）卖出，最大利润 = 6 - 1 = 5。'
      }
    ],
    ['1 <= prices.length <= 10^5', '0 <= prices[i] <= 10^4']
  ),
  'longest-consecutive-sequence': d(
    '给定一个未排序的整数数组 nums，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。请你设计并实现时间复杂度为 O(n) 的算法解决此问题。',
    [
      { input: 'nums = [100,4,200,1,3,2]', output: '4', explanation: '最长数字连续序列是 [1, 2, 3, 4]，长度为 4。' }
    ],
    ['0 <= nums.length <= 10^5', '-10^9 <= nums[i] <= 10^9']
  ),
  'lru-cache': d(
    '请你设计并实现一个满足 LRU（最近最少使用）缓存约束的数据结构。实现 LRUCache 类：LRUCache(int capacity) 以正整数作为容量初始化 LRU 缓存；int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1；void put(int key, int value) 如果关键字 key 已经存在，则变更其数据值；如果不存在，则向缓存中插入该组 key-value。如果插入操作导致关键字数量超过 capacity，则应该逐出最久未使用的关键字。',
    [
      {
        input: '["LRUCache","put","put","get","put","get","put","get","get","get"] 容量 = 2',
        output: '[null,null,null,1,null,-1,null,-1,3,4]'
      }
    ],
    ['1 <= capacity <= 3000', '0 <= key <= 10^4', '0 <= value <= 10^5', '最多调用 2 * 10^5 次']
  ),
  'reverse-linked-list': d(
    '给你单链表的头节点 head，请你反转链表，并返回反转后的链表。',
    [{ input: 'head = [1,2,3,4,5]', output: '[5,4,3,2,1]' }],
    ['链表中节点的数目范围是 [0, 5000]', '-5000 <= Node.val <= 5000']
  ),
  'minimum-window-substring': d(
    '给你一个字符串 s、一个字符串 t。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 ""。对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。如果 s 中存在这样的子串，我们保证它是唯一的答案。',
    [{ input: 's = "ADOBECODEBANC", t = "ABC"', output: '"BANC"' }],
    ['1 <= s.length, t.length <= 10^5', 's 和 t 由英文字母组成']
  ),
  'largest-rectangle-in-histogram': d(
    '给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1。求在该柱状图中，能够勾勒出来的矩形的最大面积。',
    [{ input: 'heights = [2,1,5,6,2,3]', output: '10' }],
    ['1 <= heights.length <= 10^5', '0 <= heights[i] <= 10^4']
  )
};

const EMPTY_DESCRIPTION: ProblemDescription = { statement: '', examples: [], constraints: [] };

export function getDescription(id: string): ProblemDescription {
  return descriptions[id] ?? EMPTY_DESCRIPTION;
}

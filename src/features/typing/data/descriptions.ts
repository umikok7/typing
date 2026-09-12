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
    [
      '2 <= nums.length <= 10^4',
      '-10^9 <= nums[i] <= 10^9',
      '-10^9 <= target <= 10^9',
      '只会存在一个有效答案'
    ]
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
    [
      '每个链表中的节点数在范围 [1, 100] 内',
      '0 <= Node.val <= 9',
      '题目数据保证列表表示的数字不含前导零'
    ]
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
      {
        input: 'nums1 = [1,3], nums2 = [2]',
        output: '2.00000',
        explanation: '合并数组 = [1,2,3]，中位数 2。'
      },
      {
        input: 'nums1 = [1,2], nums2 = [3,4]',
        output: '2.50000',
        explanation: '合并数组 = [1,2,3,4]，中位数 (2+3)/2 = 2.5。'
      }
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
      {
        input: 'height = [1,8,6,2,5,4,8,3,7]',
        output: '49',
        explanation: '容器能够容纳水的最大值为 49。'
      }
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
      {
        input: 'nums = [100,4,200,1,3,2]',
        output: '4',
        explanation: '最长数字连续序列是 [1, 2, 3, 4]，长度为 4。'
      }
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
  ),
  'binary-tree-maximum-path-sum': d(
    '路径被定义为一条从树中任意节点出发，沿父节点-子节点连接，达到任意节点的序列。该路径至少包含一个节点，且不一定经过根节点。路径和是路径中各节点值的总和。给你二叉树的根节点 root，返回其最大路径和。',
    [
      {
        input: 'root = [1,2,3]',
        output: '6',
        explanation: '最优路径是 2 -> 1 -> 3，路径和为 2 + 1 + 3 = 6。'
      },
      {
        input: 'root = [-10,9,20,null,null,15,7]',
        output: '42',
        explanation: '最优路径是 15 -> 20 -> 7，路径和为 15 + 20 + 7 = 42。'
      }
    ],
    ['树中节点数目范围是 [1, 3 * 10^4]', '-1000 <= Node.val <= 1000']
  ),
  'binary-tree-right-side-view': d(
    '给定一个二叉树的根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。',
    [
      { input: 'root = [1,2,3,null,5,null,4]', output: '[1,3,4]' },
      { input: 'root = [1,null,3]', output: '[1,3]' },
      { input: 'root = []', output: '[]' }
    ],
    ['树中节点的个数在范围 [0, 100] 内', '-100 <= Node.val <= 100']
  ),
  'coin-change': d(
    '给你一个整数数组 coins，表示不同面额的硬币；以及一个整数 amount，表示总金额。计算并返回可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。你可以认为每种硬币的数量是无限的。',
    [
      {
        input: 'coins = [1,2,5], amount = 11',
        output: '3',
        explanation: '11 = 5 + 5 + 1。'
      },
      { input: 'coins = [2], amount = 3', output: '-1' },
      { input: 'coins = [1], amount = 0', output: '0' }
    ],
    ['1 <= coins.length <= 12', '1 <= coins[i] <= 2^31 - 1', '0 <= amount <= 10^4']
  ),
  'combination-sum': d(
    '给你一个无重复元素的整数数组 candidates 和一个目标整数 target，找出 candidates 中可以使数字和为目标数 target 的所有不同组合。candidates 中的每个数字可以被选取的次数不限。如果至少一个所选数字数量不同，则两种组合是不同的。你可以按任意顺序返回所有组合。',
    [
      {
        input: 'candidates = [2,3,6,7], target = 7',
        output: '[[2,2,3],[7]]',
        explanation: '2 + 2 + 3 = 7；7 = 7。'
      },
      { input: 'candidates = [2,3,5], target = 8', output: '[[2,2,2,2],[2,3,3],[3,5]]' }
    ],
    [
      '1 <= candidates.length <= 30',
      '2 <= candidates[i] <= 40',
      'candidates 的所有元素互不相同',
      '1 <= target <= 40'
    ]
  ),
  'construct-binary-tree-from-preorder-and-inorder-traversal': d(
    '给定两个整数数组 preorder 和 inorder，其中 preorder 是二叉树的前序遍历，inorder 是同一棵树的中序遍历，请构造二叉树并返回其根节点。',
    [
      {
        input: 'preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]',
        output: '[3,9,20,null,null,15,7]'
      },
      { input: 'preorder = [-1], inorder = [-1]', output: '[-1]' }
    ],
    [
      '1 <= preorder.length <= 3000',
      'inorder.length == preorder.length',
      '-3000 <= preorder[i], inorder[i] <= 3000',
      'preorder 和 inorder 均无重复元素'
    ]
  ),
  'convert-sorted-array-to-binary-search-tree': d(
    '给你一个整数数组 nums，其中元素已经按升序排列，请你将其转换为一棵高度平衡的二叉搜索树。高度平衡二叉树是一棵满足每个节点的左右两个子树的高度差的绝对值不超过 1 的二叉树。',
    [
      { input: 'nums = [-10,-3,0,5,9]', output: '[0,-3,9,-10,null,5]' },
      { input: 'nums = [1,3]', output: '[3,1]' }
    ],
    ['1 <= nums.length <= 10^4', '-10^4 <= nums[i] <= 10^4', 'nums 按严格递增顺序排列']
  ),
  'copy-list-with-random-pointer': d(
    '给你一个长度为 n 的链表，每个节点包含一个额外增加的随机指针 random，该指针可以指向链表中的任何节点或空节点。构造这个链表的深拷贝，深拷贝应该正好由 n 个全新节点组成，其中每个新节点的值都设为其对应的原节点的值。新节点的 next 指针和 random 指针也都应指向复制链表中的相应节点，并使原链表和复制链表中的这些指针能够表示相同的链表状态。复制链表中的指针都不应指向原链表中的任何节点。返回复制链表的头节点。',
    [
      {
        input: 'head = [[7,null],[13,0],[11,4],[10,2],[1,0]]',
        output: '[[7,null],[13,0],[11,4],[10,2],[1,0]]'
      },
      { input: 'head = [[1,1],[2,1]]', output: '[[1,1],[2,1]]' }
    ],
    ['0 <= n <= 1000', '-10^4 <= Node.val <= 10^4', 'Node.random 为 null 或指向链表中的节点']
  ),
  'course-schedule': d(
    '你这个学期必须选修 numCourses 门课程，编号为 0 到 numCourses - 1。有些课程会有先修课程，例如想学习课程 0 则需要先完成课程 1，我们用一个匹配来表示：[0, 1]。给定课程总数 numCourses 和一个表示先修关系的数组 prerequisites，其中 prerequisites[i] = [ai, bi] 表示如果想学习课程 ai 则必须先完成课程 bi。请你判断是否可能完成所有课程的学习。如果可以，返回 true；否则，返回 false。',
    [
      { input: 'numCourses = 2, prerequisites = [[1,0]]', output: 'true' },
      {
        input: 'numCourses = 2, prerequisites = [[1,0],[0,1]]',
        output: 'false',
        explanation:
          '总共有 2 门课程。学习课程 1 之前需要完成课程 0，学习课程 0 之前需要完成课程 1，这是不可能的。'
      }
    ],
    [
      '1 <= numCourses <= 2000',
      '0 <= prerequisites.length <= 5000',
      'prerequisites 中的所有课程对互不相同'
    ]
  ),
  'daily-temperatures': d(
    '给定一个整数数组 temperatures 表示每天的温度，返回一个数组 answer，其中 answer[i] 是指对于第 i 天，下一个更高温度出现在几天后。如果气温在这之后都不会升高，请在该位置用 0 来代替。',
    [
      { input: 'temperatures = [73,74,75,71,69,72,76,73]', output: '[1,1,4,2,1,1,0,0]' },
      { input: 'temperatures = [30,40,50,60]', output: '[1,1,1,0]' }
    ],
    ['1 <= temperatures.length <= 10^5', '30 <= temperatures[i] <= 100']
  ),
  'decode-string': d(
    '给你一个经过编码的字符串，返回它解码后的字符串。编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入方括号总是符合格式要求的。此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k。',
    [
      { input: 's = "3[a]2[bc]"', output: '"aaabcbc"' },
      { input: 's = "3[a2[c]]"', output: '"accaccacc"' },
      { input: 's = "2[abc]3[cd]ef"', output: '"abcabccdcdcdef"' }
    ],
    ['1 <= s.length <= 30', 's 由小写英文字母、数字和方括号组成', 's 保证是一个有效的输入']
  ),
  'diameter-of-binary-tree': d(
    '给你一棵二叉树的根节点 root，返回该树的直径。二叉树的直径是指树中任意两个节点之间最长路径的长度。这条路径可能经过也可能不经过根节点 root。两节点之间路径的长度由它们之间边数表示。',
    [
      {
        input: 'root = [1,2,3,4,5]',
        output: '3',
        explanation: '路径 [4,2,1,3] 或 [5,2,1,3] 的长度为 3。'
      },
      { input: 'root = [1,2]', output: '1' }
    ],
    ['树中节点数目在范围 [1, 10^4] 内', '-100 <= Node.val <= 100']
  ),
  'edit-distance': d(
    '给你两个单词 word1 和 word2，请返回将 word1 转换成 word2 所使用的最少操作数。你可以对一个单词进行如下三种操作：插入一个字符；删除一个字符；替换一个字符。',
    [
      {
        input: 'word1 = "horse", word2 = "ros"',
        output: '3',
        explanation:
          'horse -> rorse（将 h 替换为 r）；rorse -> rose（删除 r）；rose -> ros（删除 e）。'
      },
      {
        input: 'word1 = "intention", word2 = "execution"',
        output: '5',
        explanation:
          'intention -> inention（删除 t）；inention -> enention（将 i 替换为 e）；enention -> exention（将 n 替换为 x）；exention -> exection（将 n 替换为 c）；exection -> execution（插入 u）。'
      }
    ],
    ['0 <= word1.length, word2.length <= 500', 'word1 和 word2 由小写英文字母组成']
  ),
  'find-median-from-data-stream': d(
    '中位数是有序整数列表中的中间值。如果列表的长度是偶数，则没有中间值，此时中位数是两个中间值的平均值。例如 arr = [2,3,4] 的中位数是 3，arr = [2,3,4,5] 的中位数是 (2+3)/2 = 2.5。实现 MedianFinder 类：MedianFinder() 初始化 MedianFinder 对象；void addNum(int num) 将数据流中的整数 num 添加到数据结构中；double findMedian() 返回目前所有元素的中位数。',
    [
      {
        input: '["MedianFinder","addNum","addNum","findMedian","addNum","findMedian"]',
        output: '[null,null,null,1.5,null,2.0]',
        explanation: '依次添加 1 和 2 后，中位数为 1.5；再添加 3 后，中位数为 2.0。'
      }
    ],
    [
      '-10^5 <= num <= 10^5',
      '在调用 findMedian 之前，数据结构中至少有一个元素',
      '最多调用 addNum 和 findMedian 共 5 * 10^4 次'
    ]
  ),
  'find-minimum-in-rotated-sorted-array': d(
    '已知一个长度为 n 的数组 nums 预先按照升序排列，旋转 1 到 n 次后得到输入数组。例如原数组 nums = [0,1,2,4,5,6,7] 在变化后可能得到：若旋转 4 次，则可以得到 [4,5,6,7,0,1,2]；若旋转 7 次，则可以得到 [0,1,2,4,5,6,7] 本身。注意，数组 [a[0], a[1], a[2], ..., a[n-1]] 旋转一次的结果为数组 [a[n-1], a[0], a[1], a[2], ..., a[n-2]]。给你一个元素值互不相同的数组 nums，它原来是一个升序排列的数组，并按上述情形进行了多次旋转。请你找出并返回数组中的最小元素。你必须设计一个时间复杂度为 O(log n) 的算法。',
    [
      {
        input: 'nums = [3,4,5,1,2]',
        output: '1',
        explanation: '原数组为 [1,2,3,4,5]，旋转 3 次得到输入数组。'
      },
      { input: 'nums = [4,5,6,7,0,1,2]', output: '0' }
    ],
    ['n == nums.length', '1 <= n <= 5000', 'nums 中的所有整数互不相同']
  ),
  'find-the-duplicate-number': d(
    '给定一个包含 n + 1 个整数的数组 nums，其数字都在 [1, n] 范围内（包括 1 和 n），可知至少存在一个重复的整数。请你找出 nums 中重复的那个数。你必须不修改数组 nums，且只用常量级 O(1) 的额外空间。',
    [
      { input: 'nums = [1,3,4,2,2]', output: '2' },
      { input: 'nums = [3,1,3,4,2]', output: '3' }
    ],
    [
      '1 <= n <= 10^5',
      'nums.length == n + 1',
      '1 <= nums[i] <= n',
      'nums 中只有一个整数出现两次或多次，其余整数均只出现一次'
    ]
  ),
  'first-missing-positive': d(
    '给你一个未排序的整数数组 nums，请你找出其中没有出现的最小的正整数。请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。',
    [
      { input: 'nums = [1,2,0]', output: '3' },
      { input: 'nums = [3,4,-1,1]', output: '2' },
      { input: 'nums = [7,8,9,11,12]', output: '1' }
    ],
    ['1 <= nums.length <= 5 * 10^5', '-2^31 <= nums[i] <= 2^31 - 1']
  ),
  'flatten-binary-tree-to-linked-list': d(
    '给你二叉树的根节点 root，请你将它展开为一个单链表：展开后的单链表应该同样使用 TreeNode，其中 right 子指针指向链表中下一个节点，而左子指针始终为 null。展开后的单链表应该与二叉树先序遍历顺序相同。',
    [
      {
        input: 'root = [1,2,5,3,4,null,6]',
        output: '[1,null,2,null,3,null,4,null,5,null,6]'
      }
    ],
    [
      '树中节点数目在范围 [0, 2000] 内',
      '-100 <= Node.val <= 100',
      '你可以使用原地算法（O(1) 额外空间）展开这棵树吗？'
    ]
  ),
  'game-of-life': d(
    '生命游戏中，二维网格中的每个细胞都处于存活（1）或死亡（0）状态。每个细胞根据其自身及八个相邻细胞的状态，遵循以下规则更新：如果存活邻居少于 2 个，则该细胞死亡；如果有 2 个或 3 个存活邻居，则该细胞存活；如果存活邻居超过 3 个，则该细胞死亡；如果该细胞为死亡状态且恰好有 3 个存活邻居，则该细胞变为存活。请使用原地算法同时更新所有细胞的状态，返回下一时刻的棋盘状态。',
    [
      {
        input: 'board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]',
        output: '[[0,0,0],[1,0,1],[0,1,1],[0,1,0]]'
      }
    ],
    ['m == board.length', 'n == board[i].length', '1 <= m, n <= 25', 'board[i][j] 为 0 或 1']
  ),
  'house-robber': d(
    '你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。给定一个代表每个房屋存放金额的非负整数数组 nums，计算你不触动警报装置的情况下，一夜之内能够偷窃到的最高金额。',
    [
      {
        input: 'nums = [1,2,3,1]',
        output: '4',
        explanation:
          '偷窃第 1 号房屋 (金额 = 1)，然后偷窃第 3 号房屋 (金额 = 3)，偷窃到的最高金额 = 1 + 3 = 4。'
      },
      {
        input: 'nums = [2,7,9,3,1]',
        output: '12',
        explanation: '偷窃第 1、3、5 号房屋 (金额 = 2、9、1)，偷窃到的最高金额 = 2 + 9 + 1 = 12。'
      }
    ],
    ['1 <= nums.length <= 100', '0 <= nums[i] <= 400']
  ),
  'implement-trie-prefix-tree': d(
    'Trie（发音类似 "try"）或者说前缀树是一种树形数据结构，用于高效地存储和检索字符串数据集中的键。请你实现 Trie 类：Trie() 初始化前缀树对象；void insert(String word) 向前缀树中插入字符串 word；boolean search(String word) 如果字符串 word 在前缀树中，返回 true，否则返回 false；boolean startsWith(String prefix) 如果之前已经插入的字符串 word 的前缀之一为 prefix，返回 true，否则返回 false。',
    [
      {
        input: '["Trie","insert","search","search","startsWith","insert","search"]',
        output: '[null,null,null,true,false,true,false]',
        explanation:
          '插入 "apple" 后 search("apple") 为 true、search("app") 为 false；startsWith("app") 为 true；再插入 "app" 后 search("app") 为 true。'
      }
    ],
    [
      '1 <= word.length, prefix.length <= 2000',
      'word 和 prefix 仅由小写英文字母组成',
      '最多调用 3 * 10^4 次 insert、search 和 startsWith'
    ]
  ),
  'intersection-of-two-linked-lists': d(
    '给你两个单链表的头节点 headA 和 headB，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 null。整个链式结构中不存在环。注意，函数返回结果后，链表必须保持其原始结构。',
    [
      {
        input: 'intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3',
        output: "Intersected at '8'"
      },
      {
        input: 'intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1',
        output: "Intersected at '2'"
      }
    ],
    [
      'listA 中节点数目为 m，listB 中节点数目为 n',
      '1 <= m, n <= 3 * 10^4',
      '1 <= Node.val <= 10^5',
      '0 <= skipA <= m, 0 <= skipB <= n'
    ]
  ),
  'invert-binary-tree': d(
    '给你一棵二叉树的根节点 root，翻转这棵二叉树，并返回其根节点。',
    [
      { input: 'root = [4,2,7,1,3,6,9]', output: '[4,7,2,9,6,3,1]' },
      { input: 'root = [2,1,3]', output: '[2,3,1]' }
    ],
    ['树中节点的数目范围是 [0, 100]', '-100 <= Node.val <= 100']
  ),
  'jump-game': d(
    '给你一个非负整数数组 nums，你最初位于数组的第一个下标。数组中的每个元素代表你在该位置可以跳跃的最大长度。判断你是否能够到达最后一个下标，如果可以，返回 true；否则，返回 false。',
    [
      {
        input: 'nums = [2,3,1,1,4]',
        output: 'true',
        explanation: '可以先跳 1 步，从下标 0 到达下标 1，然后再从下标 1 跳 3 步到达最后一个下标。'
      },
      {
        input: 'nums = [3,2,1,0,4]',
        output: 'false',
        explanation:
          '无论怎样，总会到达下标为 3 的位置。但该下标的最大跳跃长度是 0，所以永远不可能到达最后一个下标。'
      }
    ],
    ['1 <= nums.length <= 10^4', '0 <= nums[i] <= 10^5']
  ),
  'jump-game-ii': d(
    '给定一个长度为 n 的非负整数数组 nums，你最初位于数组的第一个下标。数组中的每个元素代表你在该位置可以跳跃的最大长度。你的目标是使用最少的跳跃次数到达数组的最后一个下标。假设你总是可以到达数组的最后一个下标。',
    [
      {
        input: 'nums = [2,3,1,1,4]',
        output: '2',
        explanation:
          '跳到最后一个位置的最小跳跃数是 2，从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。'
      },
      { input: 'nums = [2,3,0,1,4]', output: '2' }
    ],
    ['1 <= nums.length <= 10^4', '0 <= nums[i] <= 1000']
  ),
  'kth-largest-element-in-an-array': d(
    '给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。你必须设计并实现时间复杂度为 O(n) 的算法解决此问题。',
    [
      { input: 'nums = [3,2,1,5,6,4], k = 2', output: '5' },
      { input: 'nums = [3,2,3,1,2,4,5,5,6], k = 4', output: '4' }
    ],
    ['1 <= k <= nums.length <= 10^5', '-10^4 <= nums[i] <= 10^4']
  ),
  'kth-smallest-element-in-a-bst': d(
    '给定一个二叉搜索树的根节点 root，和一个整数 k，请你设计一个算法查找其中第 k 小的元素（从 1 开始计数）。',
    [
      { input: 'root = [3,1,4,null,2], k = 1', output: '1' },
      { input: 'root = [5,3,6,2,4,null,null,1], k = 3', output: '3' }
    ],
    [
      '树中的节点数为 n',
      '1 <= k <= n <= 10^4',
      '0 <= Node.val <= 10^4',
      '你可以使用中序遍历解决这个问题吗？'
    ]
  ),
  'linked-list-cycle': d(
    '给你一个链表的头节点 head，判断链表中是否有环。如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达它，则链表中存在环。为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。如果链表中存在环，则返回 true，否则返回 false。',
    [
      {
        input: 'head = [3,2,0,-4], pos = 1',
        output: 'true',
        explanation: '链表中有一个环，其尾部连接到第二个节点。'
      },
      {
        input: 'head = [1,2], pos = 0',
        output: 'true',
        explanation: '链表中有一个环，其尾部连接到第一个节点。'
      }
    ],
    [
      '链表中节点的数目范围是 [0, 10^4]',
      '-10^5 <= Node.val <= 10^5',
      '你能用 O(1)（即，常量）内存解决此问题吗？'
    ]
  ),
  'linked-list-cycle-ii': d(
    '给定一个链表的头节点 head，返回链表开始入环的第一个节点。如果链表无环，则返回 null。如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达它，则链表中存在环。为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。不允许修改链表。',
    [
      {
        input: 'head = [3,2,0,-4], pos = 1',
        output: '返回索引为 1 的链表节点',
        explanation: '链表中有一个环，其尾部连接到第二个节点。'
      },
      { input: 'head = [1], pos = -1', output: '返回 null', explanation: '链表中没有环。' }
    ],
    [
      '链表中节点的数目范围是 [0, 10^4]',
      '-10^5 <= Node.val <= 10^5',
      'pos 为 -1 或者链表中的一个有效的索引',
      '你能用 O(1) 额外空间解决此问题吗？'
    ]
  ),
  'longest-common-subsequence': d(
    '给定两个字符串 text1 和 text2，返回这两个字符串的最长公共子序列的长度。如果不存在公共子序列，返回 0。一个字符串的子序列是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。两个字符串的公共子序列是这两个字符串所共同拥有的子序列。',
    [
      {
        input: 'text1 = "abcde", text2 = "ace"',
        output: '3',
        explanation: '最长公共子序列是 "ace"，它的长度为 3。'
      },
      {
        input: 'text1 = "abc", text2 = "def"',
        output: '0',
        explanation: '两个字符串没有公共子序列，返回 0。'
      }
    ],
    ['1 <= text1.length, text2.length <= 1000', 'text1 和 text2 仅由小写英文字符组成']
  ),
  'longest-increasing-subsequence': d(
    '给你一个整数数组 nums，找到其中最长严格递增子序列的长度。子序列是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如 [3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。',
    [
      {
        input: 'nums = [10,9,2,5,3,7,101,18]',
        output: '4',
        explanation: '最长递增子序列是 [2,3,7,101]，因此长度为 4。'
      },
      { input: 'nums = [0,1,0,3,2,3]', output: '4' }
    ],
    [
      '1 <= nums.length <= 2500',
      '-10^4 <= nums[i] <= 10^4',
      '你能设计一个时间复杂度为 O(n log n) 的算法吗？'
    ]
  ),
  'longest-repeating-character-replacement': d(
    '给你一个字符串 s 和一个整数 k。你可以选择字符串中的任一字符，并将其更改为任何其他大写英文字符。该操作最多可执行 k 次。在执行上述操作后，返回包含相同字母的最长子字符串的长度。注意子字符串必须是连续的。',
    [
      {
        input: 's = "ABAB", k = 2',
        output: '4',
        explanation: '用两个 A 替换为两个 B，反之亦然。'
      },
      {
        input: 's = "AABABBA", k = 1',
        output: '4',
        explanation:
          '将中间的一个 A 替换为 B，字符串变为 "AABBBBA"。子串 "BBBB" 有最长的重复字母，答案为 4。'
      }
    ],
    ['1 <= s.length <= 10^5', 's 仅由大写英文字母组成', '0 <= k <= s.length']
  ),
  'longest-valid-parentheses': d(
    "给你一个只包含 '(' 和 ')' 的字符串 s，找出最长有效（格式正确且连续）括号子串的长度。",
    [
      { input: 's = "(()"', output: '2', explanation: '最长有效括号子串是 "()"。' },
      { input: 's = ")()())"', output: '4', explanation: '最长有效括号子串是 "()()"。' }
    ],
    ['0 <= s.length <= 3 * 10^4', "s[i] 为 '(' 或 ')'"]
  ),
  'lowest-common-ancestor-of-a-binary-tree': d(
    '给定一个二叉树，找到该树中两个指定节点的最近公共祖先。百度百科中最近公共祖先的定义为：对于有根树 T 的两个节点 p、q，最近公共祖先表示为一个节点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。',
    [
      {
        input: 'root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1',
        output: '3',
        explanation: '节点 5 和节点 1 的最近公共祖先是节点 3。'
      },
      {
        input: 'root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4',
        output: '5',
        explanation:
          '节点 5 和节点 4 的最近公共祖先是节点 5，因为根据定义最近公共祖先节点可以为节点本身。'
      }
    ],
    [
      '树中节点数目在范围 [2, 10^5] 内',
      '-10^9 <= Node.val <= 10^9',
      '所有 Node.val 互不相同',
      'p != q，且 p 和 q 均存在于给定的二叉树中'
    ]
  ),
  'majority-element': d(
    '给定一个大小为 n 的数组 nums，返回其中的多数元素。多数元素是指在数组中出现次数大于 n/2（向下取整）的元素。你可以假设数组是非空的，并且给定的数组总是存在多数元素。',
    [
      { input: 'nums = [3,2,3]', output: '3' },
      { input: 'nums = [2,2,1,1,1,2,2]', output: '2' }
    ],
    [
      'n == nums.length',
      '1 <= n <= 5 * 10^4',
      '-10^9 <= nums[i] <= 10^9',
      '你能设计时间复杂度为 O(n)、空间复杂度为 O(1) 的算法解决此问题吗？'
    ]
  ),
  'maximum-depth-of-binary-tree': d(
    '给定一个二叉树，找出其最大深度。二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。叶子节点是指没有子节点的节点。',
    [
      { input: 'root = [3,9,20,null,null,15,7]', output: '3' },
      { input: 'root = [1,null,2]', output: '2' }
    ],
    ['树中节点的数量在 [0, 10^4] 区间内', '-100 <= Node.val <= 100']
  ),
  'maximum-product-subarray': d(
    '给你一个整数数组 nums，请你找出数组中乘积最大的非空连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。测试用例的答案是一个 32 位整数。',
    [
      { input: 'nums = [2,3,-2,4]', output: '6', explanation: '子数组 [2,3] 有对应最大乘积 6。' },
      {
        input: 'nums = [-2,0,-1]',
        output: '0',
        explanation: '结果不能为 2，因为 [-2,-1] 不是子数组。'
      }
    ],
    [
      '1 <= nums.length <= 2 * 10^4',
      '-10 <= nums[i] <= 10',
      'nums 的任何前缀或后缀的乘积都保证是一个 32 位整数'
    ]
  ),
  'min-stack': d(
    '设计一个支持 push、pop、top 操作，并能在常数时间内检索到最小元素的栈。实现 MinStack 类：MinStack() 初始化堆栈对象；void push(int val) 将元素 val 推入堆栈；void pop() 删除堆栈顶部的元素；int top() 获取堆栈顶部的元素；int getMin() 获取堆栈中的最小元素。',
    [
      {
        input: '["MinStack","push","push","push","getMin","pop","top","getMin"]',
        output: '[null,null,null,null,-3,null,0,-2]',
        explanation: '依次 push -2、0、-3 后 getMin 返回 -3；pop 后 top 返回 0，getMin 返回 -2。'
      }
    ],
    [
      '-2^31 <= val <= 2^31 - 1',
      'pop、top 和 getMin 操作总是在非空栈上调用',
      '每个函数最多调用 3 * 10^4 次'
    ]
  ),
  'minimum-path-sum': d(
    '给定一个包含非负整数的 m x n 网格 grid，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。说明：每次只能向下或者向右移动一步。',
    [
      {
        input: 'grid = [[1,3,1],[1,5,1],[4,2,1]]',
        output: '7',
        explanation: '因为路径 1 → 3 → 1 → 1 → 1 的总和最小。'
      },
      { input: 'grid = [[1,2,3],[4,5,6]]', output: '12' }
    ],
    ['m == grid.length', 'n == grid[i].length', '1 <= m, n <= 200', '0 <= grid[i][j] <= 200']
  ),
  'minimum-size-subarray-sum': d(
    '给定一个含有 n 个正整数的数组 nums 和一个正整数 target，找出该数组中满足其总和大于等于 target 的长度最小的连续子数组 [numsl, numsl+1, ..., numsr-1, numsr]，并返回其长度。如果不存在符合条件的子数组，返回 0。',
    [
      {
        input: 'target = 7, nums = [2,3,1,2,4,3]',
        output: '2',
        explanation: '子数组 [4,3] 是该条件下的长度最小的子数组。'
      },
      { input: 'target = 4, nums = [1,4,4]', output: '1' }
    ],
    ['1 <= target <= 10^9', '1 <= nums.length <= 10^5', '1 <= nums[i] <= 10^4']
  ),
  'move-zeroes': d(
    '给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。请注意，必须在不复制数组的情况下原地对数组进行操作。',
    [
      { input: 'nums = [0,1,0,3,12]', output: '[1,3,12,0,0]' },
      { input: 'nums = [0]', output: '[0]' }
    ],
    ['1 <= nums.length <= 10^4', '-2^31 <= nums[i] <= 2^31 - 1', '你能尽量减少完成的操作次数吗？']
  ),
  'n-queens': d(
    "按照国际象棋的规则，皇后可以攻击与之处在同一行或同一列或同一斜线上的棋子。n 皇后问题研究的是如何将 n 个皇后放置在 n × n 的棋盘上，并且使皇后彼此之间不能相互攻击。给你一个整数 n，返回 n 皇后问题所有的不同解法。每一种解法包含一个不同的 n 皇后问题棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。",
    [
      {
        input: 'n = 4',
        output: '[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]',
        explanation: '如上图所示，4 皇后问题存在两个不同的解法。'
      },
      { input: 'n = 1', output: '[["Q"]]' }
    ],
    ['1 <= n <= 9']
  ),
  'next-permutation': d(
    '整数数组的一个排列就是将其所有成员的序列进行排序。整数的下一个排列是指其整数的字典序中下一个更大的排列。更正式地，如果数组的所有的排列根据其字典顺序从小到大排列在容器中，那么数组的下一个排列就是在这个有序容器中排在它后面的那个排列。如果不存在下一个更大的排列，那么数字必须重新排成最小排列（即，整个数组升序排列）。必须原地修改，只允许使用额外常数空间。',
    [
      { input: 'nums = [1,2,3]', output: '[1,3,2]' },
      {
        input: 'nums = [3,2,1]',
        output: '[1,2,3]',
        explanation: '输入数组已经是最接近的最大排列，重新排列返回最小的排列。'
      },
      { input: 'nums = [1,1,5]', output: '[1,5,1]' }
    ],
    ['1 <= nums.length <= 100', '0 <= nums[i] <= 100']
  ),
  'number-of-islands': d(
    "给你一个由 '1'（陆地）和 '0'（水）组成的二维网格 grid，请你计算网格中岛屿的数量。岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。此外，你可以假设该网格的四条边均被水包围。",
    [
      {
        input:
          'grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]',
        output: '1'
      },
      {
        input:
          'grid = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]',
        output: '3'
      }
    ],
    ['m == grid.length', 'n == grid[i].length', '1 <= m, n <= 300', "grid[i][j] 的值为 '0' 或 '1'"]
  ),
  'palindrome-partitioning': d(
    '给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是回文串。返回 s 所有可能的分割方案。',
    [
      { input: 's = "aab"', output: '[["a","a","b"],["aa","b"]]' },
      { input: 's = "a"', output: '[["a"]]' }
    ],
    ['1 <= s.length <= 16', 's 仅由小写英文字母组成']
  ),
  'partition-equal-subset-sum': d(
    '给你一个只包含正整数的非空数组 nums。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。',
    [
      {
        input: 'nums = [1,5,11,5]',
        output: 'true',
        explanation: '数组可以分割成 [1, 5, 5] 和 [11]。'
      },
      {
        input: 'nums = [1,2,3,5]',
        output: 'false',
        explanation: '数组不能分割成两个元素和相等的子集。'
      }
    ],
    ['1 <= nums.length <= 200', '1 <= nums[i] <= 100']
  ),
  'partition-labels': d(
    '给你一个字符串 s。我们要把这个字符串划分为尽可能多的片段，同一字母最多出现在一个片段中。注意，划分结果需要满足：将所有划分结果按顺序连接，得到的字符串仍然是 s。返回一个表示每个字符串片段的长度的列表。',
    [
      {
        input: 's = "ababcbacadefegdehijhklij"',
        output: '[9,7,8]',
        explanation: '划分结果为 "ababcbaca"、"defegde"、"hijhklij"。'
      },
      { input: 's = "eccbbbbdec"', output: '[10]' }
    ],
    ['1 <= s.length <= 500', 's 仅由小写英文字母组成']
  ),
  'pascals-triangle': d(
    '给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。在杨辉三角中，每个数是它左上方和右上方的数的和。',
    [
      { input: 'numRows = 5', output: '[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]' },
      { input: 'numRows = 1', output: '[[1]]' }
    ],
    ['1 <= numRows <= 30', '你可以优化你的算法到 O(k) 空间复杂度吗？']
  ),
  'path-sum-iii': d(
    '给定一棵二叉树的根节点 root 和一个整数 targetSum，求该二叉树里节点值之和等于 targetSum 的路径的数目。路径不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。',
    [
      {
        input: 'root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8',
        output: '3',
        explanation: '和等于 8 的路径有 3 条，如图所示。'
      },
      {
        input: 'root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22',
        output: '3'
      }
    ],
    [
      '二叉树的节点个数的范围是 [0, 1000]',
      '-10^9 <= Node.val <= 10^9',
      '-1000 <= targetSum <= 1000'
    ]
  ),
  'perfect-squares': d(
    '给你一个整数 n，返回和为 n 的完全平方数的最少数量。完全平方数是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。例如，1、4、9 和 16 都是完全平方数，而 3 和 11 不是。',
    [
      { input: 'n = 12', output: '3', explanation: '12 = 4 + 4 + 4。' },
      { input: 'n = 13', output: '2', explanation: '13 = 4 + 9。' }
    ],
    ['1 <= n <= 10^4']
  ),
  'product-of-array-except-self': d(
    '给你一个整数数组 nums，返回数组 answer，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。题目数据保证数组 nums 之中任意元素的全部前缀元素和后缀的乘积都在 32 位整数范围内。请不要使用除法，且在 O(n) 时间复杂度内完成此题。',
    [
      { input: 'nums = [1,2,3,4]', output: '[24,12,8,6]' },
      { input: 'nums = [-1,1,0,-3,3]', output: '[0,0,9,0,0]' }
    ],
    [
      '2 <= nums.length <= 10^5',
      '-30 <= nums[i] <= 30',
      '保证数组 nums 之中任意元素的全部前缀元素和后缀的乘积都在 32 位整数范围内',
      '你能使用 O(1) 的额外空间完成此题吗？'
    ]
  ),
  'reverse-nodes-in-k-group': d(
    '给你链表的头节点 head，每 k 个节点一组进行翻转，请你返回修改后的链表。k 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。',
    [
      { input: 'head = [1,2,3,4,5], k = 2', output: '[2,1,4,3,5]' },
      { input: 'head = [1,2,3,4,5], k = 3', output: '[3,2,1,4,5]' }
    ],
    [
      '链表中的节点数为 n',
      '1 <= k <= n <= 5000',
      '0 <= Node.val <= 1000',
      '你可以设计一个只用 O(1) 额外内存空间的算法解决此问题吗？'
    ]
  ),
  'rotate-array': d(
    '给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。',
    [
      {
        input: 'nums = [1,2,3,4,5,6,7], k = 3',
        output: '[5,6,7,1,2,3,4]',
        explanation:
          '向右轮转 1 步: [7,1,2,3,4,5,6]；向右轮转 2 步: [6,7,1,2,3,4,5]；向右轮转 3 步: [5,6,7,1,2,3,4]。'
      },
      {
        input: 'nums = [-1,-100,3,99], k = 2',
        output: '[3,99,-1,-100]',
        explanation: '向右轮转 1 步: [99,-1,-100,3]；向右轮转 2 步: [3,99,-1,-100]。'
      }
    ],
    [
      '1 <= nums.length <= 10^5',
      '-2^31 <= nums[i] <= 2^31 - 1',
      '0 <= k <= 10^5',
      '你可以使用空间复杂度为 O(1) 的原地算法解决这个问题吗？'
    ]
  ),
  'rotting-oranges': d(
    '给你一个 m x n 的网格 grid，其中每个单元格都可以有以下三个值之一：值 0 代表空单元格；值 1 代表新鲜橘子；值 2 代表腐烂的橘子。每分钟，腐烂的橘子周围 4 个方向上相邻的新鲜橘子都会腐烂。返回直到单元格中没有新鲜橘子为止所必须经过的最小分钟数。如果不可能，返回 -1。',
    [
      { input: 'grid = [[2,1,1],[1,1,0],[0,1,1]]', output: '4' },
      {
        input: 'grid = [[2,1,1],[0,1,1],[1,0,1]]',
        output: '-1',
        explanation: '左下角的橘子（下标 2,0）永远不会腐烂，因为腐烂只会发生在 4 个方向上。'
      }
    ],
    ['m == grid.length', 'n == grid[i].length', '1 <= m, n <= 10', 'grid[i][j] 仅为 0、1 或 2']
  ),
  'search-a-2d-matrix': d(
    '给你一个 m x n 的矩阵 matrix。如果这个矩阵是 tobit 矩阵则返回 true；否则，返回 false。你将得到一个具有以下属性的整数矩阵：每行中的整数从左到右按非递减顺序排列；每行的第一个整数大于前一行的最后一个整数。',
    [
      {
        input: 'matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3',
        output: 'true'
      },
      {
        input: 'matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13',
        output: 'false'
      }
    ],
    [
      'm == matrix.length',
      'n == matrix[i].length',
      '1 <= m, n <= 100',
      '-10^4 <= matrix[i][j], target <= 10^4'
    ]
  ),
  'search-a-2d-matrix-ii': d(
    '编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target。该矩阵具有以下特性：每行的元素从左到右升序排列；每列的元素从上到下升序排列。',
    [
      {
        input:
          'matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5',
        output: 'true'
      },
      {
        input:
          'matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20',
        output: 'false'
      }
    ],
    [
      'm == matrix.length',
      'n == matrix[i].length',
      '1 <= n, m <= 300',
      '-10^9 <= matrix[i][j] <= 10^9',
      '你能设计一个时间复杂度为 O(n+m) 的解决方案吗？'
    ]
  ),
  'search-insert-position': d(
    '给定一个排序数组 nums 和一个目标值 target，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。请必须使用时间复杂度为 O(log n) 的算法。',
    [
      { input: 'nums = [1,3,5,6], target = 5', output: '2' },
      { input: 'nums = [1,3,5,6], target = 2', output: '1' },
      { input: 'nums = [1,3,5,6], target = 7', output: '4' }
    ],
    ['1 <= nums.length <= 10^4', 'nums 为无重复元素的升序排列数组', '-10^4 <= target <= 10^4']
  ),
  'set-matrix-zeroes': d(
    '给定一个 m x n 的矩阵，如果一个元素为 0，则将其所在行和列的所有元素都设为 0。请使用原地算法。',
    [
      {
        input: 'matrix = [[1,1,1],[1,0,1],[1,1,1]]',
        output: '[[1,0,1],[0,0,0],[1,0,1]]'
      },
      {
        input: 'matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]',
        output: '[[0,0,0,0],[0,4,5,0],[0,3,1,0]]'
      }
    ],
    [
      'm == matrix.length',
      'n == matrix[0].length',
      '1 <= m, n <= 200',
      '-2^31 <= matrix[i][j] <= 2^31 - 1',
      '一个直观的解决方案是使用 O(mn) 的额外空间，但你可以想出一个只使用常数空间的解决方案吗？'
    ]
  ),
  'single-number': d(
    '给你一个非空整数数组 nums，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。',
    [
      { input: 'nums = [2,2,1]', output: '1' },
      { input: 'nums = [4,1,2,1,2]', output: '4' },
      { input: 'nums = [1]', output: '1' }
    ],
    [
      '1 <= nums.length <= 3 * 10^4',
      '-3 * 10^4 <= nums[i] <= 3 * 10^4',
      '除了某个元素只出现一次以外，其余每个元素均出现两次',
      '你的算法应该具有线性时间复杂度。你可以不使用额外空间来实现吗？'
    ]
  ),
  'sliding-window-maximum': d(
    '给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。返回滑动窗口中的最大值。',
    [
      {
        input: 'nums = [1,3,-1,-3,5,3,6,7], k = 3',
        output: '[3,3,5,5,6,7]',
        explanation: '各窗口的最大值依次为 3、3、5、5、6、7。'
      },
      { input: 'nums = [1], k = 1', output: '[1]' }
    ],
    ['1 <= nums.length <= 10^5', '-10^4 <= nums[i] <= 10^4', '1 <= k <= nums.length']
  ),
  'sort-colors': d(
    '给定一个包含红色、白色和蓝色共 n 个元素的数组 nums，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。我们使用整数 0、1 和 2 分别表示红色、白色和蓝色。必须在不使用库内置的 sort 函数的情况下解决这个问题。',
    [
      { input: 'nums = [2,0,2,1,1,0]', output: '[0,0,1,1,2,2]' },
      { input: 'nums = [2,0,1]', output: '[0,1,2]' }
    ],
    [
      'n == nums.length',
      '1 <= n <= 300',
      'nums[i] 为 0、1 或 2',
      '你能想出一个仅使用常数空间的一趟扫描算法吗？'
    ]
  ),
  'sort-list': d(
    '给定链表的头节点 head，请将其按升序排列并返回排序后的链表。',
    [
      { input: 'head = [4,2,1,3]', output: '[1,2,3,4]' },
      { input: 'head = [-1,5,3,4,0]', output: '[-1,0,3,4,5]' }
    ],
    [
      '链表中节点的数目在范围 [0, 5 * 10^4] 内',
      '-10^5 <= Node.val <= 10^5',
      '你可以在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序吗？'
    ]
  ),
  'spiral-matrix': d(
    '给你一个 m 行 n 列的矩阵 matrix，请按照顺时针螺旋顺序，返回矩阵中的所有元素。',
    [
      { input: 'matrix = [[1,2,3],[4,5,6],[7,8,9]]', output: '[1,2,3,6,9,8,7,4,5]' },
      {
        input: 'matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]',
        output: '[1,2,3,4,8,12,11,10,9,5,6,7]'
      }
    ],
    [
      'm == matrix.length',
      'n == matrix[i].length',
      '1 <= m, n <= 10',
      '-100 <= matrix[i][j] <= 100'
    ]
  ),
  'subarray-sum-equals-k': d(
    '给你一个整数数组 nums 和一个整数 k，请你统计并返回该数组中和为 k 的子数组的个数。子数组是数组中元素的连续非空序列。',
    [
      { input: 'nums = [1,1,1], k = 2', output: '2' },
      { input: 'nums = [1,2,3], k = 3', output: '2' }
    ],
    ['1 <= nums.length <= 2 * 10^4', '-1000 <= nums[i] <= 1000', '-10^7 <= k <= 10^7']
  ),
  subsets: d(
    '给你一个整数数组 nums，数组中的元素互不相同。返回该数组所有可能的子集（幂集）。解集不能包含重复的子集。你可以按任意顺序返回解集。',
    [
      { input: 'nums = [1,2,3]', output: '[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]' },
      { input: 'nums = [0]', output: '[[],[0]]' }
    ],
    ['1 <= nums.length <= 10', '-10 <= nums[i] <= 10', 'nums 中的所有元素互不相同']
  ),
  'symmetric-tree': d(
    '给你一个二叉树的根节点 root，检查它是否轴对称。',
    [
      { input: 'root = [1,2,2,3,4,4,3]', output: 'true' },
      {
        input: 'root = [1,2,2,null,3,null,3]',
        output: 'false',
        explanation: '第二个节点下的两个子树不对称。'
      }
    ],
    [
      '树中节点数目在范围 [1, 1000] 内',
      '-100 <= Node.val <= 100',
      '你可以运用递归和迭代两种方法解决这个问题吗？'
    ]
  ),
  'top-k-frequent-elements': d(
    '给你一个整数数组 nums 和一个整数 k，请你返回其中出现频率前 k 高的元素。你可以按任意顺序返回答案。',
    [
      { input: 'nums = [1,1,1,2,2,3], k = 2', output: '[1,2]' },
      { input: 'nums = [1], k = 1', output: '[1]' }
    ],
    [
      '1 <= nums.length <= 10^5',
      'k 的取值范围是 [1, 数组中不相同的元素的个数]',
      '题目数据保证答案唯一',
      '你的算法时间复杂度必须优于 O(n log n)，其中 n 是数组大小'
    ]
  ),
  'unique-paths': d(
    '一个机器人位于一个 m x n 网格的左上角。机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角。问总共有多少条不同的路径？',
    [
      { input: 'm = 3, n = 7', output: '28' },
      {
        input: 'm = 3, n = 2',
        output: '3',
        explanation: '从左上角开始，总共有 3 条路径可以到达右下角。'
      }
    ],
    ['1 <= m, n <= 100', '题目数据保证答案小于等于 2 * 10^9']
  ),
  'validate-binary-search-tree': d(
    '给你一个二叉树的根节点 root，判断其是否是一个有效的二叉搜索树。有效二叉搜索树定义如下：节点的左子树只包含严格小于当前节点的数；节点的右子树只包含严格大于当前节点的数；所有左子树和右子树自身必须也是二叉搜索树。',
    [
      { input: 'root = [2,1,3]', output: 'true' },
      {
        input: 'root = [5,1,4,null,null,3,6]',
        output: 'false',
        explanation: '根节点的值是 5，但右子节点的值是 4。'
      }
    ],
    ['树中节点数目范围是 [1, 10^4] 内', '-2^31 <= Node.val <= 2^31 - 1']
  ),
  'word-break': d(
    '给你一个字符串 s 和一个字符串列表 wordDict 作为字典。请你判断是否可以利用字典中出现的单词拼接出 s。注意：字典中的单词可以重复使用。',
    [
      {
        input: 's = "leetcode", wordDict = ["leet","code"]',
        output: 'true',
        explanation: '返回 true 因为 "leetcode" 可以由 "leet" 和 "code" 拼接成。'
      },
      {
        input: 's = "applepenapple", wordDict = ["apple","pen"]',
        output: 'true',
        explanation: '返回 true 因为 "applepenapple" 可以由 "apple"、"pen"、"apple" 拼接成。'
      },
      { input: 's = "catsandog", wordDict = ["cats","dog","sand","and","cat"]', output: 'false' }
    ],
    [
      '1 <= s.length <= 300',
      '1 <= wordDict.length <= 1000',
      '1 <= wordDict[i].length <= 20',
      's 和 wordDict[i] 仅有小写英文字母组成'
    ]
  ),
  'word-search': d(
    '给定一个 m x n 的二维字符网格 board 和一个字符串单词 word。如果 word 存在于网格中，返回 true；否则，返回 false。单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中相邻单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母在一个单词中不允许被重复使用。',
    [
      {
        input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"',
        output: 'true'
      },
      {
        input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"',
        output: 'false'
      }
    ],
    [
      'm == board.length',
      'n == board[i].length',
      '1 <= m, n <= 6',
      '1 <= word.length <= 15',
      'board 和 word 仅由大小写英文字母组成'
    ]
  )
};

const EMPTY_DESCRIPTION: ProblemDescription = { statement: '', examples: [], constraints: [] };

export function getDescription(id: string): ProblemDescription {
  return descriptions[id] ?? EMPTY_DESCRIPTION;
}

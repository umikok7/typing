import type { Problem } from '../types';
import threeSumSource from './go/3sum.go?raw';
import addTwoNumbersSource from './go/add_two_numbers.go?raw';
import bestTimeSource from './go/best_time_to_buy_and_sell_stock.go?raw';
import binaryTreeInorderSource from './go/binary_tree_inorder_traversal.go?raw';
import binaryTreeLevelOrderSource from './go/binary_tree_level_order_traversal.go?raw';
import climbingStairsSource from './go/climbing_stairs.go?raw';
import containerWithMostWaterSource from './go/container_with_most_water.go?raw';
import findFirstLastSource from './go/find_first_and_last_position_of_element_in_sorted_array.go?raw';
import generateParenthesisSource from './go/generate_parentheses.go?raw';
import groupAnagramsSource from './go/group_anagrams.go?raw';
import largestRectangleSource from './go/largest_rectangle_in_histogram.go?raw';
import letterCombinationsSource from './go/letter_combinations_of_a_phone_number.go?raw';
import longestConsecutiveSource from './go/longest_consecutive_sequence.go?raw';
import longestPalindromeSource from './go/longest_palindromic_substring.go?raw';
import longestSubstringSource from './go/longest_substring_without_repeating_characters.go?raw';
import lruCacheSource from './go/lru_cache.go?raw';
import maxSubArraySource from './go/maximum_subarray.go?raw';
import medianSource from './go/median_of_two_sorted_arrays.go?raw';
import mergeIntervalsSource from './go/merge_intervals.go?raw';
import mergeKSortedListsSource from './go/merge_k_sorted_lists.go?raw';
import mergeTwoListsSource from './go/merge_two_sorted_lists.go?raw';
import minWindowSource from './go/minimum_window_substring.go?raw';
import permutationsSource from './go/permutations.go?raw';
import removeNthFromEndSource from './go/remove_nth_node_from_end_of_list.go?raw';
import reverseListSource from './go/reverse_linked_list.go?raw';
import rotateImageSource from './go/rotate_image.go?raw';
import searchRotatedSource from './go/search_in_rotated_sorted_array.go?raw';
import trappingRainWaterSource from './go/trapping_rain_water.go?raw';
import twoSumSource from './go/two_sum.go?raw';
import validParenthesesSource from './go/valid_parentheses.go?raw';

export const problems: readonly Problem[] & { 0: Problem } = [
  {
    id: 'two-sum',
    number: 1,
    title: '两数之和',
    difficulty: 'Easy',
    topic: '哈希表',
    source: twoSumSource
  },
  {
    id: 'add-two-numbers',
    number: 2,
    title: '两数相加',
    difficulty: 'Medium',
    topic: '链表',
    source: addTwoNumbersSource
  },
  {
    id: 'longest-substring-without-repeating-characters',
    number: 3,
    title: '无重复字符的最长子串',
    difficulty: 'Medium',
    topic: '滑动窗口',
    source: longestSubstringSource
  },
  {
    id: 'median-of-two-sorted-arrays',
    number: 4,
    title: '寻找两个正序数组的中位数',
    difficulty: 'Hard',
    topic: '二分查找',
    source: medianSource
  },
  {
    id: 'longest-palindromic-substring',
    number: 5,
    title: '最长回文子串',
    difficulty: 'Medium',
    topic: '动态规划',
    source: longestPalindromeSource
  },
  {
    id: 'container-with-most-water',
    number: 11,
    title: '盛最多水的容器',
    difficulty: 'Medium',
    topic: '双指针',
    source: containerWithMostWaterSource
  },
  {
    id: '3sum',
    number: 15,
    title: '三数之和',
    difficulty: 'Medium',
    topic: '双指针',
    source: threeSumSource
  },
  {
    id: 'letter-combinations-of-a-phone-number',
    number: 17,
    title: '电话号码的字母组合',
    difficulty: 'Medium',
    topic: '回溯',
    source: letterCombinationsSource
  },
  {
    id: 'remove-nth-node-from-end-of-list',
    number: 19,
    title: '删除链表的倒数第 N 个结点',
    difficulty: 'Medium',
    topic: '链表',
    source: removeNthFromEndSource
  },
  {
    id: 'valid-parentheses',
    number: 20,
    title: '有效的括号',
    difficulty: 'Easy',
    topic: '栈',
    source: validParenthesesSource
  },
  {
    id: 'merge-two-sorted-lists',
    number: 21,
    title: '合并两个有序链表',
    difficulty: 'Easy',
    topic: '链表',
    source: mergeTwoListsSource
  },
  {
    id: 'generate-parentheses',
    number: 22,
    title: '括号生成',
    difficulty: 'Medium',
    topic: '回溯',
    source: generateParenthesisSource
  },
  {
    id: 'merge-k-sorted-lists',
    number: 23,
    title: '合并 K 个升序链表',
    difficulty: 'Hard',
    topic: '堆',
    source: mergeKSortedListsSource
  },
  {
    id: 'search-in-rotated-sorted-array',
    number: 33,
    title: '搜索旋转排序数组',
    difficulty: 'Medium',
    topic: '二分查找',
    source: searchRotatedSource
  },
  {
    id: 'find-first-and-last-position-of-element-in-sorted-array',
    number: 34,
    title: '在排序数组中查找元素的第一个和最后一个位置',
    difficulty: 'Medium',
    topic: '二分查找',
    source: findFirstLastSource
  },
  {
    id: 'trapping-rain-water',
    number: 42,
    title: '接雨水',
    difficulty: 'Hard',
    topic: '双指针',
    source: trappingRainWaterSource
  },
  {
    id: 'permutations',
    number: 46,
    title: '全排列',
    difficulty: 'Medium',
    topic: '回溯',
    source: permutationsSource
  },
  {
    id: 'rotate-image',
    number: 48,
    title: '旋转图像',
    difficulty: 'Medium',
    topic: '数组',
    source: rotateImageSource
  },
  {
    id: 'group-anagrams',
    number: 49,
    title: '字母异位词分组',
    difficulty: 'Medium',
    topic: '哈希表',
    source: groupAnagramsSource
  },
  {
    id: 'maximum-subarray',
    number: 53,
    title: '最大子数组和',
    difficulty: 'Easy',
    topic: '动态规划',
    source: maxSubArraySource
  },
  {
    id: 'merge-intervals',
    number: 56,
    title: '合并区间',
    difficulty: 'Medium',
    topic: '排序',
    source: mergeIntervalsSource
  },
  {
    id: 'climbing-stairs',
    number: 70,
    title: '爬楼梯',
    difficulty: 'Easy',
    topic: '动态规划',
    source: climbingStairsSource
  },
  {
    id: 'binary-tree-inorder-traversal',
    number: 94,
    title: '二叉树的中序遍历',
    difficulty: 'Easy',
    topic: '二叉树',
    source: binaryTreeInorderSource
  },
  {
    id: 'binary-tree-level-order-traversal',
    number: 102,
    title: '二叉树的层序遍历',
    difficulty: 'Medium',
    topic: '二叉树',
    source: binaryTreeLevelOrderSource
  },
  {
    id: 'best-time-to-buy-and-sell-stock',
    number: 121,
    title: '买卖股票的最佳时机',
    difficulty: 'Easy',
    topic: '动态规划',
    source: bestTimeSource
  },
  {
    id: 'longest-consecutive-sequence',
    number: 128,
    title: '最长连续序列',
    difficulty: 'Medium',
    topic: '哈希表',
    source: longestConsecutiveSource
  },
  {
    id: 'lru-cache',
    number: 146,
    title: 'LRU 缓存',
    difficulty: 'Medium',
    topic: '设计',
    source: lruCacheSource
  },
  {
    id: 'reverse-linked-list',
    number: 206,
    title: '反转链表',
    difficulty: 'Easy',
    topic: '链表',
    source: reverseListSource
  },
  {
    id: 'minimum-window-substring',
    number: 76,
    title: '最小覆盖子串',
    difficulty: 'Hard',
    topic: '滑动窗口',
    source: minWindowSource
  },
  {
    id: 'largest-rectangle-in-histogram',
    number: 84,
    title: '柱状图中最大的矩形',
    difficulty: 'Hard',
    topic: '单调栈',
    source: largestRectangleSource
  }
];

export const problemsById: ReadonlyMap<string, Problem> = new Map(
  problems.map((problem) => [problem.id, problem])
);

export function getProblem(id: string): Problem | undefined {
  return problemsById.get(id);
}

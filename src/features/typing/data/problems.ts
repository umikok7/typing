import type { Problem } from '../types';
import { getDescription } from './descriptions';
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
import threeSumTsSource from './ts/3sum.ts?raw';
import addTwoNumbersTsSource from './ts/add_two_numbers.ts?raw';
import bestTimeTsSource from './ts/best_time_to_buy_and_sell_stock.ts?raw';
import binaryTreeInorderTsSource from './ts/binary_tree_inorder_traversal.ts?raw';
import binaryTreeLevelOrderTsSource from './ts/binary_tree_level_order_traversal.ts?raw';
import climbingStairsTsSource from './ts/climbing_stairs.ts?raw';
import containerWithMostWaterTsSource from './ts/container_with_most_water.ts?raw';
import findFirstLastTsSource from './ts/find_first_and_last_position_of_element_in_sorted_array.ts?raw';
import generateParenthesisTsSource from './ts/generate_parentheses.ts?raw';
import groupAnagramsTsSource from './ts/group_anagrams.ts?raw';
import largestRectangleTsSource from './ts/largest_rectangle_in_histogram.ts?raw';
import letterCombinationsTsSource from './ts/letter_combinations_of_a_phone_number.ts?raw';
import longestConsecutiveTsSource from './ts/longest_consecutive_sequence.ts?raw';
import longestPalindromeTsSource from './ts/longest_palindromic_substring.ts?raw';
import longestSubstringTsSource from './ts/longest_substring_without_repeating_characters.ts?raw';
import lruCacheTsSource from './ts/lru_cache.ts?raw';
import maxSubArrayTsSource from './ts/maximum_subarray.ts?raw';
import medianTsSource from './ts/median_of_two_sorted_arrays.ts?raw';
import mergeIntervalsTsSource from './ts/merge_intervals.ts?raw';
import mergeKSortedListsTsSource from './ts/merge_k_sorted_lists.ts?raw';
import mergeTwoListsTsSource from './ts/merge_two_sorted_lists.ts?raw';
import minWindowTsSource from './ts/minimum_window_substring.ts?raw';
import permutationsTsSource from './ts/permutations.ts?raw';
import removeNthFromEndTsSource from './ts/remove_nth_node_from_end_of_list.ts?raw';
import reverseListTsSource from './ts/reverse_linked_list.ts?raw';
import rotateImageTsSource from './ts/rotate_image.ts?raw';
import searchRotatedTsSource from './ts/search_in_rotated_sorted_array.ts?raw';
import trappingRainWaterTsSource from './ts/trapping_rain_water.ts?raw';
import twoSumTsSource from './ts/two_sum.ts?raw';
import validParenthesesTsSource from './ts/valid_parentheses.ts?raw';

const baseProblems = [
  {
    id: 'two-sum',
    number: 1,
    title: '两数之和',
    difficulty: 'Easy',
    topic: '哈希表',
    sources: { go: twoSumSource, ts: twoSumTsSource }
  },
  {
    id: 'add-two-numbers',
    number: 2,
    title: '两数相加',
    difficulty: 'Medium',
    topic: '链表',
    sources: { go: addTwoNumbersSource, ts: addTwoNumbersTsSource }
  },
  {
    id: 'longest-substring-without-repeating-characters',
    number: 3,
    title: '无重复字符的最长子串',
    difficulty: 'Medium',
    topic: '滑动窗口',
    sources: { go: longestSubstringSource, ts: longestSubstringTsSource }
  },
  {
    id: 'median-of-two-sorted-arrays',
    number: 4,
    title: '寻找两个正序数组的中位数',
    difficulty: 'Hard',
    topic: '二分查找',
    sources: { go: medianSource, ts: medianTsSource }
  },
  {
    id: 'longest-palindromic-substring',
    number: 5,
    title: '最长回文子串',
    difficulty: 'Medium',
    topic: '动态规划',
    sources: { go: longestPalindromeSource, ts: longestPalindromeTsSource }
  },
  {
    id: 'container-with-most-water',
    number: 11,
    title: '盛最多水的容器',
    difficulty: 'Medium',
    topic: '双指针',
    sources: { go: containerWithMostWaterSource, ts: containerWithMostWaterTsSource }
  },
  {
    id: '3sum',
    number: 15,
    title: '三数之和',
    difficulty: 'Medium',
    topic: '双指针',
    sources: { go: threeSumSource, ts: threeSumTsSource }
  },
  {
    id: 'letter-combinations-of-a-phone-number',
    number: 17,
    title: '电话号码的字母组合',
    difficulty: 'Medium',
    topic: '回溯',
    sources: { go: letterCombinationsSource, ts: letterCombinationsTsSource }
  },
  {
    id: 'remove-nth-node-from-end-of-list',
    number: 19,
    title: '删除链表的倒数第 N 个结点',
    difficulty: 'Medium',
    topic: '链表',
    sources: { go: removeNthFromEndSource, ts: removeNthFromEndTsSource }
  },
  {
    id: 'valid-parentheses',
    number: 20,
    title: '有效的括号',
    difficulty: 'Easy',
    topic: '栈',
    sources: { go: validParenthesesSource, ts: validParenthesesTsSource }
  },
  {
    id: 'merge-two-sorted-lists',
    number: 21,
    title: '合并两个有序链表',
    difficulty: 'Easy',
    topic: '链表',
    sources: { go: mergeTwoListsSource, ts: mergeTwoListsTsSource }
  },
  {
    id: 'generate-parentheses',
    number: 22,
    title: '括号生成',
    difficulty: 'Medium',
    topic: '回溯',
    sources: { go: generateParenthesisSource, ts: generateParenthesisTsSource }
  },
  {
    id: 'merge-k-sorted-lists',
    number: 23,
    title: '合并 K 个升序链表',
    difficulty: 'Hard',
    topic: '堆',
    sources: { go: mergeKSortedListsSource, ts: mergeKSortedListsTsSource }
  },
  {
    id: 'search-in-rotated-sorted-array',
    number: 33,
    title: '搜索旋转排序数组',
    difficulty: 'Medium',
    topic: '二分查找',
    sources: { go: searchRotatedSource, ts: searchRotatedTsSource }
  },
  {
    id: 'find-first-and-last-position-of-element-in-sorted-array',
    number: 34,
    title: '在排序数组中查找元素的第一个和最后一个位置',
    difficulty: 'Medium',
    topic: '二分查找',
    sources: { go: findFirstLastSource, ts: findFirstLastTsSource }
  },
  {
    id: 'trapping-rain-water',
    number: 42,
    title: '接雨水',
    difficulty: 'Hard',
    topic: '双指针',
    sources: { go: trappingRainWaterSource, ts: trappingRainWaterTsSource }
  },
  {
    id: 'permutations',
    number: 46,
    title: '全排列',
    difficulty: 'Medium',
    topic: '回溯',
    sources: { go: permutationsSource, ts: permutationsTsSource }
  },
  {
    id: 'rotate-image',
    number: 48,
    title: '旋转图像',
    difficulty: 'Medium',
    topic: '数组',
    sources: { go: rotateImageSource, ts: rotateImageTsSource }
  },
  {
    id: 'group-anagrams',
    number: 49,
    title: '字母异位词分组',
    difficulty: 'Medium',
    topic: '哈希表',
    sources: { go: groupAnagramsSource, ts: groupAnagramsTsSource }
  },
  {
    id: 'maximum-subarray',
    number: 53,
    title: '最大子数组和',
    difficulty: 'Easy',
    topic: '动态规划',
    sources: { go: maxSubArraySource, ts: maxSubArrayTsSource }
  },
  {
    id: 'merge-intervals',
    number: 56,
    title: '合并区间',
    difficulty: 'Medium',
    topic: '排序',
    sources: { go: mergeIntervalsSource, ts: mergeIntervalsTsSource }
  },
  {
    id: 'climbing-stairs',
    number: 70,
    title: '爬楼梯',
    difficulty: 'Easy',
    topic: '动态规划',
    sources: { go: climbingStairsSource, ts: climbingStairsTsSource }
  },
  {
    id: 'binary-tree-inorder-traversal',
    number: 94,
    title: '二叉树的中序遍历',
    difficulty: 'Easy',
    topic: '二叉树',
    sources: { go: binaryTreeInorderSource, ts: binaryTreeInorderTsSource }
  },
  {
    id: 'binary-tree-level-order-traversal',
    number: 102,
    title: '二叉树的层序遍历',
    difficulty: 'Medium',
    topic: '二叉树',
    sources: { go: binaryTreeLevelOrderSource, ts: binaryTreeLevelOrderTsSource }
  },
  {
    id: 'best-time-to-buy-and-sell-stock',
    number: 121,
    title: '买卖股票的最佳时机',
    difficulty: 'Easy',
    topic: '动态规划',
    sources: { go: bestTimeSource, ts: bestTimeTsSource }
  },
  {
    id: 'longest-consecutive-sequence',
    number: 128,
    title: '最长连续序列',
    difficulty: 'Medium',
    topic: '哈希表',
    sources: { go: longestConsecutiveSource, ts: longestConsecutiveTsSource }
  },
  {
    id: 'lru-cache',
    number: 146,
    title: 'LRU 缓存',
    difficulty: 'Medium',
    topic: '设计',
    sources: { go: lruCacheSource, ts: lruCacheTsSource }
  },
  {
    id: 'reverse-linked-list',
    number: 206,
    title: '反转链表',
    difficulty: 'Easy',
    topic: '链表',
    sources: { go: reverseListSource, ts: reverseListTsSource }
  },
  {
    id: 'minimum-window-substring',
    number: 76,
    title: '最小覆盖子串',
    difficulty: 'Hard',
    topic: '滑动窗口',
    sources: { go: minWindowSource, ts: minWindowTsSource }
  },
  {
    id: 'largest-rectangle-in-histogram',
    number: 84,
    title: '柱状图中最大的矩形',
    difficulty: 'Hard',
    topic: '单调栈',
    sources: { go: largestRectangleSource, ts: largestRectangleTsSource }
  }
];

export const problems: readonly Problem[] & { 0: Problem } = baseProblems.map((problem) => ({
  ...problem,
  description: getDescription(problem.id)
})) as unknown as readonly Problem[] & { 0: Problem };

export const problemsById: ReadonlyMap<string, Problem> = new Map(
  problems.map((problem) => [problem.id, problem])
);

export function getProblem(id: string): Problem | undefined {
  return problemsById.get(id);
}

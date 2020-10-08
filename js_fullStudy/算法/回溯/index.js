// 在尝试中寻找问题的解，过程中一旦发现条件不符合，就回溯返回上一层


// 用递归模拟出所有的情况
// 遇到包含重复元素的情况就回溯
// 收集所有能到达递归终点的情况，并返回

// #44 https://leetcode-cn.com/problems/permutations/
// 给定一个 没有重复 数字的序列，返回其所有可能的全排列。

var permute = function(nums) {
  const res = []
  const backtrack = (path) => {
    if (path.length === nums.length) {
      res.push(path)
      return
    }
    nums.forEach(n => {
      if (path.includes(n)) {
        return
      }
      backtrack(path.concat(n))
    })
  }
  backtrack([])
  return res
};

// #22 https://leetcode-cn.com/problems/generate-parentheses/
// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

var generateParenthesis = function(n) {
  const res = []

  const diffs = (left, right, n, s, res) => {
      if (left === n && right === n) {
          res.push(s)
      }
      if (left < n) {
          diffs(left + 1, right, n, s + '(', res)
      }
      if (right < left) {
          diffs(left, right + 1, n, s + ')', res)
      }
      return res
  }
  return diffs(0, 0, n, "", res)
};
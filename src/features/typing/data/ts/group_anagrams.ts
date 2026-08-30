function groupAnagrams(strs: string[]): string[][] {
  const groups = new Map<string, string[]>();
  for (const s of strs) {
    const key = [...s].sort().join('');
    const group = groups.get(key);
    if (group === undefined) {
      groups.set(key, [s]);
    } else {
      group.push(s);
    }
  }
  return [...groups.values()];
}

function mostFrequentNumber(nums) {
  const frequencyMap = new Map();
  
  // Count the frequency of each number
  for (const num of nums) {
      frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }
  
  // Find the number with the highest frequency
  let maxFrequency = 0;
  let result = Infinity;
  
  for (const [num, frequency] of frequencyMap.entries()) {
      if (
          frequency > maxFrequency || 
          (frequency === maxFrequency && num < result)
      ) {
          maxFrequency = frequency;
          result = num;
      }
  }
  
  return result;
}

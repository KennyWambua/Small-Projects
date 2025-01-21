def most_frequent_number(nums):
    # Dictionary to count occurrences
    frequency = {}
    
    for num in nums:
        frequency[num] = frequency.get(num, 0) + 1
    
    # Determine the maximum frequency
    max_frequency = max(frequency.values())
    
    # Find the smallest number with the maximum frequency
    most_frequent = float('inf')
    for num, freq in frequency.items():
        if freq == max_frequency:
            most_frequent = min(most_frequent, num)
    
    return most_frequent

# Example usage:
nums = [1, 3, 3, 2, 1, 1, 2, 2]
result = most_frequent_number(nums)
print(result)  # Output: 1

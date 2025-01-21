function calculateDeepFileSize(fileSystem, currentDepth = 0) {
  let totalSize = 0;

  // If the current node has children, iterate over them
  if (fileSystem.children && Array.isArray(fileSystem.children)) {
      for (const child of fileSystem.children) {
          // Recursively process child nodes, increasing depth by 1
          totalSize += calculateDeepFileSize(child, currentDepth + 1);
      }
  } else if (fileSystem.type === 'file' && currentDepth >= 2) {
      // If the node is a file and depth is 2 or more, count its size
      totalSize += fileSystem.size;
  }

  return totalSize;
}

const fileSystem = {
  name: 'root',
  children: [
      {
          name: 'folder1',
          children: [
              {
                  name: 'file1.txt',
                  type: 'file',
                  size: 100
              },
              {
                  name: 'folder2',
                  children: [
                      {
                          name: 'file2.txt',
                          type: 'file',
                          size: 200
                      },
                      {
                          name: 'file3.txt',
                          type: 'file',
                          size: 300
                      }
                  ]
              }
          ]
      },
      {
          name: 'folder3',
          children: [
              {
                  name: 'file4.txt',
                  type: 'file',
                  size: 400
              }
          ]
      }
  ]
};

console.log(calculateDeepFileSize(fileSystem)); // Should output: 500

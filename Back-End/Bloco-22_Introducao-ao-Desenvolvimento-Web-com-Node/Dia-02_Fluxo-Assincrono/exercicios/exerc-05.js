const fs = require('fs').promises;

// Exercicio 01:
async function arrayToFile() {
    const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
    
    const createFile = strings.map((string, index) =>
        fs.writeFile(`./file${index + 1}.txt`, string)
    );

    await Promise.all(createFile);

    const fileNames = [
        'file1.txt',
        'file2.txt',
        'file3.txt',
        'file4.txt',
        'file5.txt',
      ];
 
      const fileContents = await Promise.all(
        fileNames.map((fileName) => fs.readFile(fileName, 'utf-8'))
      );
      const newFileContent = fileContents.join(' ');

      await fs.writeFile('./fileAll.txt', newFileContent);
}

arrayToFile();

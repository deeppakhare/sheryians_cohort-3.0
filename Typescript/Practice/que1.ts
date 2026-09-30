function solve(beginWord: string, endWord: string, wordList: string[]): number {
    const wordMap: { [key: string]: boolean } = {};
    for (let i = 0; i < wordList.length; i++) {
        wordMap[wordList[i]] = true;
    }

    // If endWord is not in wordList, no transformation sequence is possible
    if (!wordMap[endWord]) {
        return 0;
    }

    const queue: [string, number][] = [[beginWord, 1]];
    const visited: { [key: string]: boolean } = {};
    visited[beginWord] = true;

    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    while (queue.length > 0) {
        const item = queue.shift();
        if (!item) break;
        
        const currentWord = item[0];
        const level = item[1];

        if (currentWord === endWord) {
            return level;
        }

        for (let i = 0; i < currentWord.length; i++) {
            const prefix = currentWord.slice(0, i);
            const suffix = currentWord.slice(i + 1);

            for (let c = 0; c < 26; c++) {
                const nextWord = prefix + alphabet[c] + suffix;

                if (wordMap[nextWord] && !visited[nextWord]) {
                    visited[nextWord] = true;
                    queue.push([nextWord, level + 1]);
                }
            }
        }
    }

    return 0;
}
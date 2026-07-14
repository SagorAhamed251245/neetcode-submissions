class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
         const KEY = 123;

    return strs
      .map((word) => {
        const encoded = [...word]
          .map((ch) => (ch.charCodeAt(0) ^ KEY).toString(2))
          .join(" ");

        return `${word.length}:${encoded}`;
      })
      .join(" | ");}

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] { const KEY = 123;

    if (str === "") return [];

    return str.split(" | ").map((item) => {
      const [, encoded] = item.split(":");

      if (!encoded) return "";

      return encoded
        .split(" ")
        .map((binary) => String.fromCharCode(parseInt(binary, 2) ^ KEY))
        .join("");
    });}
}

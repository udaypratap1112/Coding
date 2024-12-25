const ColorConsole={
     red(text) {
        return `\x1b[31m${text}\x1b[0m`; // Red
      },
    
       green(text) {
        return `\x1b[32m${text}\x1b[0m`; // Green
      }
 ,   
       blue(text) {
        return `\x1b[34m${text}\x1b[0m`; // Blue
      }
 ,   
       yellow(text) {
        return `\x1b[33m${text}\x1b[0m`; // Yellow
      }
 ,   
       bold(text) {
        return `\x1b[1m${text}\x1b[0m`; // Bold
      }
}

export default ColorConsole
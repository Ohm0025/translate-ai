function formatText(text) {
  let cut = text
    .replace(/## /g, "") // Remove leading ##
    .replace(/\*\*(\d\.\s+English Sentence:)\*\*/g, "$1") // Remove bold around section titles
    .replace(/\*\*([\w\s]+:)\*\*/g, "$1") // Remove bold around speaker names
    .replace(/\*(\w.+?\?)(\*)?/g, "$1") // Remove italic formatting
    .replace(/\*\s/g, "") // Remove asterisks and extra spaces
    .replace(/\n{2,}/g, "\n") // Remove extra newlines
    .trim();

  return cut;
}

export { formatText };

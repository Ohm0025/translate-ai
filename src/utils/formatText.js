function formatText(text) {
  let firstCut = text.replaceAll("#", "");
  firstCut = firstCut.split("*");
  firstCut = firstCut.reduce((acc, item) => {
    let trimItem = item.trim();
    if (trimItem !== "") {
      if (trimItem.endsWith(":")) {
        return (acc += trimItem);
      }
      return (acc += trimItem + "\n");
    }
    return acc;
  }, "");

  firstCut = firstCut.split(/\d+/g);
  return firstCut.join();
}

export { formatText };

const capitalise = (string) => {
  const words = string.split(" ");
  for (let i = 0; i < words.length; i++) {
    var j = words[i].charAt(0).toUpperCase();
    words[i] = j + words[i].substr(1);
  }
  return words.join(" ");
};

const sortBy = (sort_by, order, products) => {
  if (order === "asc") {
    return products.sort((a, b) => b.sort_by - a.sort_by);
  } else {
  }
};

module.exports = { capitalise, sortBy };
// export default { capitalise, sortBy };

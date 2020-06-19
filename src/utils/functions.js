const capitalise = (string) => {
  const words = string.split(" ");
  for (let i = 0; i < words.length; i++) {
    var j = words[i].charAt(0).toUpperCase();
    words[i] = j + words[i].substr(1);
  }
  return words.join(" ");
};

function dynamicSort(property, order) {
  let sortOrder = 1;
  if (order === "desc") {
    sortOrder = -1;
  }
  return function (a, b) {
    let result =
      a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
    return result * sortOrder;
  };
}
const sortBy = (sort_by, order, products) => {
  return products.sort(dynamicSort(sort_by, order));
};

module.exports = { capitalise, sortBy };

function filterByTags(products, tags) {
  return products.filter((product) =>
    tags.some((tag) => product.tags.includes(tag))
  );
}

export default filterByTags;
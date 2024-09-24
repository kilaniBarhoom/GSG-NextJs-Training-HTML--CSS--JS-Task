function FilteringButtons({ setCategory }) {
  const categories = ["All", "Electronics", "Clothing"];

  return (
    <div id="filteringButtons">
      {categories.map((cat) => (
        <button key={cat} onClick={() => setCategory(cat)} data-category={cat}>
          {cat}
        </button>
      ))}
    </div>
  );
}

export default FilteringButtons;

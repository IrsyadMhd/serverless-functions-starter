const result = document.querySelector('.result');

const fetchData = async () => {
  const { data } = await axios.get('/api/2-basic');
  const results = data
    .map(result => {
      return `
      <article class="product">
      <img
        src="${result.image.url}"
        alt="${result.name}"
      />
      <div class="info">
        <h5>${result.name}</h5>
        <h5 class="price">$${result.price}</h5>
      </div>
    </article>
      `;
    })
    .join('');

  result.innerHTML = results;
};

fetchData();

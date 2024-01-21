class Product {
    create() {
        const elem = document.createElement('div');
        elem.classList.add('page', 'container--product');

        const product = this.data;

        const productBtnAdd = document.createElement('button');
        productBtnAdd.classList.add('product__btn_add', 'product__btn_add_page');
        productBtnAdd.innerHTML = 'Add to cart';

        elem.innerHTML = `
        <div class="product__wrap">
            <h1 class="product__title_page">${product.title}</h1>
            <div class="product__category_page">${product.category}</div>

            <img class="product__image_page" src="${product.image}" alt="${product.title}" />
            
            <div class="product__content_page">
                <div class="product__description_page">$${product.description}</div>
                <div class="product__price_page">$${product.price}</div>
                <div class="product__reviews_page">Rate: ${product.rating.rate}</br> Count reviews: ${product.rating.count}</div>
            </div>
        </div>
        `;

        elem.append(productBtnAdd);

        return elem;
    }

    #getProductId() {
        const id = location.href.split('/').pop();

        if (!id) return;
        return id;
    }

    #getData(id) {
        if (!id) return;

        let data = localStorage.getItem('data');
        data = JSON.parse(data);

        data = data.find((product) => product.id == id);

        if (!data || data.length == 0) return [];

        return data;
    }

    init() {
        const id = this.#getProductId();
        this.data = this.#getData(id);
        return this.create();
    }
}

const product = new Product().init();
export default product;
class Nav {
    create() {
        const elem = document.createElement('nav');
        elem.classList.add('nav');

        elem.innerHTML = `
        <div class="container container--header">
            <div class="logo"><a href="/"><img src="/img/logo.png" /></a></div>
            <button class="nav__toggle">
                <span class="toggle__icon"></span>
                <span class="toggle__text">MENU</span>
            </button>
            <ul class="nav__list">
                <li>
                    <button class="nav__close">+</button>
                </li>
                <li class="nav__item"><a href="/">Home</a></li>
                <li class="nav__item"><a href="/#about">About</a></li>
                <li class="nav__item"><a href="/#shop">Shop</a></li>
                <li class="nav__item"><a href="/#contacts">Contacts</a></li>
            </ul>
            <div class="cart">
                <a class="cart__icon" href="/"><img src="/img/cart.png" /></a>
                <span class="cart__sum">$ 0.00</span>
            </div>
        </div>
        `;

        return elem;
    }



    init() {
        this.elem = this.create();

        return this.elem;
    }
}

const nav = new Nav().init();
export {nav};
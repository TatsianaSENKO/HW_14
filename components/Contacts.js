class Contacts {
    create() {
        const elem = document.createElement('div');
        elem.classList.add('page');

        elem.innerHTML = `
        <div class="page__header">
            <div class="container">
                <h1 class="page__title">Contacts</h1>
            </div>
        </div>
        <div class="page__content">
            <div class="container">
                <div class="contacts">
                    <a class="contacts__link" href="/" "><span>Phone:</span>+375 29 ###-##-##</a>
                    <a class="contacts__link" href="/" "><span>Email:</span>mail@gmail.com</a>
                    <a class="contacts__link" href="/" "><span>Address:</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, vel?</a>
                </div>
            </div>
        </div>
        `;

        return elem;
    }

    init() {
        return this.create();
    }
}

const contacts = new Contacts().init();
export default contacts;
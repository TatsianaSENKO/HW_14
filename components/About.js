class About {
    create() {
        const elem = document.createElement('div');
        elem.classList.add('page');

        elem.innerHTML = `
        <div class="page__header">
            <div class="container">
                <h1 class="page__title">About</h1>
            </div>
        </div>
        <div class="page__content">
            <div class="container">
                <p class="about__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo esse fugiat quam tempora voluptates nam.</br>
                Ipsam quos similique, cupiditate totam repudiandae quidem porro natus accusantium quas qui minus ab reiciendis omnis deleniti iste! Eligendi rem magni veniam laborum sed, aspernatur explicabo quis tempora maxime facere est eius, nulla laudantium qui nam minima a optio! Est, quam. Et nesciunt tempore repellat placeat, consectetur voluptates assumenda adipisci nihil mollitia accusamus qui obcaecati nisi aliquid enim culpa labore atque, provident aperiam quas.</br>
                Quia, recusandae quas veniam quos corrupti repellat tempore accusantium? Pariatur adipisci placeat unde! Blanditiis ab, inventore commodi perspiciatis, amet soluta maiores hic sapiente eligendi similique accusamus exercitationem beatae saepe eaque impedit delectus voluptate consequatur incidunt.</br>
                Atque nisi velit enim quae nihil tenetur aliquam sint, ullam in eveniet neque quibusdam molestiae repudiandae ut facere doloribus veniam labore maiores.</br>
                Alias molestias beatae asperiores laboriosam deserunt sapiente dicta facilis fugiat? Dignissimos delectus tenetur recusandae numquam? Ipsam vero aliquid ad rerum, repellendus mollitia? Perferendis voluptatum magni illo cumque eaque. Provident illo earum iure veniam vel quibusdam accusantium dolorum hic modi officia omnis quaerat reprehenderit rem error sequi voluptatem eos sed, expedita adipisci nostrum.</br>
                Dicta odio inventore labore consequuntur. Quis libero accusantium, eveniet nihil consequuntur iure!</p>
            </div>
        </div>
        `;

        return elem;
    }

    init() {
        return this.create();
    }
}

const about = new About().init();
export default about;
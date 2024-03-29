class Footer {
    create() {
        const elem = document.createElement('footer');
        elem.classList.add('footer');

        elem.innerHTML = `
        <div class="container container--footer">
            <div class="logo"><a href="/"><img src="/img/logo.png" /></a></div>
                <div class="footer__col">
                    <a class="footer__link" href="/">Home</a>
                    <a class="footer__link" href="/#about">About</a>
                    <a class="footer__link" href="/#contacts">Contacts</a>
                </div>

            <ul class="social">
                <li class="social__item">
                  <a class="social__link" href="#" target="_blank">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.5058 11.4176C7.44316 11.4176 6.06497 11.4176 5.43852 11.4176C5.10441 11.4176 5 11.2923 5 10.9791C5 10.1439 5 9.2877 5 8.45244C5 8.11833 5.12529 8.01392 5.43852 8.01392H7.5058C7.5058 7.95128 7.5058 6.74014 7.5058 6.17633C7.5058 5.34107 7.65197 4.54756 8.06961 3.81671C8.50812 3.06497 9.13457 2.5638 9.92807 2.27146C10.4501 2.08353 10.9722 2 11.536 2H13.5824C13.8747 2 14 2.12529 14 2.41763V4.79814C14 5.09049 13.8747 5.21578 13.5824 5.21578C13.0186 5.21578 12.4548 5.21578 11.891 5.23666C11.3271 5.23666 11.0348 5.50812 11.0348 6.09281C11.0139 6.71926 11.0348 7.32483 11.0348 7.97216H13.4571C13.7912 7.97216 13.9165 8.09745 13.9165 8.43156V10.9582C13.9165 11.2923 13.8121 11.3968 13.4571 11.3968C12.7053 11.3968 11.0974 11.3968 11.0348 11.3968V18.2042C11.0348 18.5592 10.9304 18.6845 10.5545 18.6845C9.67749 18.6845 8.82135 18.6845 7.94432 18.6845C7.63109 18.6845 7.5058 18.5592 7.5058 18.2459C7.5058 16.0534 7.5058 11.4803 7.5058 11.4176V11.4176Z"
                      />
                    </svg>
                  </a>
                </li>
                <li class="social__item">
                  <a class="social__link" href="#" target="_blank"
                    ><svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.9962 17.9997V17.9991H17.9999V12.4805C17.9999 9.78081 17.4246 7.70117 14.3002 7.70117C12.7983 7.70117 11.7903 8.53378 11.3788 9.32313H11.3354V7.95321H8.37305V17.9991H11.4577V13.0247C11.4577 11.715 11.7034 10.4485 13.3091 10.4485C14.8911 10.4485 14.9147 11.9432 14.9147 13.1087V17.9997H17.9962Z"
                      />
                      <path
                        d="M3.22363 7.92578H6.35796V17.7765H3.22363V7.92578Z"
                      />
                      <path
                        d="M4.79104 3C3.8023 3 3 3.79856 3 4.78269C3 5.76683 3.8023 6.58209 4.79104 6.58209C5.77979 6.58209 6.58209 5.76683 6.58209 4.78269C6.58147 3.79856 5.77916 3 4.79104 3V3Z"
                      />
                    </svg>
                  </a>
                </li>
                <li class="social__item">
                  <a class="social__link" href="#" target="_blank">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 5.63519C17.3678 5.9125 16.6942 6.09631 15.9919 6.18556C16.7144 5.75419 17.2658 5.07631 17.5251 4.25925C16.8514 4.66087 16.1077 4.94456 15.3151 5.10288C14.6754 4.42181 13.7638 4 12.7693 4C10.8398 4 9.28644 5.56613 9.28644 7.48606C9.28644 7.76231 9.30981 8.02794 9.36719 8.28081C6.46975 8.1395 3.90594 6.75081 2.18362 4.63538C1.88294 5.15706 1.70656 5.75419 1.70656 6.397C1.70656 7.604 2.32812 8.67394 3.25462 9.29337C2.69469 9.28275 2.14537 9.12019 1.68 8.86413C1.68 8.87475 1.68 8.88856 1.68 8.90237C1.68 10.596 2.88806 12.0027 4.47225 12.3268C4.18856 12.4044 3.87937 12.4416 3.5585 12.4416C3.33537 12.4416 3.11012 12.4288 2.89869 12.3821C3.35025 13.7622 4.63163 14.7769 6.15525 14.8099C4.9695 15.7374 3.46394 16.2963 1.83406 16.2963C1.54825 16.2963 1.27412 16.2836 1 16.2485C2.54381 17.2441 4.37344 17.8125 6.3465 17.8125C12.7597 17.8125 16.266 12.5 16.266 7.89512C16.266 7.74106 16.2607 7.59231 16.2532 7.44463C16.9449 6.95375 17.5261 6.34069 18 5.63519Z"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
        </div>
        `;

        return elem;
    }

    init() {
        return this.create();
    }
}

const footer = new Footer().init();
export {footer};
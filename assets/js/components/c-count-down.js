class CCountDown extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
          * {
            margin: 0;
            padding: 0;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
          }
          body {
            font-family: "Nunito", sans-serif;
            font-weight: normal;
            font-style: normal;
            color: #798795;
            overflow-X: hidden;
          }
          .countdown-timer {
            margin-top: 20px;
          }
          .timer {
            display: inline-block;
            font-size: 32px;
            font-weight: bold;
          }
          .timer span {
            display: inline-block;
            padding: 0 10px;
            background-color: #f14836;
            color: #fff;
            border-radius: 5px;
          }
      </style>
      <div class="countdown-timer">
          <div class="timer">
              <span id="hours">00</span> :
              <span id="minutes">00</span> :
              <span id="seconds">00</span>
          </div>
      </div>
    `;

    // set local storage
    function reset() {
      localStorage.TIMER_TBFT = new Date().getTime() + 60 * 60 * 1000;
      localStorage.DATE_TBFT = new Date().toLocaleString().split(', ')[0];
    }

    // reset local storage
    if (!localStorage.TIMER_TBFT) {
      reset();
    }

    // Update the countdown every second
    const timer = setInterval(() => {
      // Get the current date and time
      const now = new Date().getTime();

      // Calculate the distance between now and the countdown date
      const distance = localStorage.TIMER_TBFT - now;

      // Calculate hours, minutes, and seconds
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the countdown in the HTML
      if (distance >= 0 && localStorage.DATE_TBFT == new Date().toLocaleString().split(', ')[0]) {
        this.shadowDOM.getElementById("hours").innerHTML = hours.toString().padStart(2, "0");
        this.shadowDOM.getElementById("minutes").innerHTML = minutes.toString().padStart(2, "0");
        this.shadowDOM.getElementById("seconds").innerHTML = seconds.toString().padStart(2, "0");
      } else {
        reset();
      }
    }, 1000);

    timer();
  }
}

customElements.define("c-count-down", CCountDown);
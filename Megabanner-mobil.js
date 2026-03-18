(function () {

  function initBanner() {

    var html = `
    <div class="banner300">

      <div class="banner-bg"></div>

      <div class="content">

        <div class="big-text">
          <div>VIDEN</div>
          <div class="om">OM</div>
        </div>

        <div class="text">
          15 fagsektioner med nyheder,<br>
          artikler og virksomheder
        </div>

        <div class="cta">
          Se alle fagsektioner på BygTek.dk<br>
          under VIDEN OM
        </div>

      </div>

      <!-- OVERLAY -->
      <div class="banner-modal" id="bannerModal">
        <div class="modal-content">

          <div class="close">&times;</div>

          <h2>Tak for din interesse</h2>

          <p>
            Tak for at du klikkede på banneret.<br><br>
            Denne plads kan blive din<br><br>
            Du er meget velkommen til at kontakte:
          </p>

          <div class="contact-box">
            <strong>Kim Anker</strong><br>
            kim@odsgard.dk<br>
            26 25 51 22 / 46 93 66 22<br><br>
            Om markedsføring på BygTek.dk
          </div>

        </div>
      </div>

    </div>
    `;

    document.body.insertAdjacentHTML("beforeend", html);

    // === CSS ===
   .banner300 {
    position:relative;
    width:100%;
    max-width:300px;
    aspect-ratio:300 / 250; /* 🔥 gør den responsiv */
    height:auto;
    overflow:hidden;
    font-family:Arial;
    cursor:pointer;
}

      .banner-bg {
        position:absolute;
        inset:0;
        background:url('https://raw.githubusercontent.com/Kim4690/Megabanner/main/Megabanner-bg.jpg') center/cover no-repeat;
      }

      /* 🔥 BLÅ GRADIENT (ikke sort) */
      .banner300::after {
        content:"";
        position:absolute;
        inset:0;
        background:linear-gradient(
          to bottom,
          rgba(0,60,120,0.95),
          rgba(0,90,160,0.75),
          rgba(0,120,200,0.5)
        );
      }

      .content {
        position:relative;
        z-index:2;
        height:100%;
        transition:opacity 0.3s ease;
      }

      .banner300.hide-content .content {
        opacity:0;
      }

      /* VIDEN OM */
      .big-text {
        position:absolute;
        top:28%;
        left:50%;
        transform:translate(-50%, -50%) scale(0.3);
        font-size:clamp(22px, 8vw, 42px);
        font-weight:800;
        color:#fff200;
        animation:zoomText 2.5s forwards;
        text-align:left;
      }

      .big-text .om {
        margin-left:30px; /* 🔥 rykker OM til højre */
      }

      @keyframes zoomText {
  0% {
    transform:translate(-50%, -50%) scale(0.3);
    opacity:0;
  }

  40% {
    transform:translate(-50%, -50%) scale(1.3);
    opacity:1;
  }

  100% {
    transform:translate(-50%, -50%) scale(1.15); /* 🔥 større slut */
    color:#ffffff;
  }
}
      /* TEKST */
      .text {
        position:absolute;
        bottom:75px;
        left:10px;
        right:10px;
        text-align:center;
        color:#ffffff;
        font-size:clamp(11px, 3.5vw, 15px);
        line-height:1.4;
        text-shadow:0 2px 6px rgba(0,0,0,0.5);
      }

      /* CTA */
      .cta {
        position:absolute;
        bottom:0;
        left:0;
        right:0;
        background:#ffd200;
        color:#000;
        padding:10px;
        font-size:clamp(10px, 3vw, 13px);
        text-align:center;
      }

      /* OVERLAY */
      .banner-modal {
        position:absolute;
        inset:0;
        background:#163575;
        display:flex;
        align-items:center;
        justify-content:center;
        opacity:0;
        pointer-events:none;
        transition:.3s;
        z-index:10;
      }

      .banner-modal.active {
        opacity:1;
        pointer-events:all;
      }

      .modal-content {
        color:#fff;
        padding:20px;
        width:85%;
        text-align:center;
        position:relative;
        font-size:13px;
      }

      .modal-content h2 {
        color:#ffd200;
        font-size:16px;
        margin-bottom:10px;
      }

      .close {
        position:absolute;
        top:8px;
        right:10px;
        cursor:pointer;
        font-size:18px;
      }

      .contact-box {
        margin-top:10px;
        line-height:1.4;
      }
    `;
    document.head.appendChild(style);

    // === LOGIK ===
    var banner = document.querySelector('.banner300');
    var modal = document.getElementById('bannerModal');
    var closeBtn = document.querySelector('.close');

    banner.addEventListener('click', function () {
      modal.classList.add('active');
      banner.classList.add('hide-content');
    });

    closeBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      modal.classList.remove('active');
      banner.classList.remove('hide-content');
    });

  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initBanner);
  } else {
    initBanner();
  }

})();

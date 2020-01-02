class MoreProjectInfo {
  constructor(elListener, container, text) {
    this.elListener = elListener;
    this.container = container;
    this.text = text;
    this.popUp = "";
    this.addListener();
    this.closePopup();
  }
  addListener() {
    this.elListener.addEventListener("click", this.moreInfoPopUp.bind(this));
  }

  moreInfoPopUp() {
    const closeBTN = this.closePopup();
    const popUp = document.createElement("div");
    popUp.textContent = this.text;
    popUp.classList.add("popup");
    popUp.appendChild(closeBTN);
    this.container.appendChild(popUp);
    this.popUp = popUp;
  }

  closePopup() {
    const colsePopupBtn = document.createElement("span");
    colsePopupBtn.innerHTML = "&#10005;";
    colsePopupBtn.classList.add("popup__close");
    colsePopupBtn.addEventListener("click", () => {
      this.popUp.remove();
    });

    return colsePopupBtn;
  }
}

const moreInfoBtn = document.querySelectorAll(".more-info");
const container = document.querySelectorAll(".projects__project-description");

const popUpToDoList = new MoreProjectInfo(
  moreInfoBtn[0],
  container[0],
  "Pierwszy projekt z wykorzystaniem bazy danych mongo db. Pisany był w Node.js. Dzięki niemu nauczyłem się podstaw tworzenia baz danych oraz poznałem dokładniej podstawową strukturę aplikacji działającej po stronie backend-u jak i frontend-u. "
);

const popUpVueMemory = new MoreProjectInfo(
  moreInfoBtn[1],
  container[1],
  "Dzięki temu projektowi zrozumiałem podstawy działania framework-u Vue.js. oraz dowiedziałem się jakie zalety ma tworzenie aplikacji przy użyciu właśnie takich narzędzi."
);

const popUpSeoScheme = new MoreProjectInfo(
  moreInfoBtn[2],
  container[2],
  "Tworząc stronę seo-scheme nauczyłęm się pracy z klientem oraz poznałem podstawy biblioteki css bootstrap oraz zrozumiałem jak jej użycie może wpłynąć na zwiększenie efektywności pracy podczas tworzenia prostej strony www."
);

const popUpCreepyJson = new MoreProjectInfo(
  moreInfoBtn[3],
  container[3],
  "Tworząc tą prostą aplikację zrozumiałem na czym polega praca z udostępnionym API."
);

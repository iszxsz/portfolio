var elasNet = document.querySelector("#elas");
var colegiadoCefet = document.querySelector("#colegiado");
var iniciacaoCientifica = document.querySelector("#iniciacao");

var BelasNet = document.querySelector(".elas");
var BcolegiadoCefet = document.querySelector(".colegiado");
var BiniciacaoCientifica = document.querySelector(".iniciacao");

BelasNet.onclick = function(){

    BelasNet.querySelector('h4').style = "font-weight: bold"
    BcolegiadoCefet.querySelector('h4').style = "font-weight: 300"
    BiniciacaoCientifica.querySelector('h4').style = "font-weight: 300"

    elasNet.style.display = "block";
    colegiadoCefet.style.display = "none";
    iniciacaoCientifica.style.display = "none";
}

BcolegiadoCefet.onclick = function() {

    BelasNet.querySelector('h4').style = "font-weight: 300"
    BcolegiadoCefet.querySelector('h4').style = "font-weight: bold"
    BiniciacaoCientifica.querySelector('h4').style = "font-weight: 300"

    elasNet.style.display = "none";
    colegiadoCefet.style.display = "block";
    iniciacaoCientifica.style.display = "none";
}

BiniciacaoCientifica.onclick = function() {

    BelasNet.querySelector('h4').style = "font-weight: 300"
    BcolegiadoCefet.querySelector('h4').style = "font-weight: 300"
    BiniciacaoCientifica.querySelector('h4').style = "font-weight: bold"

    elasNet.style.display = "none";
    colegiadoCefet.style.display = "none";
    iniciacaoCientifica.style.display = "block";
};

function showExp(clicado, div) {

  if(document.querySelector(`#${clicado}`).classList.contains('hidden')){
    div.querySelector('img').style = "transform: rotate(0deg);"
    document.querySelector(`#${clicado}`).classList.toggle("hidden");
    setTimeout(() => {
      document.querySelector(`#${clicado}`).classList.toggle("retratil");
    }, "1");
    
  } else {
    document.querySelector(`#${clicado}`).classList.toggle("retratil");
    div.querySelector('img').style = "transform: rotate(180deg);"
    setTimeout(() => {
      document.querySelector(`#${clicado}`).classList.toggle("hidden");
    }, "300");
  } 

}

class FormSubmit {
    constructor(settings) {
      this.settings = settings;
      this.form = document.querySelector(settings.form);
      this.formButton = document.querySelector(settings.button);
      if (this.form) {
        this.url = this.form.getAttribute("action");
      }
      this.sendForm = this.sendForm.bind(this);
    }
  
    displaySuccess() {
      this.form.innerHTML = this.settings.success;
    }
  
    displayError() {
      this.form.innerHTML = this.settings.error;
    }
  
    getFormObject() {
      const formObject = {};
      const fields = this.form.querySelectorAll("[name]");
      fields.forEach((field) => {
        formObject[field.getAttribute("name")] = field.value;
      });
      return formObject;
    }
  
    onSubmission(event) {
      event.preventDefault();
      event.target.disabled = true;
      event.target.innerText = "Enviando...";
    }
  
    async sendForm(event) {
      try {
        this.onSubmission(event);
        await fetch(this.url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(this.getFormObject()),
        });
        this.displaySuccess();
      } catch (error) {
        this.displayError();
        throw new Error(error);
      }
    }
  
    init() {
      if (this.form) this.formButton.addEventListener("click", this.sendForm);
      return this;
    }
  }
  
  const formSubmit = new FormSubmit({
    form: "[data-form]",
    button: "[data-button]",
    success: "<h4 class='success'>Mensagem enviada!</h4>",
    error: "<h4 class='error'>Não foi possível enviar sua mensagem.</h4>",
  });
  formSubmit.init();


  ScrollReveal().reveal('.revealLeft', {viewFactor: 0.5, origin: 'bottom', duration: 1200});
  ScrollReveal().reveal('.revealRight', {viewFactor: 0.5, origin: 'bottom', duration: 1200});
var elasNet = document.querySelector("#elas");
var colegiadoCefet = document.querySelector("#colegiado");
var iniciacaoCientifica = document.querySelector("#iniciacao");

var BelasNet = document.querySelector(".elas");
var BcolegiadoCefet = document.querySelector(".colegiado");
var BiniciacaoCientifica = document.querySelector(".iniciacao");

BelasNet.onclick = function(){
    elasNet.style.display = "block";
    colegiadoCefet.style.display = "none";
    iniciacaoCientifica.style.display = "none";
}

BcolegiadoCefet.onclick = function() {
    elasNet.style.display = "none";
    colegiadoCefet.style.display = "block";
    iniciacaoCientifica.style.display = "none";
}

BiniciacaoCientifica.onclick = function() {
    elasNet.style.display = "none";
    colegiadoCefet.style.display = "none";
    iniciacaoCientifica.style.display = "block";
};

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
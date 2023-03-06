const TOKEN = "6111475327:AAHvNMmInU1nn_DYBMxTEwMN3M27xEZs5DI   ";
const CHAT_ID = "-1001434361962";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
const form = document.getElementById("kontakt");
form.addEventListener("submit", function (e) {
  //   e.preventDefault();
  if (!this.name.value) {
    this.name.classList.add("input-red");
  } else if (!this.phone.value) {
    this.phone.classList.add("input-red");
  } else {
    let message = `<b>Заявка с сайта!</b> \n`;
    message += `<b>Отправителъ:</b> ${this.name.value} \n`;
    message += `<b>Тел:</b> ${this.phone.value} \n`;
    message += `<b>Текс:</b> ${this.message.value}`;

    axios.post(URI_API, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: message,
    });

    this.name.value = null;
    this.phone.value = null;
    this.message.value = null;

    this.name.classList.remove("input-red");
    this.phone.classList.remove("input-red");
  }
});
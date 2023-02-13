const form = document.querySelector(`.login-form`);

form.addEventListener(`submit`, onFormSubmit);
let userInfo;

function onFormSubmit(event) {
  event.preventDefault();
  const formElement = event.currentTarget.elements;
  const email = formElement.email.value;
  const password = formElement.password.value;

  if (email === `` || password === ``) {
    alert("Please fill in all information!!!");
    return;
  }
  console.log(
    (userInfo = {
      email,
      password,
    })
  );

  form.reset();
}

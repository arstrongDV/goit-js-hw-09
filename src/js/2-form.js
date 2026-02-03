const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

const formData = {
    email: "",
    message: ""
}

const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

if (savedData) {
    formData.email = savedData.email || '';
    formData.message = savedData.message || '';
  
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  }

form.addEventListener("input", (e) => {
    if (e.target.name) {
        formData[e.target.name] = e.target.value;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
      }
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const { email='', message='' } = formData;

    if(!email.trim() || !message.trim()){
        alert("Fill please all fields")
        return;
    }

    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
})



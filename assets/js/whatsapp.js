document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const whatsappMessage = `*Nome:* ${name}\n*Email:* ${email}\n*Mensagem:* ${message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);

    const phoneNumber = '+5561998019018';

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    //Mensagens
    const btnSend = document.getElementById('btnSend');
    let agradecimento = document.getElementById('thankYouMessage')

    btnSend.style.display = 'none';
    agradecimento.style.display = 'block';

    
    setTimeout(function () {
        window.open(whatsappURL, '_blank');
    }, 1500);

    setTimeout(function () {
        btnSend.style.display = 'block';
        agradecimento.style.display = 'none';
    }, 5000);

    setTimeout(function () {
        document.getElementById('contactForm').reset();
    }, 15000);
});

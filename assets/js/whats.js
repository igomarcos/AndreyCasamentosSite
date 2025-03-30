function openWhatsApp() {
    const phoneNumber = "+5511915114088"; // Substitua pelo seu número
    const message = "Olá! Gostaria de mais informações sobre os planos da Andrey Casamentos";
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}
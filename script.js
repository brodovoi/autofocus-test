// Проверка на мобильные устройства
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

const initCreateAccountEmail = () => {
    // VARS
    const form = document.querySelector('[data-sign-form]');
    if (!form) return;
    const inputEmail = form.querySelector('[data-validate-field-up]');

    // Автоматический фокус
    inputEmail.focus();

    // Проверка на мобильные устройства
    if (isMobileDevice() && /iPad|iPhone|iPod/.test(navigator.userAgent)) {
        // Создание виртуального события для открытия клавиатуры
        const event = new Event('click', {
            bubbles: true,
            cancelable: true,
            view: window
        });
        inputEmail.dispatchEvent(event);
    }
};

document.addEventListener('DOMContentLoaded', function() {
    // Ваш код инициализации здесь
    initCreateAccountEmail();
});

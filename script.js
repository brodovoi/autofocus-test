const initCreateAccountEmail = () => {
    // VARS
    const form = document.querySelector('[data-sign-form]');
    if (!form) return;
    const inputEmail = form.querySelector('[data-validate-field-up]');

    // Автоматический фокус
    inputEmail.focus();
    
    // Задержка для обеспечения срабатывания фокуса
    setTimeout(() => {
        inputEmail.focus();
      
        // Проверка на мобильные устройства
        if (isMobileDevice()) {
            inputEmail.focus();
            
            // Добавляем временное поле ввода и сразу удаляем его, чтобы принудительно открыть клавиатуру
            const tempInput = document.createElement('input');
            form.appendChild(tempInput);
            tempInput.focus();
            form.removeChild(tempInput);
        }
    }, 500);
};

// Проверка на мобильные устройства
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

document.addEventListener('DOMContentLoaded', function() {
    // Ваш код инициализации здесь
    initCreateAccountEmail();
});

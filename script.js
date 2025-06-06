// Логика переключения табов меню
function showTab(tabName) {
  // Получаем все элементы с классом .menu-tab (все вкладки)
  const tabs = document.querySelectorAll(".menu-tab");

  // Скрываем все вкладки и убираем активный класс
  tabs.forEach(tab => {
    tab.classList.add("hidden");       // Скрыть вкладку
    tab.classList.remove("active");    // Удалить активный статус
  });

  // Находим вкладку по ID, соответствующему tabName, и показываем её
  const activeTab = document.getElementById(tabName);
  if (activeTab) {
    activeTab.classList.remove("hidden"); // Показать вкладку
    activeTab.classList.add("active");    // Назначить как активную
  }

  // Убираем класс active у всех кнопок табов
  const buttons = document.querySelectorAll(".menu-tabs .tab");
  buttons.forEach(btn => btn.classList.remove("active"));

  // Добавляем класс active на кнопку, соответствующую выбранной вкладке
  // Используем inline-атрибут onclick для поиска кнопки (временное решение)
  document.querySelector(`.menu-tabs .tab[onclick="showTab('${tabName}')"]`)?.classList.add("active");
}

// Всплывающее сообщение благодарности при подписке на рассылку
document.addEventListener("DOMContentLoaded", function () {
  // Ждём полной загрузки DOM и находим форму по ID
  const newsletterForm = document.getElementById("newsletterForm");

  // Если форма найдена — добавляем обработчик отправки
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Отменяем стандартное поведение формы

      // Показываем окно с благодарностью и промо-кодом
      alert("Спасибо за подписку на нашу рассылку! \n\nПолучите 10% скидку на следующий заказ с кодом:\nSWEET10");

      // Очищаем поля формы после отправки
      newsletterForm.reset();
    });
  }
});

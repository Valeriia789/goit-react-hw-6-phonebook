export const statusFilters = Object.freeze({
  all: "all",
  active: "active",
  group: "group",
});

// OBJECT.FREEZE()
// Используем метод Object.freeze() для того, 
// чтобы «заморозить» объект значений фильтра и 
// предотвратить случайное его изменение по ссылке в местах импорта.
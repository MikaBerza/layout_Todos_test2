/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules */ \"./src/js/modules.js\");\n/* harmony import */ var _enteringTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enteringTask */ \"./src/js/enteringTask.js\");\n/* harmony import */ var _outputTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./outputTask */ \"./src/js/outputTask.js\");\n/* harmony import */ var _control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./control */ \"./src/js/control.js\");\n\n\n\n\nvar bodyElem = document.querySelector('body');\nvar buttonAddElem = document.querySelector('.entering-task__button-adding');\nvar inpSearchElem = document.querySelector('.search__item');\nvar selectElem = document.querySelector('.filtering__select');\nvar buttonSetCheckboxes = document.querySelector('.entering-task__button-mark');\nvar buttonDeletingItemsWithCheckboxes = document.querySelector('.entering-task__button-clearing');\nvar textareaElem = document.querySelector('.entering-task__textarea-item');\nvar ulElem = document.querySelector('.output-task__list');\n\n// функция обрабатывать добавление или редактирование текста щелчком мыши и нажатием клавиши\nvar handleAddOrEditTextOnClickAndKeydown = function handleAddOrEditTextOnClickAndKeydown() {\n  if (buttonAddElem.textContent === 'Добавить') {\n    (0,_enteringTask__WEBPACK_IMPORTED_MODULE_1__.addTaskToTheList)();\n    (0,_control__WEBPACK_IMPORTED_MODULE_3__.calcActiveAndCompletedTasks)();\n    (0,_control__WEBPACK_IMPORTED_MODULE_3__.getFilteredItems)(selectElem.value);\n  } else if (buttonAddElem.textContent === 'Редактировать') {\n    (0,_enteringTask__WEBPACK_IMPORTED_MODULE_1__.replaceTaskToTheListWhenEditing)();\n    (0,_control__WEBPACK_IMPORTED_MODULE_3__.calcActiveAndCompletedTasks)();\n  }\n};\n\n// после срабатывания события \"DOMContentLoaded\", переданные внутрь функции выполняется\n// событие DOMContentLoaded происходит, когда браузер разобрал HTML-страницу и составил DOM-дерево\ndocument.addEventListener('DOMContentLoaded', function () {\n  (0,_modules__WEBPACK_IMPORTED_MODULE_0__.displayLocalStorageData)();\n  (0,_control__WEBPACK_IMPORTED_MODULE_3__.calcActiveAndCompletedTasks)();\n});\n\n// добавление или редактирование текста щелчком мыши и нажатием клавиши Enter\nbuttonAddElem.addEventListener('click', handleAddOrEditTextOnClickAndKeydown);\nbodyElem.addEventListener('keydown', function (event) {\n  if (event.key === 'Enter' && textareaElem.value.trim().length !== 0) {\n    handleAddOrEditTextOnClickAndKeydown();\n    event.preventDefault();\n  }\n});\n\n// выход из режима редактирования задачи нажатием клавиши Escape\nbodyElem.addEventListener('keydown', function (event) {\n  if (event.key === 'Escape' && buttonAddElem.textContent === 'Редактировать') {\n    (0,_enteringTask__WEBPACK_IMPORTED_MODULE_1__.returnAnOldTask)();\n    (0,_control__WEBPACK_IMPORTED_MODULE_3__.calcActiveAndCompletedTasks)();\n  }\n});\n\n// после срабатывания события \"dblclick\" по тексту задачи, переданные внутрь функции выполняется\nulElem.addEventListener('dblclick', function (event) {\n  var foundElement = (0,_modules__WEBPACK_IMPORTED_MODULE_0__.searchForElementInsideTheCreatedMarkup)(event.target);\n  if (foundElement !== null && foundElement.className === 'output-task__list-item-block1-text') {\n    (0,_outputTask__WEBPACK_IMPORTED_MODULE_2__.editTheTaskText)(foundElement);\n  }\n});\n\n// после срабатывания события \"click\" по элементу checkbox или \"Х\", функции выполняется\nulElem.addEventListener('click', function (event) {\n  var foundElement = (0,_modules__WEBPACK_IMPORTED_MODULE_0__.searchForElementInsideTheCreatedMarkup)(event.target);\n  if (foundElement !== null && foundElement.className === 'output-task__list-item-block1-checkbox') {\n    (0,_outputTask__WEBPACK_IMPORTED_MODULE_2__.changeCheckboxAndClassOfTaskListItem)(event.target);\n    (0,_control__WEBPACK_IMPORTED_MODULE_3__.getFilteredItems)(selectElem.value);\n  } else if (foundElement !== null && foundElement.className === 'output-task__list-item-block2-remove') {\n    (0,_outputTask__WEBPACK_IMPORTED_MODULE_2__.removeFromTheTaskList)(event.target);\n  }\n  (0,_control__WEBPACK_IMPORTED_MODULE_3__.calcActiveAndCompletedTasks)();\n});\n\n// событие click возникает каждый раз когда кликнули на элемент <button> левой кнопкой мыши\nbuttonSetCheckboxes.addEventListener('click', function () {\n  var nodeListCheckElem = document.querySelectorAll('.output-task__list-item-block1-checkbox');\n  var nodeListTaskTextElem = document.querySelectorAll('.output-task__list-item-block1-text');\n  (0,_enteringTask__WEBPACK_IMPORTED_MODULE_1__.checkAndTakeOfAllCheckboxes)(nodeListCheckElem, nodeListTaskTextElem);\n  (0,_control__WEBPACK_IMPORTED_MODULE_3__.calcActiveAndCompletedTasks)();\n});\n\n// событие click возникает каждый раз когда кликнули на элемент <button> левой кнопкой мыши\nbuttonDeletingItemsWithCheckboxes.addEventListener('click', function () {\n  (0,_enteringTask__WEBPACK_IMPORTED_MODULE_1__.deletingItemsWithCheckboxes)();\n  (0,_control__WEBPACK_IMPORTED_MODULE_3__.calcActiveAndCompletedTasks)();\n});\n\n// событие input возникает каждый раз при вводе нового символа в <input> поисковую строку\ninpSearchElem.addEventListener('input', function () {\n  selectElem.value = selectElem.options[0].value;\n  (0,_control__WEBPACK_IMPORTED_MODULE_3__.searchForItemsInTheList)(inpSearchElem.value.toUpperCase());\n});\n\n// событие input возникает каждый раз при изменения значения в <select> сразу после выбора\nselectElem.addEventListener('input', function () {\n  (0,_control__WEBPACK_IMPORTED_MODULE_3__.getFilteredItems)(selectElem.value);\n});\n\n//# sourceURL=webpack://layout_todos_test/./src/js/app.js?");

/***/ }),

/***/ "./src/js/control.js":
/*!***************************!*\
  !*** ./src/js/control.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   calcActiveAndCompletedTasks: () => (/* binding */ calcActiveAndCompletedTasks),\n/* harmony export */   getFilteredItems: () => (/* binding */ getFilteredItems),\n/* harmony export */   searchForItemsInTheList: () => (/* binding */ searchForItemsInTheList)\n/* harmony export */ });\n/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules */ \"./src/js/modules.js\");\n\n\n// функция поиска элементов в списке задач\nvar searchForItemsInTheList = function searchForItemsInTheList(searchStringText) {\n  if ((0,_modules__WEBPACK_IMPORTED_MODULE_0__.checkLocalStorageForNull)() !== null) {\n    var dataset = (0,_modules__WEBPACK_IMPORTED_MODULE_0__.returnAnObjectWithDataFromLocalStorage)();\n    dataset.forEach(function (_ref) {\n      var note = _ref.note,\n        id = _ref.id;\n      var elem = document.querySelector(\"[data-id=\\\"\".concat(id, \"\\\"]\"));\n      if (note.toUpperCase().indexOf(searchStringText) > -1) {\n        elem.style.display = '';\n      } else {\n        elem.style.display = 'none';\n      }\n    });\n  }\n};\n\n// функция вычисляет количество активных и завершенных задач\nvar calcActiveAndCompletedTasks = function calcActiveAndCompletedTasks() {\n  var tasksAll = document.querySelector('.counters__tasks-all');\n  var tasksActive = document.querySelector('.counters__tasks-active');\n  var tasksCompleted = document.querySelector('.counters__tasks-completed');\n  var indicator = document.querySelector('.counters__indicator');\n  var thirtyPercent = 0.3;\n  var sixtyPercent = 0.6;\n  var ninetyPercent = 0.9;\n  if ((0,_modules__WEBPACK_IMPORTED_MODULE_0__.checkLocalStorageForNull)() !== null) {\n    var dataset = (0,_modules__WEBPACK_IMPORTED_MODULE_0__.returnAnObjectWithDataFromLocalStorage)();\n    var allTaskCounter = 0;\n    var activeTaskCounter = 0;\n    var completedTaskCounter = 0;\n    dataset.forEach(function (_ref2) {\n      var tick = _ref2.tick;\n      if (tick === true) {\n        completedTaskCounter += 1;\n      } else if (tick === false) {\n        activeTaskCounter += 1;\n      }\n      allTaskCounter = completedTaskCounter + activeTaskCounter;\n    });\n    tasksAll.textContent = \"\\u0432\\u0441\\u0435\\u0433\\u043E-\".concat(allTaskCounter);\n    tasksActive.textContent = \"\\u0430\\u043A\\u0442\\u0438\\u0432\\u043D\\u043E-\".concat(activeTaskCounter);\n    tasksCompleted.textContent = \"\\u0437\\u0430\\u0432\\u0435\\u0440\\u0448\\u0435\\u043D\\u043E-\".concat(completedTaskCounter);\n    indicator.value = completedTaskCounter;\n    indicator.low = (allTaskCounter * thirtyPercent).toFixed(2);\n    indicator.high = (allTaskCounter * sixtyPercent).toFixed(2);\n    indicator.max = allTaskCounter;\n    indicator.optimum = (allTaskCounter * ninetyPercent).toFixed(2);\n  } else {\n    tasksAll.textContent = 'всего-0';\n    tasksActive.textContent = 'активно-0';\n    tasksCompleted.textContent = 'завершено-0';\n  }\n  (0,_modules__WEBPACK_IMPORTED_MODULE_0__.updateTheVisibilityOfTheDeleteItemsButton)(indicator.value);\n};\n\n// ___функция для получения отфильтрованных элементов в списке задач\nvar getFilteredItems = function getFilteredItems(textOfTheSelectedItem) {\n  if ((0,_modules__WEBPACK_IMPORTED_MODULE_0__.checkLocalStorageForNull)() !== null) {\n    var dataset = (0,_modules__WEBPACK_IMPORTED_MODULE_0__.returnAnObjectWithDataFromLocalStorage)();\n    if (textOfTheSelectedItem === 'все') {\n      dataset.forEach(function (_ref3) {\n        var id = _ref3.id;\n        var elem = document.querySelector(\"[data-id=\\\"\".concat(id, \"\\\"]\"));\n        elem.style.display = '';\n      });\n    } else if (textOfTheSelectedItem === 'активные') {\n      dataset.forEach(function (_ref4) {\n        var tick = _ref4.tick,\n          id = _ref4.id;\n        var elem = document.querySelector(\"[data-id=\\\"\".concat(id, \"\\\"]\"));\n        if (tick === true) {\n          elem.style.display = 'none';\n        } else if (tick === false) {\n          elem.style.display = '';\n        }\n      });\n    } else if (textOfTheSelectedItem === 'завершенные') {\n      dataset.forEach(function (_ref5) {\n        var tick = _ref5.tick,\n          id = _ref5.id;\n        var elem = document.querySelector(\"[data-id=\\\"\".concat(id, \"\\\"]\"));\n        if (tick === false) {\n          elem.style.display = 'none';\n        } else if (tick === true) {\n          elem.style.display = '';\n        }\n      });\n    }\n  }\n};\n\n//# sourceURL=webpack://layout_todos_test/./src/js/control.js?");

/***/ }),

/***/ "./src/js/enteringTask.js":
/*!********************************!*\
  !*** ./src/js/enteringTask.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTaskToTheList: () => (/* binding */ addTaskToTheList),\n/* harmony export */   checkAllCheckboxes: () => (/* binding */ checkAllCheckboxes),\n/* harmony export */   checkAndTakeOfAllCheckboxes: () => (/* binding */ checkAndTakeOfAllCheckboxes),\n/* harmony export */   deletingItemsWithCheckboxes: () => (/* binding */ deletingItemsWithCheckboxes),\n/* harmony export */   replaceTaskToTheListWhenEditing: () => (/* binding */ replaceTaskToTheListWhenEditing),\n/* harmony export */   returnAnOldTask: () => (/* binding */ returnAnOldTask),\n/* harmony export */   takeOfAllCheckboxes: () => (/* binding */ takeOfAllCheckboxes)\n/* harmony export */ });\n/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules */ \"./src/js/modules.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\n\n// функция добавляет задачу в список задач\nvar addTaskToTheList = function addTaskToTheList() {\n  var recordingDate = new Date(Date.now()).toLocaleDateString('en-GB', {\n    hour: '2-digit',\n    minute: '2-digit',\n    day: '2-digit',\n    month: '2-digit',\n    year: '2-digit'\n  });\n  var textareaElem = document.querySelector('.entering-task__textarea-item');\n  var textEntry = textareaElem.value.trim();\n  if ((0,_modules__WEBPACK_IMPORTED_MODULE_0__.checkLengthOfTheString)(textEntry) === true && (0,_modules__WEBPACK_IMPORTED_MODULE_0__.checkLocalStorageForNull)() === null) {\n    var objEnteredData = {\n      note: textEntry,\n      tick: false,\n      date: recordingDate,\n      remove: 'x',\n      id: (0,_modules__WEBPACK_IMPORTED_MODULE_0__.generateId)(),\n      editing: false\n    };\n    var dataset = [];\n    (0,_modules__WEBPACK_IMPORTED_MODULE_0__.writeToLocalStorage)(dataset, objEnteredData);\n    (0,_modules__WEBPACK_IMPORTED_MODULE_0__.createTaskListItems)(objEnteredData.date, objEnteredData.remove, objEnteredData.tick, objEnteredData.note, objEnteredData.id);\n    textareaElem.value = '';\n  } else if ((0,_modules__WEBPACK_IMPORTED_MODULE_0__.checkLengthOfTheString)(textEntry) === true && (0,_modules__WEBPACK_IMPORTED_MODULE_0__.checkLocalStorageForNull)() !== null) {\n    var _objEnteredData = {\n      note: textEntry,\n      tick: false,\n      date: recordingDate,\n      remove: 'x',\n      id: (0,_modules__WEBPACK_IMPORTED_MODULE_0__.generateId)(),\n      editing: false\n    };\n    var _dataset = (0,_modules__WEBPACK_IMPORTED_MODULE_0__.returnAnObjectWithDataFromLocalStorage)();\n    (0,_modules__WEBPACK_IMPORTED_MODULE_0__.writeToLocalStorage)(_dataset, _objEnteredData);\n    (0,_modules__WEBPACK_IMPORTED_MODULE_0__.createTaskListItems)(_objEnteredData.date, _objEnteredData.remove, _objEnteredData.tick, _objEnteredData.note, _objEnteredData.id);\n    textareaElem.value = '';\n  }\n};\n\n// функция вернуть старую задачу\nvar returnAnOldTask = function returnAnOldTask() {\n  var buttonElem = document.querySelector('.entering-task__button-adding');\n  var buttonSetCheckboxes = document.querySelector('.entering-task__button-mark');\n  var buttonDeletingItemsWithCheckboxes = document.querySelector('.entering-task__button-clearing');\n  var textareaElem = document.querySelector('.entering-task__textarea-item');\n  var dataset = (0,_modules__WEBPACK_IMPORTED_MODULE_0__.returnAnObjectWithDataFromLocalStorage)();\n  dataset.forEach(function (item, index) {\n    if (item.editing === true) {\n      buttonElem.textContent = 'Добавить';\n      var newItem = _objectSpread({}, item);\n      newItem.editing = false;\n      dataset[index] = newItem;\n      window.localStorage.setItem('keyDataset', JSON.stringify(dataset));\n      var idElem = item.id;\n      var liElem = document.querySelector(\"[data-id=\\\"\".concat(idElem, \"\\\"]\"));\n      var ulElem = liElem.parentElement;\n      (0,_modules__WEBPACK_IMPORTED_MODULE_0__.removeClassFromElement)(ulElem, 'dn');\n      (0,_modules__WEBPACK_IMPORTED_MODULE_0__.removeClassFromElement)(buttonSetCheckboxes, 'dn');\n      (0,_modules__WEBPACK_IMPORTED_MODULE_0__.removeClassFromElement)(buttonDeletingItemsWithCheckboxes, 'dn');\n      (0,_modules__WEBPACK_IMPORTED_MODULE_0__.removeClassFromElement)(buttonElem, 'edit-w2');\n      textareaElem.value = '';\n    }\n  });\n};\n\n// функция заменить задачу в списке задач при редактировании\nvar replaceTaskToTheListWhenEditing = function replaceTaskToTheListWhenEditing() {\n  var buttonElem = document.querySelector('.entering-task__button-adding');\n  var buttonSetCheckboxes = document.querySelector('.entering-task__button-mark');\n  var buttonDeletingItemsWithCheckboxes = document.querySelector('.entering-task__button-clearing');\n  var textareaElem = document.querySelector('.entering-task__textarea-item');\n  var dataset = (0,_modules__WEBPACK_IMPORTED_MODULE_0__.returnAnObjectWithDataFromLocalStorage)();\n  var textEntry = textareaElem.value.trim();\n  if ((0,_modules__WEBPACK_IMPORTED_MODULE_0__.checkLengthOfTheString)(textEntry) === true) {\n    dataset.forEach(function (item, index) {\n      if (item.editing === true) {\n        buttonElem.textContent = 'Добавить';\n        var recordingDate = new Date(Date.now()).toLocaleDateString('en-GB', {\n          hour: '2-digit',\n          minute: '2-digit',\n          day: '2-digit',\n          month: '2-digit',\n          year: '2-digit'\n        });\n        var newItem = _objectSpread({}, item);\n        newItem.note = textEntry;\n        newItem.tick = false;\n        newItem.date = recordingDate;\n        newItem.editing = false;\n        dataset[index] = newItem;\n        window.localStorage.setItem('keyDataset', JSON.stringify(dataset));\n        var idElem = item.id;\n        var liElem = document.querySelector(\"[data-id=\\\"\".concat(idElem, \"\\\"]\"));\n        var ulElem = liElem.parentElement;\n        var taskTextElement = liElem.firstElementChild.firstElementChild;\n        taskTextElement.textContent = textEntry;\n        var dateElement = liElem.lastElementChild.firstElementChild;\n        dateElement.textContent = recordingDate;\n        (0,_modules__WEBPACK_IMPORTED_MODULE_0__.removeClassFromElement)(ulElem, 'dn');\n        (0,_modules__WEBPACK_IMPORTED_MODULE_0__.removeClassFromElement)(buttonSetCheckboxes, 'dn');\n        (0,_modules__WEBPACK_IMPORTED_MODULE_0__.removeClassFromElement)(buttonDeletingItemsWithCheckboxes, 'dn');\n        (0,_modules__WEBPACK_IMPORTED_MODULE_0__.removeClassFromElement)(buttonElem, 'edit-w2');\n        textareaElem.value = '';\n      }\n    });\n  }\n};\n\n// функция для установки всех флажков\nvar checkAllCheckboxes = function checkAllCheckboxes(dataset, nodeListCheckElem, nodeListTaskTextElem) {\n  var newDataset = dataset;\n  newDataset.forEach(function (item, index) {\n    var newItem = _objectSpread({}, item);\n    newItem.tick = true;\n    var newNodeListCheckElem = nodeListCheckElem;\n    newNodeListCheckElem[index].checked = true;\n    (0,_modules__WEBPACK_IMPORTED_MODULE_0__.addClassToElement)(nodeListTaskTextElem[index], 'completed');\n    newDataset[index] = newItem;\n    window.localStorage.setItem('keyDataset', JSON.stringify(newDataset));\n  });\n};\n\n// функция для снятия всех флажков\nvar takeOfAllCheckboxes = function takeOfAllCheckboxes(dataset, nodeListCheckElem, nodeListTaskTextElem) {\n  var newDataset = dataset;\n  newDataset.forEach(function (item, index) {\n    var newItem = _objectSpread({}, item);\n    newItem.tick = false;\n    var newNodeListCheckElem = nodeListCheckElem;\n    newNodeListCheckElem[index].checked = false;\n    (0,_modules__WEBPACK_IMPORTED_MODULE_0__.removeClassFromElement)(nodeListTaskTextElem[index], 'completed');\n    newDataset[index] = newItem;\n    window.localStorage.setItem('keyDataset', JSON.stringify(newDataset));\n  });\n};\n\n// функция для установки или снятия всех флажков\nvar checkAndTakeOfAllCheckboxes = function checkAndTakeOfAllCheckboxes(nodeListCheckElem, nodeListTaskTextElem) {\n  var arraylength = null;\n  var checkboxCounterTrue = null;\n  if ((0,_modules__WEBPACK_IMPORTED_MODULE_0__.checkLocalStorageForNull)() !== null) {\n    var dataset = (0,_modules__WEBPACK_IMPORTED_MODULE_0__.returnAnObjectWithDataFromLocalStorage)();\n    arraylength = dataset.length;\n    dataset.forEach(function (_ref) {\n      var tick = _ref.tick;\n      if (tick === true) {\n        checkboxCounterTrue += 1;\n      }\n    });\n    if (checkboxCounterTrue === arraylength) {\n      takeOfAllCheckboxes(dataset, nodeListCheckElem, nodeListTaskTextElem);\n    } else {\n      checkAllCheckboxes(dataset, nodeListCheckElem, nodeListTaskTextElem);\n    }\n  }\n};\n\n// функция для удаления элементов с отмеченными флажками\nvar deletingItemsWithCheckboxes = function deletingItemsWithCheckboxes() {\n  if ((0,_modules__WEBPACK_IMPORTED_MODULE_0__.checkLocalStorageForNull)() !== null) {\n    var dataset = (0,_modules__WEBPACK_IMPORTED_MODULE_0__.returnAnObjectWithDataFromLocalStorage)();\n    var nodeListElemLi = document.querySelectorAll('.output-task__list-item');\n    for (var i = dataset.length - 1; i >= 0; i -= 1) {\n      if (dataset[i].tick === true) {\n        dataset.splice(i, 1);\n        nodeListElemLi[i].remove();\n      }\n      window.localStorage.setItem('keyDataset', JSON.stringify(dataset));\n    }\n  }\n};\n\n//# sourceURL=webpack://layout_todos_test/./src/js/enteringTask.js?");

/***/ }),

/***/ "./src/js/images.js":
/*!**************************!*\
  !*** ./src/js/images.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_images_fav_icons_bird_apple_touch_icon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/fav_icons_bird/apple-touch-icon.png */ \"./src/assets/images/fav_icons_bird/apple-touch-icon.png\");\n/* harmony import */ var _assets_images_fav_icons_bird_favicon_32x32_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/fav_icons_bird/favicon-32x32.png */ \"./src/assets/images/fav_icons_bird/favicon-32x32.png\");\n/* harmony import */ var _assets_images_fav_icons_bird_favicon_16x16_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/fav_icons_bird/favicon-16x16.png */ \"./src/assets/images/fav_icons_bird/favicon-16x16.png\");\n/* harmony import */ var _assets_images_fav_icons_bird_safari_pinned_tab_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/fav_icons_bird/safari-pinned-tab.svg */ \"./src/assets/images/fav_icons_bird/safari-pinned-tab.svg\");\n/* harmony import */ var _assets_images_fav_icons_bird_mstile_150x150_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/fav_icons_bird/mstile-150x150.png */ \"./src/assets/images/fav_icons_bird/mstile-150x150.png\");\n/* harmony import */ var _assets_images_fav_icons_bird_android_chrome_192x192_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/images/fav_icons_bird/android-chrome-192x192.png */ \"./src/assets/images/fav_icons_bird/android-chrome-192x192.png\");\n/* harmony import */ var _assets_images_fav_icons_bird_android_chrome_256x256_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/images/fav_icons_bird/android-chrome-256x256.png */ \"./src/assets/images/fav_icons_bird/android-chrome-256x256.png\");\n/* harmony import */ var _assets_images_1_51bird_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/images/1.51bird.svg */ \"./src/assets/images/1.51bird.svg\");\n/* harmony import */ var _assets_images_VectorDown_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/images/VectorDown.svg */ \"./src/assets/images/VectorDown.svg\");\n// импортируем значки веб-сайта (fav_icons_bird)\n\n\n\n\n\n\n\n// импортируем изображения\n\n\n\n//# sourceURL=webpack://layout_todos_test/./src/js/images.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/index.css */ \"./src/css/index.css\");\n/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images */ \"./src/js/images.js\");\n/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules */ \"./src/js/modules.js\");\n/* harmony import */ var _enteringTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enteringTask */ \"./src/js/enteringTask.js\");\n/* harmony import */ var _outputTask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./outputTask */ \"./src/js/outputTask.js\");\n/* harmony import */ var _control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./control */ \"./src/js/control.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app */ \"./src/js/app.js\");\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://layout_todos_test/./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules.js":
/*!***************************!*\
  !*** ./src/js/modules.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addClassToElement: () => (/* binding */ addClassToElement),\n/* harmony export */   checkLengthOfTheString: () => (/* binding */ checkLengthOfTheString),\n/* harmony export */   checkLocalStorageForNull: () => (/* binding */ checkLocalStorageForNull),\n/* harmony export */   createTaskListItems: () => (/* binding */ createTaskListItems),\n/* harmony export */   displayLocalStorageData: () => (/* binding */ displayLocalStorageData),\n/* harmony export */   generateId: () => (/* binding */ generateId),\n/* harmony export */   removeClassFromElement: () => (/* binding */ removeClassFromElement),\n/* harmony export */   returnAnObjectWithDataFromLocalStorage: () => (/* binding */ returnAnObjectWithDataFromLocalStorage),\n/* harmony export */   searchForElementInsideTheCreatedMarkup: () => (/* binding */ searchForElementInsideTheCreatedMarkup),\n/* harmony export */   updateTheVisibilityOfTheDeleteItemsButton: () => (/* binding */ updateTheVisibilityOfTheDeleteItemsButton),\n/* harmony export */   writeToLocalStorage: () => (/* binding */ writeToLocalStorage)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n// функция проверяет длину строки\nvar checkLengthOfTheString = function checkLengthOfTheString(str) {\n  if (str.trim().length > 0) {\n    return true;\n  }\n  return false;\n};\n\n// функция проверяет данные из localStorage на null (отсутствие значения)\nvar checkLocalStorageForNull = function checkLocalStorageForNull() {\n  var dataFromLocalStorage = window.localStorage.getItem('keyDataset');\n  if (dataFromLocalStorage === null) {\n    return null;\n  }\n  return true;\n};\n\n// функция записывает данные в localStorage\nvar writeToLocalStorage = function writeToLocalStorage(dataset, objEnteredData) {\n  dataset.unshift(objEnteredData);\n  window.localStorage.setItem('keyDataset', JSON.stringify(dataset));\n};\n\n// функция возвращает объект с данными из localStorage\nvar returnAnObjectWithDataFromLocalStorage = function returnAnObjectWithDataFromLocalStorage() {\n  var dataFromLocalStorage = window.localStorage.getItem('keyDataset');\n  return JSON.parse(dataFromLocalStorage);\n};\n\n// функция для генерации id\nvar generateId = function generateId() {\n  return Math.round(Math.random() * 100000000000000).toString(16);\n};\n\n/* Создадим такую разметку*\r\n <li class=\"output-task__list-item\">\r\n  <div class=\"output-task__list-item-block1\">\r\n    <span class=\"output-task__list-item-block1-text\">текст</span>\r\n    <input class=\"output-task__list-item-block1-checkbox\" type=\"checkbox\" checked=\"off\">\r\n  </div>\r\n  <div class=\"output-task__list-item-block2\">\r\n    <span class=\"output-task__list-item-block2-date\">22/12/22, 13:32</span>\r\n    <span class=\"output-task__list-item-block2-remove\">x</span>\r\n  </div>\r\n</li>\r\n*/\n\n// функция создает элементы списка задач*\nvar createTaskListItems = function createTaskListItems(date, remove, tick, note, id) {\n  var ulElem = document.querySelector('.output-task__list');\n  var liElem = document.createElement('li');\n  liElem.classList.add('output-task__list-item');\n  var divElem1 = document.createElement('div');\n  var spanElem1 = document.createElement('span');\n  var inputElem1 = document.createElement('input');\n  var divElem2 = document.createElement('div');\n  var spanElem2 = document.createElement('span');\n  var spanElem3 = document.createElement('span');\n  var dateElem1 = document.createTextNode(date);\n  var crossElem2 = document.createTextNode(remove);\n  divElem1.classList.add('output-task__list-item-block1');\n  spanElem1.classList.add('output-task__list-item-block1-text');\n  inputElem1.classList.add('output-task__list-item-block1-checkbox');\n  divElem2.classList.add('output-task__list-item-block2');\n  spanElem2.classList.add('output-task__list-item-block2-date');\n  spanElem3.classList.add('output-task__list-item-block2-remove');\n  inputElem1.setAttribute('type', 'checkbox');\n  if (tick === true) {\n    inputElem1.setAttribute('checked', tick);\n    spanElem1.classList.add('completed');\n  }\n  divElem1.appendChild(spanElem1);\n  divElem1.appendChild(inputElem1);\n  divElem2.appendChild(spanElem2);\n  divElem2.appendChild(spanElem3);\n  spanElem2.appendChild(dateElem1);\n  spanElem3.appendChild(crossElem2);\n  spanElem1.textContent = note;\n  liElem.setAttribute('data-id', id);\n  liElem.appendChild(divElem1);\n  liElem.appendChild(divElem2);\n  ulElem.prepend(liElem);\n};\n\n// функция выводит (отображает) данные из локального хранилища в виде списка задач\nvar displayLocalStorageData = function displayLocalStorageData() {\n  if (checkLocalStorageForNull() !== null) {\n    var dataset = returnAnObjectWithDataFromLocalStorage();\n    var liCollection = document.getElementsByClassName('output-task__list-item');\n    if (dataset.length !== liCollection.length) {\n      dataset.forEach(function (item, index) {\n        var newItem = _objectSpread({}, item);\n        newItem.editing = false;\n        dataset[index] = newItem;\n        window.localStorage.setItem('keyDataset', JSON.stringify(dataset));\n        createTaskListItems(item.date, item.remove, item.tick, item.note, item.id);\n      });\n    }\n  }\n};\n\n// функция добавляет класс элементу\nvar addClassToElement = function addClassToElement(element, className) {\n  element.classList.add(className);\n};\n\n// функция удаляет класс у элемента\nvar removeClassFromElement = function removeClassFromElement(element, className) {\n  element.classList.remove(className);\n};\n\n// функция поиск элемента внутри созданной разметки\nvar searchForElementInsideTheCreatedMarkup = function searchForElementInsideTheCreatedMarkup(domElement) {\n  var progenitorElementClassName = 'output-task__list-item';\n  var childElementBlock1ClassName = 'output-task__list-item-block1';\n  var childElementBlock2ClassName = 'output-task__list-item-block2';\n  var grandchildElementClassNameWithText = 'output-task__list-item-block1-text';\n  var grandchildElementClassNameWithCheckbox = 'output-task__list-item-block1-checkbox';\n  var grandchildElementClassNameWithDate = 'output-task__list-item-block2-date';\n  var grandchildElementClassNameRemove = 'output-task__list-item-block2-remove';\n  var foundElement = null;\n  if (domElement.className === grandchildElementClassNameWithText) {\n    foundElement = domElement;\n  } else if (domElement.className === grandchildElementClassNameWithCheckbox) {\n    foundElement = domElement;\n  } else if (domElement.className === grandchildElementClassNameRemove) {\n    foundElement = domElement;\n  } else if (domElement.className === progenitorElementClassName) {\n    var firstChildElem = domElement.firstElementChild;\n    var firstGrandchildElem = firstChildElem.firstElementChild;\n    foundElement = firstGrandchildElem;\n  } else if (domElement.className === childElementBlock1ClassName) {\n    var _firstChildElem = domElement.firstElementChild;\n    foundElement = _firstChildElem;\n  } else if (domElement.className === childElementBlock2ClassName) {\n    var previousElem = domElement.previousElementSibling;\n    var _firstChildElem2 = previousElem.firstElementChild;\n    foundElement = _firstChildElem2;\n  } else if (domElement.className === grandchildElementClassNameWithDate) {\n    var parentElem = domElement.parentElement;\n    var _previousElem = parentElem.previousElementSibling;\n    var _firstChildElem3 = _previousElem.firstElementChild;\n    foundElement = _firstChildElem3;\n  }\n  return foundElement;\n};\n\n// обновить видимость кнопки удаления элементов\nvar updateTheVisibilityOfTheDeleteItemsButton = function updateTheVisibilityOfTheDeleteItemsButton(indicator) {\n  var buttonDeletingItemsWithCheckboxes = document.querySelector('.entering-task__button-clearing');\n  if (indicator > 0) {\n    removeClassFromElement(buttonDeletingItemsWithCheckboxes, 'dn');\n  } else if (indicator === 0) {\n    addClassToElement(buttonDeletingItemsWithCheckboxes, 'dn');\n  }\n};\n\n//# sourceURL=webpack://layout_todos_test/./src/js/modules.js?");

/***/ }),

/***/ "./src/js/outputTask.js":
/*!******************************!*\
  !*** ./src/js/outputTask.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   changeCheckboxAndClassOfTaskListItem: () => (/* binding */ changeCheckboxAndClassOfTaskListItem),\n/* harmony export */   editTheTaskText: () => (/* binding */ editTheTaskText),\n/* harmony export */   removeFromTheTaskList: () => (/* binding */ removeFromTheTaskList)\n/* harmony export */ });\n/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules */ \"./src/js/modules.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\n\n// функция для редактирования текста задачи\nvar editTheTaskText = function editTheTaskText(taskTextElement) {\n  if ((0,_modules__WEBPACK_IMPORTED_MODULE_0__.checkLocalStorageForNull)() !== null) {\n    var buttonElem = document.querySelector('.entering-task__button-adding');\n    var buttonSetCheckboxes = document.querySelector('.entering-task__button-mark');\n    var buttonDeletingItemsWithCheckboxes = document.querySelector('.entering-task__button-clearing');\n    var textareaElem = document.querySelector('.entering-task__textarea-item');\n    var dataset = (0,_modules__WEBPACK_IMPORTED_MODULE_0__.returnAnObjectWithDataFromLocalStorage)();\n    var liElem = taskTextElement.parentNode.parentNode;\n    var ulElem = liElem.parentElement;\n    var idElem = liElem.getAttribute('data-id');\n    dataset.forEach(function (item, index) {\n      if (item.id === idElem && item.tick !== true) {\n        var newItem = _objectSpread({}, item);\n        if (newItem.editing === false) {\n          newItem.editing = true;\n          textareaElem.value = newItem.note;\n          (0,_modules__WEBPACK_IMPORTED_MODULE_0__.addClassToElement)(ulElem, 'dn');\n          (0,_modules__WEBPACK_IMPORTED_MODULE_0__.addClassToElement)(buttonSetCheckboxes, 'dn');\n          (0,_modules__WEBPACK_IMPORTED_MODULE_0__.addClassToElement)(buttonDeletingItemsWithCheckboxes, 'dn');\n          buttonElem.textContent = 'Редактировать';\n          (0,_modules__WEBPACK_IMPORTED_MODULE_0__.addClassToElement)(buttonElem, 'edit-w2');\n        }\n        dataset[index] = newItem;\n        window.localStorage.setItem('keyDataset', JSON.stringify(dataset));\n      }\n    });\n  }\n};\n\n// функция изменяет значение checkbox и класса у элемента списка задач\nvar changeCheckboxAndClassOfTaskListItem = function changeCheckboxAndClassOfTaskListItem(checkboxElement) {\n  if ((0,_modules__WEBPACK_IMPORTED_MODULE_0__.checkLocalStorageForNull)() !== null) {\n    var dataset = (0,_modules__WEBPACK_IMPORTED_MODULE_0__.returnAnObjectWithDataFromLocalStorage)();\n    var liElem = checkboxElement.parentNode.parentNode;\n    var taskTextElem = checkboxElement.previousElementSibling;\n    var idElem = liElem.getAttribute('data-id');\n    dataset.forEach(function (item, index) {\n      if (item.id === idElem) {\n        var newItem = _objectSpread({}, item);\n        if (newItem.tick === false) {\n          newItem.tick = true;\n          (0,_modules__WEBPACK_IMPORTED_MODULE_0__.addClassToElement)(taskTextElem, 'completed');\n        } else if (newItem.tick === true) {\n          newItem.tick = false;\n          (0,_modules__WEBPACK_IMPORTED_MODULE_0__.removeClassFromElement)(taskTextElem, 'completed');\n        }\n        dataset[index] = newItem;\n        window.localStorage.setItem('keyDataset', JSON.stringify(dataset));\n      }\n    });\n  }\n};\n\n// функция для удаления элемента из списка задач\nvar removeFromTheTaskList = function removeFromTheTaskList(crossElement) {\n  if ((0,_modules__WEBPACK_IMPORTED_MODULE_0__.checkLocalStorageForNull)() !== null) {\n    var dataset = (0,_modules__WEBPACK_IMPORTED_MODULE_0__.returnAnObjectWithDataFromLocalStorage)();\n    var liElem = crossElement.parentNode.parentNode;\n    var idElem = liElem.getAttribute('data-id');\n    var elementIndex = dataset.findIndex(function (_ref) {\n      var id = _ref.id;\n      return id === idElem;\n    });\n    if (elementIndex !== -1) {\n      dataset.splice(elementIndex, 1);\n      liElem.remove();\n      window.localStorage.setItem('keyDataset', JSON.stringify(dataset));\n    }\n  }\n};\n\n//# sourceURL=webpack://layout_todos_test/./src/js/outputTask.js?");

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://layout_todos_test/./src/css/index.css?");

/***/ }),

/***/ "./src/assets/images/1.51bird.svg":
/*!****************************************!*\
  !*** ./src/assets/images/1.51bird.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/1.51bird.svg\";\n\n//# sourceURL=webpack://layout_todos_test/./src/assets/images/1.51bird.svg?");

/***/ }),

/***/ "./src/assets/images/VectorDown.svg":
/*!******************************************!*\
  !*** ./src/assets/images/VectorDown.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/VectorDown.svg\";\n\n//# sourceURL=webpack://layout_todos_test/./src/assets/images/VectorDown.svg?");

/***/ }),

/***/ "./src/assets/images/fav_icons_bird/android-chrome-192x192.png":
/*!*********************************************************************!*\
  !*** ./src/assets/images/fav_icons_bird/android-chrome-192x192.png ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/android-chrome-192x192.png\";\n\n//# sourceURL=webpack://layout_todos_test/./src/assets/images/fav_icons_bird/android-chrome-192x192.png?");

/***/ }),

/***/ "./src/assets/images/fav_icons_bird/android-chrome-256x256.png":
/*!*********************************************************************!*\
  !*** ./src/assets/images/fav_icons_bird/android-chrome-256x256.png ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/android-chrome-256x256.png\";\n\n//# sourceURL=webpack://layout_todos_test/./src/assets/images/fav_icons_bird/android-chrome-256x256.png?");

/***/ }),

/***/ "./src/assets/images/fav_icons_bird/apple-touch-icon.png":
/*!***************************************************************!*\
  !*** ./src/assets/images/fav_icons_bird/apple-touch-icon.png ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/apple-touch-icon.png\";\n\n//# sourceURL=webpack://layout_todos_test/./src/assets/images/fav_icons_bird/apple-touch-icon.png?");

/***/ }),

/***/ "./src/assets/images/fav_icons_bird/favicon-16x16.png":
/*!************************************************************!*\
  !*** ./src/assets/images/fav_icons_bird/favicon-16x16.png ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/favicon-16x16.png\";\n\n//# sourceURL=webpack://layout_todos_test/./src/assets/images/fav_icons_bird/favicon-16x16.png?");

/***/ }),

/***/ "./src/assets/images/fav_icons_bird/favicon-32x32.png":
/*!************************************************************!*\
  !*** ./src/assets/images/fav_icons_bird/favicon-32x32.png ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/favicon-32x32.png\";\n\n//# sourceURL=webpack://layout_todos_test/./src/assets/images/fav_icons_bird/favicon-32x32.png?");

/***/ }),

/***/ "./src/assets/images/fav_icons_bird/mstile-150x150.png":
/*!*************************************************************!*\
  !*** ./src/assets/images/fav_icons_bird/mstile-150x150.png ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/mstile-150x150.png\";\n\n//# sourceURL=webpack://layout_todos_test/./src/assets/images/fav_icons_bird/mstile-150x150.png?");

/***/ }),

/***/ "./src/assets/images/fav_icons_bird/safari-pinned-tab.svg":
/*!****************************************************************!*\
  !*** ./src/assets/images/fav_icons_bird/safari-pinned-tab.svg ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/safari-pinned-tab.svg\";\n\n//# sourceURL=webpack://layout_todos_test/./src/assets/images/fav_icons_bird/safari-pinned-tab.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;
window.addEventListener('DOMContentLoaded', function() {

//Получение версии IE или Edge
	let version = getIeVersion(),//Задаем функцию определения IE или EDGE в переменную
		browser;
//Присваиваем переменной true или false в зависимости от определения браузера
		if (version === false) {
		  browser = true;
		} else if (version >= 12) {
		  browser = false;
		} else {
		  browser = false;
		}

//Функция определения браузера возвращает версию IE или афдыу если браузер другой
	function getIeVersion() {
//Определяем, является ли текущий браузер IE
 	 let ua = window.navigator.userAgent,
		 msie = ua.indexOf('MSIE ');

  	if (msie > 0) {
//Если IE 10 или младшей версии функция возвращает номер версии
		document.write('Браузер IE, версия: ' + parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10));
	    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
	  }

	  let trident = ua.indexOf('Trident/');
	  if (trident > 0) {
//Если IE 11 версии функция возвращает номер версии
	    let rv = ua.indexOf('rv:');
	    document.write('Браузер IE, версия: ' + parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10));
	    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
	  }

	  let edge = ua.indexOf('Edge/');
	  if (edge > 0) {
//Если Edge (или IE 12 версии и выше) функция возвращает номер версии
		document.write('Браузер Edge, версия: ' + parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10));
	    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
	  }

//Функция возвращает false,если текущий браузер не IE и не EDGE
	document.write('Текущий браузер не IE и не EDGE');
	return false;
	};
});
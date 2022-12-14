# fullPage.js
![предварительный просмотр](https://raw.github.com/alvarotrigo/fullPage.js/master/examples/imgs/intro.png)
![совместимость](https://raw.github.com/alvarotrigo/fullPage.js/master/examples/imgs/compatible.gif?v=2)

<p align="center">
  <a href="https://github.com/alvarotrigo/fullPage.js/#fullpagejs">English</a> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/spanish#fullpagejs">Spanish</a> |
  <span>Russian</span> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/chinese#fullpagejs">Chinese</a> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/korean#fullpagejs">Korean</a>
</p>

---

![Версия fullPage.js](http://img.shields.io/badge/fullPage.js-v2.9.6-brightgreen.svg)
[![Лицензия](http://img.shields.io/badge/License-MIT-blue.svg)](http://opensource.org/licenses/MIT)
[![Перечисление на PayPal](https://img.shields.io/badge/donate-PayPal.me-ff69b4.svg)](https://www.paypal.me/alvarotrigo/9.95)
[![jsDelivr Hits](https://data.jsdelivr.com/v1/package/npm/fullpage.js/badge?style=rounded)](https://www.jsdelivr.com/package/npm/fullpage.js)
&nbsp;&nbsp; **|**&nbsp;&nbsp; *7Кб в формате gzip* &nbsp;&nbsp;**|**&nbsp;&nbsp; *Создано [@imac2](https://twitter.com/imac2)*

- [Живое демо](http://alvarotrigo.com/fullPage/)
- [Тема Wordpress](http://alvarotrigo.com/fullPage/utils/wordpress.html)
- [Расширения fullpage.js](http://alvarotrigo.com/fullPage/extensions/)
- [Часто задаваемые вопросы](https://github.com/alvarotrigo/fullPage.js/wiki/FAQ---Frequently-Answered-Questions)
---

Простая и удобная в использовании библиотека для создания веб-сайтов с полноэкранной прокруткой (также известных, как одностраничные сайты).
Она позволяет создавать веб-сайты с полноэкранной прокруткой, а также добавлять горизонтальные ползунки для разделов сайта.

Пригласите меня на кофе
[![Перевести деньги](https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=BEK5JQCQMED4J&lc=GB&item_name=fullPage%2ejs&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)

Настройка библиотеки и срочные изменения доступны по запросу за разумную плату. <a href="http://alvarotrigo.com/#contact-page">Contact me</a>.

- [Введение](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian/#Введение)
- [Совместимость](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian/#Совместимость)
- [Использование](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian/#Использование)
  - [Создание ссылок на разделы или слайды](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian/#Создание-ссылок-на-разделы-или-слайды)
  - [Создание больших и малых разделов](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian/#Создание-больших-и-малых-разделов)
  - [Классы состояний, добавляемые fullpage.js](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian/#Классы-состояний-добавляемые-fullpagejs)
  - [Отложенная загрузка](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian/#Отложенная-загрузка)
  - [Автопроигрывание встроенного медиа](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian/#Автопроигрываниеприостановка-встроенного-медиа)
  - [Использование расширений](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian/#Использование-расширений)
- [Опции](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian/#Опции)
- [Функции](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian/#Функции)
- [Обратные вызовы](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian/#Обратные-вызовы)
- [Сообщение о проблеме](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian/#Сообщение-о-проблемах)
- [Внесение предложений для fullpage.js](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian/#Внесение-предложений-для-fullpagejs)
- [Change Log](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian/#changelog)
- [Задачи по построению](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian/#Задачи-по-построению)
- [Ресурсы](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian/#Ресурсы)
- [Кто пользуется fullpage.js](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian/#Кто-пользуется-fullpagejs)
- [Денежные переводы](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian/#Денежные-переводы)
- [Лицензия](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian/#Лицензия)

## Введение
Более чем приветствуются ваши предложения, касающиеся не только функций и возможностей, но и улучшения стиля кодирования.
Давайте вместе создадим замечательную библиотеку, чтобы облегчить жизнь пользователям!

## Совместимость
fullPage.js полностью функционирует во всех современных браузерах, также, как и в некоторых устаревших, таких как Internet Explorer 8, 9, Opera 12 и т.д.
Работает в браузерах, имеющих и не имеющих поддержку CSS3, что обеспечивает идеальную совместимость с устаревшими браузерами.
Обеспечивает поддержку сенсорного управления для мобильных телефонов, планшетов и компьютеров с сенсорным экраном.

[![Browserstack](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/browserstack2.png)](http://www.browserstack.com/)

Выражаем особую благодарность [Browserstack](http://www.browserstack.com/) за поддержку fullpage.js.

## Использование
Как вы можете увидеть в файлах-примерах, вам необходимо будет включить:
 - [Библиотеку jQuery](http://jquery.com/). (1.6.0 минимум)
 - Файл JavaScript `jquery.fullPage.js` (или его минифицированную версию `jquery.fullPage.min.js`)
 - Файл css `jquery.fullPage.css`

 **Опционально**, при использовании `css3:false` вы можете добавить [библиотеку jQuery UI](http://jqueryui.com/), в случае если вы хотите использовать другие анимационные эффекты, в дополнение к включённым в библиотеку jQuery (`linear` и `swing` ), или эффект, включённый по умолчанию в fullPage.js (`easeInOutCubic`).

### Установка bower или npm
**Опционально**, вы можете установить fullPage.js с bower или npm согласно вашим предпочтениям:

Введите:
```shell
// С bower
bower install fullpage.js

// С npm
npm install fullpage.js
```

### Включение файлов:

```html

<link rel="stylesheet" type="text/css" href="../../jquery.fullPage.css"/>

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>

<!-- Следующая строчка опциональна. Необходима лишь в случае, если вы используете опцию css3:false и хотите использовать другие анимационные эффекты, кроме "linear", "swing" или "easeInOutCubic". -->
<script src="../../vendors/jquery.easings.min.js"></script>


<!-- Следующая строчка опциональна, необходима лишь в случае, если вы хотите использовать опцию `scrollOverflow:true` -->
<script type="text/javascript" src="../../vendors/scrolloverflow.min.js"></script>

<script type="text/javascript" src="../../jquery.fullPage.js"></script>
```

### Опциональное использование CDN
Если вы предпочитаете использовать CDN для загрузки необходимых файлов, fullPage.js есть в CDNJS:
https://cdnjs.com/libraries/fullPage.js

### Требуемая HTML-структура
Начиная свой документ HTML, обязательно введите [HTML DOCTYPE declaration](http://www.corelangs.com/html/introduction/doctype.html) в первой строке вашего HTML-кода. Иначе у вас могут возникнуть проблемы с вертикальным размером разделов. В приведённых примерах используется тип документа HTML 5 `<!DOCTYPE html>`.

Каждый раздел будет определён элементом, содержащим класс `section`.
Активный раздел по умолчанию будет являться первым разделом, то есть домашней страницей.

Разделы должны помещаться в обёрточный код (в данном случае - `<div id="fullpage">`). Обёрточный код не может быть элементом `body`.
```html
<div id="full page">
	<div class="section">Определённый раздел</div>
	<div class="section">Определённый раздел</div>
	<div class="section">Определённый раздел</div>
	<div class="section">Определённый раздел</div>
</div>
```
Если вы хотите определить другую точку входа (не первый раздел или первый слайд раздела), просто добавьте класс `active` к разделу и слайду, которые вы хотите загружать в первую очередь.
```html
<div class="section active">Определённый раздел</div>
```

Чтобы создать горизонтальный ползунок в разделе, каждый слайд должен определяться по умолчанию с помощью элемента, содержащего класс `slide`:
```html
<div class="section">
	<div class="slide"> Слайд 1 </div>
	<div class="slide"> Слайд 2 </div>
	<div class="slide"> Слайд 3 </div>
	<div class="slide"> Слайд 4 </div>
</div>
````
Вы можете посмотреть на полностью работоспособный пример HTML-структуры здесь: [файл `demoPage.html`](https://github.com/alvarotrigo/fullPage.js/blob/master/examples/demoPage.html).

### Инициализация
Всё, что вам требуется сделать, - вставить fullPage.js в функцию `$(document).ready`:

```javascript
$(document).ready(function() {
	$('#fullpage').fullpage();
});
```

Более сложная инициализация с установкой всех параметров может выглядеть так:
```javascript
$(document).ready(function() {
	$('#fullpage').fullpage({
		//Навигация
		menu: '#menu',
		lockAnchors: false,
		anchors:['firstPage', 'secondPage'],
		navigation: false,
		navigationPosition: 'right',
		navigationTooltips: ['firstSlide', 'secondSlide'],
		showActiveTooltip: false,
		slidesNavigation: false,
		slidesNavPosition: 'bottom',

		//Скроллинг
		css3: true,
		scrollingSpeed: 700,
		autoScrolling: true,
		fitToSection: true,
		fitToSectionDelay: 1000,
		scrollBar: false,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
		loopBottom: false,
		loopTop: false,
		loopHorizontal: true,
		continuousVertical: false,
		continuousHorizontal: false,
		scrollHorizontally: false,
		interlockedSlides: false,
		dragAndMove: false,
		offsetSections: false,
		resetSliders: false,
		fadingEffect: false,
		normalScrollElements: '#element1, .element2',
		scrollOverflow: false,
		scrollOverflowReset: false,
		scrollOverflowOptions: null,
		touchSensitivity: 15,
		normalScrollElementTouchThreshold: 5,
		bigSectionsDestination: null,

		//Доступ
		keyboardScrolling: true,
		animateAnchor: true,
		recordHistory: true,

		//Дизайн
		controlArrows: true,
		verticalCentered: true,
		sectionsColor : ['#ccc', '#fff'],
		paddingTop: '3em',
		paddingBottom: '10px',
		fixedElements: '#header, .footer',
		responsiveWidth: 0,
		responsiveHeight: 0,
		responsiveSlides: false,
		parallax: false,
		parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

		//Настроить селекторы
		sectionSelector: '.section',
		slideSelector: '.slide',

		lazyLoading: true,

		//события
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
		afterResize: function(){},
		afterResponsive: function(isResponsive){},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
	});
});
```

### Создание ссылок на разделы или слайды
Если вы используете fullPage.js с ссылками привязки для разделов (пользуясь опцией `anchors` или атрибутом `data-anchor` в каждом разделе), то вы сможете использовать ссылки привязки также для перемещения напрямую к определённому слайду в разделе.

Вот пример ссылки с привязкой: http://alvarotrigo.com/fullPage/#secondPage/2 (это URL, который вы увидите при доступе к данному разделу/слайду вручную)
Обратите внимание на то, что последняя часть URL заканчивается элементом `#secondPage/2`.

При следующей инициализации:

```javascript
$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors:['firstPage', 'secondPage', 'thirdPage']
	});
});
```

Привязка `#secondPage/2` в конце URL определяет заданный раздел и слайд соответственно. В предыдущем URL заданным разделом будет являться раздел, определённый привязкой `secondPage`, а заданным слайдом будет второй слайд, так как для этого мы и использовали индекс `2`. (первый слайд в разделе имеет индекс 0, так как технически это раздел).

Мы могли бы использовать свою привязку для слайда, а не его индекс, если бы мы использовали атрибут `data-anchor` в HTML-разметке следующим образом:

```html
<div class="section">
	<div class="slide" data-anchor="slide1"> Слайд 1 </div>
	<div class="slide" data-anchor="slide2"> Слайд 2 </div>
	<div class="slide" data-anchor="slide3"> Слайд 3 </div>
	<div class="slide" data-anchor="slide4"> Слайд 4 </div>
</div>
```
В данном случае мы бы использовали URL `#secondPage/slide3`, являющийся эквивалентным предыдущему - `#secondPage/2`.

Обратите внимание, что привязки к разделам могут создаваться точно также, с помощью атрибута `data-anchor`, если не предусмотрен ряд каких-либо привязок - `anchors`.

**Внимание!** обозначения `data-anchor` не могут иметь значение, совпадающее с каким-либо элементом ID на сайте (или элементом NAME - для IE).

### Создание больших и малых разделов
[Демо](http://codepen.io/alvarotrigo/pen/BKjRYm) fullPage.js обеспечивает возможность убрать ограничение по высоте разделов и слайдов. Есть возможность создавать разделы, высота которых больше или меньше окна просмотра. Эта функция идеальна при использовании колонтитулов.
Важно понимать, что нет смысла в применении данной функции ко всем вашим разделам. При наличии более чем одного раздела при первоначальной загрузке сайта fullPage.js не сможет сделать прокрутку, чтобы увидеть следующий раздел, так как он уже и так будет находиться в окне просмотра.

Для создания меньших разделов просто используйте класс `fp-auto-height` в разделе, к которому хотите применить эту функцию. Тогда высота будет определяться контентом вашего раздела/слайда.

```html
<div class="section">Полное окно просмотра</div>
<div class="section fp-auto-height">Автовысота</div>
```

#### Разделы с подстройкой автовысоты
[Демо](https://codepen.io/alvarotrigo/pen/WZmMgZ) Подстройка автовысоты может быть применена с помощью класса `fp-auto-height-responsive`. В таком случае разделы будут отображаться в полную высоту, пока не будет активирован режим подстройки.

### Классы состояний, добавляемые fullpage.js
Fullpage.js добавляет различные классы к разным элементам, чтобы отслеживать статус сайта:

- `active` добавляется к текущему отображаемому разделу и слайду.
- `active` добавляется к текущему элементу меню (если используется опция `menu`).
- Класс вида `fp-viewing-SECTION-SLIDE` добавляется к элементу `body`. (например: [`fp-viewing-secondPage-0`](http://alvarotrigo.com/fullPage/#secondPage)) Части `SECTION` и `SLIDE` будут являться привязками (или индексами, если привязки не предусмотрены) к текущему разделу и слайду.
- `fp-responsive` добавляется к элементу `body` при входе в режим подстройки
- `fp-enabled` добавляется к элементу `html`, когда fullpage.js активирован. (и удаляется при деактивации).
- `fp-destroyed` добавляется к хранилищу fullpage.js при деактивации fullPage.js.

### Отложенная загрузка
[Демо](http://codepen.io/alvarotrigo/pen/eNLBXo) fullPage.js обеспечивает возможность отложенной загрузки изображений, видео- и аудиоэлементов, чтобы они не замедляли загрузку вашего сайта и не тратили без необходимости трафик при передаче данных.
При использовании отложенной загрузки все эти элементы будут загружаться только при открытии в окне конструирования.
Всё, что вам нужно сделать для активации отложенной загрузки, - это изменить ваш атрибут `src` на `data-src`, как показано ниже:

```
<img data-src="image.png">
<video>
	<source data-src="video.webm" type="video/webm" />
	<source data-src="video.mp4" type="video/mp4" />
</video>
 ```

Если вы уже применяете другой способ для отложенной загрузки, который также использует `data-src`, вы можете отключить отложенную загрузку fullPage.js, установив опцию `lazyLoading: false`.

### Автопроигрывание/приостановка встроенного медиа

**Примечание**: функция автопроигрывания может не работать на некоторых мобильных устройствах, в зависимости от их ОС и браузера (то есть, в [Safari в iOS](https://webkit.org/blog/6784/new-video-policies-for-ios/), в версиях до 10.0).

#### Проигрывание при загрузке раздела/слайда:
При использовании атрибута `autoplay` для видео или аудио, или параметра `autoplay=1` для встроенных фреймов youtube, медиа будет проигрываться при загрузке страницы.
Для проигрывания медиа при загрузке раздела/слайда, используйте `data-autoplay`. Например:

```html
<audio data-autoplay>
	<source src="http://metakoncept.hr/horse.ogg" type="audio/ogg">
</audio>
```

#### Приостановка при покидании страницы
Встроенные фреймы HTML5 `<video>` / `<audio>` и Youtube автоматически останавливаются, когда вы покидаете раздел или слайд. Это можно отключить с помощью атрибута `data-keepplaying`. Например:
```html
<audio data-keepplaying>
	<source src="http://metakoncept.hr/horse.ogg" type="audio/ogg">
</audio>
```

### Использование расширений
fullpage.js [предоставляет ряд расширений](http://alvarotrigo.com/fullPage/extensions/), которые вы можете использовать для улучшения его функций, предусмотренных по умолчанию. Все они представлены как [опции fullpage.js](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian/#Опции).

Для расширений вам требуется использовать минифицированный файл [`jquery.fullpage.extensions.min.js`](https://github.com/alvarotrigo/fullPage.js/blob/master/dist/jquery.fullpage.extensions.min.js), находящийся в [папке `dist`](https://github.com/alvarotrigo/fullPage.js/tree/master/dist), а не обычный файл fullPage.js (`jquery.fullpage.js` или `jquery.fullpage.min.js`).

После приобретения файла расширения вам нужно будет добавить его перед fullPage. Например, если я хочу использовать расширение Continuos Horizontal, мне нужно будет включить файл расширения, а затем – версию файла fullPage для расширений.

```html
<script type="text/javascript" src="fullpage.continuousHorizontal.min.js"></script>
<script type="text/javascript" src="fullpage/jquery.fullpage.extensions.min.js"></script>
```

Ключ активации и ключ лицензии потребуются для каждого расширения. [Узнайте более подробно об этом здесь](https://github.com/alvarotrigo/fullPage.js/blob/master/lang/russian/how-to-activate-fullpage-extension.md).

Затем вы сможете использовать и настраивать их, как разъясняется в разделе [опции](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian/#Опции).

## Опции

- `controlArrows`: (по умолчанию `true`) Определяет использование клавиш-стрелок для передвижения вправо или влево при просмотре слайдов.

- `verticalCentered`: (по умолчанию `true`) Вертикальное центрирование контента в разделах. При установке данного расширения - `true`, ваш контент будет обёрнут библиотекой. Рассмотрите возможность делегирования или загрузите ваши скрипты для обратного вызова `afterRender`.

- `scrollingSpeed`: (по умолчанию `700`) Ускорьте на миллисекунды переходы при скроллинге.

- `sectionsColor`: (по умолчанию `none`) Присвойте CSS-свойство `background-color` каждому разделу.
Пример:
```javascript
$('#fullpage').fullpage({
	sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000'],
});
```

- `anchors`: (по умолчанию `[]`) Обеспечивает размещение ссылок с привязками (#пример) в URL для каждого раздела. Значения привязок должны быть уникальными. Положение привязок в ряду будет определять то, к какому разделу применяется привязка. (вторая позиция для второго раздела и так далее). Использование привязок также даёт возможность навигации вперёд и назад в браузере. Эта опция также даёт пользователям возможность добавлять в закладки определённый раздел или слайд. **Внимание!** привязки не могут иметь значение, совпадающее с каким-либо элементом ID на сайте (или элементом NAME - для IE).
Теперь привязки могут добавляться прямо в HTML-структуре с помощью атрибута `data-anchor`, как объясняется здесь.

- `lockAnchors`: (по умолчанию `false`) Определяет, будут ли вообще действовать в библиотеке привязки в URL. Вы по-прежнему сможете использовать привязки в закрытом формате для ваших собственных функций и обратных вызовов, но в скроллинге сайта они участвовать не будут. Это полезная функция, если вы хотите совместить fullPage.js с другими плагинами, использующими привязки в URL.

**Важно** Нужно понимать, что значения в ряду опций `anchors` напрямую соотносятся с элементом класса `.section` при помощи их местоположения в разметке.

- `easing`: (по умолчанию `easeInOutCubic`) Определяет эффект перехода, используемый при вертикальном и горизонтальном скроллинге.
Необходим файл `vendors/jquery.easings.min.js` или [jQuery UI](http://jqueryui.com/) для использования некоторых из [переходов](http://api.jqueryui.com/easings/). Могут использоваться другие библиотеки.

- `easingcss3`: (по умолчанию `ease`) Определяет эффект перехода для применения в случае использования `css3:true`. Вы можете использовать [предустановленные эффекты](http://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp) (такие как `linear`, `ease-out`...) или создать свои собственные при помощи функции `cubic-bezier`. Вы также можете использовать для этой цели [Matthew Lein CSS Easing Animation Tool](http://matthewlein.com/ceaser/.

- `loopTop`: (по умолчанию `false`) Определяет, будет ли осуществляться скроллинг к последнему разделу при пролистывании первого раздела вверх.

- `loopBottom`: (по умолчанию `false`) Определяет, будет ли осуществляться скроллинг к первому разделу при пролистывании последнего раздела вниз.

- `loopHorizontal`: (по умолчанию `true`) Определяет, будут ли горизонтальные слайдеры работать циклично после перехода к последнему или предыдущему слайду.

- `css3`: (по умолчанию `true`). Определяет использование JavaScript или CSS3-трансформаций для скроллинга в пределах разделов и слайдов. Эта функция помогает ускорить пролистывание для планшетов и мобильных устройств, браузеры которых поддерживают CSS3. Если установлено значение `true` для этой опции и браузер не поддерживает CSS3, будет использована альтернатива jQuery.

- `autoScrolling`: (по умолчанию `true`) Определяет использование «автоматического» скроллинга или «обычного». Также эта опция влияет на размещение разделов в окне браузера/устройства для планшетов и мобильных устройств.

- `fitToSection`: (по умолчанию `true`) Определяет, нужна ли подстройка разделов под окно просмотра. При установке значения `true` для данной опции текущий активный раздел всегда будет заполнять окно просмотра. В противном случае пользователь будет иметь возможность остановиться на середине раздела (когда )

- `fitToSectionDelay`: (по умолчанию 1000). Если для опции `fitToSection` установлено значение `true`, данная функция замедлит подстройку на настроенные миллисекунды.

- `scrollBar`: (по умолчанию `false`) Определяет, будет ли использоваться полоса прокрутки на сайте. При использовании полосы прокрутки функция `autoScrolling` будет работать как обычно. Пользователь по-прежнему сможет пролистывать сайт с помощью полосы прокрутки, и fullPage.js подстроит раздел под экран по окончании скроллинга.

- `paddingTop`: (по умолчанию `0`) Определяет верхний отступ для каждого раздела в числовом формате (paddingTop: '10px', paddingTop: '10em'...) Данная функция удобна при использовании фиксированных верхних колонтитулов.

- `paddingBottom`: (по умолчанию `0`) Определяет нижний отступ для каждого раздела в числовом формате (paddingBottom: '10px', paddingBottom: '10em'...). Данная функция удобна при использовании фиксированных нижних колонтитулов.

- `fixedElements`: (по умолчанию `null`) Определяет, какие элементы будут исключены из структуры скроллинга плагина, что необходимо при использовании опции `css3` для их фиксации. Для этого необходима строка с селекторами jQuery для данных элементов. (Например: `fixedElements: '#element1, .element2'`)

- `normalScrollElements`: (по умолчанию `null`) Если вы хотите избежать автопрокрутки при скроллинге некоторых элементов, вам нужно использовать эту опцию. (пригодится для карт, прокрутки div-элементов и т.д.) Для этого необходима строка с селекторами jQuery для данных элементов. (Например: `normalScrollElements: '#element1, .element2'`). Данную опцию следует применять к самим разделам/слайдам.

- `normalScrollElementTouchThreshold` : (по умолчанию `5`)  Определяет порог количества пролистываний, которое проверит дерево узлов html  Fullpage, чтобы убедиться, что `normalScrollElements` позволяет скроллинг на div-элементах на сенсорном устройстве. (Например: `normalScrollElementTouchThreshold: 3`)

- `bigSectionsDestination`: (по умолчанию `null`) Определяет, как должна осуществляться прокрутка к разделу, размер которого превышает размер окна просмотра. По умолчанию fullPage.js пролистывает вверх, если вы попадаете из раздела над заданным, и вниз, если вы попадаете из раздела под заданным. Возможные значения: `top`, `bottom`, `null`.

- `keyboardScrolling`: (по умолчанию `true`) Определяет возможность навигации на сайте при помощи клавиатуры.

- `touchSensitivity`: (по умолчанию `5`) Определяет ширину и высоту браузеров в процентах, а также то, насколько длинным должно быть пролистывание для перехода к следующему разделу/слайду.

- `continuousVertical`: (по умолчанию `false`) Определяет, будет ли осуществляться скроллинг к последнему разделу при пролистывании первого раздела вверх и к первому разделу при пролистывании последнего раздела вниз. Опция несовместима с опциями `loopTop`, `loopBottom` и любыми полосами прокрутки, используемыми на сайте (`scrollBar:true` или `autoScrolling:false`).

- `continuousHorizontal`: (по умолчанию `false`) [Расширение fullpage.js](http://alvarotrigo.com/fullPage/extensions/). Определяет, будет ли при пролистывании вправо последнего слайда осуществляться прокрутка вправо к первому слайду, а также приведёт ли прокрутка влево первого слайда к прокрутке влево к последнему слайду. Опция несовместима с опцией `loopHorizontal`. Необходима версия fullpage.js >= 2.8.3.

- `scrollHorizontally`: (по умолчанию `false`) [Расширение fullpage.js](http://alvarotrigo.com/fullPage/extensions/). Определяет осуществление горизонтального пролистывания ползунков при помощи колеса мыши или трекпада. Идеальна для рассказов. Необходима версия fullpage.js >= 2.8.3.

- `interlockedSlides`: (по умолчанию `false`) [Расширение fullpage.js](http://alvarotrigo.com/fullPage/extensions/). Определяет ,будет ли при передвижении одного горизонтального ползунка осуществляться пролистывание ползунков другого раздела в том же направлении. Возможные значения: `true`, `false` или последовательность взаимосвязанных разделов. Например: `[1,3,5]`, начиная с 1. Необходима версия fullpage.js >= 2.8.3.

- `dragAndMove`: (по умолчанию `false`) [Расширение fullpage.js](http://alvarotrigo.com/fullPage/extensions/). Активирует или деактивирует протягивание и пролистывание разделов и слайдов при помощи мыши или пальцев. Возможные значения: `true`, `false`, `vertical`, `horizontal`, `fingersonly`, `mouseonly`,. Необходима версия fullPage.js >= 2.8.9.

- `offsetSections`: (по умолчанию `false`)[Расширение fullpage.js](http://alvarotrigo.com/fullPage/extensions/). Обеспечивает возможность использовать неполноэкранные разделы на основании их процентных значений. Опция идеальна для демонстрации пользователю того, что на сайте есть больше контента, показывая часть следующего или предыдущего раздела. Необходима версия fullPage.js >= 2.8.8
Для определения процентного значения каждого раздела необходимо использовать атрибут `data-percentage`. Центрирование раздела в окне просмотра может определяться при помощи логического значения в атрибуте `data-centered` (по умолчанию `true`, если не определено). Например:
``` html
    <div class="section" data-percentage="80" data-centered="true">
```

- `resetSliders`: (по умолчанию `false`). [Расширение fullpage.js](http://alvarotrigo.com/fullPage/extensions/). Определяет, необходимо ли возвращать в исходное положение каждый ползунок после покидания раздела, в котором он размещён. Необходима версия fullpage.js >= 2.8.3.

- `fadingEffect`: (по умолчанию `false`). [Расширение fullpage.js](http://alvarotrigo.com/fullPage/extensions/). Определяет, будет ли использоваться эффект затухания вместо используемого по умолчанию эффекта прокрутки. Возможные значения `true`, `false`, `sections`, `slides`. Таким образом, данный параметр может применяться только вертикально или горизонтально, или же одновременно в обоих направлениях. Необходима версия fullpage.js >= 2.8.6.

- `animateAnchor`: (по умолчанию `true`) Определяет, будет ли во время загрузки сайта при использовании привязок (#) осуществляться прокрутка с анимацией к назначенному разделу или же напрямую.

- `recordHistory`: (по умолчанию `true`) Определяет, нужно ли отображать состояние сайта в истории браузера. При установке значения `true` каждый раздел/слайд сайта будет действовать как новая страница, и кнопки браузера «назад» и «вперёд» прокрутят разделы/слайды для перехода к предыдущему или следующему состоянию сайта. При установке значения `false` URL будет продолжать меняться, но не отразится на истории браузера. Данная опция отключается автоматически при использовании опции `autoScrolling:false`.

- `menu`: (по умолчанию `false`) Селектор может использоваться для связи элементов меню с разделами. Таким образом, скроллинг разделов активирует соответствующий элемент меню при помощи класса `active`.
Это не приведёт к созданию нового меню, а лишь добавит класс `active` элементу в имеющемся меню с соответствующими ссылками с привязками.
Чтобы связать элементы меню с разделами, необходимо будет использовать информационный блок HTML 5 (`data-menuanchor`) с теми же ссылками с привязками, которые используются в разделах. Пример:
```html
<ul id="myMenu">
	<li data-menuanchor="firstPage" class="active"><a href="#firstPage">Первый раздел</a></li>
	<li data-menuanchor="secondPage"><a href="#secondPage">Второй раздел</a></li>
	<li data-menuanchor="thirdPage"><a href="#thirdPage">Третий раздел</a></li>
	<li data-menuanchor="fourthPage"><a href="#fourthPage">Четвёртый раздел</a></li>
</ul>
```
```javascript
$('#fullpage').fullpage({
	anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
	menu: '#myMenu'
});
```

**Внимание:** элемент меню должен помещаться за пределами обёрточного кода для полного экрана во избежание проблем при использовании `css3:true`. В противном случае он будет присоединён к `body` самим плагином.

- `navigation`: (по умолчанию `false`) При установке значения `true` панель навигации будет отображена в виде небольших кружков.

- `navigationPosition`: (по умолчанию `none`) Могут быть установлены значения `left` или `right`. Опция определяет, какое положение займет панель навигации (если она используется).

- `navigationTooltips`: (по умолчанию []) Определяет справочные надписи, которые будут показаны для кружков навигационной панели, если они используются. Например: `navigationTooltips: ['firstSlide', 'secondSlide']`. Вы можете также определить их с помощью атрибута `data-tooltip` в каждом разделе, если хотите.

- `showActiveTooltip`: (по умолчанию `false`) Показывает постоянную справочную надпись для просматриваемого в данный момент раздела в вертикальной навигации.

- `slidesNavigation`: (по умолчанию `false`) При установке значения `true` навигационная панель будет отображаться в виде небольших кружков для каждого горизонтального ползунка сайта.

- `slidesNavPosition`: (по умолчанию `bottom`) Определяет местоположение горизонтальной навигационной панели для слайдеров. Возможные значения: `top` и `bottom`. При желании вы можете настроить стили CSS для определения расстояния от верхней до нижней части, так же как и любой другой стиль, например, цвет.

- `scrollOverflow`: (по умолчанию `false`) (опция несовместима с IE 8) определяет необходимость создания прокрутки для раздела/слайда, если контент превышает его высоту. При установке значения `true` ваш контент будет обёрнут плагином. Рассмотрите возможность делегирования или загрузите ваши скрипты для обратного вызова `afterRender`.
При установке значения `true` необходима библиотека разработчика [`scrolloverflow.min.js`](https://github.com/alvarotrigo/fullPage.js/blob/master/vendors/scrolloverflow.min.js), которая должна быть загружена до загрузки плагина fullPage.js, но после jQuery.
Например:

```html
<script type="text/javascript" src="vendors/scrolloverflow.min.js"></script>
<script type="text/javascript" src="jquery.fullPage.js"></script>
```

Чтобы предотвратить создание fullpage.js полосы прокрутки в определённых разделах или слайдах, используйте класс `fp-noscroll`. Например: `<div class="section fp-noscroll">`

Вы можете избежать применения scrolloverflow в отзывчивом режиме, используя `fp-auto-height-responsive в элементе раздела.

- `scrollOverflowReset`: (по умолчанию `false`) [Расширение fullpage.js](http://alvarotrigo.com/fullPage/extensions/). При установке значения `true` будет осуществляться прокрутка контента раздела/слайда с помощью полосы прокрутки при покидании другого вертикального раздела. Таким образом, раздел/слайд будет всегда показывать начало контента даже при скроллинге из раздела/слайда, расположенного ниже.

- `scrollOverflowOptions`: при применении scrollOverflow:true fullpage.js будет использовать модифицированную версию [iScroll.js libary](https://github.com/cubiq/iscroll/). Вы можете настроить поведение прокрутки, обеспечив fullpage.js опциями iScroll.js, которые вы хотите использовать. Более подробную информацию вы можете найти в [документации](http://iscrolljs.com/).

- `sectionSelector`: (по умолчанию `.section`) Определяет селектор jQuery, используемый для разделов с плагинами. Иногда требуется изменить его, чтобы избежать проблем с другими плагинами, использующими те же селекторы, что и fullpage.js.

- `slideSelector`: (по умолчанию `.slide`)  Определяет селектор jQuery, используемый для слайдов с плагинами.  Иногда требуется изменить его, чтобы избежать проблем с другими плагинами, использующими те же селекторы, что и fullpage.js.

- `responsiveWidth`: (по умолчанию `0`)  Будет использоваться стандартная прокрутка (`autoScrolling:false`), если ширина меньше, чем заданное значение в пикселях. Класс `fp-responsive` добавляется к тегу body, если пользователь желает использовать для собственного отзывчивого CSS. Например, если установлено значение 900, то, если ширина браузера составляет менее 900, плагин будет прокручивать, как обычный сайт.

- `responsiveHeight`: (по умолчанию `0`) Будет использоваться стандартная прокрутка (`autoScrolling:false`), если высота меньше, чем заданное значение в пикселях. Класс `fp-responsive` добавляется к тегу body, если пользователь желает использовать для собственного отзывчивого CSS. Например, если установлено значение 900, то, если высота браузера составляет менее 900, плагин будет прокручивать, как обычный сайт.


- `responsiveSlides`: (по умолчанию `false`) [Расширение fullpage.js](http://alvarotrigo.com/fullPage/extensions/). При установке значения `true` слайды будут трансформироваться в вертикальные разделы при активации отзывчивого режима. (с помощью опций `responsiveWidth` или `responsiveHeight`, подробно описанных выше). Необходима версия fullpage.js >= 2.8.5.

- `parallax`: (по умолчанию `false`) [Расширение fullpage.js](http://alvarotrigo.com/fullPage/extensions/). Определяет, будут ли использоваться эффекты параллакс для фона разделов / слайдов. [Узнайте больше об использовании опции параллакс здесь](https://github.com/alvarotrigo/fullPage.js/blob/master/lang/russian/parallax-extension.md).

- `parallaxOptions`: (по умолчанию: `{ type: 'reveal', percentage: 62, property: 'translate'}`). Позволяет настраивать параметры эффекта параллакс для фона при использовании опции parallax:true. [Узнайте больше об использовании опции параллакс здесь](https://github.com/alvarotrigo/fullPage.js/blob/master/lang/russian/parallax-extension.md).

- `lazyLoading`: (по умолчанию `true`) Отложенная загрузка включена по умолчанию, что означает, что данная опция будет осуществлять отложенную загрузку любого медиа-элемента, содержащего атрибут `data-src`, как описано в [документации отложенной загрузки](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian/#Отложенная-загрузка). Если вы желаете использовать любую другую библиотеку отложенной загрузки, вы можете деактивировать данную функцию fullpage.js.

## Функции
Можете увидеть их в действии [здесь](http://alvarotrigo.com/fullPage/examples/methods.html)

### moveSectionUp()
[Демо](http://codepen.io/alvarotrigo/pen/GJXNMN) Прокручивает на один раздел вверх:
```javascript
$.fn.fullpage.moveSectionUp();
```
---
### moveSectionDown()
[Демо](http://codepen.io/alvarotrigo/pen/jPvVZx) Прокручивает на один раздел вниз:
```javascript
$.fn.fullpage.moveSectionDown();
```
---
### moveTo(раздел, слайд)
[Демо](http://codepen.io/alvarotrigo/pen/doqOmY) Прокручивает страницу к заданному разделу и слайду. Первый слайд, отображающийся по умолчанию, будет иметь индекс 0.
```javascript
/*Прокручивание к разделу с ссылкой с привязкой `firstSlide` и ко 2-му слайду */
$.fn.fullpage.moveTo('firstSlide', 2);

```

```javascript
//Прокручивание к 3-му разделу на сайте
$.fn.fullpage.moveTo(3, 0);

//То же самое, что и
$.fn.fullpage.moveTo(3);
```
---
### silentMoveTo(раздел, слайд)
[Демо](http://codepen.io/alvarotrigo/pen/doqOeY)
Абсолютно то же самое, что и [`moveTo`](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian/#movetoраздел-слайд), но в этом случае функция выполняет прокрутку без анимации. Прямой переход к заданной точке.
```javascript
/*Прокручивание к разделу с ссылкой с привязкой `firstSlide` и ко 2-му слайду */
$.fn.fullpage.silentMoveTo('firstSlide', 2);
```
---
### moveSlideRight()
[Демо](http://codepen.io/alvarotrigo/pen/Wvgoyz)
Прокручивает горизонтальный ползунок текущего раздела к следующему слайду:
```javascript
$.fn.fullpage.moveSlideRight();
```
---
### moveSlideLeft()
[Демо](http://codepen.io/alvarotrigo/pen/gpdLjW)
Прокручивает горизонтальный ползунок текущего раздела к предыдущему слайду:
```javascript
$.fn.fullpage.moveSlideLeft();
```
---
### setAutoScrolling(логическая операция)
[Демо](http://codepen.io/alvarotrigo/pen/rVZWrR) Устанавливает конфигурацию скроллинга в режиме реального времени.
Определяет поведение прокрутки страницы. При установке значения `true` будет использоваться "автоматический" скроллинг, в противном случае будет применяться "стандартная" прокрутка сайта или прокрутка "вручную".

```javascript
$.fn.fullpage.setAutoScrolling(false);
```
---
### setFitToSection(логическая операция)
[Демо](http://codepen.io/alvarotrigo/pen/GJXNYm)
Устанавливает значение для опции `fitToSection`, определяющей, подстраивать ли раздел под экран.

```javascript
$.fn.fullpage.setFitToSection(false);
```
---
### fitToSection()
[Демо](http://codepen.io/alvarotrigo/pen/JWWagj)
Прокручивает к ближайшему активному разделу, подстраивая его под окно просмотра.

```javascript
$.fn.fullpage.fitToSection();
```
---
### setLockAnchors(логическая операция)
[Демо](http://codepen.io/alvarotrigo/pen/yNxVRQ)
Устанавливает значение для опции `lockAnchors`, определяющей, будут ли привязки отражаться в URL.

```javascript
$.fn.fullpage.setLockAnchors(false);
```
---
### setAllowScrolling(логическая операция, [направления])
[Демо](http://codepen.io/alvarotrigo/pen/EjeNdq) Даёт или убирает возможность скроллинга разделов/слайдов с помощью колеса мыши/трекпада или сенсорных жестов(включено по умолчанию). Обратите внимание, что функция не деактивирует скроллинг с помощью клавиатуры. Для этого вам потребуется использовать `setKeyboardScrolling`.

- `directions`: (опциональный параметр) Значения: `all`, `up`, `down`, `left`, `right` или их комбинация, разделённая запятыми, например: `down, right`. Функция определяет направление, в котором будет активирован или деактивирован скроллинг.

```javascript

//деактивация прокрутки
$.fn.fullpage.setAllowScrolling(false);

//деактивация прокрутки вниз
$.fn.fullpage.setAllowScrolling(false, 'down');

// деактивация прокрутки вниз и вправо
$.fn.fullpage.setAllowScrolling(false, 'down, right');
```
---
### setKeyboardScrolling(логическая операция, [направления])
[Демо](http://codepen.io/alvarotrigo/pen/GJXNwm) Даёт или убирает возможность скроллинга разделов с помощью клавиатуры (включено по умолчанию).

- `directions`: (опциональный параметр) Значения: `all`, `up`, `down`, `left`, `right` или их комбинация, разделённая запятыми, например: `down, right`. Функция определяет направление, в котором будет активирован или деактивирован скроллинг.

```javascript
// деактивация всей прокрутки с помощью клавиатуры $.fn.fullpage.setKeyboardScrolling(false);

// деактивация прокрутки вниз с помощью клавиатуры
$.fn.fullpage.setKeyboardScrolling(false, 'down');

//деактивация прокрутки вниз и вправо с помощью клавиатуры $.fn.fullpage.setKeyboardScrolling(false, 'down, right');
```
---
### setRecordHistory(логическая операция)
[Демо](http://codepen.io/alvarotrigo/pen/rVZWQb) Определяет, записывать ли историю для каждого изменения hash в URL.

```javascript
$.fn.fullpage.setRecordHistory(false);
```
---
### setScrollingSpeed(миллисекунды)
[Демо](http://codepen.io/alvarotrigo/pen/NqLbeY) Определяет скорость прокрутки в миллисекундах.

```javascript
$.fn.fullpage.setScrollingSpeed(700);
```
---
### destroy(тип)
[Демо](http://codepen.io/alvarotrigo/pen/bdxBzv) Разрушает события плагина и, опционально, его HTML-разметку и стили.
Идеальна при использовании AJAX для загрузки контента.

- `type`: (опциональный параметр) может быть пустым или иметь значение `all`. Если установлено `all`, HTML-разметка и стили, используемые fullpage.js, будут удалены. Таким образом, оригинальная HTML-разметка, используемая до произведения любой модификации плагина, будет сохранена.

```javascript
//разрушение всех событий Javascript, созданных fullPage.js (прокручивания, изменения hash в URL...)
$.fn.fullpage.destroy();

// разрушение всех событий Javascript и любых модификаций, произведённых fullPage.js поверх вашей оригинальной HTML-разметки.
$.fn.fullpage.destroy('all');
```
---
### reBuild()
Обновляет DOM-структуру для подстройки под новый размер окна или его содержимого.
Идеальна для использования в комбинации с вызовами AJAX или внешними изменениями в DOM-структуре сайта, особенно при применении `scrollOverflow:true`.

```javascript
$.fn.fullpage.reBuild();
```
---
### setResponsive(логическая операция)
[Демо](http://codepen.io/alvarotrigo/pen/WxOyLA) Устанавливает отзывчивый режима на странице. При установке хначения `true` автопрокрутка будет отключена, результат будет тем же самым, как при активации опций `responsiveWidth` или `responsiveHeight`.
```javascript
$.fn.fullpage.setResponsive(true);
```
---
### responsiveSlides.toSections()
[Расширение fullpage.js](http://alvarotrigo.com/fullPage/extensions/). Необходима версия fullpage.js >= 2.8.5.
Трансформирует горизонтальные слайды в вертикальные разделы.

```javascript
$.fn.fullpage.responsiveSlides.toSections();
```
---
### responsiveSlides.toSlides()
[Расширение fullpage.js](http://alvarotrigo.com/fullPage/extensions/). Необходима версия fullpage.js >= 2.8.5.
Трансформирует оригинальные слайды (теперь трансформированные в вертикальные разделы) обратно в горизонтальные слайды.

```javascript
$.fn.fullpage.responsiveSlides.toSlides();
```

## Обратные вызовы
[Демо](http://codepen.io/alvarotrigo/pen/XbPNQv) Можете увидеть их в действии [здесь](http://alvarotrigo.com/fullPage/examples/callbacks.html).

### afterLoad (`anchorLink`, `index`)
Обратный вызов активируется после загрузки разделов и завершения прокрутки.
Параметры:

- `anchorLink`: ссылка с привязкой, соотносящаяся с разделом.
- `index`: индекс раздела. Начиная с 1.

В случае, если ссылки с привязками не определены в плагине, используется только параметр `index`.

Пример:

```javascript
$('#fullpage').fullpage({
	anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],

	afterLoad: function(anchorLink, index){
		var loadedSection = $(this);

		//использование индекса
		if(index == 3){
			alert("Section 3 ended loading");
		}

		//использование ссылки с привязкой
		if(anchorLink == 'secondSlide'){
			alert("Section 2 ended loading");
		}
	}
});
```
---
### onLeave (`index`, `nextIndex`, `direction`)
Этот обратный вызов активируется, когда пользователь покидает раздел, при переходе к новому разделу.
Возврат `false` отменит переход до его осуществления.

Параметры:

- `index`: индекс раздела, который покидает пользователь. Начиная с 1.
- `nextIndex`: индекс заданного раздела. Начиная с 1.
- `direction`: будет иметь значения `up` или `down`, в зависимости от направления скроллинга.

Пример:

```javascript
$('#fullpage').fullpage({
	onLeave: function(index, nextIndex, direction){
		var leavingSection = $(this);

		//после покидания раздела 2
		if(index == 2 && direction =='down'){
			alert("Going to section 3!");
		}

		else if(index == 2 && direction == 'up'){
			alert("Going to section 1!");
		}
	}
});
```

#### Отмена прокрутки до её осуществления
Вы можете отменить прокрутку, установив возврат `false` на обратном вызове `onLeave`:

```javascript
$('#fullpage').fullpage({
	onLeave: function(index, nextIndex, direction){
		//прокрутка не будет осуществлена, если заданный раздел – раздел 3
		if(nextIndex == 3){
			return false;
		}
	}
});
```

---
### afterRender()
Этот обратный вызов активируется сразу после того, как создаётся структура страницы. Данный обратный вызов вы можете использовать для инициализации других плагинов или активации любого кода, для чего требуется готовый документ (так как плагин изменяет DOM для создания финальной структуры). Более подробную информацию вы найдёте в разделе [Часто задаваемые вопросы](https://github.com/alvarotrigo/fullPage.js/wiki/FAQ---Frequently-Answered-Questions).

Пример:

```javascript
$('#fullpage').fullpage({
	afterRender: function(){
		var pluginContainer = $(this);
		alert("Финальная DOM-структура готова");
	}
});
```
---
### afterResize()
Этот обратный вызов активируется после изменения размера окна браузера. Сразу после изменения размера разделов.

Пример:

```javascript
$('#fullpage').fullpage({
	afterResize: function(){
		var pluginContainer = $(this);
		alert("Завершено изменение размера разделов");
	}
});
```
---
### afterResponsive(`isResponsive`)
Этот обратный вызов активируется после того, как fullpage.js переходит из стандартного режима в отзывчивый режим или из отзывчивого в стандартный.

Параметры:

- `isResponsive`: логическая операция, которая определяет переход в режим отзывчивости (`true`) или переход обратно к стандартному режиму (`false`).

Пример:

```javascript
$('#fullpage').fullpage({
	afterResponsive: function(isResponsive){
		alert("Is responsive: " + isResponsive);
	}
});
```
---
### afterSlideLoad (`anchorLink`, `index`, `slideAnchor`, `slideIndex`)
Обратный вызов активируется после загрузки слайда раздела и окончания прокрутки.
Параметры:

- `anchorLink`: ссылка с привязкой, связанная с разделом.
- `index`: индекс раздела. Начиная с 1.
- `slideAnchor`: привязка, соответствующая слайду (при её наличии)
- `slideIndex`: индекс слайда. Начиная с 1. (текущий слайд считается не слайдом, а разделом)

Если нет ссылок с привязками для слайда или слайдов, будет использоваться лишь параметр `slideIndex`.
Пример:

```javascript
$('#fullpage').fullpage({
	anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],

	afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex){
		var loadedSlide = $(this);

		//первый слайд второго раздела
		if(anchorLink == 'secondPage' && slideIndex == 1){
			alert("Первый слайд загружен");
		}

		//второй слайд второго раздела (supposing #secondSlide is the
		//привязка для второго раздела
		if(index == 2 && slideIndex == 'secondSlide'){
			alert("Второй слайд загружен");
		}
	}
});
```


---
### onSlideLeave (`anchorLink`, `index`, `slideIndex`, `direction`, `nextSlideIndex`)
Этот обратный вызов активируется после того, как пользователь покидает слайд для перехода к другому, при переходе к новому слайду.
Возврат `false` отменит переход до его осуществления.

Параметр:

- `anchorLink`: ссылка с привязкой, связанная с разделом.
- `index`: индекс раздела. Начиная с 1.
- `slideIndex`: индекс слайда. **Начиная с 0.**
- `direction`: будет иметь значения `right` или `left`, в зависимости от направления прокрутки.
- `nextSlideIndex`: индекс заданного слайда. **Начиная с 0.**


Пример:

```javascript
$('#fullpage').fullpage({
	onSlideLeave: function( anchorLink, index, slideIndex, direction, nextSlideIndex){
		var leavingSlide = $(this);

		//переход от первого слайда 2го раздела вправо
		if(index == 2 && slideIndex == 0 && direction == 'right'){
			alert("Покидание первого слайда!!");
		}

		// переход от 3го слайда 2го раздела влево
               if(index == 2 && slideIndex == 2 && direction == 'left'){
			alert("Переход к слайду 2! ");
		}
	}
});
```

#### Отмена перехода до его осуществления
Вы можете отменить переход с помощью возврата `false` на обратном вызове `onSlideLeave`. [То же самое, что и при отмене перехода с помощью `onLeave`](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian/#Отмена-перехода-до-его-осуществления).

# Сообщение о проблемах
1. Пожалуйста, перед вопросом поищите свою проблему с помощью поиска github issues.
2. Убедитесь, что используете последнюю версию fullpage.js. Техподдержка не работает со старыми версиями.
3. Воспользуйтесь [форумом Github Issues](https://github.com/alvarotrigo/fullPage.js/issues), чтобы задать вопрос.
4. **Потребуется отдельное воспроизведение проблемы.** По возможности используйте для этого [jsfiddle](http://jsfiddle.net/97tbk/418/) или [codepen](http://codepen.io/alvarotrigo/pen/NxyPPp).

# Внесение предложений для fullpage.js
Пожалуйста, прочтите [Contributing to fullpage.js](https://github.com/alvarotrigo/fullPage.js/wiki/Contributing-to-fullpage.js)

# Changelog
Чтобы посмотреть список последних изменений, пожалуйста, обратитесь к  [разделу Релизы](https://github.com/alvarotrigo/fullPage.js/releases).

# Задачи по построению
Желаете построить дистрибутивные файлы fullpage.js? Пожалуйста, зайдите в раздел [Задачи по построению](https://github.com/alvarotrigo/fullPage.js/wiki/Build-tasks)

# Ресурсы
- [Тема Wordpress](https://alvarotrigo.com/fullPage/utils/wordpress.html)
- [Vue.js wrapper component](https://github.com/alvarotrigo/vue-fullpage.js)
- [CSS Easing Animation Tool - Matthew Lein](http://matthewlein.com/ceaser/) (поможет в определении значения `easingcss3`)
- [fullPage.js jsDelivr CDN](http://www.jsdelivr.com/#!jquery.fullpage)
- [плагин fullPage.js для October CMS](http://octobercms.com/plugin/freestream-parallax)
- [плагин wordpress fullPage.js](https://wordpress.org/plugins/wp-fullpage/)
- [директива fullPage.js Angular2](https://github.com/meiblorn/ng2-fullpage)
- [директива fullPage.js angular](https://github.com/hellsan631/angular-fullpage.js)
- [дополнение ember-cli fullPage.js](https://www.npmjs.com/package/ember-cli-fullpagejs)
- [fullPage.js Rails Ruby Gem](https://rubygems.org/gems/fullpagejs-rails)
- [Angular fullPage.js – адаптация для Angular.js v1.x](https://github.com/mmautomatizacion/angular-fullpage.js)
- [Интеграция fullPage.js с Wordpress (Обучение)](http://premium.wpmudev.org/blog/build-apple-inspired-full-page-scrolling-pages-for-your-wordpress-site/)

## Кто пользуется fullPage.js
Если вы хотите, чтобы ваша страница была указана в этом списке, пожалуйста, <a href="mailto:alvaro@alvarotrigo.com">свяжитесь со мной</a> и пришлите URL.

[![Google](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/google.png)](http://www.yourprimer.com/)
[![BBC](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/bbc-2.png)](http://www.bbc.co.uk/news/resources/idt-d88680d1-26f2-4863-be95-83298fd01e02)
[![eBay](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/ebay.png)](http://pages.ebay.com/design/)
![Sony](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/sony.gif)
![Vodafone](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/vodafone.png)
![British Airways](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/british-airways-fullpage.gif)
![McDonalds](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/mcdonalds.png)
![EA](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/ea.png)
[![Vogue](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/vogue.png)](http://www.vogue.fr/chaumet-histoires-de-liens)
[![Mi](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/mi.png)](http://www.mi.com/shouhuan)
[![redd](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/sym.png)](http://www.sanyang.com.tw/service/Conception/)
[![Bugatti](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/bugatti.gif)](http://www.bugatti.com/veyron/veyron-164/)
[![eDarling](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/edarling.png)](https://www.edarling.de/)

- http://www.bbc.co.uk/news/resources/idt-d88680d1-26f2-4863-be95-83298fd01e02
- http://pages.ebay.com/design/
- http://www.yourprimer.com/
- http://www.vogue.fr/chaumet-histoires-de-liens
- http://burntmovie.com/
- http://www.bugatti.com/veyron/veyron-164/
- http://www.newjumoconcept.com/
- http://www.shootinggalleryasia.com/
- http://medoff.ua/en/
- http://promo.prestigio.com/grace1/
- http://www.mi.com/shouhuan
- http://www.commoditiesdemystified.info/en/
- http://torchbrowser.com/
- http://thekorner.fr/
- http://www.restaurantwoods.nl/
- https://www.edarling.de/
- http://urban-walks.com/
- http://lingualeo.com/
- http://charlotteaimes.com/
- http://collection.madeofsundays.com
- http://thiswasmybest.com/
- http://www.boxreload.com/
- http://educationaboveall.org/
- http://camfindapp.com/
- http://rockercreative.com/
- http://usescribe.com/
- http://lucilecazanave.com/
- http://boxx.hk/
- http://bearonunicycle.com/
- http://rawmilk.dk/en/
- http://www.famavolat.com/
- http://www.carpetloverclub.com/
- http://www.sanyang.com.tw/service/Conception/
- http://www.batzaya.net/
- http://www.graphicid.dk/
- http://www.carlphot.com/
- http://medissix.com/
- http://trasmissione-energia.terna.it/
- http://www.thefoodmovie.com/
- http://www.villareginateodolinda.it
- http://www.kesstrio.com
- http://fossdistillery.is
- http://ded-morozz.kiev.ua/
- http://unabridgedsoftware.com/
- http://atlanticcorp.us/
- http://moysport.ru/
- http://themify.me/demo/#theme=fullpane
- http://dancingroad.com
- http://www.camanihome.com/
- https://life2film.com/en/

Вы можете найти ещё один список [здесь](http://libscore.com/#$.fn.fullpage).

## Денежные переводы
Денежные переводы более чем приветствуются :)

[![Перевести деньги](https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=BEK5JQCQMED4J&lc=GB&item_name=fullPage%2ejs&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)


## Лицензия

**Комментарии в JavaScript и CSS-файлах должны оставаться неизменными** (даже после комбинации или минификации )

(Лицензия MIT)

Copyright (c) 2013 Alvaro Trigo &lt;alvaro@alvarotrigo.com&gt;

Любому лицу, получившему копию данного ПО и файлы с соответствующей документацией ('Software'), бесплатно предоставляется разрешение
торговать данным ПО без ограничений, неограниченные права на использование, копирование, изменение, слияние, публикацию, распространение,  сублицензирование и/или продажу копий ПО, а также разрешение на вышеперечисленные действия тем, кому предоставлено ПО, при соблюдении следующих условий:

Вышеизложенное уведомление об авторском праве и данная заметка о разрешении будут включены во все копии или существенные части ПО.

ПРОГРАММНОЕ ОБЕСПЕЧЕНИЕ ПРЕДОСТАВЛЯЕТСЯ «КАК ЕСТЬ», БЕЗ КАКИХ-ЛИБО ГАРАНТИЙ, ВЫРАЖЕННЫХ ИЛИ ПОДРАЗУМЕВАЕМЫХ, ВКЛЮЧАЯ, НО НЕ ОГРАНИЧИВАЯСЬ ГАРАНТИЯМИ В ОТНОШЕНИИ ТОВАРНОГО СОСТОЯНИЯ, ПРИГОДНОСТИ ДЛЯ ОПРЕДЕЛЁННОЙ ЦЕЛИ И НЕНАРУШЕНИЯ.
НИ В КАКОМ СЛУЧАЕ АВТОРЫ ИЛИ ПРАВООБЛАДАТЕЛИ НЕ НЕСУТ ОТВЕТСТВЕННОСТИ ПО ИСКАМ О ВОЗМЕЩЕНИИ УЩЕРБА, УБЫТКОВ ИЛИ ДРУГИХ ТРЕБОВАНИЙ ПО ДЕЙСТВУЮЩИМ КОНТРАКТАМ, ДЕЛИКТАМ ИЛИ ИНОМУ, ВОЗНИКШИМ ИЗ ИЛИ СВЯЗАННЫМ С ПРОГРАММНЫМ ОБЕСПЕЧЕНИЕМ ИЛИ ИСПОЛЬЗОВАНИЕМ ИЛИ ИНЫМИ ДЕЙСТВИЯМИ С ПРОГРАММНЫМ ОБЕСПЕЧЕНИЕМ.

//version 1.0.8
(function($) {

    var methods = {
        init : function( options ) {

            var settings = $.extend({
                "speed"  : 250,               //скорость открытия и закрытия кастомного селекта
                "search" : false
            }, options);

            return this.each(function() {

                var _this = $(this); //элемент к которому применяется плагин

                _this.hide();       //прячем селект

                _this.wrap('<div class="custom-select-wrapper"></div>');  //оборачиваем селект в отдельный див

                var _thisParent = _this.parent('.custom-select-wrapper');   //обертка селекта

                _this.after('<div class="custom-select-box"></div>');  //создаем блок в котором будет кастомный селект

                _thisParent.find('.custom-select-box').append('<div class="custom-select-button"></div>')
                    .append('<ul class="custom-select-ul"></ul>');      //создаем кнопку для селекта и список

                var customSelectButton = _thisParent.find('.custom-select-button');     //переменная кнопки кастомного селекта

                var customSelectUl = _thisParent.find('.custom-select-ul');     //переменная списк ul кастомного селекта

                _thisParent.find('.custom-select-ul').hide();   //прячем список

                _this.find('option').each(function () {     //перебираем все опции селекта и создаем li в списке
                    var optionText =  $(this).text();

                    //Добавляем активной лишке класс
                    if($(this).prop('selected')){
                        customSelectUl.append('<li class="custom-selected-li">' + optionText + '</li>');
                    }else{
                        customSelectUl.append('<li>' + optionText + '</li>');
                    }

                });

                //выводим текст выбраной опции селекта в кнопку кастомного селекта
                customSelectButton.append('<span></span>');
                customSelectButton.find('span').text(_this.find('option:selected').text());

                //открываем и закрываем селект
                var click = true; //переменная для проверки происходит ли анимация
                customSelectButton.on('click', function () {
                    if(click){
                        if($(this).hasClass('custom-select-opened')){
                            $(this).removeClass('custom-select-opened');
                            $(this).parent('.custom-select-box').removeClass('custom-select-box-opened');
                            $(this).next(customSelectUl).slideUp(settings.speed);
                        }else{
                            $('.custom-select-button').removeClass('custom-select-opened');
                            $('.custom-select-button').parent('.custom-select-box').removeClass('custom-select-box-opened');
                            $('.custom-select-ul').slideUp(settings.speed);
                            $(this).addClass('custom-select-opened');
                            $(this).parent('.custom-select-box').addClass('custom-select-box-opened');
                            $(this).next(customSelectUl).slideDown(settings.speed);
                        }
                        click = false;
                        setTimeout(function () {
                            click = true;
                        }, settings.speed)
                    }
                });

                //при выборе опции кастомный селекты закрывается, меняеться текст в кнопке и значение в самом селекте
                customSelectUl.find('li').on('click', function () {

                    //добавляем класс выбранной лишке
                    customSelectUl.find('li').removeClass('custom-selected-li');
                    $(this).addClass('custom-selected-li');

                    var liIndex = $(this).index();
                    var liText = $(this).text();
                    $(this).parent('.custom-select-ul').slideUp(settings.speed);
                    $(this).parent('.custom-select-ul').prev('.custom-select-button').removeClass('custom-select-opened');
                    $(this).parents('.custom-select-box').prev('select').find('option').eq(liIndex).prop('selected', true);
                    $(this).parent('.custom-select-ul').prev('.custom-select-button').parent('.custom-select-box').removeClass('custom-select-box-opened');
                    _this.trigger('change');
                });

                //если нативный селект изменяется, например стороним скриптом, меняем и кастомный селект (для активации нужно прописать trigger('change'))
                _this.on('change', function () {
                    customSelectButton.find('span').text(_this.find('option:selected').text());
                });

                //закрываем кастомный селект при клике в любом месте
                $(document).on('click', function (event) {
                    if ($(event.target).closest($('.custom-select-wrapper')).length) return;
                    $('.custom-select-ul').slideUp(settings.speed);
                    $('.custom-select-button').removeClass('custom-select-opened');
                    $('.custom-select-button').parent('.custom-select-box').removeClass('custom-select-box-opened');
                    event.stopPropagation();
                });



                //инпут для поиска по селекту
                if(settings.search){
                    var clickForSearch = true; //переменная для проверки происходит ли анимация


                    customSelectButton.prepend('<input class="custom-search-input" type="text">'); //создаем инпут

                    var customSearchInput = customSelectButton.find('.custom-search-input');
                    customSearchInput.hide(); //прячем инпут

                    customSelectButton.on('click', function () {
                        if(clickForSearch){
                            if($(this).hasClass('custom-select-opened-search')){
                                $(this).removeClass('custom-select-opened-search');
                                customSelectButton.find('span').show(); //отображаем спан в кнопке
                                customSearchInput.hide();   //прячем инпут для поиска
                            }else{
                                customSelectButton.addClass('custom-select-opened-search').find('span').show();
                                customSelectButton.find('span').hide(); //прячем спан в кнопке
                                customSearchInput.val('').show().focus();   //отображаем инпут для поиска и ставим на него фокус
                            }

                            clickForSearch = false;
                            setTimeout(function () {
                                clickForSearch = true;
                            }, settings.speed)
                        }
                    });

                    $(document).on('change keyup input propertychange', '.custom-search-input', function () {    //поиск по селекту
                        var searchVal = $(this).val().toLowerCase();

                        $(this).parents('.custom-select-box').find('li').hide().each(function (i, el) {
                            var sstr = $(el).text().trim().toLowerCase();
                            if (sstr.search(searchVal) > -1) {
                                $(el).show();
                            }
                        })

                    });

                    customSelectUl.find('li').on('click', function () { //при выборе пункта из списка прячем инпут и отображаем спан с выбранным пунктом
                        customSelectButton.find('span').show();
                        customSearchInput.hide();
                        customSelectButton.removeClass('custom-select-opened-search');


                        setTimeout(function () {
                            customSearchInput.val('').trigger('change');
                        }, settings.speed)
                    });

                    $(document).on('click', function (event) {  //при клике в любом месте прячем инпут и отображаем спан
                        if ($(event.target).closest($('.custom-select-wrapper')).length) return;
                        customSelectButton.find('span').show();
                        customSearchInput.hide();
                        customSelectButton.removeClass('custom-select-opened-search');

                        setTimeout(function () {
                            customSearchInput.val('').trigger('propertychange');
                        }, settings.speed)
                    });

                }

            });

        },
        destroy : function( ) {

            return this.each(function(){

                $(this).next('.custom-select-box').remove();
                $(this).show().css('opacity', '1');
                $(this).unwrap('.custom-select-wrapper');

            })

        }
    };

    $.fn.customSelect = function( method ) {

        if ( methods[method] ) {
            return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Метод с именем ' +  method + ' не существует для jQuery.tooltip' );
        }

    };

})(jQuery);

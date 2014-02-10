(function ($) {
    var orientations = [
        { name: 'north', position: { my: 'bottom', at: 'top-20'} },
        { name: 'northeast', position: { my: 'left bottom', at: 'right top'} },
        { name: 'east', position: { my: 'left', at: 'right+20'} },
        { name: 'southeast', position: { my: 'left top', at: 'right bottom'} },
        { name: 'south', position: { my: 'top+20', at: 'bottom'} },
        { name: 'southwest', position: { my: 'right top', at: 'left bottom'} },
        { name: 'west', position: { my: 'right', at: 'left-20'} },
        { name: 'northwest', position: { my: 'right bottom', at: 'left top'} }
    ];
    $.fn.popup = function () {
        return this.each(function () {
            var index = 0,
                $container = $(this).empty(),
                $popup = $('<div/>').hide().appendTo($container),
                $circle = $('<div class="circle"/>').appendTo($container)
                    .click(function () {
                        if ($popup.is(':visible')) {
                            $popup.hide();
                            index = (index + 1) % 8;
                        } else {
                            var orientation = orientations[index],
                                position = $.extend({
                                    of: $circle,
                                    collision: 'none'
                                }, orientation.position);
                            $popup.attr('class', 'popup ' + orientation.name)
                                .show()
                                .position(position);
                        }
                    });
        });
    };
}($));
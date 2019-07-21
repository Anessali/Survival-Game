$(document).on(':passageend', function () {
    $('select').each(function () {
        var $select = $(this);
        var $chosen = $select.find('option[selected]').first();

        if ($chosen.length === 0) {
            $chosen = $select.find('option:first-child');
        }

        $chosen.prop('selected', true);
    });
});

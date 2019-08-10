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

$(document).on(':passageend', function () {
    $('.hair').on('change', function () {
        State.variables.player.hair.color = $(this).val();
    });
});

$(document).on(':passageend', function () {
    $('.eyes').on('change', function () {
        State.variables.player.eyes.color = $(this).val();
    });
});
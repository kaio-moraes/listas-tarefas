$(document).ready(function () {
    $('#task-form').on('submit', function (e) {
        e.preventDefault();
        const taskName = $('#task-name').val();
        const newTask = $('<li></li>').text(taskName);

        const removeBtn = $('<button></button>')
            .text('Remover')
            .addClass('remove-btn')
            .on('click', function () {
                $(this).parent().remove();
            });

        newTask.append(removeBtn);
        $('#task-list').append(newTask);
        $('#task-name').val('');
    });

    $('#task-list').on('click', 'li', function () {
        $(this).toggleClass('completed');
    });
});

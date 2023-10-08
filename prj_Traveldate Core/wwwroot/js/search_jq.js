///////////////////////////////////////////////////////���X�j��ñ�U���p����/////////////////////////////////////////////////////////////
function toggleBlock() {
    const $arrowBottomDown = $(this).find("#arrow_bottom_down");
    const $arrowTopUp = $(this).find("#arrow_top_up");
    $(this).next(".filter-block-toggle").slideToggle(); //.drop_down_list_center �O�U�@�ӦP�Ť���
    $arrowBottomDown.toggle();
    $arrowTopUp.toggle();
}

$(".filter-block-toggle").hide();
$(".category-click").on('click', toggleBlock );

//////////////////////////////////////////////////checkbox�����button�s��/////////////////////////////////////////////////////////////////
var isFirstButton = true;



function clearAllFiltered() {
    const cleanAllElement = $('.cleanAll');
    cleanAllElement.addClass('d-none')
    $('#selected-checkboxes').empty(); // �M���������s
    $('#selected-checkboxes').append(cleanAllElement)
    $('.uncheckbox').show();
    $('.checkbox').hide();
    $('.calendar-container').find('.selected').removeClass('selected');
    selectedCities = [];
    selectedTags = [];
    selectedTypes = [];
    startTime = ""
    endTime = ""
    minPrice = ""
    maxPrice = ""
    pageNumber = 1;
    $('#from-home-page-tags').text("")
    filteredByConditions()
    isFirstButton = true; // ���]���Ĥ@���s�W���A
}

$('.divFiltered_city').on('click', '.uncheckbox', function () {
    $('#from-home-page-tags').text("")
    if (isFirstButton) {
        $('.cleanAll').removeClass('d-none')
        isFirstButton = false;
    }
    pageNumber = 1;
    var originalCheckbox = $(this).hide();
    var originalUncheckbox = $(this).next(".checkbox").show();
    var text = $(this).siblings("span").text(); // ���span������r
    selectedCities.push(text); // �N��r�K�[��}�C��
   
    filteredByConditions();
    var button = $('<button>', {
        text: text + ' X',
        value: text,
        class: "btn btn-outline-secondary mr-1",
        click: function () {
            $(this).remove();
            originalCheckbox.show(); // ��ܹ����� .checkbox
            originalUncheckbox.hide(); // ��ܹ����� .uncheckbox
            checkCleanAllButtonExistence();
            var index = selectedCities.indexOf(text); // ����r�b�}�C��������
            removeCitiesFormArr(index)
        }
    });
    $('#selected-checkboxes').append(button); // �N���s�l�[��id��displayText��������
    checkCleanAllButtonExistence()
})
$('.divFiltered_tag').on('click', '.uncheckbox', function () {
    $('#from-home-page-tags').text("")
    if (isFirstButton) {
        $('.cleanAll').removeClass('d-none')
        isFirstButton = false;
    }
    pageNumber = 1;
    var originalCheckbox = $(this).hide();
    var originalUncheckbox = $(this).next(".checkbox").show();
    var text = $(this).siblings("span").text(); // ���span������r
    selectedTags.push(text); // �N��r�K�[��}�C��
 
    filteredByConditions();
    var button = $('<button>', {
        text: text + ' X',
        value: text,
        class: "btn btn-outline-secondary mr-1",
        click: function () {
            $(this).remove();
            originalCheckbox.show(); // ��ܹ����� .checkbox
            originalUncheckbox.hide(); // ��ܹ����� .uncheckbox
            checkCleanAllButtonExistence();
            var index = selectedTags.indexOf(text); // ����r�b�}�C��������
            removeTagsFormArr(index)
        }
    });
    $('#selected-checkboxes').append(button); // �N���s�l�[��id��displayText��������
    checkCleanAllButtonExistence()
})
$('.divFiltered_type').on('click', '.uncheckbox', function () {
    $('#from-home-page-tags').text("")
    if (isFirstButton) {
        $('.cleanAll').removeClass('d-none')
        isFirstButton = false;
    }
    pageNumber = 1;
    var originalCheckbox = $(this).hide();
    var originalUncheckbox = $(this).next(".checkbox").show();
    var text = $(this).siblings("span").text(); // ���span������r
    $('#selected-tags').append(text)
    selectedTypes.push(text); // �N��r�K�[��}�C��
  
    filteredByConditions();
    var button = $('<button>', {
        text: text + ' X',
        value: text,
        class: "btn btn-outline-secondary mr-1",
        click: function () {
            $(this).remove();
            originalCheckbox.show(); // ��ܹ����� .checkbox
            originalUncheckbox.hide(); // ��ܹ����� .uncheckbox
            checkCleanAllButtonExistence();
            var index = selectedTypes.indexOf(text); // ����r�b�}�C��������
            removeTypesFormArr(index)
        }
    });
    $('#selected-checkboxes').append(button); // �N���s�l�[��id��displayText��������
    checkCleanAllButtonExistence()
})


$('.divFiltered_city').on('click', '.checkbox', function () {
    $('#from-home-page-tags').text("")
    if (isFirstButton) {
        $('.cleanAll').removeClass('d-none')
        isFirstButton = false;
    }
    $(this).hide();
    $(this).prev(".uncheckbox").show();
    var text = $(this).siblings("span").text(); // ���span������r
    var index = selectedCities.indexOf(text); // ����r�b�}�C��������
    removeCitiesFormArr(index)
    var buttonsToRemove = $('#selected-checkboxes').find('button[value="' + text + '"]'); // �M��ݭn�R�������s
    buttonsToRemove.remove(); // �N���s�q #selected-checkboxes �R��
    checkCleanAllButtonExistence();
});
$('.divFiltered_tag').on('click', '.checkbox', function () {
    $('#from-home-page-tags').text("")
    if (isFirstButton) {
        $('.cleanAll').removeClass('d-none')
        isFirstButton = false;
    }
    $(this).hide();
    $(this).prev(".uncheckbox").show();
    var text = $(this).siblings("span").text(); // ���span������r
    var index = selectedTags.indexOf(text); // ����r�b�}�C��������
    removeTagsFormArr(index)
    var buttonsToRemove = $('#selected-checkboxes').find('button[value="' + text + '"]'); // �M��ݭn�R�������s
    buttonsToRemove.remove(); // �N���s�q #selected-checkboxes �R��
    checkCleanAllButtonExistence();
});
$('.divFiltered_type').on('click', '.checkbox', function () {
    $('#from-home-page-tags').text("")
    if (isFirstButton) {
        $('.cleanAll').removeClass('d-none')
        isFirstButton = false;
    }
    $(this).hide();
    $(this).prev(".uncheckbox").show();
    var text = $(this).siblings("span").text(); // ���span������r
    var index = selectedTypes.indexOf(text); // ����r�b�}�C��������
    removeTypesFormArr(index)
    var buttonsToRemove = $('#selected-checkboxes').find('button[value="' + text + '"]'); // �M��ݭn�R�������s
    buttonsToRemove.remove(); // �N���s�q #selected-checkboxes �R��
    checkCleanAllButtonExistence();
});



function removeTagsFormArr(index) {
    if (index > -1) {
        $('#from-home-page-tags').text("")
        selectedTags.splice(index, 1); // �q�}�C���R���Ӥ�r
        pageNumber = 1;
        filteredByConditions(); // ��s��ܿ襤���Ҫ�����
    }
    
}
function removeCitiesFormArr(index) {
    if (index > -1) {
        $('#from-home-page-tags').text("")
        selectedCities.splice(index, 1); // �q�}�C���R���Ӥ�r
        pageNumber = 1;
        filteredByConditions(); // ��s��ܿ襤���Ҫ�����
    }
}
function removeTypesFormArr(index) {
    if (index > -1) {
        $('#from-home-page-tags').text("")
        selectedTypes.splice(index, 1); // �q�}�C���R���Ӥ�r
        pageNumber = 1;
        filteredByConditions(); // ��s��ܿ襤���Ҫ�����
    }
}

//�T�{�O�_�u���@��input�b�̭�
 function checkCleanAllButtonExistence() {
    if ($('#selected-checkboxes').children('button').length === 0) {
        $('.cleanAll').addClass('d-none');
         isFirstButton = true;
    }
}


///////////////////////////////////////////�j�M����////////////////////////////////////////////////////////////

$('#btn_filter_price').on('click', function () {
    $('#from-home-page-tags').text("")
    if ($('#selected-checkboxes').find('.price_button').length > 0) {
        $('.price_button').remove();
    }
    var format_first_price= $('.outputOne').text();
    var format_second_price = $('.outputTwo').text();
    minPrice = format_first_price.replace(/[^0-9.-]+/g,"")
    maxPrice = format_second_price.replace(/[^0-9.-]+/g, "")

    filteredByConditions();
    var button = $('<button>', {
        text: '$  ' + format_first_price + '~' + '$  ' + format_second_price +'  X',// �]�w���s��r�� div ����r���e
        class: "btn btn-outline-secondary mr-1 price_button",
        click: function () {
            $(this).remove(); // �I�����s�ɧR���ӫ��s
            checkCleanAllButtonExistence()

            minPrice = ""
            maxPrice=""
            filteredByConditions()
        }
    });
    $('#selected-checkboxes').append(button);
    $('.cleanAll').removeClass('d-none');
})

//////////////////////////////////////////////�M��keyword�̪��r/////////////////////////////////////////////////////////////     
$('.clearKeyword').on('click', () => {
    $('#inputKeyword').val("")
    loadCities();
});

//////////////////////���ݹϥ�////////////////////////////
function showLoadingIcon() {
    $('.loading-icon').removeClass('d-none')
    $('#total').addClass('d-none')
    $('#filterBody').addClass('d-none')
    $('.alert-light').removeClass('d-none')
}
function hideLoadingIcon() {
    $('.loading-icon').addClass('d-none')
    $('#total').removeClass('d-none')
    $('#filterBody').removeClass('d-none')
    $('.alert-light').addClass('d-none')
}







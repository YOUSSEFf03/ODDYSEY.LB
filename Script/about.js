//About section function

function changeContent(imageSrc, textId) {
    document.getElementById('image').src = imageSrc;
    document.getElementById('text1').style.display = 'none';
    document.getElementById('text2').style.display = 'none';
    document.getElementById('text3').style.display = 'none';
    document.getElementById(textId).style.display = 'block';
    var chips = document.getElementsByClassName('chip');
    for (var i = 0; i < chips.length; i++) {
        chips[i].classList.remove('active');
    }
    event.currentTarget.classList.add('active');
}
const listTextTitle = [
    'Kurang Pengalaman.',
    'Belum Lulus Kuliah.',
    'Pindah Jalur Karir.'
]

const title = document.getElementById('titleH1Id');
let i = 0;

TextChange();
setInterval(TextChange, 5000);

function TextChange() {
    console.log('show');
    title.style.opacity = 100;

    console.log('text change')
    title.innerText = listTextTitle[i];
    i++;
    if(i === listTextTitle.length-1) i = 0;
    
    setTimeout(() => {
        console.log('fade');
        title.style.opacity = 0;
    }, 4000)
}

const program = {
    'button': document.getElementById('programId'),
    'dropdown' : document.getElementById('programDropdown')
}
const corporate = document.getElementById('corporateId');
const about = document.getElementById('aboutId');

program.button.addEventListener('mouseover', () => {
    console.log('hover')
    program.dropdown.style.display = 'none';
})

// [program.button, program.dropdown].addEventListener('mouseout', () => {
//     console.log('leave')
//     program.dropdown.style.display = 'none';

// })
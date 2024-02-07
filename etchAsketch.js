document.addEventListener('DOMContentLoaded', () => {
    let isDrawing = false;

    //create a grid/table
    function makeCells() {
        const gridContainer = document.querySelector('.grid-container');

        let table = document.createElement('table');

        for (let i = 0; i < 50; i++) {
            let newRow = document.createElement('tr');
            table.appendChild(newRow);

            for (let j = 0; j < 50; j++) {
                let newCell = document.createElement('td');
                newRow.appendChild(newCell);
            }
        }
        gridContainer.appendChild(table);
    }

    makeCells();

    const blackBtn = document.querySelector('#blackBtn');
    const randBtn = document.querySelector('#randBtn');
    const resetBtn = document.querySelector('#resetBtn');

    //draw with black color
    function blackColor() {
        //Here, isDrawing is a global variable, when mousedown is triggered, isDrawing is True so 
        function startDrawing() {
            isDrawing = true;
        }

        function stopDrawing() {
            isDrawing = false;
        }

        function draw(e) {
            if (!isDrawing) return; //When isDrawing is false, !isDrawing evaluates to true which uses return to get out of the function
            if (e.target.tagName === 'TD') {
                e.target.style.backgroundColor = 'black';
            }
        }// when I press the mousedown, isDrawing = true and then when i hover to any 'td' element,mouseover gets terminated and draw fucntion gets called and works since its true;) and then when we press mouseup, the stopDrawing function gets called.

        document.addEventListener('mousedown', startDrawing);
        document.addEventListener('mouseup', stopDrawing);
        document.addEventListener('mouseover', draw);
    }

    //draw with random color
    function randomColor() {
        function startDrawing() {
            isDrawing = true;
        }

        function stopDrawing() {
            isDrawing = false;
        }

        function draw(e) {
            if (!isDrawing) return;
            if (e.target.tagName === 'TD') {
                e.target.style.backgroundColor = getRandomColor();
            }
        }

        function getRandomColor() {
            const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            return randomColor;
        }

        document.addEventListener('mousedown', startDrawing);
        document.addEventListener('mouseup', stopDrawing);
        document.addEventListener('mouseover', draw);
    }

    //Resets the entire table
    function reset() {
        const cells = document.querySelectorAll('td');
        cells.forEach(cell => {
            cell.style.backgroundColor = '';// Here, 'cell' represents each individual table cell
        })
    }

    blackBtn.addEventListener('click', blackColor);
    randBtn.addEventListener('click', randomColor);
    resetBtn.addEventListener('click', reset);
})
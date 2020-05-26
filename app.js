const ticTacToeGame = () => {
  const boxes = document.querySelectorAll('.game-container div');
  const gameStats = document.getElementById('stat');
  const playBtn = document.getElementById('play-btn');
  const xo = ['X', 'O'];
  const selArr = [null, null, null, null, null, null, null, null, null];
  const winningArr = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
    [2, 4, 6]
  ];
  let turn = 1;

  const play = () => {
    boxes.forEach((box, index) => {
      box.textContent = '';
      gameStats.textContent = '';
      box.classList.remove('selected');

      box.addEventListener('click', function() {
        let foundWinner = false;

        if (this.classList.contains('selected')) return;
        this.classList.add('selected');

        if (turn === 0) {
          selArr[index] = xo[1];
          this.textContent = xo[1];
          turn = 1;
        } else {
          selArr[index] = xo[0];
          this.textContent = xo[0];
          turn = 0;
        }

        winningArr.forEach(arr => {
          if (
            selArr[arr[0]] === selArr[arr[1]] &&
            selArr[arr[0]] === selArr[arr[2]] &&
            selArr[arr[0]] !== null
          ) {
            foundWinner = true;
            boxes.forEach(box => box.classList.add('selected'));
            gameStats.textContent = `Player ${xo[turn]} wins!`;
          }

          if (selArr.every(entry => entry !== null) && !foundWinner) {
            gameStats.textContent = `It's a tie`;
          }
        });
      });
    });
  };

  play();

  playBtn.addEventListener('click', play);
};

document.addEventListener('DOMContentLoaded', ticTacToeGame);
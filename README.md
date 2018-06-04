# Unbeatable Tic-Tac-Toe
## AI LOGIC:
- If the player is about to win, stop them

- If not try to go for the middle box

- If occupied place randomly in an open box

The board is split into 9 boxes. Each box has a predetermined amount of win conditions.

All checks for wins happen with the check array:
```
var checks = [
            // 0
            [[1,2],[3,6],[4,8]],
            // 1
            [[0,2],[4,7]],
            // 2
            [[0,1],[5,8],[6,4]],
            // 3
            [[0,6],[4,5]],
            // 4
            [[0,8],[1,7],[2,6],[3,5]],
            // 5
            [[2,8],[3,4]],
            // 6
            [[0,3],[4,2],[7,8]],
            // 7
            [[1,4],[6,8]],
            // 8
            [[0,4],[2,5],[6,7]]
            ];
```
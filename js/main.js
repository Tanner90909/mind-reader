const stateArray = [0,1,2,3,4,5];
let currentStateIndex = 0;

let patternData = `
0  - &
1  - *
2  - !
3  - @
4  - #
5  - $
6  - %
7  - ^
8  - +
9  - &
10 - *
11 - !
12 - @
13 - #
14 - $
15 - %
16 - ^
17 - +
18 - &
19 - *
20 - !
21 - @
22 - #
23 - $
24 - %
25 - ^
26 - +
27 - &
28 - *
29 - !
30 - @
31 - #
32 - $
33 - %
34 - ^
35 - +
36 - &
37 - *
38 - !
39 - @
40 - #
41 - $
42 - %
43 - ^
44 - +
45 - &
46 - *
47 - !
48 - @
49 - #
50 - $
51 - %
52 - ^
53 - +
54 - &
55 - *
56 - !
57 - @
58 - #
59 - $
60 - %
61 - ^
62 - +
63 - &
64 - *
65 - !
66 - @
67 - #
68 - $
69 - %
70 - ^
71 - +
72 - &
73 - *
74 - !
75 - @
76 - #
77 - $
78 - %
79 - ^
80 - +
81 - &
82 - *
83 - !
84 - @
85 - #
86 - $
87 - %
88 - ^
89 - +
90 - &
91 - *
92 - !
93 - @
94 - #
95 - $
96 - %
97 - ^
98 - +
99 - &`;

let array1 = ["I can read your mind", "Pick a number from 01-99", "Add both digits together to get a new number", "Subtract your new number from the original number", patternData, "&" ];
let array2 = ["", "when you have your number click next", "Ex: 14 is 1 + 4 = 5 click next to proceed", "Ex: 14 - 5 = 9 click next to proceed", "Find you new number. Note the symbol beside the number", "Your symbol is: &"];

const primaryText = document.getElementById("primaryText");
const subText = document.getElementById("subText");
const nextButton = document.getElementById("nextButton");

primaryText.textContent = array1[currentStateIndex];
subText.textContent = array2[currentStateIndex];

function updateText(){
    primaryText.textContent = array1[currentStateIndex];
    subText.textContent = array2[currentStateIndex];
}

nextButton.addEventListener('click', function(){
    currentStateIndex++;
    if (currentStateIndex >= stateArray.length){
        currentStateIndex = 0;
    }
    updateText();
});


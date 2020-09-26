
function nom(a, b) {
    if ((0 > a + b) && (0 > a - b) && (0 > a * b)) {
        return ['Wynik nieprawidłowy', 'Wynik nieprawidłowy', 'Wynik nieprawidłowy'];
    } else if ((0 > a + b) && (0 > a * b)) {
        return ['Wynik nieprawidłowy', 'Wynik odejmowania wynosi ' + (a - b), 'Wynik nieprawidłowy'];
    } else if ((0 > a + b) && (0 > a - b)) {
        return ['Wynik nieprawidłowy', 'Wynik nieprawidłowy', 'Wynik mnożenia wynosi ' + (a * b)];
    } else if ((0 > a - b) && (0 > a * b)) {
        return ['Wynik dodawania wynosi ' + (a + b), 'Wynik nieprawidłowy', 'Wynik nieprawidłowy'];
    } else if (0 > a + b) {
        return ['Wynik nieprawidłowy', 'Wynik odejmowania wynosi ' + (a - b), 'Wynik mnożenia wynosi ' + (a * b)];
    } else if (0 > a - b) {
        return ['Wynik dodawania wynosi ' + (a + b), 'Wynik nieprawidłowy', 'Wynik mnożenia wynosi ' + (a * b)];
    } else if (0 > a * b) {
        return ['Wynik dodawania wynosi ' + (a + b), 'Wynik odejmowania wynosi ' + (a - b), 'Wynik nieprawidłowy'];

    } else {
        return ['Wynik dodawania wynosi ' + (a + b), 'Wynik odejmowania wynosi ' + (a - b), 'Wynik mnożenia wynosi ' + (a * b)]

    }

}


console.log(nom(-20, -10))
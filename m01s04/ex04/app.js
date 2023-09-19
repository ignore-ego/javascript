var limitA = 32;
var limitB = 15;
var limitC = 20;

for (var i = 1; i <= limitA; i++) {
  console.log('Numar pana la ' + limitA + ' inclusiv: ' + i + '.');
}

for (var i = 1; i < limitA; i++) {
  console.log('Numar pana la ' + limitA + ' exclusiv: ' + i + '.');
}

for (var i = 1; i < limitA; i++) {
  console.log('Ma voi opri la ' + limitB + ': ' + i + '.');

  if (i === limitB) {
    console.log('M-am oprit la ' + limitB + '.');
    break;
  }
}

for (var i = 1; i <= limitA; i++) {
  if (i % 2 !== 0) {
    continue;
  }

  console.log(
    'Toate numerele pare intre 1 si ' + limitA + ' inclusiv: ' + i + '.',
  );
}

var denominator = 5;
for (var i = 1; i <= limitA; i++) {
  if (i % denominator === 0) {
    console.log(
      'Toate numerele divizibile cu ' +
        denominator +
        ' pana la ' +
        limitA +
        ' inclusiv: ' +
        i +
        '.',
    );
  }
}

for (var i = 1; i <= limitC; i++) {
  console.log('Numerele pana la 20 inclusiv: ' + i + '.');

  if (i === limitC) break;
}

for (var i = 1; i <= limitC; i++) {
  console.log('Numerele pana la 20 exclusiv: ' + i + '.');

  if (i === 19) break;
}

for (var i = 1; i <= limitB; i++) {
  console.log('Numerele se vor opri la 8: ' + i + '.');

  if (i === 8) {
    console.log('Numerele s-au oprit la 8.');
    break;
  }
}

for (var i = 1; i <= limitC; i++) {
  if (i % 2 === 0) {
    continue;
  }

  console.log('Numerele impare pana la ' + limitC + ' inclusiv: ' + i + '.');
}

var denominator = 3;
for (var i = 1; i <= limitC; i++) {
  if (i % denominator === 0) {
    console.log(
      'Numerele divizibile cu ' +
        denominator +
        ' pana la ' +
        limitC +
        ' inclusiv: ' +
        i +
        '.',
    );
  }
}

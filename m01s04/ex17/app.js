var services = [
  {
    name: 'Mailchimp',
    adoption: 2010,
  },
  {
    name: 'Google Analytics',
    adoption: 2009,
  },
  {
    name: 'Stripe',
    adoption: 2020,
  },
  {
    name: 'Hotjar',
    adoption: 2021,
  },
  {
    name: 'Sendgrid',
    adoption: 2022,
  },
];

message = `folosind for `;

console.warn(`${message} Afiseaza in consola propozitia “Siteul foloseste urmatoarele servicii: a, b, c, d si e.”
`);

let servicesString = '';
for (let i = 0; i < services.length; i++) {
  if (i === 0) {
    servicesString += services[i].name;
  } else if (i === services.length - 1) {
    servicesString += ` si ${services[i].name}`;
  } else {
    servicesString += `, ${services[i].name}`;
  }
}
console.log(`Siteul foloseste urmatoarele servicii: ${servicesString}.`);

console.warn(`${message} Afiseaza doar numele serviciilor integrate dupa 2020 intr-o propozitie de forma “Serviciile a, b, c au fost adoptate dupa 2020 inclusiv.”
`);

let servicesAdopted = '';

// Iterăm prin fiecare obiect din array-ul "services" cu ajutorul buclei for
for (let i = 0; i < services.length; i++) {
  if (services[i].adoption >= 2020) {
    if (servicesAdopted !== '') {
      servicesAdopted += ', ';
    }
    servicesAdopted += services[i].name;
  }
}
console.log(
  `Serviciile ${servicesAdopted} au fost adoptate dupa 2020 inclusiv.`,
);

console.warn(`${message} Afiseaza doar pentru serviciile de pe pozitii pare, cate una pe linie, propozitii de forma “Serviciul se numeste xxx si a fost integrat in yyyy.”
`);

for (let i = 0; i < services.length; i += 2) {
  const service = services[i];
  console.log(
    `Serviciul se numeste ${service.name} si a fost integrat in ${service.adoption}.`,
  );
}

console.warn(`${message} Folosind anul curent afiseaza propozitii de forma “Siteul foloseste serviciul xxx de yyy ani.”
`);

for (let i = 0; i < services.length; i++) {
  const service = services[i];
  const yearsInUse = 2023 - service.adoption;
  console.log(
    `Siteul foloseste serviciul ${service.name} de ${yearsInUse} ani.`,
  );
}

console.warn(`${message} Gaseste cel mai vechi serviciu si afiseaza o propozitie de forma “Folosim xxx de yyy ani.”
`);

let oldestService = services[0];

for (let i = 1; i < services.length; i++) {
  if (services[i].adoption < oldestService.adoption) {
    oldestService = services[i];
  }
}

const yearsInUse = 2023 - oldestService.adoption;

console.log(`Folosim ${oldestService.name} de ${yearsInUse} ani.`);

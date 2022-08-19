const piattosData = [
  {
    id: '1',
    image: 'https://i.postimg.cc/Zqzzs2p7/pepperoni.jpg',
    title: 'Antipasti peperoni',
    description: 'Acompañamiento a base de pimientos',
    piatto: 'L\'antipasto (Entrada)',
  },
  {
    id: '2',
    image: 'https://i.postimg.cc/MHTCjSJT/cressiaromagnola.jpg',
    title: 'Cressia Romagnola',
    description: 'Piadina',
    piatto: 'L\'antipasto (Entrada)',
  },
  {
    id: '3',
    image: 'https://i.postimg.cc/bNGXypRV/farinata.jpg',
    title: 'Farinata',
    description: 'Fainá',
    piatto: 'L\'antipasto (Entrada)',
  },
  {
    id: '4',
    image: 'https://i.postimg.cc/cHDjWbtN/focaccia.jpg',
    title: 'Focaccia',
    description: 'Pan',
    piatto: 'L\'antipasto (Entrada)',
  },
  {
    id: '5',
    image: 'https://i.postimg.cc/GhNBMFK7/pane.jpg',
    title: 'Pane della domenica',
    description: 'Pan',
    piatto: 'L\'antipasto (Entrada)',
  },
  {
    id: '6',
    image: 'https://i.postimg.cc/xThstYYH/rotolo.jpg',
    title: 'Rotolo',
    description:
          'La pasta rellena es un tipo de pasta elaborada con forma de hoja, al huevo o no, con un relleno a base de carne, pescado, verdura o queso.',
    piatto: 'Pasta e principale (Plato principal)',
  },
  {
    id: '7',
    image: 'https://i.postimg.cc/y6pWdmM1/fetuccine.jpg',
    title: 'Fetuccines',
    description: 'Fideo cinta',
    piatto: 'Pasta e principale (Plato principal)',
  },
  {
    id: '8',
    image: 'https://i.postimg.cc/xdQ17tzR/tagliatelles.jpg',
    title: 'Tagliatelles',
    description: 'Tallarines',
    piatto: 'Pasta e principale (Plato principal)',
  },
  {
    id: '9',
    image: 'https://i.postimg.cc/66P5w9ZT/raviolis.jpg',
    title: 'Raviolis',
    description: 'Ravioles',
    piatto: 'Pasta e principale (Plato principal)',
  },
  {
    id: '10',
    image: 'https://i.postimg.cc/d0JJn3bN/lasagna.jpg',
    title: 'Lasagna',
    description: 'Lasaña',
    piatto: 'Pasta e principale (Plato principal)',
  },
  {
    id: '11',
    image: 'https://i.postimg.cc/Lss82hxY/cannellonis.jpg',
    title: 'Cannellonis',
    description: 'Porción de tres unidades. Canelones',
    piatto: 'Pasta e principale (Plato principal)',
  },
  {
    id: '12',
    image: 'https://i.postimg.cc/Qt28Qmh1/tortellinis.jpg',
    title: 'Tortellinis de Mugello',
    description: 'Porción de ocho unidades.',
    piatto: 'Pasta e principale (Plato principal)',
  },
  {
    id: '13',
    image: 'https://i.postimg.cc/nh3nRpnH/agnolottis.jpg',
    title: 'Agnolottis ',
    description: 'Porción de ocho unidades. Añolotis',
    piatto: 'Pasta e principale (Plato principal)',
  },
  {
    id: '14',
    image: 'https://i.postimg.cc/D0QTqKC3/saltimbocca.jpg',
    title: 'Saltimbocca di maiale',
    description: 'Saltimboca de cerdo',
    piatto: 'Pasta e principale (Plato principal)',
  },
  {
    id: '15',
    image: 'https://i.postimg.cc/W33FWXBy/risotto.jpg',
    title: 'Risotto di funghi',
    description: 'Arroz con hongos',
    piatto: 'Pasta e principale (Plato principal)',
  },
  {
    id: '16',
    image: 'https://i.postimg.cc/2yd13MhV/bolognese.png',
    title: 'Bolognese',
    description: '',
    piatto: 'Salse (Salsas)',
  },
  {
    id: '17',
    image: 'https://i.postimg.cc/ZKVqgrct/pomodoro.jpg',
    title: 'Pomodoro',
    description: '',
    piatto: 'Salse (Salsas)',
  },
  {
    id: '18',
    image: 'https://i.postimg.cc/dVfVQwp5/blanca.jpg',
    title: 'Salsa Blanca',
    description: '',
    piatto: 'Salse (Salsas)',
  },
  {
    id: '19',
    image: 'https://i.postimg.cc/yNSYk2zs/puttanesca.jpg',
    title: 'Sugo alla puttanesca',
    description: '',
    piatto: 'Salse (Salsas)',
  },
  {
    id: '20',
    image: 'https://i.postimg.cc/rm1V9WmH/bagna.jpg',
    title: 'Bagna Cauda',
    description: '',
    piatto: 'Salse (Salsas)',
  },
  {
    id: '21',
    image: 'https://i.postimg.cc/5NN4wXMP/crema.jpg',
    title: 'Crema',
    description: '',
    piatto: 'Salse (Salsas)',
  },
  {
    id: '22',
    image: 'https://i.postimg.cc/T3KT4B1g/formaggio.jpg',
    title: 'Burro, formaggio, noce',
    description: '',
    piatto: 'Salse (Salsas)',
  },
  {
    id: '23',
    image: 'https://i.postimg.cc/hjSwH7s6/napoletana.jpg',
    title: 'Napoletana',
    description: '',
    piatto: 'Salse (Salsas)',
  },
  {
    id: '24',
    image: 'https://i.postimg.cc/HxXgDPJx/catalana.jpg',
    title: 'Crema Catalana',
    description: '',
    piatto: 'Dolci (Postres)',
  },
  {
    id: '25',
    image: 'https://i.postimg.cc/NfgwSDQs/budinPan.jpg',
    title: 'Budin de pan',
    description: '',
    piatto: 'Dolci (Postres)',
  },
  {
    id: '26',
    image: 'https://i.postimg.cc/9Qk54jZ0/tiramisu.jpg',
    title: 'Tiramisu',
    description: '',
    piatto: 'Dolci (Postres)',
  },
  {
    id: '27',
    image: '',
    title: 'CocaCola (2.25Lts)',
    description: '',
    piatto: 'Bevenade (Bebidas)',
  },
  {
    id: '28',
    image: '',
    title: 'Sprite (2.25Lts)',
    description: '',
    piatto: 'Bevenade (Bebidas)',
  },
  {
    id: '29',
    image: '',
    title: 'Agua saborizada (1.5Lts)',
    description: '',
    piatto: 'Bevenade (Bebidas)',
  },
  {
    id: '30',
    image: '',
    title: 'Agua saborizada (500ml)',
    description: '',
    piatto: 'Bevenade (Bebidas)',
  },
  {
    id: '31',
    image: '',
    title: 'Cinzano (Litro)',
    description: '',
    piatto: 'Bevenade (Bebidas)',
  },
  {
    id: '32',
    image: '',
    title: 'Fernet (750ml)',
    description: '',
    piatto: 'Bevenade (Bebidas)',
  },
  {
    id: '33',
    image: '',
    title: 'Gancia (950ml)',
    description: '',
    piatto: 'Bevenade (Bebidas)',
  },
  {
    id: '34',
    image: '',
    title: 'Otro Loco Más (Malbec)',
    description: '',
    piatto: 'Bevenade (Bebidas)',
  },
  {
    id: '35',
    image: '',
    title: 'Quara (Malbec)',
    description: '',
    piatto: 'Bevenade (Bebidas)',
  },
  {
    id: '36',
    image: '',
    title: 'Lobo Negro (Malbec)',
    description: '',
    piatto: 'Bevenade (Bebidas)',
  },
  {
    id: '37',
    image: '',
    title: 'Canciller (Blend)',
    description: '',
    piatto: 'Bevenade (Bebidas)',
  },
  {
    id: '38',
    image: '',
    title: 'Tonelito (Malbec)',
    description: '',
    piatto: 'Bevenade (Bebidas)',
  },
]

export default piattosData
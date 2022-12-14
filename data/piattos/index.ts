const piattosData = [
  {
    id: '1',
    image: 'https://i.postimg.cc/Zqzzs2p7/pepperoni.jpg',
    title: 'Antipasti peperoni',
    description: 'Acompañamiento a base de pimientos, cebolla, aceituna y romero.',
    height: '',
    width: '',
    piatto: 'L\'antipasto (Entrada)',
  },
  {
    id: '2',
    image: 'https://i.postimg.cc/MHTCjSJT/cressiaromagnola.jpg',
    title: 'Crescia',
    description: 'Pan plano elaborado con harina de trigo.',
    height: '',
    width: '',
    piatto: 'L\'antipasto (Entrada)',
  },
  {
    id: '3',
    image: 'https://i.postimg.cc/bNGXypRV/farinata.jpg',
    title: 'Farinata',
    description: 'Es un tipo de panqueque o crêpe delgado y sin levadura hecho con harina de garbanzos.',
    height: '',
    width: '',
    piatto: 'L\'antipasto (Entrada)',
  },
  {
    id: '4',
    image: 'https://i.postimg.cc/cHDjWbtN/focaccia.jpg',
    title: 'Focaccia',
    description: 'Es un pan, con una masa similar en estilo a la de la pizza, cubierto con hierbas y otros productos como cebolla caramelizada.',
    height: '',
    width: '',
    piatto: 'L\'antipasto (Entrada)',
  },
  {
    id: '5',
    image: 'https://i.postimg.cc/GhNBMFK7/pane.jpg',
    title: 'Pane della domenica',
    description: 'Pan casero clásico. Elaborado con una mezcla de harina, generalmente de trigo, agua, sal y levadura.',
    height: '',
    width: '',
    piatto: 'L\'antipasto (Entrada)',
  },
  {
    id: '6',
    image: 'https://i.postimg.cc/xThstYYH/rotolo.jpg',
    title: 'Rotolo',
    description: 'Pasta rellena, el rotolo es un tipo de pasta elaborada con forma de hoja, al huevo o no, con un relleno a base de carne, pescado, verdura o queso.',
    height: '',
    width: '',
          
    piatto: 'Pasta e principale (Plato principal)',
  },
  {
    id: '7',
    image: 'https://i.postimg.cc/y6pWdmM1/fetuccine.jpg',
    title: 'Fetuccine',
    description: 'Una de sus características más importantes es que es un fideo ancho y plano o tipo cinta, elaborado con huevo, agua y harina.',
    height: '',
    width: '',
    piatto: 'Pasta e principale (Plato principal)',
  },
  {
    id: '8',
    image: 'https://i.postimg.cc/xdQ17tzR/tagliatelles.jpg',
    title: 'Tagliatelle',
    description: 'Tallarines, es una pasta de huevo larga, plana y en forma de cinta fina hecha de sémola, que es un tipo de harina gruesa hecha de trigo duro.',
    height: '',
    width: '',
    piatto: 'Pasta e principale (Plato principal)',
  },
  {
    id: '9',
    image: 'https://i.postimg.cc/66P5w9ZT/raviolis.jpg',
    title: 'Ravioli',
    description: 'Ravioles, pasta en forma de pequeño cuadrado compuesto por dos láminas finas de masa adheridas por los bordes y rellena de carne, verdura o queso fresco.',
    height: '',
    width: '',
    piatto: 'Pasta e principale (Plato principal)',
  },
  {
    id: '10',
    image: 'https://i.postimg.cc/d0JJn3bN/lasagna.jpg',
    title: 'Lasagna',
    description: 'Lasaña, láminas superpuestas intercaladas con capas de ingredientes al gusto, más frecuentemente carne (ragú) en salsa boloñesa y bechamel.',
    height: '',
    width: '',
    piatto: 'Pasta e principale (Plato principal)',
  },
  {
    id: '11',
    image: 'https://i.postimg.cc/Lss82hxY/cannellonis.jpg',
    title: 'Cannelloni',
    description: 'Porción de tres unidades. Los canelones son una pasta ancha de forma rectangular que se enrolla formando un cilindro. El relleno suele ser carne picada, pescado (atún a ser posible), verdura, requesón o espinacas.',
    height: '',
    width: '',
    piatto: 'Pasta e principale (Plato principal)',
  },
  {
    id: '12',
    image: 'https://i.postimg.cc/Qt28Qmh1/tortellinis.jpg',
    title: 'Tortellini',
    description: 'Porción de ocho unidades. El torttelini es una variedad de pasta con forma de anillo, compuesta por una capa de masa enrollada y unida por sus extremos, rellena de carne, queso y huevos.',
    height: '',
    width: '',
    piatto: 'Pasta e principale (Plato principal)',
  },
  {
    id: '13',
    image: 'https://i.postimg.cc/nh3nRpnH/agnolottis.jpg',
    title: 'Agnolotti',
    description: 'Porción de ocho unidades. Añoloti es una pasta italiana rellena, parecida a los ravioli pero a diferencia de estos están hechos con una sola capa de masa y se doblan conteniendo el relleno.',
    height: '',
    width: '',
    piatto: 'Pasta e principale (Plato principal)',
  },
  {
    id: '14',
    image: 'https://i.postimg.cc/D0QTqKC3/saltimbocca.jpg',
    title: 'Saltimbocca di maiale',
    description: 'Saltimboca de cerdo. Es un plato tradicional de la cocina italiana elaborado con cerdo, jamón y salvia. Se enrolla y enharina ligeramente.',
    height: '',
    width: '',
    piatto: 'Pasta e principale (Plato principal)',
  },
  {
    id: '15',
    image: 'https://i.postimg.cc/W33FWXBy/risotto.jpg',
    title: 'Risotto di funghi',
    description: 'Exquisito plato de arroz con hongos.',
    height: '',
    width: '',
    piatto: 'Pasta e principale (Plato principal)',
  },
  {
    id: '16',
    image: 'https://i.postimg.cc/2yd13MhV/bolognese.png',
    title: 'Bolognese',
    description: '',
    height: '',
    width: '',
    piatto: 'Salse (Salsas)',
  },
  {
    id: '17',
    image: 'https://i.postimg.cc/ZKVqgrct/pomodoro.jpg',
    title: 'Pomodoro',
    description: '',
    height: '',
    width: '',
    piatto: 'Salse (Salsas)',
  },
  {
    id: '18',
    image: 'https://i.postimg.cc/gjh49XNN/blanca.jpg',
    title: 'Salsa Blanca',
    description: '',
    height: '',
    width: '',
    piatto: 'Salse (Salsas)',
  },
  {
    id: '19',
    image: 'https://i.postimg.cc/yNSYk2zs/puttanesca.jpg',
    title: 'Sugo alla puttanesca',
    description: '',
    height: '',
    width: '',
    piatto: 'Salse (Salsas)',
  },
  {
    id: '20',
    image: 'https://i.postimg.cc/rm1V9WmH/bagna.jpg',
    title: 'Bagna Cauda',
    description: '',
    height: '200',
    width: '',
    piatto: 'Salse (Salsas)',
  },
  {
    id: '21',
    image: 'https://i.postimg.cc/ZY8qqDk5/crema.jpg',
    title: 'Crema',
    description: '',
    height: '220',
    width: '',
    piatto: 'Salse (Salsas)',
  },
  {
    id: '22',
    image: 'https://i.postimg.cc/brZhbhpK/formaggio.jpg',
    title: 'Burro, formaggio e noce',
    description: '',
    height: '',
    width: '',
    piatto: 'Salse (Salsas)',
  },
  {
    id: '23',
    image: 'https://i.postimg.cc/gcMdT98Q/napoletana.jpg',
    title: 'Napoletana',
    description: '',
    height: '',
    width: '',
    piatto: 'Salse (Salsas)',
  },
  {
    id: '24',
    image: 'https://i.postimg.cc/HxXgDPJx/catalana.jpg',
    title: 'Crema Catalana',
    description: '',
    height: '',
    width: '',
    piatto: 'Dolci (Postres)',
  },
  {
    id: '25',
    image: 'https://i.postimg.cc/NfgwSDQs/budinPan.jpg',
    title: 'Budin de pan',
    description: '',
    height: '',
    width: '',
    piatto: 'Dolci (Postres)',
  },
  {
    id: '26',
    image: 'https://i.postimg.cc/9Qk54jZ0/tiramisu.jpg',
    title: 'Tiramisu',
    description: '',
    height: '',
    width: '',
    piatto: 'Dolci (Postres)',
  },
  {
    id: '27',
    image: 'https://jumboargentina.vtexassets.com/arquivos/ids/682862-800-600?v=637764969714070000&width=800&height=600&aspect=true',
    title: 'CocaCola (2.25Lts)',
    description: '',
    height: '450',
    width: '600',
    piatto: 'Bevenade (Bebidas)',
  },
  {
    id: '28',
    image: 'https://d2j6dbq0eux0bg.cloudfront.net/images/40846107/2573443254.jpg',
    title: 'Sprite (2.25Lts)',
    description: '',
    height: '100',
    width: '100',
    piatto: 'Bevenade (Bebidas)',
  },
  {
    id: '29',
    image: 'https://thefoodtech.com/wp-content/uploads/2021/08/Brio-Aguas-Saborizadas.jpg',
    title: 'Agua saborizada (1.5Lts)',
    description: '',
    height: '280',
    width: '',
    piatto: 'Bevenade (Bebidas)',
  },
  {
    id: '30',
    image: 'https://i.postimg.cc/SNs62Q3g/agua-sab-500.png',
    title: 'Agua saborizada (500ml)',
    description: '',
    height: '220',
    width: '250',
    piatto: 'Bevenade (Bebidas)',
  },
  {
    id: '31',
    image: 'https://i.postimg.cc/MHjzNQXs/cinzano-rosso.jpg',
    title: 'Cinzano Rosso (Litro)',
    description: '',
    height: '300',
    width: '',
    piatto: 'Bevenade (Bebidas)',
  },
  {
    id: '32',
    image: 'https://carrefourar.vtexassets.com/arquivos/ids/226775/7790290101602_02.jpg?v=637715449494370000',
    title: 'Fernet (750ml)',
    description: '',
    height: '300',
    width: '',
    piatto: 'Bevenade (Bebidas)',
  },
  {
    id: '33',
    image: 'https://i.postimg.cc/gcshcJM4/gancia.jpg',
    title: 'Gancia (950ml)',
    description: '',
    height: '300',
    width: '',
    piatto: 'Bevenade (Bebidas)',
  },
  {
    id: '34',
    image: 'https://i.postimg.cc/rygd2wgT/otro-loco-mas.jpg',
    title: 'Otro Loco Más (Malbec)',
    description: '',
    height: '300',
    width: '',
    piatto: 'Bevenade (Bebidas)',
  },
  {
    id: '35',
    image: 'https://i.postimg.cc/VLDHtnRh/quara-malbec.jpg',
    title: 'Quara (Malbec)',
    description: '',
    height: '250',
    width: '',
    piatto: 'Bevenade (Bebidas)',
  },
  {
    id: '36',
    image: 'https://i.postimg.cc/JzCtbHzb/lobo-negro.png',
    title: 'Lobo Negro (Malbec)',
    description: '',
    height: '280',
    width: '',
    piatto: 'Bevenade (Bebidas)',
  },
  {
    id: '37',
    image: 'https://jumboargentina.vtexassets.com/arquivos/ids/676176-800-600?v=637726089967230000&width=800&height=600&aspect=true',
    title: 'Canciller (Blend)',
    description: '',
    height: '250',
    width: '',
    piatto: 'Bevenade (Bebidas)',
  },
  {
    id: '38',
    image: 'https://i.postimg.cc/pLQQ8HRL/tonelito-borgo-a.jpg',
    title: 'Tonelito (Malbec)',
    description: '',
    height: '300',
    width: '',
    piatto: 'Bevenade (Bebidas)',
  },
]

export default piattosData
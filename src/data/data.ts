import brownie from '../assets/brownie.svg';
import cookiesIntegral from '../assets/cookies-integral 1.svg';
import cookies from '../assets/cookies.svg';
import enroladinhoGoiaba from '../assets/enroladinho-de-goiaba-vidro 1.svg';
import baguete from '../assets/pao-baguete.svg';
import paoCaseiroCalabresa from '../assets/pao-caseiro-com-calabresa 1.svg';
import paoCaseiroMussarela from '../assets/pao-caseiro-com-mussarela 1.svg';
import paoCaseiro from '../assets/pao-caseiro-italiano 1.svg';
import paoDeForma from '../assets/pao-forma-caseiro 1.svg';
import paoDeFormaSemiIntegral from '../assets/pao-forma-semi-integral 1.svg';
import waffle from '../assets/waffle-2-discos 1.svg';

export type DataProps = {
  name: string;
  price: string;
  image: string;
  quantity: string;
  description: string;
};

export const data: DataProps[] = [
  {
    name: 'Pão caseiro tipo italiano',
    price: '12,00',
    image: paoCaseiro,
    quantity: '1Un.',
    description: ''
  },
  {
    name: 'Pão caseiro tipo italiano com mussarela',
    price: '23,00',
    image: paoCaseiroMussarela,
    quantity: '1Un.',
    description: ''
  },
  {
    name: 'Pão caseiro tipo italiano com linguiça calabresa',
    price: '23,00',
    image: paoCaseiroCalabresa,
    quantity: '1Un.',
    description: ''
  },
  {
    name: 'Pão de forma semi integral',
    price: '15,00',
    image: paoDeFormaSemiIntegral,
    quantity: '1Un.',
    description: ''
  },
  {
    name: 'Pão de forma caseiro',
    price: '12,00',
    image: paoDeForma,
    quantity: '1Un.',
    description: ''
  },
  {
    name: 'Pão Baguete',
    price: '15,00',
    image: baguete,
    quantity: '1Un.',
    description: ''
  },
  {
    name: 'Brownie',
    price: '10,00',
    image: brownie,
    quantity: '1Un.',
    description: ''
  },
  {
    name: 'Enroladinho de goiabada',
    price: '18,00',
    image: enroladinhoGoiaba,
    quantity: '170g',
    description: 'Embalagem de vidro'
  },
  {
    name: 'Massa de waffle',
    price: '13,00',
    image: waffle,
    quantity: '2 discos',
    description: ''
  },
  {
    name: 'Cookie com gotas de chocolate meio amargo',
    price: '12,00',
    image: cookies,
    quantity: '200g',
    description: ''
  },
  {
    name: 'Cookie de banana com gotas de chocolate meio amargo.',
    price: '14,00',
    image: cookiesIntegral,
    quantity: '200g',
    description: 'Sem trigo e sem açúcar'
  }
];

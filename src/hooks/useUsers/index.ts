import User from '../../interfaces/User';

const users: User[] = [
  {
    id: '685a2116-26ac-4573-9e92-3d6c53ab61c4',
    imageUrl: 'https://img.elo7.com.br/product/zoom/27026C7/asdasd-asdad.jpg',
    name: 'Cleiton',
    email: 'cleiton@em.ail',
    phoneNumber: '88 98888-1234',
  },
  {
    id: 'e06669c6-9a9f-4593-8320-2669085e3673',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmBZcmvIXmOkb7DaxZimzSKn6qsJgfEFJSYQ&usqp=CAU',
    name: 'Gerson',
    email: 'gerson123@e.mail',
    phoneNumber: '06 92323-3232',
  },
  {
    id: '6cec3551-9bb3-4b25-99e9-90ecb744f6ef',
    imageUrl:
      'https://independente.com.br/wp-content/uploads/2022/04/asdasd-11.jpg',
    name: 'Paulo Henrique Andrade Cristiano Roberto Josué Castelo Isaías',
    email: 'phenriqueandcrjcasteloi@email.com',
    phoneNumber: '00 12345-6789',
  },
  {
    id: '7bacf602-6ea5-4f0f-bc79-3b6b30d091da',
    imageUrl:
      'https://www.superprof.com.br/imagens/anuncios/professor-home-asdasdasdas-daslkdnasjodnas-daj-sdoa-jsdlajs-dlas-dadsassdasfa-asd-asdasd-asdasdasdasdasdasd-asd.jpg',
    name: 'Francisco',
    email: 'fcisco@email.com',
    phoneNumber: '24 68024-6802',
  },
  {
    id: '7860f97e-7caa-4f69-b8e8-50cfb7586e49',
    imageUrl: 'https://i1.sndcdn.com/avatars-000676876559-gwfbof-t500x500.jpg',
    name: 'Pedrinho',
    email: 'pedr_in@email.com',
    phoneNumber: '11 11111-1111',
  },
];

const useUsers = () => {
  return {
    users,
  };
};

export default useUsers;

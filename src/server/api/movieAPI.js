/**
*   This class will be where the you put Client side services
*/
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
export default class MovieService
{
static getMovieList ()
{
  return [
    {  id: 1017109,
      title: 'Juno',
      genre: 'Drama',
  },
  {
      id: 1017105,
      title: 'Star Wars',
      genre: 'Sy-Fy',
  },
  {
      id: 1017108,
      title: 'Big',
      genre: 'Sy-FY',
  },
  {
      id: 1017104,
      title: 'Juno',
      genre: 'Drama',
  },
  {
      id: 1017106,
      title: 'I-Robot',
      genre: 'Sy-FY',

  },
  {
      id: 4444441,
      title: 'Logan',
      genre: 'Sy-Fy',
  }
    ]
}
}
//Test Import remove when done
export function doSomething() {
  console.log('did something!');
}

function doSomethingSecret() {
  console.log('secret!');
}

export function doSomethingElse(admin) {
    console.log('something else!');
    if (admin) doSomethingSecret()
}

export const orange = '#FFA500';

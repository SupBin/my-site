import axios from 'axios';

async function getName(){
  const name = await axios.get('api/banner');
  console.log(name);
}
getName();
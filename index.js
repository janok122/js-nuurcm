//Import stylesheets
//import './style.css';
import mockData from './mock_data';

fetch('https://jsonblob.com/api/456479a7-302f-11ea-893e-9d0b7a7dd72d').then(resp => resp.json()).then((json) =>{
// Write Javascript code!
console.log(json);
const fetchData = json.data;
const appDiv = document.getElementById('app');

const app = document.getElementById('app');
const ul = document.createElement('ul');

for(const item of fetchData){
    const li = document.createElement('li');
    
    const title = document.createElement('div');
    title.innerText = item.title;
        
    const image = document.createElement('img');
    image.src = item.thumbnailUrl;
    
    const desc = document.createElement('p');
    desc.innerText = item.longDescription;

    const addBut = document.createElement('button');
    addBut.innerText = 'Buy me bitchis'                 
    
     const delBut = document.createElement('button');
    delBut.innerText = 'Throw away'   

    li.appendChild(title);
    li.appendChild(image);
    li.appendChild(desc);
    li.appendChild(addBut);
    li.appendChild(delBut);
    
  

   
    

    ul.appendChild(li);
}

app.appendChild(ul);
});


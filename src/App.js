import React, {useState, useEffect} from "react";

import "./styles.css";
import api from "./services/api";

export default function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get('/repositories').then(response => {
      setRepositories(response.data);
    });
  }, []);


  console.log(repositories);

  async function handleAddRepository() {
    const response = await api.post('repositories', {
      title: `Front-end repository test ${Date.now()}`,
      owner: "Marcos"
    });

    const repository = response.data;
    setRepositories([...repositories, repository]);
  }

  async function handleRemoveRepository(idToDelete) {
    const response = await api.delete('repositories/'+idToDelete);
    console.log(response);
    if (response.status === 204){
       repositories.map((repository, i) => {
         if (repository.id === idToDelete){
          repositories.splice(i,1);
          console.log("removido");
          
          setRepositories([...repositories]);
         } 
         
         return repositories;
       });
    }
  }

  function Delete (props){
    return(
      <button onClick={() => handleRemoveRepository(props.id)}>
      Remover
      </button>
    );
  }

  return (
    <div>
      <div>
      <ul data-testid="repository-list">
        {repositories.map(repository => 
        <>
           <li key = {repository.id}> 
            {repository.title} 
            <Delete id={repository.id} />
           </li>
        </>
        )}
      </ul>
      </div>
      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
};
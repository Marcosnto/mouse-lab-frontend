import React, { useState, useEffect, Fragment } from "react";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css"


import api from "./services/api";
import List from './components/List'
import Header from './components/Header'



export default function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get('/repositories').then(response => {
      setRepositories(response.data);
    });
  }, []);


  async function handleAddRepository() {
    const response = await api.post('repositories', {
      title: `Front-end repository test ${Date.now()}`,
      owner: "Marcos"
    });

    const repository = response.data;
    setRepositories([...repositories, repository]);
  }

  async function handleRemoveRepository(idToDelete) {
    const response = await api.delete('repositories/' + idToDelete);
    console.log(response);
    if (response.status === 204) {
      repositories.map((repository, i) => {
        if (repository.id === idToDelete) {
          repositories.splice(i, 1);
          console.log("removido");

          setRepositories([...repositories]);
        }

        return repositories;
      });
    }
  }

  async function handleLike(id){
    const response = await api.post(`repositories/${id}/like`);
    const newRepositories = repositories;

    repositories.filter((repository,index) => {
      if (repository.id === id){
        repositories[index] = response.data;
      }
    })

    setRepositories([...newRepositories]);
  }

  async function handleDislike(id){
    const response = await api.post(`repositories/${id}/dislike`);
    const newRepositories = repositories;

    repositories.filter((repository,index) => {
      if (repository.id === id){
        repositories[index] = response.data;
      }
    })

    setRepositories([...newRepositories]);
  }

  return (
    <Fragment>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <List repositories={repositories} handleRemoveRepository={handleRemoveRepository} 
            handleLike = { handleLike } handleDislike = { handleDislike } />
          </div>
          <div>
            <button className = "btnAdd" onClick={handleAddRepository}>Adicionar</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
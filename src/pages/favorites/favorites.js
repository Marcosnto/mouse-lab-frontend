import React, { useState, useEffect } from 'react'

import api from '../../Services/api'
import Header from '../../Components/Header/header'
import MenuHead from '../../Components/Header/menuHead'
import Table from '../../Components/Table/table'

export default function Favorites() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get('/repositories/favorites').then(response => {
      setRepositories(response.data);
    });
  }, []);

  async function handleFavorite(id) {
    const response = await api.put(`repositories/${id}/favorite`);
    //const newRepositories = repositories;

    repositories.filter((repository, index) => {
      if (repository.id === id) {
        repositories.splice(index, 1);
      }
      return null;
    })

    setRepositories([...repositories]);
  }

  return (
    <>
      <Header />
      <MenuHead />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="mb40 text-center">Repositórios Favoritos</h2>
            <Table
              repositories={repositories}
              titles={['Titulo', 'Criador', 'Url', 'Tecnologias', 'Likes', 'Favorito']}
              data={['title', 'owner', 'url', 'techs', 'likes', 'favorite']}
              handleFavorite={handleFavorite}
            />
          </div>
        </div>
      </div>
    </>
  )

}
import React, { useEffect, useState } from 'react'

import api from '../../Services/api'
import Header from '../../Components/Header/header'
import MenuHead from '../../Components/Header/menuHead'
import Table from '../../Components/Table/table'

export default function Manage() {

  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get('/repositories').then(response => {
      setRepositories(response.data);
    });
  }, []);

  async function handleRemoveRepository(idToDelete) {
    const response = await api.delete('repositories/' + idToDelete);

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

  return (
    <>
      <Header />
      <MenuHead />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="mb40 text-center">Gerenciar Repositórios</h2>
            <Table
              repositories={repositories}
              handleRemoveRepository={handleRemoveRepository}
              titles={['Titulo', 'Criador', 'Url', 'Tecnologias', 'Likes', 'Favorito', 'Remover']}
              data={['title', 'owner', 'url', 'techs', 'likes', 'favorite']}
            />
          </div>
        </div>
      </div>
    </>
  )
}
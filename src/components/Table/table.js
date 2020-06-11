import React from 'react'

import Favorite from '../../Components/Favorite/favorite'


function BtnRemove({ id, handleRemoveRepository }) {
  if (handleRemoveRepository) {
    return (
      <td>
        <button className="btn btn-danger" onClick={() => handleRemoveRepository(id)}>Remover</button>
      </td>
    )
  }
  return null;
}

export default function Table(props) {
  const { repositories, titles, data, handleRemoveRepository, handleFavorite } = props;
  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          {titles.map(titulo => {
            return <th className="text-center" scope="col">{titulo}</th>
          })}
        </tr>
      </thead>
      <tbody>
        {repositories.map(repository => {
          return (
            <tr key={repository.id} className="text-center">
              {data.map(name => {
                return (
                  <td>{
                    name === 'favorite' ?
                      <button className="btnFavorite" onClick={() => handleFavorite(repository.id)}>
                        <Favorite favorite={repository.favorite} />
                      </button> :
                      repository[name]
                  }</td>
                )
              })}
              <BtnRemove id={repository.id} handleRemoveRepository={handleRemoveRepository} />
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
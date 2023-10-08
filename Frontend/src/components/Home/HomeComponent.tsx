// Se visualizan todos los personajes del usuario (Se verán los últimos 5)
// Se verá el nombre del usuario
// Habrá un botón para crear un personaje
// Al tocar sobre un personaje, se irá a la pestaña de  actualizar el atuendo (OPCIONAL)

export const HomeComponent = () => {
  return (
    <div>
        <span>{localStorage.getItem('userID')}</span>
        <span>{localStorage.getItem('username')}</span>
      </div>
  )
}

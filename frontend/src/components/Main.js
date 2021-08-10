import React from 'react'
import { CurrentUserContext } from '../contexts/CurrentUserContext'
import Card from './Card'

function Main(props) {
  const { onPopupAvatar, onPopupEdit, onPopupAdd, onCardClick, onCardLike, onCardDelete, cards } = props;
  const { name, about, avatar } = React.useContext(CurrentUserContext);

  return (
    <main className="content page__section">
      <section className="user">
        <div className="user__wrapper">
          <button
            className="user__edit-avatar"
            type="button"
            aria-label="Редактировать"
            onClick={onPopupAvatar}>
            <div className="user__avatar" style={{ backgroundImage: `url(${avatar})` }}></div>
          </button>
          <div className="user__info">
            <div className="user__text">
              <h1 className="user__name">{name}</h1>
              <button
                className="button user__edit"
                type="button"
                aria-label="Редактировать"
                onClick={onPopupEdit}>
              </button>
            </div>
            <p className="user__about">{about}</p>
          </div>
        </div>
        <button
          className="button user__add"
          type="button"
          aria-label="Добавить"
          onClick={onPopupAdd}
        >
        </button>
      </section>

      <section className="places">
        <ul className="places__section">
          {cards.map((card) => (
            <Card
              key={card._id}
              link={card.link}
              name={card.name}
              likes={card.likes.length}
              card={card}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
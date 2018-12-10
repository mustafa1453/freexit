import React, { Component } from 'react';
import './GamesList.scss';

class GamesList extends Component {
  render() {
    return (
      <div class="wrapper">
        <div class="chat">
            <div class="chat__title">Chat</div>
            <div class="chat__list">
                <div class="chat__message">
                    <div class="chat__members">
                        <span class="users__names--from">Lorem ipsum.</span>
                        <span class="users__names--to">Lorem ipsum.</span>
                    </div>
                    <span class="chat__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae autem eum fugiat non voluptatem facilis, nostrum veniam veritatis blanditiis quisquam.</span>
                </div>
                <div class="chat__message--my">
                    <div class="chat__members">
                        <span class="users__names--from">Lorem ipsum.</span>
                        <span class="users__names--to">Lorem ipsum.</span>
                    </div>
                    <span class="chat__text">Facere deleniti sequi itaque tenetur nobis blanditiis doloremque ea, cumque rem aspernatur obcaecati amet dolore perspiciatis ut natus, quaerat perferendis.</span>
                </div>
                <div class="chat__message">
                    <div class="chat__members">
                        <span class="users__names--from">Lorem ipsum.</span>
                        <span class="users__names--to">Lorem ipsum.</span>
                    </div>
                    <span class="chat__text">Ipsam, facere sit nihil nobis amet assumenda accusamus vitae, minima maiores, incidunt illo hic sunt reprehenderit quam officiis cupiditate, alias!</span>
                </div>
                <div class="chat__message--my">
                    <div class="chat__members">
                        <span class="users__names--from">Lorem ipsum.</span>
                        <span class="users__names--to">Lorem ipsum.</span>
                    </div>
                    <span class="chat__text">Quo ratione laborum repellat accusamus quae veniam ex nisi eos. Odit vitae earum amet, possimus sit veritatis ullam fugit inventore.</span>
                </div>
                <div class="chat__message">
                    <div class="chat__members">
                        <span class="users__names--from">Lorem ipsum.</span>
                        <span class="users__names--to">Lorem ipsum.</span>
                    </div>
                    <span class="chat__text">Dignissimos itaque maiores architecto vel animi magnam eum, perspiciatis rem molestiae, consequatur modi quis repellendus consequuntur soluta est dolor, commodi.</span>
                </div>
                <div class="chat__message">
                    <div class="chat__members">
                        <span class="users__names--from">Lorem ipsum.</span>
                        <span class="users__names--to">Lorem ipsum.</span>
                    </div>
                    <span class="chat__text">Cum quis aliquid nihil, libero, ex suscipit architecto cumque? Odio nemo quia amet optio reprehenderit, natus tenetur! Unde, maiores, ratione.</span>
                </div>
                <div class="chat__message">
                    <div class="chat__members">
                        <span class="users__names--from">Lorem ipsum.</span>
                        <span class="users__names--to">Lorem ipsum.</span>
                    </div>
                    <span class="chat__text">In nulla numquam reiciendis, cumque architecto incidunt praesentium iusto autem natus a ducimus nobis? Id numquam repellendus assumenda temporibus suscipit.</span>
                </div>
                <div class="chat__message">
                    <div class="chat__members">
                        <span class="users__names--from">Lorem ipsum.</span>
                        <span class="users__names--to">Lorem ipsum.</span>
                    </div>
                    <span class="chat__text">Magnam quidem quaerat inventore ex pariatur, perferendis quae? Error molestias eos est atque consequatur impedit quae at perspiciatis, voluptate beatae.</span>
                </div>
            </div>
            <div class="chat__form">
                <input type="text" class="chat__input__message" />
                <button class="chat__form__submit">Send</button>
            </div>
        </div>

        <div class="games">
            <div class="games__title">Games</div>
            <div class="games__names">
                <div>Lorem ipsum.</div>
                <div>Nisi, explicabo.</div>
                <div>Neque, minima.</div>
                <div>Quisquam, nemo.</div>
                <div>Adipisci, asperiores.</div>
            </div>
        </div>

        <div class="users">
            <div class="users__title">Users</div>
            <div class="users__names">
                <div>Lorem ipsum.</div>
                <div>Possimus, dolore!</div>
                <div>Molestias, dicta.</div>
                <div>Assumenda, culpa.</div>
                <div>Facilis, deserunt.</div>
                <div>Facere, optio.</div>
                <div>Consectetur, dicta.</div>
                <div>Voluptas, vero.</div>
                <div>Quae, assumenda.</div>
                <div>Et, repudiandae.</div>
                <div>Consequatur, adipisci.</div>
                <div>Expedita, ipsam.</div>
                <div>Soluta, perspiciatis.</div>
                <div>Odio, rerum!</div>
                <div>Laborum, rem.</div>
            </div>
        </div>

        <div class="create__form">
            <label for="gamename" class="create__form__label" >Name of game</label>
            <input type="text" name="gamename" class="create__form__gamename" />
            <button class="create__form__submit">Create own game</button>
        </div>
    </div>
    );
  }
}

export default GamesList;

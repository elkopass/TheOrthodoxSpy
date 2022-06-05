import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar, FormItem, Input } from '@vkontakte/vkui';

let listOfLocations = new Array();
listOfLocations = ["Стройплощадка","Метро","Паралмент","Стадион","Музей","Дом престарелых","Экскурсионный автобус","Рок-концерт","Шахта","Свадьба","Заправочная станция","Библиотека","Шоколадная фабрика","Кладбище","Джаз-банд","Виноградник","Порт","Автогонки","Тюрьма","Выставка кошек"];


let kek = "5";

function setName(value) {
	kek = value;
}

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Православные клоуны</PanelHeader>
		<Group header={<Header mode="secondary">Список локаций</Header>}>
			<Div>
				Стройплощадка Метро Парламент Стадион Музей
			</Div>
			<Div>
				Дом престарелых Экскурсионный автобус Рок-концерт Шахта Свадьба
			</Div>
			<Div>
				Заправочная станция Библиотека Тюрьма Выставка кошек  Порт
			</Div>
			<Div>
				Шоколадная фабрика Кладбище Джаз-бенд Виноградник Автогонка
			</Div>
		
		</Group>
		<Group header={<Header mode="secondary">Новая игра</Header>}>
			<Div>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="persik">
					Начать новую игру
				</Button>
			</Div>
		</Group>
		
		{/* <Group header={<Header mode="secondary">Navigation Example2</Header>}>
			<Div>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="count">
					Show me the Count, please
				</Button>
			</Div>
		</Group> */}

		<Group>
			<FormItem top="Количество игроков">
				<Input onChange={((e) => setName(e))} type="text" placeholder="Введите количество игроков и нажмите Enter" />
			</FormItem>
	  	</Group>

		

	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;

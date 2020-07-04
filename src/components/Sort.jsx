import React from "react";

const Sort = () => {
	return (
		<div className='sort icon-up-dir'>
		<span className='sort__label'>Сортировка по:&nbsp;</span>
		<span className='sort__selected-item'>популярности</span>

		<div className='sort-popup sort__sort-popup'>
			<ul className='sort-popup__list'>
				<li className='sort-popup__item sort-popup__item_active'>
					популярности
				</li>
				<li className='sort-popup__item'>цене</li>
				<li className='sort-popup__item'>алфавиту</li>
			</ul>
		</div>
	</div>
	);
}

export default Sort;
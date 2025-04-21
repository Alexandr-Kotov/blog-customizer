import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';

import styles from './ArticleParamsForm.module.scss';
import { Select } from 'src/ui/select';
import {
	backgroundColors,
	contentWidthArr,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
	OptionType,
} from 'src/constants/articleProps';
import { useState } from 'react';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';

export const ArticleParamsForm = () => {
	const [font, setFont] = useState<OptionType>(fontFamilyOptions[0]);
	const [size, setSize] = useState<OptionType>(fontSizeOptions[0]);
	const [color, setColor] = useState<OptionType>(fontColors[0]);
	const [backgroundColor, setBackgroundColor] = useState<OptionType>(
		backgroundColors[0]
	);
	const [width, setWidth] = useState<OptionType>(contentWidthArr[0]);

	return (
		<>
			<ArrowButton isOpen={true} onClick={() => {}} />
			<aside className={styles.container}>
				<form className={styles.form}>
					<h2 className={styles.title}>Задайте параметры</h2>
					<Select
						title='Шрифт'
						selected={font}
						options={fontFamilyOptions}
						onChange={setFont}
					/>
					<RadioGroup
						name='radio'
						title='Размер шрифта'
						selected={size}
						options={fontSizeOptions}
						onChange={setSize}
					/>
					<Select
						title='Цвет шрифта'
						selected={color}
						options={fontColors}
						onChange={setColor}
					/>
					<Separator />
					<Select
						title='Цвет фона'
						selected={backgroundColor}
						options={backgroundColors}
						onChange={setBackgroundColor}
					/>
					<Select
						title='Ширина контента'
						selected={width}
						options={contentWidthArr}
						onChange={setWidth}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};

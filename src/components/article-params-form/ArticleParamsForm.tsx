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
import { useEffect, useRef, useState } from 'react';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';
import clsx from 'clsx';

type Props = {
	onApply: (settings: {
		font: OptionType;
		size: OptionType;
		color: OptionType;
		backgroundColor: OptionType;
		width: OptionType;
	}) => void;
};

export const ArticleParamsForm = ({ onApply }: Props) => {
	const [isOpen, setIsOpen] = useState(false);
	const [font, setFont] = useState<OptionType>(fontFamilyOptions[0]);
	const [size, setSize] = useState<OptionType>(fontSizeOptions[0]);
	const [color, setColor] = useState<OptionType>(fontColors[0]);
	const [backgroundColor, setBackgroundColor] = useState<OptionType>(
		backgroundColors[0]
	);
	const [width, setWidth] = useState<OptionType>(contentWidthArr[0]);
	const sidebarRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				isOpen &&
				sidebarRef.current &&
				!sidebarRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, [isOpen]);

	const handleApply = (e: React.FormEvent) => {
		e.preventDefault();
		onApply({
			font,
			size,
			color,
			backgroundColor,
			width,
		});
	};

	const handleReset = () => {
		setFont(fontFamilyOptions[0]);
		setSize(fontSizeOptions[0]);
		setColor(fontColors[0]);
		setBackgroundColor(backgroundColors[0]);
		setWidth(contentWidthArr[0]);
	};

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={() => setIsOpen((prev) => !prev)} />
			<aside
				className={clsx(styles.container, { [styles.container_open]: isOpen })}
				ref={sidebarRef}>
				<form className={styles.form} onSubmit={handleApply}>
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
						<Button
							title='Сбросить'
							htmlType='reset'
							type='clear'
							onClick={handleReset}
						/>
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};

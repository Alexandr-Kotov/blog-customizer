import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';
import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import {
	backgroundColors,
	contentWidthArr,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from './constants/articleProps';
import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const defaultSettings = {
	font: fontFamilyOptions[0],
	size: fontSizeOptions[0],
	color: fontColors[0],
	backgroundColor: backgroundColors[0],
	width: contentWidthArr[0],
};

const App = () => {
	const [appliedSettings, setAppliedSettings] = useState(defaultSettings);

	return (
		<main
			className={clsx(styles.main)}
			style={
				{
					'--font-family': appliedSettings.font.value,
					'--font-size': appliedSettings.size.value,
					'--font-color': appliedSettings.color.value,
					'--container-width': appliedSettings.width.value,
					'--bg-color': appliedSettings.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm onApply={setAppliedSettings} />
			<Article />
		</main>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);

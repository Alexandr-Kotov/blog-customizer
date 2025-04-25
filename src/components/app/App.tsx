import { CSSProperties, useState } from 'react';
import {
	backgroundColors,
	contentWidthArr,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';
import { ArticleParamsForm } from '../article-params-form';
import { Article } from '../article';
import styles from '../../styles/index.module.scss';

const defaultSettings = {
	font: fontFamilyOptions[0],
	size: fontSizeOptions[0],
	color: fontColors[0],
	backgroundColor: backgroundColors[0],
	width: contentWidthArr[0],
};

export const App = () => {
	const [appliedSettings, setAppliedSettings] = useState(defaultSettings);

	return (
		<main
			className={styles.main}
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

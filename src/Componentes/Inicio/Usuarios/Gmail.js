import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Chart, ArgumentAxis, ValueAxis, AreaSeries, Title, Legend } from '@devexpress/dx-react-chart-material-ui';
import { ArgumentScale, Animation } from '@devexpress/dx-react-chart';
import { scalePoint } from 'd3-scale';
import { withStyles } from '@material-ui/core/styles';

const legendStyles = {
	root: {
		display: 'flex',
		margin: 'auto',
		flexDirection: 'row',
	},
};
const legendLabelStyles = theme => ({
	label: {
		paddingTop: theme.spacing(1),
	},
});
const legendItemStyles = {
	item: {
		flexDirection: 'column',
	},
};

const LegendRootBase = ({ classes, ...restProps }) => (
	<Legend.Root {...restProps} className={classes.root} />
);
const LegendLabelBase = ({ classes, ...restProps }) => (
	<Legend.Label {...restProps} className={classes.label} />
);
const LegendItemBase = ({ classes, ...restProps }) => (
	<Legend.Item {...restProps} className={classes.item} />
);

const LegendRoot = withStyles(legendStyles, { name: 'LegendRoot' })(LegendRootBase);
const LegendLabel = withStyles(legendLabelStyles, { name: 'LegendLabel' })(LegendLabelBase);
const LegendItem = withStyles(legendItemStyles, { name: 'LegendItem' })(LegendItemBase);

export default function AreaGmail() {
	const data = [
		{ mes: 'Ene', contactos: 5, no: 10 },
		{ mes: 'Feb', contactos: 10, no: 8 },
		{ mes: 'Mar', contactos: 12, no: 7 },
		{ mes: 'Abr', contactos: 9, no: 5 },
		{ mes: 'May', contactos: 10, no: 20 },
		{ mes: 'Jun', contactos: 12, no: 25 },
		{ mes: 'Jul', contactos: 13, no: 8 },
		{ mes: 'Ags', contactos: 14, no: 6 },
		{ mes: 'Sep', contactos: 19, no: 18 },
		{ mes: 'Oct', contactos: 17, no: 8 },
		{ mes: 'Nov', contactos: 20, no: 7 },
		{ mes: 'Dic', contactos: 14, no: 16 }
	];

	return (
		<Paper elevation={4}>
			<Chart data={data}>
				<ArgumentScale factory={scalePoint} />
				<ArgumentAxis />
				<ValueAxis />
				<AreaSeries name='Recibidos' valueField="contactos" argumentField="mes" color='#e53a34' />
				<AreaSeries name='Enviados' valueField="no" argumentField="mes" color='#39a24f' />
				<Title text="Gmail" />
				<Legend position="bottom" rootComponent={LegendRoot} itemComponent={LegendItem} labelComponent={LegendLabel} />
				<Animation duration={1000} />
			</Chart>
		</Paper>
	);
}
import React from 'react';
import img1 from '../../../assets/images/img1.jpeg';

const colors = {
	primary: '#0A0A0A',
	royalGreen: '#90C695',
	royalGreenLight: '#B8E6C1',
	background: '#F8FBF9',
	white: '#FFFFFF',
	text: '#1F1F1F',
	border: '#D5E5DB',
	shadow: 'rgba(144, 198, 149, 0.15)'
};

const styles = {
	page: {
		minHeight: '80vh',
		background: colors.background,
		padding: '40px 80px',
		fontFamily: "'Inter', sans-serif",
		color: colors.text,
	},
	header: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: '30px',
	},
	title: {
		fontSize: '28px',
		fontWeight: 700,
		fontFamily: "'Playfair Display', serif",
	},
	grid: {
		display: 'grid',
		gridTemplateColumns: 'repeat(3, 1fr)',
		gap: '20px',
	},
	card: {
		background: colors.white,
		padding: '20px',
		borderRadius: '6px',
		boxShadow: `0 6px 24px ${colors.shadow}`,
		border: `1px solid ${colors.border}`,
	},
	heroImage: {
		width: '100%',
		height: '160px',
		objectFit: 'cover',
		borderRadius: '4px',
	}
};

function Dashboard() {
	return (
		<div style={styles.page}>
			<div style={styles.header}>
				<div>
					<div style={styles.title}>Admin Dashboard</div>
					<div style={{color: '#6C5F5B', marginTop: '6px'}}>Overview of store metrics</div>
				</div>
			</div>

			<div style={styles.grid}>
				<div style={styles.card}>
					<h3>Sales</h3>
					<p style={{fontSize: '28px', fontWeight: 700, margin: '10px 0'}}>$12,430</p>
					<img src={img1} alt="sales" style={styles.heroImage} />
				</div>
				<div style={styles.card}>
					<h3>Orders</h3>
					<p style={{fontSize: '28px', fontWeight: 700, margin: '10px 0'}}>342</p>
				</div>
				<div style={styles.card}>
					<h3>Customers</h3>
					<p style={{fontSize: '28px', fontWeight: 700, margin: '10px 0'}}>1,245</p>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;

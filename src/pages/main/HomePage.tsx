import { Box } from '@mui/material';
import React from 'react';
import Story from '@/components/Stories/Story';
import SideComponent from '@/components/SideComponents/SideComponent';

function HomePage() {
	const styles = {
		page: `flex justify-center items-center`,
		leftBar: `h-screen w-2/12`,
		main: `border-2 border-white h-screen w-6/12 flex flex-col justify-start items-center`,
		rightBar: `border-2 border-white h-screen w-4/12`,
		navBar: `w-10/12 h-[95px] ml-auto`,
	};
	return (
		<Box className={styles.page}>
			<Box className={styles.leftBar}>
				<SideComponent />
			</Box>
			<Box className={styles.main}>
				<Box className={styles.navBar}>
					<Story />
				</Box>
			</Box>
			<Box className={styles.rightBar}></Box>
		</Box>
	);
}

export default HomePage;

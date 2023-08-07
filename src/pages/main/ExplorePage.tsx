import LeftSideComponent from '@/components/SideComponents/LeftSideComponent';
import { Box } from '@mui/material';
import React from 'react';

function ExplorePage() {
	const styles = {
		page: `flex justify-center items-center`,
		leftBar: `h-screen w-2/12 mr-auto`,
		// main: `h-screen w-6/12 flex flex-col justify-start items-center`,
		// rightBar: `h-screen w-4/12`,
		// navBar: `w-10/12 h-[95px] ml-auto mt-10`,
	};
	return (
		<Box className={styles.page}>
			<Box className={styles.leftBar}>
				<LeftSideComponent />
			</Box>
		</Box>
	);
}

export default ExplorePage;

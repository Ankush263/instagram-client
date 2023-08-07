import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { GoHomeFill, GoHome, GoSearch } from 'react-icons/go';
import { MdOutlineExplore, MdExplore } from 'react-icons/md';
import { BiMoviePlay } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { TbSearch } from 'react-icons/tb';
import { SlMenu } from 'react-icons/sl';
import { FaUserCircle } from 'react-icons/fa';
import NotificationOutline from '../icons/NotificationOutline';
import NotificationFilled from '../icons/NotificationFilled';
import VideoOutline from '../icons/VideoOutline';
import VideoFilled from '../icons/VideoFilled';
import MessageOutline from '../icons/MessageOutline';
import MessageFilled from '../icons/MessageFilled';
import CreateOutline from '../icons/CreateOutline';
import CreateFilled from '../icons/CreateFilled';
import Link from 'next/link';
import SearchBar from '../popupBar/SearchBar';

function LeftSideComponent() {
	const [url, setUrl] = useState<any>('/');

	useEffect(() => {
		setUrl(window.location.pathname);
	}, []);
	const styles = {
		component: `w-full h-full border-r-2 border-gray flex flex-col`,
		image: `w-full h-20 mt-3 flex justify-center items-center`,
		childBox: `w-8/12 ml-6 mt-7 flex flex-col justify-start items-start`,
		sideBox: `flex justify-center items-center cursor-pointer mb-8`,
		iconBox: `w-full h-full flex justify-center items-center`,
		bottomContainer: `h-24 w-6/12 mt-auto ml-6 flex justify-start items-center cursor-pointer`,
	};
	return (
		<Box className={styles.component}>
			<Box className={styles.image}>
				<img
					src="/image/instagram-txt-white.png"
					alt="#"
					className="w-[103px] mr-auto ml-5"
				/>
			</Box>
			<Box className={styles.childBox}>
				<Box className={styles.sideBox}>
					{url === '/' ? (
						<Box className={styles.iconBox}>
							<GoHomeFill size={28} />
							<p className="ml-3 font-bold">Home</p>
						</Box>
					) : (
						<Link href={`/`}>
							<Box className={styles.iconBox}>
								<GoHome size={28} />
								<p className="ml-3">Home</p>
							</Box>
						</Link>
					)}
				</Box>

				<Box className={styles.sideBox}>
					{/* <Box className={styles.iconBox}>
						<GoSearch size={28} />
						<p className="ml-3">Search</p>
					</Box> */}
					<SearchBar />
				</Box>

				<Box className={styles.sideBox}>
					{url === '/main/ExplorePage' ? (
						<Box className={styles.iconBox}>
							<MdExplore size={28} />
							<p className="ml-3 font-bold">Explore</p>
						</Box>
					) : (
						<Link href={`/main/ExplorePage`}>
							<Box className={styles.iconBox}>
								<MdOutlineExplore size={28} />
								<p className="ml-3">Explore</p>
							</Box>
						</Link>
					)}
				</Box>

				<Box className={styles.sideBox}>
					<Box className={styles.iconBox}>
						<VideoOutline />
						{/* <VideoFilled /> */}
						<p className="ml-3">Reels</p>
					</Box>
				</Box>

				<Box className={styles.sideBox}>
					<Box className={styles.iconBox}>
						<MessageOutline />
						{/* <MessageFilled /> */}
						<p className="ml-3">Message</p>
					</Box>
				</Box>

				<Box className={styles.sideBox}>
					<Box className={styles.iconBox}>
						<NotificationOutline />
						{/* <NotificationFilled /> */}
						<p className="ml-3">Notifications</p>
					</Box>
				</Box>

				<Box className={styles.sideBox}>
					<Box className={styles.iconBox}>
						<CreateOutline />
						{/* <CreateFilled /> */}
						<p className="ml-3">Create</p>
					</Box>
				</Box>

				<Box className={styles.sideBox}>
					{url === '/main/ProfilePage' ? (
						<Box className={styles.iconBox}>
							<FaUserCircle size={27} />
							<p className="ml-3 font-bold">Profile</p>
						</Box>
					) : (
						<Link href={`/main/ProfilePage`}>
							<Box className={styles.iconBox}>
								<CgProfile size={27} />
								<p className="ml-3">Profile</p>
							</Box>
						</Link>
					)}
				</Box>
			</Box>
			<Box className={styles.bottomContainer}>
				<SlMenu size={24} />
				<p className="ml-3">More</p>
			</Box>
		</Box>
	);
}

export default LeftSideComponent;

import { Route, Routes, Navigate } from "react-router-dom";
import styles from "./styles.module.css";
import Nav from './components/Nav'
import Dashboard from './pages/Dashboard'
import TicketPage from './pages/TicketPage'


const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>CRM App</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
			<Nav />
           <Routes>
            <Route path="/main" element={<Dashboard />} />
            <Route path="/ticket" element={<TicketPage />} />
            <Route path="/ticket/:id" element={<TicketPage editMode={true} />} />
          </Routes>
		</div>
	);
};

export default Main;

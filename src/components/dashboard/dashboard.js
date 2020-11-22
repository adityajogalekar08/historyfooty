import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./dashboard.css";
import "../../App.css";
import BarGraphs from "../graphs/BarGraphs";
import data from "../assets/json/manutd.json";

const DataTable = ({ name, club, info, opened, capacity, avg, record }) => {
	return (
		<>
			<div className="wrapper">
				<section className="top-container">
					<header className="showcase">
						<h1>
							{club}: {name}
						</h1>
						<p>{info}</p>
					</header>
					<div className="top-box top-box-a">
						<h4>Opened in</h4>
						<p className="opened">{opened}</p>
					</div>
					<div className="top-box top-box-b">
						<h4>Capacity</h4>
						<p className="capacity">{capacity}</p>
					</div>
					<div className="top-box top-box-c">
						<h4>Average Attendance</h4>
						<p className="avg">{avg}</p>
					</div>
					<div className="top-box top-box-d">
						<h4>Record Attendance</h4>
						<p className="record">{record}</p>
					</div>
				</section>
				{/*<section className="boxes">
					<div className="box">
						<i className="fas fa-chart-pie fa-4x"></i>
						<h3>Analytics</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi,
							expedita?
						</p>
					</div>
					<div className="box">
						<i className="fas fa-globe fa-4x"></i>
						<h3>Marketing</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi,
							expedita?
						</p>
					</div>
					<div className="box">
						<i className="fas fa-cog fa-4x"></i>
						<h3>Development</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi,
							expedita?
						</p>
					</div>
					<div className="box">
						<i className="fas fa-users fa-4x"></i>
						<h3>Support</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi,
							expedita?
						</p>
	</div> 
				</section>*/}
			</div>
		</>
	);
};
function dasboard() {
	return data.map((i, key) => {
		return (
			<DataTable
				name={i.name}
				club={i.club}
				info={i.info}
				opened={i.opened}
				capacity={i.capacity}
				avg={i.avgAttendance}
				record={i.recordAttn}
			/>
		);
	});
}
export default dasboard;

/*
	<div className="wrapper">
		<!-- Navigation -->
		<nav className="main-nav">
		<ul>
			<li>
			<a href="#">Home</a>
			</li>
			<li>
			<a href="#">About</a>
			</li>
			<li>
			<a href="#">Services</a>
			</li>
			<li>
			<a href="#">Contact</a>
			</li>
		</ul>
		</nav>

		<!-- Top Container -->
		<section className="top-container">
		<header className="showcase">
			<h1>Your Web Presence</h1>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ipsam! Nihil quo minima nulla atque!</p>
			<a href="#" className="btn">Read More</a>
		</header>
		<div className="top-box top-box-a">
			<h4>Membership</h4>
			<p className="price">$199/mo</p>
			<a href="" className="btn">Buy Now</a>
		</div>
		<div className="top-box top-box-b">
			<h4>Pro Membership</h4>
			<p className="price">$299/mo</p>
			<a href="" className="btn">Buy Now</a>
		</div>
		</section>

		<!-- Boxes Section -->
		<section className="boxes">
		<div className="box">
			<i className="fas fa-chart-pie fa-4x"></i>
			<h3>Analytics</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, expedita?</p>
		</div>
		<div className="box">
			<i className="fas fa-globe fa-4x"></i>
			<h3>Marketing</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, expedita?</p>
		</div>
		<div className="box">
			<i className="fas fa-cog fa-4x"></i>
			<h3>Development</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, expedita?</p>
		</div>
		<div className="box">
			<i className="fas fa-users fa-4x"></i>
			<h3>Support</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, expedita?</p>
		</div>
		</section>

		<!-- Info Section -->
		<section className="info">
		<img src="https://image.ibb.co/j4Qz8x/pic1.jpg" alt="">
		<div>
			<h2>Your Business On The Web</h2>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae alias reiciendis deleniti possimus nemo non repellendus?
			Quae atque vero modi quidem! Autem cupiditate fugit doloribus ad amet, asperiores provident commodi.</p>
			<a href="#" className="btn">Learn More</a>
		</div>
		</section>

		<!-- Portfolio -->
		<section className="portfolio">
		<img src="https://source.unsplash.com/random/200x200" alt="">
		<img src="https://source.unsplash.com/random/201x200" alt="">
		<img src="https://source.unsplash.com/random/202x200" alt="">
		<img src="https://source.unsplash.com/random/203x200" alt="">
		<img src="https://source.unsplash.com/random/204x200" alt="">
		<img src="https://source.unsplash.com/random/205x200" alt="">
		<img src="https://source.unsplash.com/random/206x200" alt="">
		<img src="https://source.unsplash.com/random/207x200" alt="">
		<img src="https://source.unsplash.com/random/208x200" alt="">
		</section>

		<!-- Footer -->
		<footer>
		<p>GridBiz &copy; 2018</p>
		</footer>

	</div>
	<!-- Wrapper Ends -->
	*/

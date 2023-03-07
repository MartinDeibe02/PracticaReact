import React from 'react'
import '../css/footer.css'
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
		<footer class="footer-class">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-md-12 text-center">
						<h2 class="footer-heading"><Link className='down-menu' to='/'>NBAStore</Link></h2>
						<p class="menu">
              <Link className='down-menu' to='/' >Home</Link>
              <Link className='down-menu' to='/productos' >Productos</Link>
              <Link className='down-menu' to='/login' >Login</Link>
              <Link className='down-menu' to='/signup' >Registro</Link>
						</p>

					</div>
				</div>

			</div>
		</footer>
  )
}

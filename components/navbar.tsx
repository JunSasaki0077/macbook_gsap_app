import Image from "next/image"
import Logo from "@/public/logo.svg"
import Search from "@/public/search.svg"
import Cart from "@/public/cart.svg"
import Link from "next/link"
import { navLinks } from "@/constants"


const Navbar = () => {
	return (
		<header>
			<nav>
				<Image src={Logo}  alt={Logo} />
				<ul>
					{navLinks.map(({label}) => (
						<li key={label}>
							<Link href={label}>{label}</Link>
							
						</li>
					))}
				</ul>
				<div className="flex-center gap-3">
					<button>
						<Image src={Search} alt={Search} />
					</button>
					<button>
						<Image src={Cart} alt={Cart} />
					</button>
				</div>
			</nav>
		</header>
	)
}
export default Navbar
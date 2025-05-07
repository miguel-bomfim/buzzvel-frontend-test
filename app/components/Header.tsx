'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Logo from '@/app/components/svg/Logo'
import MenuBurger from '@/app/components/svg/MenuBurger'
import { useIsMobile } from '@/app/hooks/useIsMobile'

export default function Header() {
	const [showMenu, setShowMenu] = useState<boolean>(false);

	const menuItems = [
		"Products", "Solutions", "Pricing", `Resources`
	].map((item, idx) => <li key={idx}>{item}</li>)

	const isMobile = useIsMobile()

	return (
		<header>
			<nav className='flex justify-between p-4 items-center font-sans md:py-6 md:px-20'>
				<div className='md:flex md:items-center gap-12'>
					<Link href="/">
						<Logo/>
					</Link>
					{ !isMobile && (
						<ul className='flex gap-12'>
							{ menuItems }
						</ul>
					)
					}
				</div>

				{
					isMobile ? (
						<>				
            	<MenuBurger
								className="cursor-pointer"
								onClick={() => setShowMenu(!showMenu)}
							/>
							
							{showMenu && (
								<div className="absolute bg-green-100 p-4 h-screen">
									<span
										className="cursor-pointer bg-black text-white p-1 text-sm"
										onClick={() => setShowMenu(!showMenu)}
									>
                x
									</span>
									<ul className="mt-2">
										{ menuItems }
									</ul>
								</div>
							)}
						</>
					) : (
						<div className='flex gap-4'>
							<button>Log In</button>
							<button className='py-3 px-4 border-2 rounded-[8px]'>Sign Up Now</button>
						</div>
					)
				}
			</nav>
		</header>
	)
}

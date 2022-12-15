import { createEffect, createSignal, Show } from 'solid-js'
import MoonIcon from '~/components/icons/MoonIcon'
import SunIcon from '~/components/icons/SunIcon'

export const [darkMode, setDarkMode] = createSignal(true)

export default function NavigatorBar() {
	createEffect(() => {
		if (darkMode()) {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	})

	return (
		<>
			<div class={'container p-4 sm:px-8 mx-auto'}>
				{/* Main NavBar */}
				<nav class={'flex flex-row justify-end align-middle'}>
					{/* Setting Icon */}
					<button class={'rounded-lg p-2 duration-300 bg-gray-300 text-gray-500 hover:text-ebony-900 dark:bg-slate-900 dark:hover:text-gray-300'}
						onClick={() => setDarkMode(!darkMode())}>
						<Show when={darkMode()} fallback={<SunIcon />} keyed>{<MoonIcon />}</Show>
					</button>
				</nav>
			</div>
		</>
	)
}

import { useI18n } from '@solid-primitives/i18n'
import { For } from 'solid-js'
import { tools } from '~/models/tool.model'

export default function Tools() {
	const [t] = useI18n()
	return (
		<>
			<section class={'flex flex-col gap-4 justify-center min-h-[70vh] text-ebony-900 dark:text-gray-200'}>
				<h2 class={'font-semibold text-xl sm:text-2xl'}>{t('tools')}</h2>
				<div class={'grid grid-flow-row auto-rows-fr items-center flex-shrink-0 w-full gap-2 text-center truncate select-none grid-cols-3 flex-shrink-0'}>
					<For each={tools}>
						{(tool) =>
							<div class={'rounded-lg flex flex-col gap-2 items-center justify-center align-middle p-4'} style={{'background': tool.background}}>
								{tool.icon}
								<p class={'font-semibold text-sm md:text-base'}>{tool.name}</p>
							</div>
						}
					</For>
				</div>
			</section>
		</>
	)
}
